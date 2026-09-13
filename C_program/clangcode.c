#include <stdio.h>


#define MAX 50
char busNo[MAX][10];
char busType[MAX][20];
int capacity[MAX];

char source[MAX][30];
char destination[MAX][30];
char stops[MAX][200];

char departure[MAX][10];
char arrival[MAX][10];
char date[MAX][15];

int count = 0; 


void addRecord() {
    if (count >= MAX) {
        printf("\nDatabase full! Cannot add more records.\n");
    } else {
        printf("\nEnter Bus Number: ");
        scanf("%s", busNo[count]);

        printf("Enter Bus Type (AC/Non-AC): ");
        scanf("%s", busType[count]);

        printf("Enter Capacity: ");
        scanf("%d", &capacity[count]);

        printf("Enter Source: ");
        scanf(" %[^\n]", source[count]);

        printf("Enter Destination: ");
        scanf(" %[^\n]", destination[count]);

        printf("Enter Stops (comma separated): ");
        scanf(" %[^\n]", stops[count]);

        printf("Enter Departure Time (HH:MM): ");
        scanf("%s", departure[count]);

        printf("Enter Arrival Time (HH:MM): ");
        scanf("%s", arrival[count]);

        printf("Enter Date (DD/MM/YYYY): ");
        scanf("%s", date[count]);

        count++;
        printf("\nRecord added successfully!\n");
    }
}


void displayRecords() {
    if (count == 0) {
        printf("\nNo records found.\n");
    } else {
        int i;
        printf("\n%-10s %-10s %-8s %-15s %-15s %-20s %-10s %-10s %-12s\n",
               "BusNo", "Type", "Capacity", "Source", "Destination", "Stops",
               "Depart", "Arrive", "Date");
        printf("-----------------------------------------------------------------------------------------------------------\n");

        for (i = 0; i < count; i++) {
            printf("%-10s %-10s %-8d %-15s %-15s %-20s %-10s %-10s %-12s\n",
                   busNo[i], busType[i], capacity[i],
                   source[i], destination[i], stops[i],
                   departure[i], arrival[i], date[i]);
        }
    }
}


void searchByBusNo() {
    char searchNo[10];
    int found = 0;
    printf("\nEnter Bus Number to Search: ");
    scanf("%s", searchNo);

    for (int i = 0; i < count; i++) {
        if (strcmp(busNo[i], searchNo) == 0) {
            printf("\nBus No: %s\nType: %s\nCapacity: %d\nSource: %s\nDestination: %s\nStops: %s\nDeparture: %s\nArrival: %s\nDate: %s\n",
                   busNo[i], busType[i], capacity[i],
                   source[i], destination[i], stops[i],
                   departure[i], arrival[i], date[i]);
            found = 1;
            break;
        }
    }
    if (!found) {
        printf("\nBus Number not found.\n");
    }
}

int main() {
    int choice;

    while (1) {
        printf("\n=== Bus & Route Management System ===\n");
        printf("1. Add New Bus/Route/Schedule\n");
        printf("2. Display All Records\n");
        printf("3. Search by Bus Number\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            addRecord();
        } else if (choice == 2) {
            displayRecords();
        } else if (choice == 3) {
            searchByBusNo();
        } else if (choice == 4) {
            printf("\nExiting Program...\n");
            break;
        } else {
            printf("\nInvalid choice! Please try again.\n");
        }
    }
    return 0;
}


#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_USERS 50
#define MAX_BUSES 10
#define MAX_SEATS 40
#define MAX_BOOKINGS 200

// ----------------------------- Data Models -----------------------------
typedef struct {
    char username[21];   // letters only
    char password[21];   // letters+digits
    int active;          // 1 if registered
} User;

typedef struct {
    int busNo;                 // 1..10
    char type[8];              // "AC" or "Non-AC"
    char source[20];
    char destination[20];
    float baseFare;            // base fare for the route
    int seats[MAX_SEATS];      // 0 = available, 1 = booked
} Bus;

typedef struct {
    int bookingId;             // incremental id
    char username[21];
    int busNo;
    int seatNo;                // 1..40
    float fare;                // final fare paid
    int paid;                  // 1 if payment done
    int active;                // 1 if booking exists (not cancelled)
} Booking;

// ----------------------------- Globals -----------------------------
User users[MAX_USERS];
Bus buses[MAX_BUSES];
Booking bookings[MAX_BOOKINGS];
int userCount = 0;
int bookingCount = 0;

// Predefined route pools (for display/reference)
const char *SOURCES[] = {"jodhpur","delhi","mumbai","jaipur","gujrat"};
const int SOURCES_LEN = 5;
const char *DESTS[]   = {"delhi","mumbai","gujrat","sikar","ajmer","pune"};
const int DESTS_LEN = 6;

// ----------------------------- Utility -----------------------------
int isLettersOnly(const char *s){
    if(!s || !*s) return 0;
    for(int i=0;s[i];i++){
        if(!isalpha((unsigned char)s[i])) return 0;
    }
    return 1;
}

int isAlphaNum(const char *s){
    if(!s || !*s) return 0;
    for(int i=0;s[i];i++){
        if(!isalnum((unsigned char)s[i])) return 0;
    }
    return 1;
}

int readInt(){
    int x; 
    if(scanf("%d", &x)!=1){
        // clear invalid input
        int c; while((c=getchar())!='\n' && c!=EOF){} 
        return -1; 
    }
    return x;
}

void pressEnter(){
    printf("\nPress ENTER to continue...");
    int c; while((c=getchar())!='\n' && c!=EOF){} // flush line
    getchar();
}

// ----------------------------- Users -----------------------------
int findUserIndex(const char *username){
    for(int i=0;i<userCount;i++){
        if(users[i].active && strcmp(users[i].username, username)==0) return i;
    }
    return -1;
}

void registerUser(){
    if(userCount >= MAX_USERS){
        printf("\n[!] User limit reached.\n");
        return;
    }
    char u[21], p[21];
    printf("\n--- User Registration ---\n");
    printf("Enter username (letters only, max 20): ");
    scanf("%20s", u);
    if(!isLettersOnly(u)){
        printf("Invalid username. Use letters only.\n");
        return;
    }
    if(findUserIndex(u) != -1){
        printf("Username already exists. Try login.\n");
        return;
    }
    printf("Enter password (letters & digits, max 20): ");
    scanf("%20s", p);
    if(!isAlphaNum(p)){
        printf("Invalid password. Use letters and digits only.\n");
        return;
    }
    strcpy(users[userCount].username, u);
    strcpy(users[userCount].password, p);
    users[userCount].active = 1;
    userCount++;
    printf("\n[✔] Registration successful. You can now login.\n");
}

int loginUser(){
    char u[21], p[21];
    printf("\n--- Login ---\nUsername: ");
    scanf("%20s", u);
    printf("Password: ");
    scanf("%20s", p);
    int idx = findUserIndex(u);
    if(idx == -1){
        printf("No such user. Please register first.\n");
        return -1;
    }
    if(strcmp(users[idx].password, p)==0){
        printf("\n[✔] Login successful. Welcome, %s!\n", users[idx].username);
        return idx;
    } else {
        printf("Incorrect password.\n");
        return -1;
    }
}

// ----------------------------- Bus & Routes -----------------------------
void initBuses(){
    // Pre-assign 10 buses to valid routes & types from the given city lists
    // baseFare chosen roughly by distance tier
    struct {int no; const char* type; const char* src; const char* dst; float fare;} init[] = {
        {1,  "AC",     "jodhpur", "delhi",  850},
        {2,  "Non-AC", "jodhpur", "jaipur", 450},
        {3,  "AC",     "delhi",   "mumbai", 1600},
        {4,  "Non-AC", "jaipur",  "ajmer",  300},
        {5,  "AC",     "mumbai",  "pune",   600},
        {6,  "Non-AC", "delhi",   "sikar",  550},
        {7,  "AC",     "jaipur",  "delhi",  700},
        {8,  "Non-AC", "gujrat",  "mumbai", 900},
        {9,  "AC",     "gujrat",  "pune",   1200},
        {10, "Non-AC", "mumbai",  "gujrat", 900}
    };

    for(int i=0;i<MAX_BUSES;i++){
        buses[i].busNo = init[i].no;
        strcpy(buses[i].type, init[i].type);
        strcpy(buses[i].source, init[i].src);
        strcpy(buses[i].destination, init[i].dst);
        buses[i].baseFare = init[i].fare;
        for(int s=0;s<MAX_SEATS;s++) buses[i].seats[s] = 0;
    }
}

int findBusIndexByNo(int busNo){
    for(int i=0;i<MAX_BUSES;i++) if(buses[i].busNo==busNo) return i;
    return -1;
}

void listRoutesPool(){
    printf("\nAvailable Sources: ");
    for(int i=0;i<SOURCES_LEN;i++) printf("%s%s", SOURCES[i], (i==SOURCES_LEN-1)?"":" | ");
    printf("\nAvailable Destinations: ");
    for(int i=0;i<DESTS_LEN;i++) printf("%s%s", DESTS[i], (i==DESTS_LEN-1)?"":" | ");
    printf("\n");
}

