#include <stdio.h>



struct Student {
    int id;
    char name[50];
    float marks;
};


void registerStudent(struct Student students[], int *count);
void displayStudents(struct Student students[], int count);
void showMenu();

// Main function
int main() {
    struct Student students[MAX_STUDENTS];
    int studentCount = 0;
    int choice;

    do {
        showMenu();
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                registerStudent(students, &studentCount);
                break;
            case 2:
                displayStudents(students, studentCount);
                break;
            case 0:
                printf("Exiting program.\n");
                break;
            default:
                printf("Invalid choice. Try again.\n");
        }

        printf("\n");

    } while (choice != 0);

    return 0;
}

// Function to display menu
void showMenu() {
    printf("====== STUDENT MANAGEMENT MENU ======\n");
    printf("1. Register Student\n");
    printf("2. Display All Students\n");
    printf("0. Exit\n");
}

// Function to register a student
void registerStudent(struct Student students[], int *count) {
    if (*count >= MAX_STUDENTS) {
        printf("Student limit reached!\n");
        return;
    }

    printf("Enter student ID: ");
    scanf("%d", &students[*count].id);

    printf("Enter student name: ");
    scanf(" %[^\n]", students[*count].name); // Read string with spaces

    printf("Enter marks: ");
    scanf("%f", &students[*count].marks);

    (*count)++;
    printf("Student registered successfully.\n");
}

// Function to display all students
void displayStudents(struct Student students[], int count) {
    if (count == 0) {
        printf("No students registered yet.\n");
        return;
    }

    printf("====== STUDENT RECORDS ======\n");
    for (int i = 0; i < count; i++) {
        printf("ID: %d\n", students[i].id);
        printf("Name: %s\n", students[i].name);
        printf("Marks: %.2f\n", students[i].marks);
        printf("---------------------------\n");
    }
}