void listBuses(){
    printf("\n--- Bus & Route List ---\n");
    printf("BusNo  Type     Route (Source -> Destination)   Base Fare\n");
    printf("-----------------------------------------------------------\n");
    for(int i=0;i<MAX_BUSES;i++){
        printf("%-6d %-7s  %s -> %s %24.2f\n", 
               buses[i].busNo, buses[i].type, buses[i].source, buses[i].destination, buses[i].baseFare);
    }
}

void showSeats(int busIdx){
    printf("\nSeats for Bus %d (%s %s->%s):\n", buses[busIdx].busNo, buses[busIdx].type, buses[busIdx].source, buses[busIdx].destination);
    printf("[0=free, 1=booked]\n");
    for(int i=0;i<MAX_SEATS;i++){
        printf("%d:%d%s", i+1, buses[busIdx].seats[i], ((i+1)%10==0)?"\n":"  ");
    }
}

int availableSeatCount(int busIdx){
    int c=0; for(int i=0;i<MAX_SEATS;i++) if(buses[busIdx].seats[i]==0) c++; return c;
}

// ----------------------------- Fare & Payment -----------------------------
float calculateFare(int busIdx){
    // AC surcharge +12.5%; plus simple booking fee of 20
    float fare = buses[busIdx].baseFare;
    if(strcmp(buses[busIdx].type, "AC") == 0) fare *= 1.125f;
    fare += 20.0f; // booking fee
    return fare;
}

int processPayment(float amount){
    int method;
    printf("\n--- Payment ---\n");
    printf("Amount payable: %.2f\n", amount);
    printf("1) UPI\n2) Card\n3) Cash\nChoose method: ");
    method = readInt();
    if(method<1 || method>3){
        printf("Invalid method. Payment failed.\n");
        return 0;
    }
    float paid;
    printf("Enter amount tendered: ");
    if(scanf("%f", &paid)!=1){
        int c; while((c=getchar())!='\n' && c!=EOF){}
        printf("Invalid amount.\n");
        return 0;
    }
    if((paid + 0.005f) < amount){
        printf("Insufficient amount. Payment failed.\n");
        return 0;
    }
    float change = paid - amount;
    if(change < 0) change = 0;
    printf("Payment successful. Change: %.2f\n", change);
    return 1;
}

// ----------------------------- Booking -----------------------------
int nextBookingId(){ return bookingCount + 1001; }

int createBooking(const char* username, int busIdx, int seatNo, float fare){
    if(bookingCount >= MAX_BOOKINGS) return -1;
    bookings[bookingCount].bookingId = nextBookingId();
    strcpy(bookings[bookingCount].username, username);
    bookings[bookingCount].busNo = buses[busIdx].busNo;
    bookings[bookingCount].seatNo = seatNo;
    bookings[bookingCount].fare = fare;
    bookings[bookingCount].paid = 1;
    bookings[bookingCount].active = 1;
    bookingCount++;
    return bookings[bookingCount-1].bookingId;
}

int findBookingIndex(int bookingId){
    for(int i=0;i<bookingCount;i++){
        if(bookings[i].active && bookings[i].bookingId==bookingId) return i;
    }
    return -1;
}

void showMyTickets(const char* username){
    int found=0;
    printf("\n--- Your Tickets ---\n");
    for(int i=0;i<bookingCount;i++){
        if(bookings[i].active && strcmp(bookings[i].username, username)==0){
            int bIdx = findBusIndexByNo(bookings[i].busNo);
            printf("ID:%d  Bus:%d  %s->%s  Type:%s  Seat:%d  Fare:%.2f\n",
                   bookings[i].bookingId,
                   bookings[i].busNo,
                   buses[bIdx].source,
                   buses[bIdx].destination,
                   buses[bIdx].type,
                   bookings[i].seatNo,
                   bookings[i].fare);
            found=1;
        }
    }
    if(!found) printf("No active tickets.\n");
}

void bookTicket(const char* username){
    listBuses();
    printf("\nEnter Bus Number to book: ");
    int busNo = readInt();
    int bIdx = findBusIndexByNo(busNo);
    if(bIdx==-1){ printf("Invalid bus number.\n"); return; }

    int freeSeats = availableSeatCount(bIdx);
    if(freeSeats==0){ printf("No seats available on this bus.\n"); return; }

    showSeats(bIdx);
    printf("\nSelect seat number (1-%d): ", MAX_SEATS);
    int seatNo = readInt();
    if(seatNo<1 || seatNo>MAX_SEATS){ printf("Invalid seat number.\n"); return; }
    if(buses[bIdx].seats[seatNo-1]==1){ printf("Seat already booked.\n"); return; }

    float fare = calculateFare(bIdx);
    printf("\nCalculated Fare: %.2f\n", fare);
    if(!processPayment(fare)){
        printf("Booking aborted due to payment failure.\n");
        return;
    }

    // Confirm
    buses[bIdx].seats[seatNo-1] = 1;
    int bid = createBooking(username, bIdx, seatNo, fare);
    if(bid==-1){
        printf("System full, couldn't create booking.\n");
        buses[bIdx].seats[seatNo-1] = 0; // rollback
        return;
    }
    printf("\n[✔] Ticket booked! Booking ID: %d\n", bid);
}

void cancelTicket(const char* username){
    printf("\nEnter Booking ID to cancel: ");
    int id = readInt();
    int idx = findBookingIndex(id);
    if(idx==-1){ printf("Invalid Booking ID.\n"); return; }
    if(strcmp(bookings[idx].username, username)!=0){
        printf("You can only cancel your own tickets.\n");
        return;
    }

    int bIdx = findBusIndexByNo(bookings[idx].busNo);
    int seat = bookings[idx].seatNo;
    float refund = bookings[idx].fare * 0.80f; // 80% refund policy

    bookings[idx].active = 0;
    buses[bIdx].seats[seat-1] = 0;

    printf("\n[✔] Ticket cancelled. Refund amount: %.2f\n", refund);
}

void modifyTicket(const char* username){
    printf("\nEnter Booking ID to modify: ");
    int id = readInt();
    int idx = findBookingIndex(id);
    if(idx==-1){ printf("Invalid Booking ID.\n"); return; }
    if(strcmp(bookings[idx].username, username)!=0){
        printf("You can only modify your own tickets.\n");
        return;
    }

    int bIdx = findBusIndexByNo(bookings[idx].busNo);
    printf("\nModify Options:\n1) Change Seat (same bus)\n2) Change Bus (same route only)\nChoose: ");
    int ch = readInt();

    if(ch==1){
        showSeats(bIdx);
        printf("\nEnter new seat number: ");
        int newSeat = readInt();
        if(newSeat<1 || newSeat>MAX_SEATS){ printf("Invalid seat.\n"); return; }
        if(buses[bIdx].seats[newSeat-1]==1){ printf("Seat already booked.\n"); return; }
        // free old seat, occupy new
        buses[bIdx].seats[bookings[idx].seatNo-1] = 0;
        buses[bIdx].seats[newSeat-1] = 1;
        bookings[idx].seatNo = newSeat;
        printf("[✔] Seat changed successfully.\n");
    }
    else if(ch==2){
        // allow changing to another bus with identical source & destination
        printf("\nAvailable buses on same route (%s->%s):\n", buses[bIdx].source, buses[bIdx].destination);
        int candidates[ MAX_BUSES ]; int c=0;
        for(int i=0;i<MAX_BUSES;i++){
            if(i==bIdx) continue;
            if(strcmp(buses[i].source, buses[bIdx].source)==0 && strcmp(buses[i].destination, buses[bIdx].destination)==0){
                printf("Bus %d (%s), free seats: %d\n", buses[i].busNo, buses[i].type, availableSeatCount(i));
                candidates[c++] = i;
            }
        }
        if(c==0){ printf("No alternate bus on same route.\n"); return; }
        printf("Enter new Bus Number: ");
        int newBusNo = readInt();
        int newIdx = findBusIndexByNo(newBusNo);
        if(newIdx==-1){ printf("Invalid bus number.\n"); return; }
        if(!(strcmp(buses[newIdx].source, buses[bIdx].source)==0 && strcmp(buses[newIdx].destination, buses[bIdx].destination)==0)){
            printf("Route mismatch. Can only change within same route.\n");
            return;
        }
        if(availableSeatCount(newIdx)==0){ printf("No seats available on selected bus.\n"); return; }
        showSeats(newIdx);
        printf("Select new seat: ");
        int ns = readInt();
        if(ns<1 || ns>MAX_SEATS || buses[newIdx].seats[ns-1]==1){ printf("Seat unavailable.\n"); return; }
        // free old, occupy new
        buses[bIdx].seats[bookings[idx].seatNo-1] = 0;
        buses[newIdx].seats[ns-1] = 1;
        bookings[idx].busNo = buses[newIdx].busNo;
        bookings[idx].seatNo = ns;
        // Recalculate fare if type changed
        float newFare = calculateFare(newIdx);
        if(newFare > bookings[idx].fare){
            float diff = newFare - bookings[idx].fare;
            printf("Additional fare %.2f required.\n", diff);
            if(!processPayment(diff)){
                // rollback
                buses[newIdx].seats[ns-1] = 0;
                buses[bIdx].seats[bookings[idx].seatNo-1] = 1;
                bookings[idx].busNo = buses[bIdx].busNo;
                bookings[idx].seatNo = bookings[idx].seatNo; // unchanged
                printf("Modification aborted.\n");
                return;
            }
            bookings[idx].fare = newFare;
        } else if(newFare < bookings[idx].fare){
            float refund = bookings[idx].fare - newFare;
            bookings[idx].fare = newFare;
            printf("Fare decreased. Refund: %.2f\n", refund);
        } else {
            printf("Fare unchanged.\n");
        }
        printf("[✔] Bus changed successfully.\n");
    }
    else {
        printf("Invalid choice.\n");
    }
}

// ----------------------------- Menus -----------------------------
void showMainMenu(){
    printf("\n================ BUS RESERVATION SYSTEM ================\n");
    printf("1) Register\n2) Login\n3) View Routes/Bus List\n0) Exit\nChoose: ");
}

void showUserMenu(const char* username){
    printf("\n================ Welcome, %s ================\n", username);
    printf("1) View Routes/Bus List\n");
    printf("2) Check Seats for a Bus\n");
    printf("3) Book Ticket\n");
    printf("4) My Tickets\n");
    printf("5) Cancel Ticket\n");
    printf("6) Modify Ticket\n");
    printf("0) Logout\n");
    printf("Choose: ");
}

void checkSeatsFlow(){
    listBuses();
    printf("\nEnter Bus Number to view seats: ");
    int busNo = readInt();
    int bIdx = findBusIndexByNo(busNo);
    if(bIdx==-1){ printf("Invalid bus number.\n"); return; }
    showSeats(bIdx);
}

// ----------------------------- Main -----------------------------
int main(){
    initBuses();
    int running = 1;

    while(running){
        showMainMenu();
        int ch = readInt();
        switch(ch){
            case 1: registerUser(); break;
            case 2: {
                int idx = loginUser();
                if(idx!=-1){
                    int loggedIn = 1;
                    while(loggedIn){
                        showUserMenu(users[idx].username);
                        int c = readInt();
                        switch(c){
                            case 1: listRoutesPool(); listBuses(); break;
                            case 2: checkSeatsFlow(); break;
                            case 3: bookTicket(users[idx].username); break;
                            case 4: showMyTickets(users[idx].username); break;
                            case 5: cancelTicket(users[idx].username); break;
                            case 6: modifyTicket(users[idx].username); break;
                            case 0: loggedIn=0; break;
                            default: printf("Invalid option.\n");
                        }
                    }
                }
            } break;
            case 3: listRoutesPool(); listBuses(); break;
            case 0: running = 0; break;
            default: printf("Invalid option.\n");
        }
    }

    printf("\nThank you for using the Bus Reservation System.\n");
    return 0;
}
#include <stdio.h>
#include <string.h>

#define MAX_USERS 10
#define MAX_BUSES 3
#define MAX_SEATS 20

// Structure for storing user data
struct User {
    char username[30];
    char password[30];
};

// Structure for storing bus data
struct Bus {
    int seats[MAX_SEATS]; // 0 = empty, 1 = booked
};

struct User users[MAX_USERS];
struct Bus buses[MAX_BUSES];
int userCount = 0;

// Function declarations
void registerUser();
int loginUser();
void bookTicket();
void cancelTicket();
void checkBusStatus();
void menu(int userIndex);

int main() {
    int choice, loggedInUser = -1;

    while (1) {
        printf("\n====== BUS RESERVATION SYSTEM ======\n");
        printf("1. Register\n");
        printf("2. Login\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            registerUser();
        } else if (choice == 2) {
            loggedInUser = loginUser();
            if (loggedInUser != -1) {
                menu(loggedInUser);
            }
        } else if (choice == 3) {
            printf("Exiting... Goodbye!\n");
            break;
        } else {
            printf("Invalid choice! Please try again.\n");
        }
    }

    return 0;
}

// Function to register a user
void registerUser() {
    if (userCount >= MAX_USERS) {
        printf("User limit reached! Cannot register more users.\n");
        return;
    }

    printf("\nEnter new username: ");
    scanf("%s", users[userCount].username);
    printf("Enter new password: ");
    scanf("%s", users[userCount].password);

    userCount++;
    printf("Registration successful!\n");
}

// Function to log in a user
int loginUser() {
    char username[30], password[30];
    printf("\nEnter username: ");
    scanf("%s", username);
    printf("Enter password: ");
    scanf("%s", password);

    for (int i = 0; i < userCount; i++) {
        if (strcmp(username, users[i].username) == 0 &&
            strcmp(password, users[i].password) == 0) {
            printf("Login successful! Welcome, %s.\n", username);
            return i;
        }
    }

    printf("Invalid username or password!\n");
    return -1;
}

// Function to book a ticket
void bookTicket() {
    int busNo, seatNo;
    printf("\nEnter Bus Number (1-%d): ", MAX_BUSES);
    scanf("%d", &busNo);
    printf("Enter Seat Number (1-%d): ", MAX_SEATS);
    scanf("%d", &seatNo);

    if (busNo < 1 || busNo > MAX_BUSES || seatNo < 1 || seatNo > MAX_SEATS) {
        printf("Invalid bus or seat number!\n");
        return;
    }

    if (buses[busNo - 1].seats[seatNo - 1] == 0) {
        buses[busNo - 1].seats[seatNo - 1] = 1;
        printf("Seat booked successfully!\n");
    } else {
        printf("Sorry, that seat is already booked.\n");
    }
}

// Function to cancel a ticket
void cancelTicket() {
    int busNo, seatNo;
    printf("\nEnter Bus Number (1-%d): ", MAX_BUSES);
    scanf("%d", &busNo);
    printf("Enter Seat Number (1-%d): ", MAX_SEATS);
    scanf("%d", &seatNo);

    if (busNo < 1 || busNo > MAX_BUSES || seatNo < 1 || seatNo > MAX_SEATS) {
        printf("Invalid bus or seat number!\n");
        return;
    }

    if (buses[busNo - 1].seats[seatNo - 1] == 1) {
        buses[busNo - 1].seats[seatNo - 1] = 0;
        printf("Ticket cancelled successfully!\n");
    } else {
        printf("That seat is not currently booked.\n");
    }
}

// Function to check bus status
void checkBusStatus() {
    for (int b = 0; b < MAX_BUSES; b++) {
        printf("\nBus %d seat status:\n", b + 1);
        for (int s = 0; s < MAX_SEATS; s++) {
            printf("Seat %2d: %s\n", s + 1,
                   buses[b].seats[s] == 0 ? "Empty" : "Booked");
        }
    }
}

// Menu after login
void menu(int userIndex) {
    int choice;
    while (1) {
        printf("\n====== MAIN MENU ======\n");
        printf("1. Book Ticket\n");
        printf("2. Cancel Ticket\n");
        printf("3. Check Bus Status\n");
        printf("4. Logout\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            bookTicket();
        } else if (choice == 2) {
            cancelTicket();
        } else if (choice == 3) {
            checkBusStatus();
        } else if (choice == 4) {
            printf("Logging out...\n");
            break;
        } else {
            printf("Invalid choice! Please try again.\n");
        }
    }
}
#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_USERS 50
#define MAX_BUSES 10
#define MAX_SEATS 40
#define MAX_BOOKINGS 200


typedef struct {
    char username[21];   
    char password[21];   
    int active;       
} User;

typedef struct {
    int busNo;               
    char type[8];              
    char source[20];
    char destination[20];
    float baseFare;            
    int seats[MAX_SEATS];      
} Bus;

typedef struct {
    int bookingId;             
    char username[21];
    int busNo;
    int seatNo;               
    float fare;                
    int paid;              
    int active;                
} Booking;


User users[MAX_USERS];
Bus buses[MAX_BUSES];
Booking bookings[MAX_BOOKINGS];
int userCount = 0;
int bookingCount = 0;


const char *SOURCES[] = {"jodhpur","delhi","mumbai","jaipur","gujrat"};
const int SOURCES_LEN = 5;
const char *DESTS[]   = {"delhi","mumbai","gujrat","sikar","ajmer","pune"};
const int DESTS_LEN = 6;


int isLettersOnly(const char *s){
    if(!s || !*s) return 0;
    for(int i=0;s[i];i++){
        if(!isalpha((unsigned char)s[i])) return 0;
    }
    return 1;
}

int isAlphaNum(const char *s){
    if(!s || !*s) return 0;
    for(int i=0;s[i];i++){
        if(!isalnum((unsigned char)s[i])) return 0;
    }
    return 1;
}

int readInt(){
    int x; 
    if(scanf("%d", &x)!=1){
        // clear invalid input
        int c; while((c=getchar())!='\n' && c!=EOF){} 
        return -1; 
    }
    return x;
}

void pressEnter(){
    printf("\nPress ENTER to continue...");
    int c; while((c=getchar())!='\n' && c!=EOF){} // flush line
    getchar();
}

// ----------------------------- Users -----------------------------
int findUserIndex(const char *username){
    for(int i=0;i<userCount;i++){
        if(users[i].active && strcmp(users[i].username, username)==0) return i;
    }
    return -1;
}

void registerUser(){
    if(userCount >= MAX_USERS){
        printf("\n[!] User limit reached.\n");
        return;
    }
    char u[21], p[21];
    printf("\n--- User Registration ---\n");
    printf("Enter username (letters only, max 20): ");
    scanf("%20s", u);
    if(!isLettersOnly(u)){
        printf("Invalid username. Use letters only.\n");
        return;
    }
    if(findUserIndex(u) != -1){
        printf("Username already exists. Try login.\n");
        return;
    }
    printf("Enter password (letters & digits, max 20): ");
    scanf("%20s", p);
    if(!isAlphaNum(p)){
        printf("Invalid password. Use letters and digits only.\n");
        return;
    }
    strcpy(users[userCount].username, u);
    strcpy(users[userCount].password, p);
    users[userCount].active = 1;
    userCount++;
    printf("\n[✔] Registration successful. You can now login.\n");
}

int loginUser(){
    char u[21], p[21];
    printf("\n--- Login ---\nUsername: ");
    scanf("%20s", u);
    printf("Password: ");
    scanf("%20s", p);
    int idx = findUserIndex(u);
    if(idx == -1){
        printf("No such user. Please register first.\n");
        return -1;
    }
    if(strcmp(users[idx].password, p)==0){
        printf("\n[✔] Login successful. Welcome, %s!\n", users[idx].username);
        return idx;
    } else {
        printf("Incorrect password.\n");
        return -1;
    }
}


void initBuses(){
    
    struct {int no; const char* type; const char* src; const char* dst; float fare;} init[] = {
        {1,  "AC",     "jodhpur", "delhi",  850},
        {2,  "Non-AC", "jodhpur", "jaipur", 450},
        {3,  "AC",     "delhi",   "mumbai", 1600},
        {4,  "Non-AC", "jaipur",  "ajmer",  300},
        {5,  "AC",     "mumbai",  "pune",   600},
        {6,  "Non-AC", "delhi",   "sikar",  550},
        {7,  "AC",     "jaipur",  "delhi",  700},
        {8,  "Non-AC", "gujrat",  "mumbai", 900},
        {9,  "AC",     "gujrat",  "pune",   1200},
        {10, "Non-AC", "mumbai",  "gujrat", 900}
    };

    for(int i=0;i<MAX_BUSES;i++){
        buses[i].busNo = init[i].no;
        strcpy(buses[i].type, init[i].type);
        strcpy(buses[i].source, init[i].src);
        strcpy(buses[i].destination, init[i].dst);
        buses[i].baseFare = init[i].fare;
        for(int s=0;s<MAX_SEATS;s++) buses[i].seats[s] = 0;
    }
}

int findBusIndexByNo(int busNo){
    for(int i=0;i<MAX_BUSES;i++) if(buses[i].busNo==busNo) return i;
    return -1;
}

void listRoutesPool(){
    printf("\nAvailable Sources: ");
    for(int i=0;i<SOURCES_LEN;i++) printf("%s%s", SOURCES[i], (i==SOURCES_LEN-1)?"":" | ");
    printf("\nAvailable Destinations: ");
    for(int i=0;i<DESTS_LEN;i++) printf("%s%s", DESTS[i], (i==DESTS_LEN-1)?"":" | ");
    printf("\n");
}

void listBuses(){
    printf("\n--- Bus & Route List ---\n");
    printf("BusNo  Type     Route (Source -> Destination)   Base Fare\n");
    printf("-----------------------------------------------------------\n");
    for(int i=0;i<MAX_BUSES;i++){
        printf("%-6d %-7s  %s -> %s %24.2f\n", 
               buses[i].busNo, buses[i].type, buses[i].source, buses[i].destination, buses[i].baseFare);
    }
}

void showSeats(int busIdx){
    printf("\nSeats for Bus %d (%s %s->%s):\n", buses[busIdx].busNo, buses[busIdx].type, buses[busIdx].source, buses[busIdx].destination);
    printf("[0=free, 1=booked]\n");
    for(int i=0;i<MAX_SEATS;i++){
        printf("%d:%d%s", i+1, buses[busIdx].seats[i], ((i+1)%10==0)?"\n":"  ");
    }
}

int availableSeatCount(int busIdx){
    int c=0; for(int i=0;i<MAX_SEATS;i++) if(buses[busIdx].seats[i]==0) c++; return c;
}


float calculateFare(int busIdx){
    
    float fare = buses[busIdx].baseFare;
    if(strcmp(buses[busIdx].type, "AC") == 0) fare *= 1.125f;
    fare += 20.0f; // booking fee
    return fare;
}

int processPayment(float amount){
    int method;
    printf("\n--- Payment ---\n");
    printf("Amount payable: %.2f\n", amount);
    printf("1) UPI\n2) Card\n3) Cash\nChoose method: ");
    method = readInt();
    if(method<1 || method>3){
        printf("Invalid method. Payment failed.\n");
        return 0;
    }
    float paid;
    printf("Enter amount tendered: ");
    if(scanf("%f", &paid)!=1){
        int c; while((c=getchar())!='\n' && c!=EOF){}
        printf("Invalid amount.\n");
        return 0;
    }
    if((paid + 0.005f) < amount){
        printf("Insufficient amount. Payment failed.\n");
        return 0;
    }
    float change = paid - amount;
    if(change < 0) change = 0;
    printf("Payment successful. Change: %.2f\n", change);
    return 1;
}


int nextBookingId(){ return bookingCount + 1001; }

int createBooking(const char* username, int busIdx, int seatNo, float fare){
    if(bookingCount >= MAX_BOOKINGS) return -1;
    bookings[bookingCount].bookingId = nextBookingId();
    strcpy(bookings[bookingCount].username, username);
    bookings[bookingCount].busNo = buses[busIdx].busNo;
    bookings[bookingCount].seatNo = seatNo;
    bookings[bookingCount].fare = fare;
    bookings[bookingCount].paid = 1;
    bookings[bookingCount].active = 1;
    bookingCount++;
    return bookings[bookingCount-1].bookingId;
}

int findBookingIndex(int bookingId){
    for(int i=0;i<bookingCount;i++){
        if(bookings[i].active && bookings[i].bookingId==bookingId) return i;
    }
    return -1;
}

void showMyTickets(const char* username){
    int found=0;
    printf("\n--- Your Tickets ---\n");
    for(int i=0;i<bookingCount;i++){
        if(bookings[i].active && strcmp(bookings[i].username, username)==0){
            int bIdx = findBusIndexByNo(bookings[i].busNo);
            printf("ID:%d  Bus:%d  %s->%s  Type:%s  Seat:%d  Fare:%.2f\n",
                   bookings[i].bookingId,
                   bookings[i].busNo,
                   buses[bIdx].source,
                   buses[bIdx].destination,
                   buses[bIdx].type,
                   bookings[i].seatNo,
                   bookings[i].fare);
            found=1;
        }
    }
    if(!found) printf("No active tickets.\n");
}

void bookTicket(const char* username){
    listBuses();
    printf("\nEnter Bus Number to book: ");
    int busNo = readInt();
    int bIdx = findBusIndexByNo(busNo);
    if(bIdx==-1){ printf("Invalid bus number.\n"); return; }

    int freeSeats = availableSeatCount(bIdx);
    if(freeSeats==0){ printf("No seats available on this bus.\n"); return; }

    showSeats(bIdx);
    printf("\nSelect seat number (1-%d): ", MAX_SEATS);
    int seatNo = readInt();
    if(seatNo<1 || seatNo>MAX_SEATS){ printf("Invalid seat number.\n"); return; }
    if(buses[bIdx].seats[seatNo-1]==1){ printf("Seat already booked.\n"); return; }

    float fare = calculateFare(bIdx);
    printf("\nCalculated Fare: %.2f\n", fare);
    if(!processPayment(fare)){
        printf("Booking aborted due to payment failure.\n");
        return;
    }

    buses[bIdx].seats[seatNo-1] = 1;
    int bid = createBooking(username, bIdx, seatNo, fare);
    if(bid==-1){
        printf("System full, couldn't create booking.\n");
        buses[bIdx].seats[seatNo-1] = 0; 
        return;
    }
    printf("\n[✔] Ticket booked! Booking ID: %d\n", bid);
}

void cancelTicket(const char* username){
    printf("\nEnter Booking ID to cancel: ");
    int id = readInt();
    int idx = findBookingIndex(id);
    if(idx==-1){ printf("Invalid Booking ID.\n"); return; }
    if(strcmp(bookings[idx].username, username)!=0){
        printf("You can only cancel your own tickets.\n");
        return;
    }

    int bIdx = findBusIndexByNo(bookings[idx].busNo);
    int seat = bookings[idx].seatNo;
    float refund = bookings[idx].fare * 0.80f; 

    bookings[idx].active = 0;
    buses[bIdx].seats[seat-1] = 0;

    printf("\n[✔] Ticket cancelled. Refund amount: %.2f\n", refund);
}

void modifyTicket(const char* username){
    printf("\nEnter Booking ID to modify: ");
    int id = readInt();
    int idx = findBookingIndex(id);
    if(idx==-1){ printf("Invalid Booking ID.\n"); return; }
    if(strcmp(bookings[idx].username, username)!=0){
        printf("You can only modify your own tickets.\n");
        return;
    }

    int bIdx = findBusIndexByNo(bookings[idx].busNo);
    printf("\nModify Options:\n1) Change Seat (same bus)\n2) Change Bus (same route only)\nChoose: ");
    int ch = readInt();

    if(ch==1){
        showSeats(bIdx);
        printf("\nEnter new seat number: ");
        int newSeat = readInt();
        if(newSeat<1 || newSeat>MAX_SEATS){ printf("Invalid seat.\n"); return; }
        if(buses[bIdx].seats[newSeat-1]==1){ printf("Seat already booked.\n"); return; }
        // free old seat, occupy new
        buses[bIdx].seats[bookings[idx].seatNo-1] = 0;
        buses[bIdx].seats[newSeat-1] = 1;
        bookings[idx].seatNo = newSeat;
        printf("[✔] Seat changed successfully.\n");
    }
    else if(ch==2){
        
        printf("\nAvailable buses on same route (%s->%s):\n", buses[bIdx].source, buses[bIdx].destination);
        int candidates[ MAX_BUSES ]; int c=0;
        for(int i=0;i<MAX_BUSES;i++){
            if(i==bIdx) continue;
            if(strcmp(buses[i].source, buses[bIdx].source)==0 && strcmp(buses[i].destination, buses[bIdx].destination)==0){
                printf("Bus %d (%s), free seats: %d\n", buses[i].busNo, buses[i].type, availableSeatCount(i));
                candidates[c++] = i;
            }
        }
        if(c==0){ printf("No alternate bus on same route.\n"); return; }
        printf("Enter new Bus Number: ");
        int newBusNo = readInt();
        int newIdx = findBusIndexByNo(newBusNo);
        if(newIdx==-1){ printf("Invalid bus number.\n"); return; }
        if(!(strcmp(buses[newIdx].source, buses[bIdx].source)==0 && strcmp(buses[newIdx].destination, buses[bIdx].destination)==0)){
            printf("Route mismatch. Can only change within same route.\n");
            return;
        }
        if(availableSeatCount(newIdx)==0){ printf("No seats available on selected bus.\n"); return; }
        showSeats(newIdx);
        printf("Select new seat: ");
        int ns = readInt();
        if(ns<1 || ns>MAX_SEATS || buses[newIdx].seats[ns-1]==1){ printf("Seat unavailable.\n"); return; }
        // free old, occupy new
        buses[bIdx].seats[bookings[idx].seatNo-1] = 0;
        buses[newIdx].seats[ns-1] = 1;
        bookings[idx].busNo = buses[newIdx].busNo;
        bookings[idx].seatNo = ns;
        
        float newFare = calculateFare(newIdx);
        if(newFare > bookings[idx].fare){
            float diff = newFare - bookings[idx].fare;
            printf("Additional fare %.2f required.\n", diff);
            if(!processPayment(diff)){
                
                buses[newIdx].seats[ns-1] = 0;
                buses[bIdx].seats[bookings[idx].seatNo-1] = 1;
                bookings[idx].busNo = buses[bIdx].busNo;
                bookings[idx].seatNo = bookings[idx].seatNo; 
                printf("Modification aborted.\n");
                return;
            }
            bookings[idx].fare = newFare;
        } else if(newFare < bookings[idx].fare){
            float refund = bookings[idx].fare - newFare;
            bookings[idx].fare = newFare;
            printf("Fare decreased. Refund: %.2f\n", refund);
        } else {
            printf("Fare unchanged.\n");
        }
        printf("[✔] Bus changed successfully.\n");
    }
    else {
        printf("Invalid choice.\n");
    }
}

void showMainMenu(){
    printf("\n================ BUS RESERVATION SYSTEM ================\n");
    printf("1) Register\n2) Login\n3) View Routes/Bus List\n0) Exit\nChoose: ");
}

void showUserMenu(const char* username){
    printf("\n================ Welcome, %s ================\n", username);
    printf("1) View Routes/Bus List\n");
    printf("2) Check Seats for a Bus\n");
    printf("3) Book Ticket\n");
    printf("4) My Tickets\n");
    printf("5) Cancel Ticket\n");
    printf("6) Modify Ticket\n");
    printf("0) Logout\n");
    printf("Choose: ");
}

void checkSeatsFlow(){
    listBuses();
    printf("\nEnter Bus Number to view seats: ");
    int busNo = readInt();
    int bIdx = findBusIndexByNo(busNo);
    if(bIdx==-1){ printf("Invalid bus number.\n"); return; }
    showSeats(bIdx);
}


int main(){
    initBuses();
    int running = 1;

    while(running){
        showMainMenu();
        int ch = readInt();
        switch(ch){
            case 1: registerUser(); break;
            case 2: {
                int idx = loginUser();
                if(idx!=-1){
                    int loggedIn = 1;
                    while(loggedIn){
                        showUserMenu(users[idx].username);
                        int c = readInt();
                        switch(c){
                            case 1: listRoutesPool(); listBuses(); break;
                            case 2: checkSeatsFlow(); break;
                            case 3: bookTicket(users[idx].username); break;
                            case 4: showMyTickets(users[idx].username); break;
                            case 5: cancelTicket(users[idx].username); break;
                            case 6: modifyTicket(users[idx].username); break;
                            case 0: loggedIn=0; break;
                            default: printf("Invalid option.\n");
                        }
                    }
                }
            } break;
            case 3: listRoutesPool(); listBuses(); break;
            case 0: running = 0; break;
            default: printf("Invalid option.\n");
        }
    }

    printf("\nThank you for using the Bus Reservation System.\n");
    return 0;
}
#include <stdio.h>

// Function to cancel a ticket
void cancelTicket(int tickets[], int totalTickets, int ticketNumber) {
    int found = 0;
    for (int i = 0; i < totalTickets; i++) {
        if (tickets[i] == ticketNumber) {
            tickets[i] = 0; // Mark as canceled (0 means canceled)
            found = 1;
            break;
        }
    }

    if (found) {
        printf("Ticket number %d has been successfully canceled.\n", ticketNumber);
    } else {
        printf("Ticket number %d not found or already canceled.\n", ticketNumber);
    }
}

int main() {
    int tickets[5] = {101, 102, 103, 104, 105}; // Example booked tickets
    int totalTickets = 5;
    int ticketNumber;

    printf("Booked Tickets:\n");
    for (int i = 0; i < totalTickets; i++) {
        if (tickets[i] != 0) {
            printf("%d ", tickets[i]);
        }
    }
    printf("\n");

    printf("Enter ticket number to cancel: ");
    scanf("%d", &ticketNumber);

    cancelTicket(tickets, totalTickets, ticketNumber);

    printf("Updated Tickets:\n");
    for (int i = 0; i < totalTickets; i++) {
        if (tickets[i] != 0) {
            printf("%d ", tickets[i]);
        }
    }
    printf("\n");

    return 0;
}
#include<stdio.h>
int main(){
    printf("hello suman");
    return 0;
}

#include <stdio.h>

#define MAX_USERS   50
#define MAX_BUSES    3
#define MAX_SEATS   10
#define MAX_LEN     21   


char usernames[MAX_USERS][MAX_LEN];
char passwords[MAX_USERS][MAX_LEN];
int user_count = 0;


int seats[MAX_BUSES][MAX_SEATS];

char bus_names[MAX_BUSES][20] = { "City Express", "Highway Rider", "Night Star" };


int str_eq(const char a[], const char b[]) {
    int i;
    for (i = 0; i < MAX_LEN; i++) {
        if (a[i] != b[i]) return 0;
        if (a[i] == '\0') return 1;
    }
    return 1;
}

void str_copy(char dst[], const char src[]) {
    int i;
    for (i = 0; i < MAX_LEN; i++) {
        dst[i] = src[i];
        if (src[i] == '\0') break;
    }
    if (i == MAX_LEN) dst[MAX_LEN - 1] = '\0';
}


void init_data() {
    int b, s;
    for (b = 0; b < MAX_BUSES; b++) {
        for (s = 0; s < MAX_SEATS; s++) {
            seats[b][s] = -1;
        }
    }
}

void pause_enter() {
    int c;
    printf("\nPress ENTER to continue...");
    
    c = getchar();
    if (c != '\n') {
        
        for (; c != '\n' && c != EOF; c = getchar()) { }
    }
    
    c = getchar();
    if (c != '\n') {
        for (; c != '\n' && c != EOF; c = getchar()) { }
    }
}

void show_buses() {
    int i;
    printf("\nAvailable Buses:\n");
    for (i = 0; i < MAX_BUSES; i++) {
        printf("  %d) %s\n", i + 1, bus_names[i]);
    }
}

void check_bus_status() {
    int b, s;
    show_buses();
    printf("\nEnter bus number to view status: ");
    if (scanf("%d", &b) != 1) { printf("Invalid input.\n"); return; }
    b = b - 1;
    if (b < 0 || b >= MAX_BUSES) {
        printf("Invalid bus choice. Please choose from the menu options.\n");
        return;
    }

    printf("\nBus: %s\n", bus_names[b]);
    printf("Seats (X = booked):\n");
    for (s = 0; s < MAX_SEATS; s++) {
        if (seats[b][s] == -1) {
            printf("%2d ", s + 1);
        } else {
            printf(" X ");
        }
        if ((s + 1) % 10 == 0) printf("\n");
    }
    printf("\n");
}

int find_user_index(const char name[]) {
    int i;
    for (i = 0; i < user_count; i++) {
        if (str_eq(usernames[i], name)) return i;
    }
    return -1;
}

void register_user() {
    char name[MAX_LEN], pass[MAX_LEN];
    int i;

    if (user_count >= MAX_USERS) {
        printf("User limit reached. Cannot register more users.\n");
        return;
    }

    printf("\n--- User Registration ---\n");
    printf("Username (no spaces, max %d chars): ", MAX_LEN - 1);
    if (scanf("%20s", name) != 1) { printf("Invalid input.\n"); return; }

    if (find_user_index(name) != -1) {
        printf("Username already exists. Try a different one.\n");
        return;
    }

    printf("Password (no spaces, max %d chars): ", MAX_LEN - 1);
    if (scanf("%20s", pass) != 1) { printf("Invalid input.\n"); return; }

    str_copy(usernames[user_count], name);
    str_copy(passwords[user_count], pass);
    user_count++;

    printf("Registration successful. You can now login.\n");
}

int login_user() {
    char name[MAX_LEN], pass[MAX_LEN];
    int idx;

    printf("\n--- Login ---\n");
    printf("Username: ");
    if (scanf("%20s", name) != 1) { printf("Invalid input.\n"); return -1; }
    printf("Password: ");
    if (scanf("%20s", pass) != 1) { printf("Invalid input.\n"); return -1; }

    idx = find_user_index(name);
    if (idx == -1) {
        printf("No such user. Please register first.\n");
        return -1;
    }
    if (str_eq(passwords[idx], pass)) {
        printf("Login successful. Welcome, %s!\n", usernames[idx]);
        return idx;
    } else {
        printf("Incorrect password.\n");
        return -1;
    }
}

void book_ticket(int user_idx) {
    int b, s;
    show_buses();
    printf("\nEnter bus number to book: ");
    if (scanf("%d", &b) != 1) { printf("Invalid input.\n"); return; }
    b = b - 1;

    if (b < 0 || b >= MAX_BUSES) {
        printf("Invalid bus choice. Please choose from the menu options.\n");
        return;
    }

    printf("Enter seat number (1-%d): ", MAX_SEATS);
    if (scanf("%d", &s) != 1) { printf("Invalid input.\n"); return; }
    s = s - 1;

    if (s < 0 || s >= MAX_SEATS) {
        printf("Invalid seat number.\n");
        return;
    }
    if (seats[b][s] != -1) {
        printf("Seat already booked.\n");
        return;
    }

    seats[b][s] = user_idx;
    printf("Booked seat %d on %s for user %s.\n", s + 1, bus_names[b], usernames[user_idx]);
}

void cancel_ticket(int user_idx) {
    int b, s;
    show_buses();
    printf("\nEnter bus number to cancel from: ");
    if (scanf("%d", &b) != 1) { printf("Invalid input.\n"); return; }
    b = b - 1;

    if (b < 0 || b >= MAX_BUSES) {
        printf("Invalid bus choice. Please choose from the menu options.\n");
        return;
    }

    printf("Enter seat number (1-%d) to cancel: ", MAX_SEATS);
    if (scanf("%d", &s) != 1) { printf("Invalid input.\n"); return; }
    s = s - 1;

    if (s < 0 || s >= MAX_SEATS) {
        printf("Invalid seat number.\n");
        return;
    }
    if (seats[b][s] == -1) {
        printf("That seat is not booked.\n");
        return;
    }
    if (seats[b][s] != user_idx) {
        printf("You can only cancel seats you booked.\n");
        return;
    }

    seats[b][s] = -1;
    printf("Canceled seat %d on %s.\n", s + 1, bus_names[b]);
}

void user_menu(int user_idx) {
    int choice, running;
    running = 1;

    for (; running; ) {
        printf("\n--- User Menu ---\n");
        printf("1) Book Ticket\n");
        printf("2) Cancel Ticket\n");
        printf("3) Check Bus Status\n");
        printf("4) Logout\n");
        printf("Enter choice: ");

        if (scanf("%d", &choice) != 1) {
            printf("Invalid input. Please enter one of the menu options.\n");
            
            {
                int c;
                for (c = getchar(); c != '\n' && c != EOF; c = getchar()) { }
            }
        } else {
            if (choice == 1) {
                book_ticket(user_idx);
            } else if (choice == 2) {
                cancel_ticket(user_idx);
            } else if (choice == 3) {
                check_bus_status();
            } else if (choice == 4) {
                printf("Logging out...\n");
                running = 0;
            } else {
                printf("Invalid choice. Please enter one of the menu options.\n");
            }
        }
    }
}

int main() {
    int choice;
    int logged_user;

    init_data();

    for (;;) {
        printf("\n=== Bus Reservation System ===\n");
        printf("1) Register\n");
        printf("2) Login\n");
        printf("3) Check Bus Status\n");
        printf("4) Exit\n");
        printf("Enter choice: ");

        if (scanf("%d", &choice) != 1) {
            printf("Invalid input. Please enter one of the menu options.\n");
            
            {
                int c;
                for (c = getchar(); c != '\n' && c != EOF; c = getchar()) { }
            }
        } else {
            if (choice == 1) {
                register_user();
            } else if (choice == 2) {
                logged_user = login_user();
                if (logged_user != -1) {
                    user_menu(logged_user);
                }
            } else if (choice == 3) {
                check_bus_status();
            } else if (choice == 4) {
                printf("Goodbye!\n");
                break;
            } else {
                printf("Invalid choice. Please enter one of the menu options.\n");
            }
        }
        
    }

    return 0;
}

#include<stdio.h>
int main(){
    char str[20];
    int i,letter=0,digits=0;
    
    
    printf("enter any name");
    scanf(" %[^\n]",&str);
    for(i=0;str[i]!'\0';i++){
        if(str[i]>='0' && str[i]<='9'){
            digits++;
        }

        else if((str[i]>='A' && str[i]<='Z') || (str[i]>='a' && str[i]<='z')){
            letter++;
        }
    }
    printf("number of letters: %d\n",letters);
    printf("number of letters: %d\n",digits);
    return 0;
}
#include <stdio.h>
#include <string.h>

#define MAX_USERS 5
#define MAX_BUSES 50
#define MAX_TICKETS 100

// ---------------------- USER STRUCT ----------------------
struct User {
    char username[30];
    char password[30];
    char name[50];
    int age;
};

struct User users[MAX_USERS];
int userCount = 0;

// ---------------------- BUS DATA ----------------------
char busNo[MAX_BUSES][10];
char busType[MAX_BUSES][20];
int capacity[MAX_BUSES];
char source[MAX_BUSES][30];
char destination[MAX_BUSES][30];
char stops[MAX_BUSES][200];
char departure[MAX_BUSES][10];
char arrival[MAX_BUSES][10];
char date[MAX_BUSES][15];
int busCount = 0;

// ---------------------- TICKET DATA ----------------------
int tickets[MAX_TICKETS] = {101, 102, 103, 104, 105}; 
int totalTickets = 5;

// ---------------------- FUNCTION DECLARATIONS ----------------------
void registerUser();
int loginUser();
void manageProfile(int userIndex);

void addRecord();
void displayRecords();
void searchByBusNo();
void busMenu(int userIndex);

void cancelTicket(int tickets[], int totalTickets, int ticketNumber);

// ---------------------- MAIN ----------------------
int main() {
    int choice, loggedInUser;

    while (1) {
        printf("\n=== USER SYSTEM ===\n");
        printf("1. Register\n");
        printf("2. Login\n");
        printf("3. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            registerUser();
        } 
        else if (choice == 2) {
            loggedInUser = loginUser();
            if (loggedInUser != -1) {
                busMenu(loggedInUser); 
            }
        } 
        else if (choice == 3) {
            printf("Exiting program...\n");
            break;
        } 
        else {
            printf("Invalid choice! Try again.\n");
        }
    }

    return 0;
}

// ---------------------- USER FUNCTIONS ----------------------
void registerUser() {
    if (userCount >= MAX_USERS) {
        printf("User limit reached! Cannot register more users.\n");
        return;
    }

    printf("\n=== Register User ===\n");
    printf("Enter username: ");
    scanf("%s", users[userCount].username);
    printf("Enter password: ");
    scanf("%s", users[userCount].password);
    printf("Enter full name: ");
    scanf(" %[^\n]", users[userCount].name); 
    printf("Enter age: ");
    scanf("%d", &users[userCount].age);

    userCount++;
    printf("Registration successful!\n");
}

int loginUser() {
    char username[30], password[30];
    int i;

    printf("\n=== Login ===\n");
    printf("Enter username: ");
    scanf("%s", username);
    printf("Enter password: ");
    scanf("%s", password);

    for (i = 0; i < userCount; i++) {
        if (strcmp(username, users[i].username) == 0 &&
            strcmp(password, users[i].password) == 0) {
            printf("Login successful! Welcome, %s.\n", users[i].name);
            return i;
        }
    }

    printf("Invalid username or password.\n");
    return -1;
}

void manageProfile(int userIndex) {
    int choice;

    while (1) {
        printf("\n=== PROFILE MENU ===\n");
        printf("1. View Profile\n");
        printf("2. Edit Profile\n");
        printf("3. Back\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            printf("\n--- Profile Details ---\n");
            printf("Username: %s\n", users[userIndex].username);
            printf("Name: %s\n", users[userIndex].name);
            printf("Age: %d\n", users[userIndex].age);
        } 
        else if (choice == 2) {
            printf("\nEnter new full name: ");
            scanf(" %[^\n]", users[userIndex].name);
            printf("Enter new age: ");
            scanf("%d", &users[userIndex].age);
            printf("Profile updated successfully!\n");
        } 
        else if (choice == 3) {
            break;
        } 
        else {
            printf("Invalid choice! Try again.\n");
        }
    }
}

// ---------------------- BUS FUNCTIONS ----------------------
void addRecord() {
    if (busCount >= MAX_BUSES) {
        printf("\nDatabase full! Cannot add more records.\n");
    } else {
        printf("\nEnter Bus Number: ");
        scanf("%s", busNo[busCount]);

        printf("Enter Bus Type (AC/Non-AC): ");
        scanf("%s", busType[busCount]);

        printf("Enter Capacity: ");
        scanf("%d", &capacity[busCount]);

        printf("Enter Source: ");
        scanf(" %[^\n]", source[busCount]);

        printf("Enter Destination: ");
        scanf(" %[^\n]", destination[busCount]);

        printf("Enter Stops (comma separated): ");
        scanf(" %[^\n]", stops[busCount]);

        printf("Enter Departure Time (HH:MM): ");
        scanf("%s", departure[busCount]);

        printf("Enter Arrival Time (HH:MM): ");
        scanf("%s", arrival[busCount]);

        printf("Enter Date (DD/MM/YYYY): ");
        scanf("%s", date[busCount]);

        busCount++;
        printf("\nRecord added successfully!\n");
    }
}

void displayRecords() {
    if (busCount == 0) {
        printf("\nNo records found.\n");
    } else {
        int i;
        printf("\n%-10s %-10s %-8s %-15s %-15s %-20s %-10s %-10s %-12s\n",
               "BusNo", "Type", "Capacity", "Source", "Destination", "Stops",
               "Depart", "Arrive", "Date");
        printf("-----------------------------------------------------------------------------------------------------------\n");

        for (i = 0; i < busCount; i++) {
            printf("%-10s %-10s %-8d %-15s %-15s %-20s %-10s %-10s %-12s\n",
                   busNo[i], busType[i], capacity[i],
                   source[i], destination[i], stops[i],
                   departure[i], arrival[i], date[i]);
        }
    }
}

void searchByBusNo() {
    char searchNo[10];
    int found = 0;
    printf("\nEnter Bus Number to Search: ");
    scanf("%s", searchNo);

    for (int i = 0; i < busCount; i++) {
        if (strcmp(busNo[i], searchNo) == 0) {
            printf("\nBus No: %s\nType: %s\nCapacity: %d\nSource: %s\nDestination: %s\nStops: %s\nDeparture: %s\nArrival: %s\nDate: %s\n",
                   busNo[i], busType[i], capacity[i],
                   source[i], destination[i], stops[i],
                   departure[i], arrival[i], date[i]);
            found = 1;
            break;
        }
    }
    if (!found) {
        printf("\nBus Number not found.\n");
    }
}

// ---------------------- TICKET FUNCTIONS ----------------------
void cancelTicket(int tickets[], int totalTickets, int ticketNumber) {
    int found = 0;
    for (int i = 0; i < totalTickets; i++) {
        if (tickets[i] == ticketNumber) {
            tickets[i] = 0; // Mark as canceled
            found = 1;
            break;
        }
    }

    if (found) {
        printf("Ticket number %d has been successfully canceled.\n", ticketNumber);
    } else {
        printf("Ticket number %d not found or already canceled.\n", ticketNumber);
    }
}

// ---------------------- BUS MENU ----------------------
void busMenu(int userIndex) {
    int choice;
    while (1) {
        printf("\n=== BUS MANAGEMENT MENU ===\n");
        printf("1. Add New Bus/Route/Schedule\n");
        printf("2. Display All Records\n");
        printf("3. Search by Bus Number\n");
        printf("4. Manage Profile\n");
        printf("5. Cancel Ticket\n");
        printf("6. Logout\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            addRecord();
        } 
        else if (choice == 2) {
            displayRecords();
        } 
        else if (choice == 3) {
            searchByBusNo();
        } 
        else if (choice == 4) {
            manageProfile(userIndex);
        } 
        else if (choice == 5) {
            int ticketNumber;
            printf("Booked Tickets:\n");
            for (int i = 0; i < totalTickets; i++) {
                if (tickets[i] != 0) {
                    printf("%d ", tickets[i]);
                }
            }
            printf("\nEnter ticket number to cancel: ");
            scanf("%d", &ticketNumber);
            cancelTicket(tickets, totalTickets, ticketNumber);
        } 
        else if (choice == 6) {
            printf("\nLogging out...\n");
            break;
        } 
        else {
            printf("\nInvalid choice! Please try again.\n");
        }
    }
}
#include <stdio.h>
#include <string.h>


#define MAX_USERS 5


struct User {
    char username[30];
    char password[30];
    char name[50];
    int age;
};


struct User users[MAX_USERS];
int userCount = 0;


void registerUser();
int loginUser();
void manageProfile(int userIndex);

int main() {
    int choice, loggedInUser;

    while (1) {
        printf("\n=== USER SYSTEM ===\n");
        printf("1. Register\n");
        printf("2. Login\n");
        printf("3. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            registerUser();
        } 
        else if (choice == 2) {
            loggedInUser = loginUser();
            if (loggedInUser != -1) {
                manageProfile(loggedInUser);
            }
        } 
        else if (choice == 3) {
            printf("Exiting...\n");
            break;
        } 
        else {
            printf("Invalid choice! Try again.\n");
        }
    }

    return 0;
}


void registerUser() {
    if (userCount >= MAX_USERS) {
        printf("User limit reached! Cannot register more users.\n");
        return;
    }

    printf("\n=== Register User ===\n");
    printf("Enter username: ");
    scanf("%s", users[userCount].username);
    printf("Enter password: ");
    scanf("%s", users[userCount].password);
    printf("Enter full name: ");
    scanf(" %[^\n]", users[userCount].name); 
    printf("Enter age: ");
    scanf("%d", &users[userCount].age);

    userCount++;
    printf("Registration successful!\n");
}


int loginUser() {
    char username[30], password[30];
    int i;

    printf("\n=== Login ===\n");
    printf("Enter username: ");
    scanf("%s", username);
    printf("Enter password: ");
    scanf("%s", password);

    for (i = 0; i < userCount; i++) {
        if (strcmp(username, users[i].username) == 0 &&
            strcmp(password, users[i].password) == 0) {
            printf("Login successful! Welcome, %s.\n", users[i].name);
            return i;
        }
    }

    printf("Invalid username or password.\n");
    return -1;
}


void manageProfile(int userIndex) {
    int choice;

    while (1) {
        printf("\n=== PROFILE MENU ===\n");
        printf("1. View Profile\n");
        printf("2. Edit Profile\n");
        printf("3. Logout\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            printf("\n--- Profile Details ---\n");
            printf("Username: %s\n", users[userIndex].username);
            printf("Name: %s\n", users[userIndex].name);
            printf("Age: %d\n", users[userIndex].age);
        } 
        else if (choice == 2) {
            printf("\nEnter new full name: ");
            scanf(" %[^\n]", users[userIndex].name);
            printf("Enter new age: ");
            scanf("%d", &users[userIndex].age);
            printf("Profile updated successfully!\n");
        } 
        else if (choice == 3) {
            printf("Logging out...\n");
            break;
        } 
        else {
            printf("Invalid choice! Try again.\n");
        }
    }
}

#include <stdio.h>
#include <string.h>

#define MAX_USERS 5
#define MAX_BUSES 50


struct User {
    char username[30];
    char password[30];
    char name[50];
    int age;
};

struct User users[MAX_USERS];
int userCount = 0;

void registerUser();
int loginUser();
void manageProfile(int userIndex);


char busNo[MAX_BUSES][10];
char busType[MAX_BUSES][20];
int capacity[MAX_BUSES];

char source[MAX_BUSES][30];
char destination[MAX_BUSES][30];
char stops[MAX_BUSES][200];

char departure[MAX_BUSES][10];
char arrival[MAX_BUSES][10];
char date[MAX_BUSES][15];

int busCount = 0;

void addRecord();
void displayRecords();
void searchByBusNo();
void busMenu();

// ---------------------- MAIN ----------------------
int main() {
    int choice, loggedInUser;

    while (1) {
        printf("\n=== USER SYSTEM ===\n");
        printf("1. Register\n");
        printf("2. Login\n");
        printf("3. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            registerUser();
        } 
        else if (choice == 2) {
            loggedInUser = loginUser();
            if (loggedInUser != -1) {
                busMenu(); 
            }
        } 
        else if (choice == 3) {
            printf("Exiting program...\n");
            break;
        } 
        else {
            printf("Invalid choice! Try again.\n");
        }
    }

    return 0;
}

// ---------------------- USER FUNCTIONS ----------------------
void registerUser() {
    if (userCount >= MAX_USERS) {
        printf("User limit reached! Cannot register more users.\n");
        return;
    }

    printf("\n=== Register User ===\n");
    printf("Enter username: ");
    scanf("%s", users[userCount].username);
    printf("Enter password: ");
    scanf("%s", users[userCount].password);
    printf("Enter full name: ");
    scanf(" %[^\n]", users[userCount].name); 
    printf("Enter age: ");
    scanf("%d", &users[userCount].age);

    userCount++;
    printf("Registration successful!\n");
}

int loginUser() {
    char username[30], password[30];
    int i;

    printf("\n=== Login ===\n");
    printf("Enter username: ");
    scanf("%s", username);
    printf("Enter password: ");
    scanf("%s", password);

    for (i = 0; i < userCount; i++) {
        if (strcmp(username, users[i].username) == 0 &&
            strcmp(password, users[i].password) == 0) {
            printf("Login successful! Welcome, %s.\n", users[i].name);
            return i;
        }
    }

    printf("Invalid username or password.\n");
    return -1;
}

void manageProfile(int userIndex) {
    int choice;

    while (1) {
        printf("\n=== PROFILE MENU ===\n");
        printf("1. View Profile\n");
        printf("2. Edit Profile\n");
        printf("3. Back\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            printf("\n--- Profile Details ---\n");
            printf("Username: %s\n", users[userIndex].username);
            printf("Name: %s\n", users[userIndex].name);
            printf("Age: %d\n", users[userIndex].age);
        } 
        else if (choice == 2) {
            printf("\nEnter new full name: ");
            scanf(" %[^\n]", users[userIndex].name);
            printf("Enter new age: ");
            scanf("%d", &users[userIndex].age);
            printf("Profile updated successfully!\n");
        } 
        else if (choice == 3) {
            break;
        } 
        else {
            printf("Invalid choice! Try again.\n");
        }
    }
}

// ---------------------- BUS FUNCTIONS ----------------------
void addRecord() {
    if (busCount >= MAX_BUSES) {
        printf("\nDatabase full! Cannot add more records.\n");
    } else {
        printf("\nEnter Bus Number: ");
        scanf("%s", busNo[busCount]);

        printf("Enter Bus Type (AC/Non-AC): ");
        scanf("%s", busType[busCount]);

        printf("Enter Capacity: ");
        scanf("%d", &capacity[busCount]);

        printf("Enter Source: ");
        scanf(" %[^\n]", source[busCount]);

        printf("Enter Destination: ");
        scanf(" %[^\n]", destination[busCount]);

        printf("Enter Stops (comma separated): ");
        scanf(" %[^\n]", stops[busCount]);

        printf("Enter Departure Time (HH:MM): ");
        scanf("%s", departure[busCount]);

        printf("Enter Arrival Time (HH:MM): ");
        scanf("%s", arrival[busCount]);

        printf("Enter Date (DD/MM/YYYY): ");
        scanf("%s", date[busCount]);

        busCount++;
        printf("\nRecord added successfully!\n");
    }
}

void displayRecords() {
    if (busCount == 0) {
        printf("\nNo records found.\n");
    } else {
        int i;
        printf("\n%-10s %-10s %-8s %-15s %-15s %-20s %-10s %-10s %-12s\n",
               "BusNo", "Type", "Capacity", "Source", "Destination", "Stops",
               "Depart", "Arrive", "Date");
        printf("-----------------------------------------------------------------------------------------------------------\n");

        for (i = 0; i < busCount; i++) {
            printf("%-10s %-10s %-8d %-15s %-15s %-20s %-10s %-10s %-12s\n",
                   busNo[i], busType[i], capacity[i],
                   source[i], destination[i], stops[i],
                   departure[i], arrival[i], date[i]);
        }
    }
}

void searchByBusNo() {
    char searchNo[10];
    int found = 0;
    printf("\nEnter Bus Number to Search: ");
    scanf("%s", searchNo);

    for (int i = 0; i < busCount; i++) {
        if (strcmp(busNo[i], searchNo) == 0) {
            printf("\nBus No: %s\nType: %s\nCapacity: %d\nSource: %s\nDestination: %s\nStops: %s\nDeparture: %s\nArrival: %s\nDate: %s\n",
                   busNo[i], busType[i], capacity[i],
                   source[i], destination[i], stops[i],
                   departure[i], arrival[i], date[i]);
            found = 1;
            break;
        }
    }
    if (!found) {
        printf("\nBus Number not found.\n");
    }
}

// ---------------------- BUS MENU ----------------------
void busMenu() {
    int choice;
    while (1) {
        printf("\n=== BUS MANAGEMENT MENU ===\n");
        printf("1. Add New Bus/Route/Schedule\n");
        printf("2. Display All Records\n");
        printf("3. Search by Bus Number\n");
        printf("4. Manage Profile\n");
        printf("5. Logout\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            addRecord();
        } 
        else if (choice == 2) {
            displayRecords();
        } 
        else if (choice == 3) {
            searchByBusNo();
        } 
        else if (choice == 4) {
            // Profile management of the currently logged-in user
            printf("Feature available only from main login session.\n");
        } 
        else if (choice == 5) {
            printf("\nLogging out...\n");
            break;
        } 
        else {
            printf("\nInvalid choice! Please try again.\n");
        }
    }
}

#include <stdio.h>
#define SEATS 10

void bookTicket(int bus[], int n);
void cancelTicket(int bus[], int n);
void checkStatus(int bus[], int n);

int main() {
    int bus[SEATS] = {0}; 
    int choice;

    printf("Welcome to Bus Ticket Booking System\n");

    while (1) {
        printf("\nMenu:\n");
        printf("1. Book a Ticket\n");
        printf("2. Cancel a Ticket\n");
        printf("3. Check Bus Status\n");
        printf("4. Logout\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            bookTicket(bus, SEATS);
        }
        else if (choice == 2) {
            cancelTicket(bus, SEATS);
        }
        else if (choice == 3) {
            checkStatus(bus, SEATS);
        }
        else if (choice == 4) {
            printf("Logging out... Goodbye!\n");
            break;
        }
        else {
            printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}

void bookTicket(int bus[], int n) {
    int seatNumber;
    printf("Enter seat number (1-%d) to book: ", n);
    scanf("%d", &seatNumber);

    if (seatNumber < 1 || seatNumber > n) {
        printf("Invalid seat number.\n");
    } else if (bus[seatNumber - 1] == 1) {
        printf("Seat already booked.\n");
    } else {
        bus[seatNumber - 1] = 1;
        printf("Seat %d booked successfully.\n", seatNumber);
    }
}

void cancelTicket(int bus[], int n) {
    int seatNumber;
    printf("Enter seat number (1-%d) to cancel: ", n);
    scanf("%d", &seatNumber);

    if (seatNumber < 1 || seatNumber > n) {
        printf("Invalid seat number.\n");
    } else if (bus[seatNumber - 1] == 0) {
        printf("Seat is not booked.\n");
    } else {
        bus[seatNumber - 1] = 0;
        printf("Seat %d booking canceled successfully.\n", seatNumber);
    }
}

void checkStatus(int bus[], int n) {
    printf("\nBus Seat Status:\n");
    for (int i = 0; i < n; i++) {
        if (bus[i] == 0)
            printf("Seat %d: Empty\n", i + 1);
        else
            printf("Seat %d: Booked\n", i + 1);
    }
}



