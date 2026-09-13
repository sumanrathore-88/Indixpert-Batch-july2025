num1 = int(input("Enter number 1: "))
if num1 >= 0:
    print(num1, "is Positive")
else:
    print(num1, "is Negative")

num2 = int(input("Enter number 2: "))
if num2 >= 0:
    print(num2, "is Positive")
else:
    print(num2, "is Negative")

num3 = int(input("Enter number 3: "))
if num3 >= 0:
    print(num3, "is Positive")
else:
    print(num3, "is Negative")

num4 = int(input("Enter number 4: "))
if num4 >= 0:
    print(num4, "is Positive")
else:
    print(num4, "is Negative")

num5 = int(input("Enter number 5: "))
if num5 >= 0:
    print(num5, "is Positive")
else:
    print(num5, "is Negative")



    user_id = input("Enter your ID (only numbers): ")
if user_id.isnumeric():
    print(" Valid ID")
else:
    print(" Invalid ID! ID must contain only numbers.")


name = input("Enter your Name (alphabets only): ")
if all(ch.isalpha() or ch.isspace() for ch in name) and name.strip() != "":
    print(" Valid Name")
else:
    print(" Invalid Name! Name must contain only alphabets.")


address = input("Enter your Address: ")
if address.strip() != "":
    print(" Valid Address")
else:
    print(" Invalid Address! Address cannot be empty.")


if user_id.isnumeric() and (all(ch.isalpha() or ch.isspace() for ch in name) and name.strip() != "") and address.strip() != "":
    

    
    print("Your ID is:", user_id)
    print("ID in uppercase:", user_id.upper())
    print("Is ID numeric?:", user_id.isnumeric())

    
    print("\nYour Name is:", name)
    print("Name in lowercase:", name.lower())
    print("Name in title case:", name.title())
    print("Length of Name:", len(name))

    
    print("\nYour Address is:", address)
    print("Address in uppercase:", address.upper())
    print("Address after stripping spaces:", address.strip())

else:
    print("\n Please restart the program and enter valid details.")
 
 

java=int(input("please enter the java marks= "))
sql=int(input("please enter the sql marks= "))
html=int(input("please enter the html marks= "))
python=int(input("please enter the python marks= "))

total=java+sql+html+python

print(total)
 


print("Welcome to Indixpert! Please register or signin.\n")


emails = []
usernames = []
passwords = []
addresses = []

for _ in range(2):
    print("\nMenu:\n1. Signup\n2. Login")
    choice = input("Enter choice (1/2): ")

    if choice == "1":
        print("\n--- Signup ---")
        username = input("Enter username: ")

        
        valid = True
        for ch in username:
            if not (ch >= "A" and ch <= "Z" or ch >= "a" and ch <= "z"):
                valid = False
        if not valid:
            print(" Invalid username. Only alphabets allowed.")
            continue

        email = input("Enter email: ")

        
        if email.find("@gmail.com") == -1 or email.find("00000") != -1 or email.find("aaaa") != -1:
            print(" Invalid email. Must be Gmail and not contain '00000' or 'aaaa'.")
            continue

        password = input("Enter password: ")
        confirm_password = input("Confirm password: ")


        if len(password) < 8:
            print(" Password too short.")
            continue

        upper_found = False
        for ch in password:
            if ch >= "A" and ch <= "Z":
                upper_found = True
        if not upper_found:
            print(" Password must contain at least one uppercase letter.")
            continue

        if password != confirm_password:
            print(" Passwords do not match.")
            continue

        address = input("Enter address: ")

        usernames.append(username)
        emails.append(email)
        passwords.append(password)
        addresses.append(address)

        print(" Registration successful!")

    elif choice == "2":
        print("\n--- Login ---")
        email = input("Enter email: ")
        password = input("Enter password: ")

        found = False
        for i in range(len(emails)):
            if emails[i] == email and passwords[i] == password:
                print(" Welcome", usernames[i], "! Login successful.")
                found = True
        if not found:
            print(" Invalid email or password.")

    else:
        print(" Invalid choice.")



        user={"email":"suman@gmail.com","passward":123}
userdata=[]
count=0
print("1.login")
print("2.signup")
print("3.exit")
userinput=int(input("please enter any option"))
while(True):
  if userinput==1:
    email=input("please enter email id: ")
    passward=int(input("please enter passward: "))

    if email==user["email"] and passward==user["passward"]:
        print("login successfully")
        print("1.for view profile: ")
        print("2.for edit profile: ")
        print("3.for exit")
        menuoption=int(input("please select any option: "))
        if menuoption==1:
            for n in userdata:
                count+=1
                print(userdata)
                break
                if count<1:
                    print("please signup first")
                    userinput=2
                elif menuoption==3:
                    break 
                else:
                    print("invalid userid and passward")
        elif userinput==2:
            userdictionary={}
            userdictionary["id"]=int(input("please enter student id: "))
            userdictionary["name"]=input("please enter student name: ")
            userdictionary["address"]=input("please enter student address: ")
            userdictionary["contact"]=input("please enter student contact: ")
            userdata.append(userdictionary)
            print("you have successfully Registered")
            print("please login now")
            userinput=1



                    




liststudent = []  
user = {"email": "suman@gmail.com", "password": "123"}  

while True:
    print("\nMain Menu")
    print("1. Login")
    print("2. Signup")
    print("3. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:   
        email = input("Enter email: ")
        password = input("Enter password: ")

        if email == user["email"] and password == user["password"]:
            print("Login Successful!")

            while True:
                print("\nStudent Menu")
                print("1. View Profile")
                print("2. Edit Profile")
                print("3. Exit to Main Menu")

                option = int(input("Enter option: "))

                if option == 1:   
                    if liststudent:
                        for student in liststudent:
                            print(student)
                    else:
                        print("No student found. Please signup first.")

                elif option == 2:   
                    if liststudent:
                        
                        studentdic = liststudent[-1]   
                        print("Current Profile:", studentdic)

                        
                        new_id = int(input("Enter new id: "))
                        new_name = input("Enter new name: ")
                        new_address = input("Enter new address: ")
                        new_contact = input("Enter new contact: ")

                        
                        updated_data = {
                            "id": new_id,
                            "name": new_name,
                            "address": new_address,
                            "contact": new_contact
                        }
                        studentdic.update(updated_data)

                        
                        liststudent.append(studentdic.copy())
                        print("Profile updated successfully!")

                    else:
                        print("No profile found. Please signup first.")

                elif option == 3:  
                    break
                else:
                    print("Invalid choice!")

        else:
            print("Invalid login credentials.")

    elif choice == 2:   
        studentdic = {}
        studentdic["id"] = int(input("Enter student id: "))
        studentdic["name"] = input("Enter student name: ")
        studentdic["address"] = input("Enter student address: ")
        studentdic["contact"] = input("Enter student contact: ")

        liststudent.append(studentdic)
        print("Signup successful! Please login now.")

    elif choice == 3:   
        print("Exiting program...")
        break

    else:
        print("Invalid choice, try again.")


data=[]
student1={}
student1["id"]=int(input("enter the student1 id= "))
student1["name"]=input("enter the student1 name= ")
student1["address"]=input("enter the student1 address= ")
student1["qualification"]=[
    input("enter the student1 qualification1= "),
    input("enter the student1 qualification2= ")
]

student2={}

student2["id"]=int(input("enter the student2 id= "))
student2["name"]=input("enter the student2 name= ")
student2["address"]=input("enter the student2 address= ")
student2["qualification"]=[
    input("enter the student2 qualification1= "),
    input("enter the student2 qualification2= ")

]
data.append(student1)
data.append(student2)
print("\n student details")
print(data)



print("Search Student Data")


Id=int(input("please enter id= "))
Name=input("Enter name= ")
LastName=input("enter last name= ")
Address=input("enter your Address= ")
Qualification=input("enter your qualification= ")
EmailId=input("enter your emailid= ")

print("ID",Id)
print("Name",Name)
print("Last Name",LastName)
print("Address",Address)
print("Qualification",Qualification)
print("emailid",EmailId)




liststudentdata = []

def menu():
    print("\n=== Student  System ===")
    print("1. Student Registration")
    print("2. View Student Records")
    print("3. Search Student Data (by Name)")
    print("4. Delete Student Record (by ID)")
    print("5. Exit")
    option = input("Please select any option: ")
    return option

def student_registration():
    dictstudent = {}
    dictstudent["id"] = input("Enter student ID: ")
    dictstudent["name"] = input("Enter student name: ")
    dictstudent["address"] = input("Enter student address: ")
    liststudentdata.append(dictstudent)
    return liststudentdata
    print(" Student registered successfully!")

def viewstudent_record():
    if not liststudentdata:
        print(" No student records found.")
    else:
        print("\n--- Student Records ---")
        for student in liststudentdata:
            print(f"ID: {student['id']}, Name: {student['name']}, Address: {student['address']}")

def search_student_by_name():
    name = input("Enter student name to search: ")
    found = False
    for student in liststudentdata:
        if student["name"].lower() == name.lower():
            print(f" Found: ID: {student['id']}, Name: {student['name']}, Address: {student['address']}")
            found = True
    if not found:
        print(" Student not found.")

def delete_student_by_id():
    sid = input("Enter student ID to delete: ")
    for student in liststudentdata:
        if student["id"] == sid:
            liststudentdata.remove(student)
            print(" Student record deleted successfully!")
            return
    print(" Student ID not found.")


while True:
    choice = menu()
    if choice == "1":
        student_registration()
    elif choice == "2":
        viewstudent_record()
    elif choice == "3":
        search_student_by_name()
    elif choice == "4":
        delete_student_by_id()
    elif choice == "5":
        print(" Exiting program. Goodbye!")
        break
    else:
        print(" Invalid option. Please try again.")




        
from __future__ import annotations
import os
import json
import getpass
from typing import Optional, Dict, Any, List


try:
    from domain.validation import Validation
except Exception:
    Validation = None  

try:
    from domain.logs import Logger, get_logger  
except Exception:
    Logger = None
    get_logger = None


MenuOrder = None
menu_order_module = None
try:
    from domain.menu_order import MenuOrder
except Exception:
    MenuOrder = None
    try:
        import importlib

        menu_order_module = importlib.import_module("domain.menu_order")
    except Exception:
        menu_order_module = None

TableBooking = None
table_booking_module = None
try:
    from domain.table_booking import TableBooking
except Exception:
    TableBooking = None
    try:
        import importlib

        table_booking_module = importlib.import_module("domain.table_booking")
    except Exception:
        table_booking_module = None

Report = None
report_module = None
try:
    
    from report.report import Report
except Exception:
    Report = None
    try:
        import importlib

        report_module = importlib.import_module("report.report")
    except Exception:
        report_module = None

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(__file__))  # package root (RESTAURANT_MANAGEMENT_SYSTEM/authentication -> ..)
DB_DIR = os.path.join(BASE_DIR, "database")
STAFF_FILE = os.path.join(DB_DIR, "staff.json")

# Hard-coded admin as required
ADMIN = {"id": 100, "name": "suman rathore", "email": "suman@gmail.com", "password": "suman123"}


# -------------------------
# Fallback simple Validation & Logger 
# -------------------------
if Validation is None:
    class Validation:
        """Minimal fallback Validation used only if domain.validation is missing."""
        @staticmethod
        def non_empty(v) -> bool:
            return bool(v and str(v).strip())

        @staticmethod
        def is_valid_id(v) -> bool:
            try:
                return int(v) > 0
            except Exception:
                return False

        @staticmethod
        def is_valid_email(e: str) -> bool:
            try:
                s = str(e).strip()
                return "@" in s and "." in s and len(s) >= 5
            except Exception:
                return False

        @staticmethod
        def is_valid_password(p: str) -> bool:
            try:
                return isinstance(p, str) and len(p.strip()) >= 4
            except Exception:
                return False

        @staticmethod
        def is_valid_contact(c: str) -> bool:
            try:
                s = str(c).strip()
                return s.isdigit() and len(s) == 10
            except Exception:
                return False


if Logger is None:
    
    import datetime

    class Logger:
        def __init__(self):
            os.makedirs(DB_DIR, exist_ok=True)
            self.path = os.path.join(DB_DIR, "logs.txt")

        def _write(self, level: str, msg: str):
            try:
                ts = datetime.datetime.now().isoformat(sep=" ", timespec="seconds")
                line = f"[{ts}] {level}: {msg}\n"
                with open(self.path, "a", encoding="utf-8") as f:
                    f.write(line)
            except Exception:
                
                try:
                    print(f"{level}: {msg}")
                except Exception:
                    pass

        def info(self, msg: str):
            self._write("INFO", msg)

        def warning(self, msg: str):
            self._write("WARNING", msg)

        def error(self, msg: str):
            self._write("ERROR", msg)



try:
    _logger = get_logger() if get_logger else Logger()
except Exception:
    _logger = Logger()


# -------------------------
# Registration class
# -------------------------
class Registration:
    def __init__(self, staff_db_path: str = STAFF_FILE):
        os.makedirs(os.path.dirname(staff_db_path), exist_ok=True)
        self.staff_db_path = staff_db_path
        self.validation = Validation()
        self.logger = _logger
        # ensure staff file exists and is a list
        if not os.path.exists(self.staff_db_path):
            try:
                with open(self.staff_db_path, "w", encoding="utf-8") as f:
                    json.dump([], f)
                self.logger.info(f"Created staff DB at {self.staff_db_path}")
            except Exception as e:
                self.logger.error(f"Failed to create staff DB: {e}")

    
    def _load_staff(self) -> List[Dict[str, Any]]:
        try:
            with open(self.staff_db_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, list):
                return data
            self.logger.warning("staff.json format invalid; resetting to empty list.")
            return []
        except FileNotFoundError:
            return []
        except json.JSONDecodeError:
            self.logger.error("staff.json malformed; returning empty staff list.")
            return []
        except Exception as e:
            self.logger.error(f"Unexpected error loading staff DB: {e}")
            return []

    def _save_staff(self, staff_list: List[Dict[str, Any]]) -> bool:
        try:
            with open(self.staff_db_path, "w", encoding="utf-8") as f:
                json.dump(staff_list, f, indent=2)
            return True
        except Exception as e:
            self.logger.error(f"Failed to save staff DB: {e}")
            return False

    def _find_staff_by_id(self, staff_list: List[Dict[str, Any]], staff_id: int) -> Optional[Dict[str, Any]]:
        for s in staff_list:
            try:
                if int(s.get("id")) == int(staff_id):
                    return s
            except Exception:
                continue
        return None

    def _find_staff_by_email(self, staff_list: List[Dict[str, Any]], email: str) -> Optional[Dict[str, Any]]:
        for s in staff_list:
            if str(s.get("email", "")).lower() == str(email).lower():
                return s
        return None

    # ---------- admin authenticate ----------
    def _admin_authenticate(self) -> bool:
        """Simple admin auth using the hard-coded ADMIN credentials."""
        try:
            print("Admin authentication required.")
            aid = input("Admin ID: ").strip()
            aemail = input("Admin Email: ").strip()
            apw = getpass.getpass("Admin Password: ").strip()
            if not (self.validation.is_valid_id(aid) and self.validation.is_valid_email(aemail)):
                print("Invalid admin credential format.")
                self.logger.warning("Admin provided invalid credential format.")
                return False
            if int(aid) == ADMIN["id"] and aemail.lower() == ADMIN["email"].lower() and apw == ADMIN["password"]:
                self.logger.info("Admin authenticated successfully.")
                return True
            print("Admin authentication failed.")
            self.logger.warning("Admin authentication failed.")
            return False
        except Exception as e:
            self.logger.error(f"Exception during admin authentication: {e}")
            return False

    # ---------- staff management (admin-only) ----------
    def add_staff(self):
        if not self._admin_authenticate():
            return
        try:
            staff_list = self._load_staff()
            raw_id = input("Enter Staff ID: ").strip()
            if not self.validation.is_valid_id(raw_id):
                print("Invalid ID.")
                return
            staff_id = int(raw_id)
            if self._find_staff_by_id(staff_list, staff_id):
                print("Staff with this ID already exists.")
                return
            name = input("Name: ").strip()
            if not self.validation.non_empty(name):
                print("Name cannot be empty.")
                return
            email = input("Email: ").strip()
            if not self.validation.is_valid_email(email):
                print("Invalid email.")
                return
            if self._find_staff_by_email(staff_list, email):
                print("Email already in use.")
                return
            password = getpass.getpass("Password: ").strip()
            if not self.validation.is_valid_password(password):
                print("Password does not meet requirements.")
                return
            contact = input("Contact number (10 digits): ").strip()
            if not self.validation.is_valid_contact(contact):
                print("Invalid contact number.")
                return
            qualification = input("Qualification: ").strip()
            if not self.validation.non_empty(qualification):
                print("Qualification cannot be empty.")
                return
            new = {
                "id": staff_id,
                "name": name,
                "email": email,
                "password": password,
                "contact": contact,
                "qualification": qualification,
            }
            staff_list.append(new)
            if self._save_staff(staff_list):
                print("Staff added successfully.")
                self.logger.info(f"Admin added staff {staff_id} - {name}")
            else:
                print("Failed to add staff (save error).")
        except Exception as e:
            print("Error while adding staff.")
            self.logger.error(f"add_staff exception: {e}")

    def update_staff(self):
        if not self._admin_authenticate():
            return
        try:
            staff_list = self._load_staff()
            raw_id = input("Enter Staff ID to update: ").strip()
            if not self.validation.is_valid_id(raw_id):
                print("Invalid ID.")
                return
            staff = self._find_staff_by_id(staff_list, int(raw_id))
            if not staff:
                print("Staff not found.")
                return
            print(f"Updating staff {staff.get('id')} - {staff.get('name')}")
            name = input(f"Name [{staff.get('name')}]: ").strip() or staff.get('name')
            email = input(f"Email [{staff.get('email')}]: ").strip() or staff.get('email')
            if not self.validation.is_valid_email(email):
                print("Invalid email.")
                return
            contact = input(f"Contact [{staff.get('contact')}]: ").strip() or staff.get('contact')
            if not self.validation.is_valid_contact(contact):
                print("Invalid contact.")
                return
            qualification = input(f"Qualification [{staff.get('qualification')}]: ").strip() or staff.get('qualification')
            change_pw = input("Change password? (y/N): ").strip().lower()
            if change_pw == "y":
                pw = getpass.getpass("New password: ").strip()
                if not self.validation.is_valid_password(pw):
                    print("Invalid password.")
                    return
                staff["password"] = pw
            staff["name"] = name
            staff["email"] = email
            staff["contact"] = contact
            staff["qualification"] = qualification
            if self._save_staff(staff_list):
                print("Staff updated.")
                self.logger.info(f"Admin updated staff {staff.get('id')}")
            else:
                print("Failed to save staff updates.")
        except Exception as e:
            print("Error while updating staff.")
            self.logger.error(f"update_staff exception: {e}")

    def delete_staff(self):
        if not self._admin_authenticate():
            return
        try:
            staff_list = self._load_staff()
            raw_id = input("Enter Staff ID to delete: ").strip()
            if not self.validation.is_valid_id(raw_id):
                print("Invalid ID.")
                return
            s = self._find_staff_by_id(staff_list, int(raw_id))
            if not s:
                print("Staff not found.")
                return
            confirm = input(f"Confirm delete {s.get('id')} - {s.get('name')}? (y/N): ").strip().lower()
            if confirm != "y":
                print("Deletion cancelled.")
                return
            staff_list = [x for x in staff_list if int(x.get("id")) != int(raw_id)]
            if self._save_staff(staff_list):
                print("Staff deleted.")
                self.logger.info(f"Admin deleted staff {raw_id}")
            else:
                print("Failed to delete staff.")
        except Exception as e:
            print("Error while deleting staff.")
            self.logger.error(f"delete_staff exception: {e}")

    def list_staff(self):
        try:
            staff_list = self._load_staff()
            if not staff_list:
                print("No staff records.")
                return
            print("\n--- Staff List ---")
            for s in staff_list:
                print(f"ID:{s.get('id')} | Name:{s.get('name')} | Email:{s.get('email')} | Contact:{s.get('contact')} | Qualification:{s.get('qualification')}")
            print("------------------\n")
        except Exception as e:
            print("Error listing staff.")
            self.logger.error(f"list_staff exception: {e}")

    # ---------- signin / signup flows ----------
    def signup_flow(self):
        """Admin-only management menu"""
        if not self._admin_authenticate():
            return
        while True:
            print("\nAdmin - Staff Management")
            print("1. Add Staff")
            print("2. Update Staff")
            print("3. Delete Staff")
            print("4. List Staff")
            print("5. Back")
            ch = input("Choose: ").strip()
            if ch == "1":
                self.add_staff()
            elif ch == "2":
                self.update_staff()
            elif ch == "3":
                self.delete_staff()
            elif ch == "4":
                self.list_staff()
            elif ch == "5":
                break
            else:
                print("Invalid choice.")

    def signin_flow(self):
        try:
            print("\nSign In")
            identifier = input("Enter Staff ID or Email: ").strip()
            password = getpass.getpass("Password: ").strip()
            # admin check
            if (identifier.isdigit() and int(identifier) == ADMIN["id"]) or (identifier.lower() == ADMIN["email"].lower()):
                if password == ADMIN["password"]:
                    print(f"Welcome Admin {ADMIN['name']}!")
                    self.logger.info("Admin signed in.")
                    self._admin_post_login()
                    return
                else:
                    print("Invalid admin password.")
                    return
            # staff sign-in
            staff_list = self._load_staff()
            staff_member = None
            if identifier.isdigit():
                staff_member = self._find_staff_by_id(staff_list, int(identifier))
            else:
                staff_member = self._find_staff_by_email(staff_list, identifier)
            if not staff_member:
                print("Staff account not found.")
                self.logger.warning("Signin failed - staff not found.")
                return
            if staff_member.get("password") != password:
                print("Incorrect password.")
                self.logger.warning(f"Signin failed for staff {staff_member.get('id')}: incorrect password.")
                return
            print(f"Welcome {staff_member.get('name')}!")
            self.logger.info(f"Staff signed in: {staff_member.get('id')}")
            self._staff_post_login(staff_member)
        except Exception as e:
            print("An error occurred during sign in.")
            self.logger.error(f"signin_flow exception: {e}")

    # ---------- post-login menus ----------
    def _admin_post_login(self):
        while True:
            print("\nAdmin Menu")
            print("1. Staff Management")
            print("2. Open Reports")
            print("3. Table Booking Module")
            print("4. Menu/Order Module")
            print("5. Sign out")
            ch = input("Choose: ").strip()
            if ch == "1":
                self.signup_flow()
            elif ch == "2":
                self._call_report()
            elif ch == "3":
                self._call_table_booking()
            elif ch == "4":
                self._call_menu_order()
            elif ch == "5":
                print("Signing out.")
                break
            else:
                print("Invalid choice.")

    def _staff_post_login(self, staff_member: Dict[str, Any]):
        while True:
            print("\nStaff Menu")
            print("1. Menu/Order Module")
            print("2. Table Booking Module")
            print("3. Generate/View Report (limited)")
            print("4. Sign out")
            ch = input("Choose: ").strip()
            if ch == "1":
                self._call_menu_order()
            elif ch == "2":
                self._call_table_booking()
            elif ch == "3":
                self._call_report(limited=True)
            elif ch == "4":
                print("Signing out.")
                break
            else:
                print("Invalid choice.")

    # ---------- module ----------
    def _call_menu_order(self):
        try:
            # Preferred: MenuOrder class
            if MenuOrder is not None:
                try:
                    mo = MenuOrder()
                    if hasattr(mo, "main"):
                        mo.main()
                        return
                    if hasattr(mo, "take_order"):
                        mo.take_order()
                        return
                except Exception as e:
                    self.logger.error(f"MenuOrder class exists but failed: {e}")
            #  module object
            if menu_order_module is not None:
                try:
                    if hasattr(menu_order_module, "MenuOrder"):
                        mo = menu_order_module.MenuOrder()
                        if hasattr(mo, "main"):
                            mo.main()
                            return
                    if hasattr(menu_order_module, "main"):
                        menu_order_module.main()
                        return
                    if hasattr(menu_order_module, "take_order"):
                        menu_order_module.take_order()
                        return
                except Exception as e:
                    self.logger.error(f"menu_order module invocation failed: {e}")
            print("Menu/Order module not available.")
            self.logger.warning("Attempted to call menu_order but module not found or no entrypoint.")
        except Exception as e:
            print("Error running Menu/Order module.")
            self.logger.error(f"_call_menu_order exception: {e}")

    def _call_table_booking(self):
        try:
            if TableBooking is not None:
                try:
                    tb = TableBooking()
                    if hasattr(tb, "main"):
                        tb.main()
                        return
                except Exception as e:
                    self.logger.error(f"TableBooking class exists but failed: {e}")
            if table_booking_module is not None:
                try:
                    if hasattr(table_booking_module, "TableBooking"):
                        tb = table_booking_module.TableBooking()
                        if hasattr(tb, "main"):
                            tb.main()
                            return
                    if hasattr(table_booking_module, "main"):
                        table_booking_module.main()
                        return
                except Exception as e:
                    self.logger.error(f"table_booking module invocation failed: {e}")
            print("Table Booking module not available.")
            self.logger.warning("Attempted to call table_booking but module not found or no entrypoint.")
        except Exception as e:
            print("Error running Table Booking module.")
            self.logger.error(f"_call_table_booking exception: {e}")

    def _call_report(self, limited: bool = False):
        try:
            # preferred: Report class
            if Report is not None:
                try:
                    rp = Report()
                    if hasattr(rp, "main"):
                        # If limited view is requested, pass a flag if supported
                        if limited and hasattr(rp, "main"):
                            
                            rp.main()
                        else:
                            rp.main()
                        return
                except Exception as e:
                    self.logger.error(f"Report class exists but failed: {e}")
            if report_module is not None:
                try:
                    if hasattr(report_module, "Report"):
                        rp = report_module.Report()
                        if hasattr(rp, "main"):
                            rp.main()
                            return
                    if hasattr(report_module, "main"):
                        report_module.main()
                        return
                except Exception as e:
                    self.logger.error(f"report module invocation failed: {e}")
            print("Report module not available.")
            self.logger.warning("Attempted to call report but module not found or no entrypoint.")
        except Exception as e:
            print("Error running Report module.")
            self.logger.error(f"_call_report exception: {e}")

    # ---------- main interactive entry ----------
    def main_menu(self):
        try:
            while True:
                print("\nCHATORA_RESTAURANT - REGISTRATION")
                print("1. Signup (Admin - manage staff)")
                print("2. Signin (Staff/Admin)")
                print("3. Exit")
                ch = input("Choose an option: ").strip()
                if ch == "1":
                    self.signup_flow()
                elif ch == "2":
                    self.signin_flow()
                elif ch == "3":
                    print("Exiting registration module.")
                    break
                else:
                    print("Invalid option. Please choose 1, 2 or 3.")
        except Exception as e:
            print("Fatal error in registration main menu.")
            self.logger.error(f"main_menu exception: {e}")


# Top-level run() function used by main.py
def run():
    reg = Registration()
    reg.main_menu()


# Allow running directly
if __name__ == "__main__":
    run()




import os
import json
import getpass
from datetime import datetime
from typing import List, Dict, Tuple, Optional

BASE_DIR = os.path.dirname(os.path.dirname(__file__))  # package root (RESTAURANT_MANAGEMENT_SYSTEM/domain -> ..)
DB_DIR = os.path.join(BASE_DIR, "database")
MENU_FILE = os.path.join(DB_DIR, "menu.json")

# Admin  (must match registration module)
ADMIN = {
    "id": 100,
    "name": "suman rathore",
    "email": "suman@gmail.com",
    "password": "suman123",
}

# Initial items (from user)
INITIAL_ITEMS = [
    (1, "Butter Chicken", "Non-Veg", 150, 280),
    (2, "Paneer Butter Masala", "Veg", 120, 220),
    (3, "Dal Makhani", "Veg", 90, 160),
    (4, "Chicken Biryani", "Non-Veg", 130, 250),
    (5, "Veg Pulao", "Veg", 100, 180),
    (6, "Mutton Rogan Josh", "Non-Veg", 180, 320),
    (7, "Shahi Paneer", "Veg", 130, 230),
    (8, "Malai Kofta", "Veg", 120, 210),
    (9, "Fish Curry", "Non-Veg", 160, 300),
    (10, "Chole Bhature", "Veg", 80, 150),
    (11, "Tandoori Chicken", "Non-Veg", 170, 320),
    (12, "Kadai Paneer", "Veg", 120, 220),
    (13, "Rajma Chawal", "Veg", 90, 160),
    (14, "Egg Curry", "Non-Veg", 100, 180),
    (15, "Palak Paneer", "Veg", 110, 200),
    (16, "Chicken Tikka", "Non-Veg", 150, 280),
    (17, "Veg Fried Rice", "Veg", 90, 160),
    (18, "Mutton Biryani", "Non-Veg", 180, 320),
    (19, "Paneer Tikka", "Veg", 130, 230),
    (20, "Prawn Masala", "Non-Veg", 180, 340),
    (21, "Aloo Gobi", "Veg", 90, 160),
    (22, "Mix Veg Curry", "Veg", 100, 180),
    (23, "Keema Curry", "Non-Veg", 160, 290),
    (24, "Kadhi Pakoda", "Veg", 80, 150),
    (25, "Chicken Korma", "Non-Veg", 150, 280),
    (26, "Paneer Lababdar", "Veg", 130, 230),
    (27, "Methi Malai Matar", "Veg", 110, 200),
    (28, "Fish Fry", "Non-Veg", 150, 280),
    (29, "Chana Masala", "Veg", 90, 160),
    (30, "Veg Biryani", "Veg", 110, 200),
    (31, "Chicken Curry", "Non-Veg", 140, 260),
    (32, "Paneer Do Pyaza", "Veg", 120, 220),
    (33, "Egg Biryani", "Non-Veg", 120, 220),
    (34, "Masala Dosa", "Veg", 80, 150),
    (35, "Idli Sambar", "Veg", 70, 130),
    (36, "Vada Pav", "Veg", 40, 70),
    (37, "Pav Bhaji", "Veg", 90, 160),
    (38, "Bhel Puri", "Veg", 50, 90),
    (39, "Samosa Chaat", "Veg", 60, 110),
    (40, "Mutton Curry", "Non-Veg", 180, 320),
    (41, "Fish Biryani", "Non-Veg", 170, 310),
    (42, "Chicken 65", "Non-Veg", 150, 270),
    (43, "Paneer Roll", "Veg", 90, 160),
    (44, "Veg Burger", "Veg", 70, 130),
    (45, "Chicken Burger", "Non-Veg", 100, 180),
    (46, "Veg Momos", "Veg", 80, 140),
    (47, "Chicken Momos", "Non-Veg", 90, 160),
    (48, "Paneer Pakoda", "Veg", 80, 150),
    (49, "Aloo Tikki", "Veg", 60, 110),
    (50, "Gulab Jamun", "Veg", 50, 90),
]

# -------------------------
# Try to import Validation & Logger from domain; 
# -------------------------
try:
    from domain.validation import Validation
except Exception:
    
    class Validation:
        @staticmethod
        def is_valid_id(val) -> bool:
            try:
                return int(val) > 0
            except Exception:
                return False

        @staticmethod
        def is_valid_item_name(name: str) -> bool:
            return bool(name and name.strip())

        @staticmethod
        def is_valid_type(tp: str) -> bool:
            return tp.lower() in {"veg", "non-veg", "nonveg", "nonveg", "non veg", "veg"}

        @staticmethod
        def is_valid_price(val) -> bool:
            try:
                return float(val) >= 0
            except Exception:
                return False

        @staticmethod
        def is_valid_quantity(q) -> bool:
            try:
                q = int(q)
                return 1 <= q <= 5
            except Exception:
                return False

        @staticmethod
        def non_empty(value: str) -> bool:
            return bool(value and value.strip())

try:
    from domain.logs import Logger
except Exception:
    # fallback minimal logger
    import datetime

    class Logger:
        def __init__(self):
            os.makedirs(DB_DIR, exist_ok=True)
            self._path = os.path.join(DB_DIR, "logs.txt")

        def _write(self, level: str, msg: str):
            line = f"[{datetime.datetime.now().isoformat(sep=' ', timespec='seconds')}] {level}: {msg}\n"
            try:
                with open(self._path, "a", encoding="utf-8") as f:
                    f.write(line)
            except Exception:
                print(line, end="")

        def info(self, msg: str):
            self._write("INFO", msg)

        def warning(self, msg: str):
            self._write("WARNING", msg)

        def error(self, msg: str):
            self._write("ERROR", msg)


# ------------------------
class Colors:
    RESET = "\033[0m"
    BOLD = "\033[1m"
    UNDER = "\033[4m"
    GREEN = "\033[32m"
    RED = "\033[31m"
    YELLOW = "\033[33m"
    CYAN = "\033[36m"
    MAGENTA = "\033[35m"
    BLUE = "\033[34m"
    BG_GRAY = "\033[47m"


# -------------------------
# MenuOrder class
# -------------------------
class MenuOrder:
    def __init__(self, menu_path: str = MENU_FILE):
        self.menu_path = menu_path
        os.makedirs(os.path.dirname(self.menu_path), exist_ok=True)
        self.validation = Validation()
        self.logger = Logger()

        self.menu = self._load_or_seed_menu()

    # -------------------------

    def _load_or_seed_menu(self) -> List[Dict]:

        if os.path.exists(self.menu_path):
            try:
                with open(self.menu_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                if isinstance(data, list):
                    return data
                else:
                    self.logger.warning("menu.json had invalid format; reseeding.")
            except Exception as e:
                self.logger.error(f"Failed to load menu.json: {e}")

        seeded = []
        for tup in INITIAL_ITEMS:
            item = {
                "id": int(tup[0]),
                "name": tup[1],
                "type": tup[2],  # "Veg" or "Non-Veg"
                "half": float(tup[3]),
                "full": float(tup[4]),
            }
            seeded.append(item)
        self._save_menu(seeded)
        self.logger.info("Seeded menu.json with initial items.")
        return seeded

    def _save_menu(self, menu_list: List[Dict]) -> bool:
        try:
            with open(self.menu_path, "w", encoding="utf-8") as f:
                json.dump(menu_list, f, indent=2)
            return True
        except Exception as e:
            self.logger.error(f"Failed to save menu.json: {e}")
            return False

    # -------------------------
    def _find_item_by_id(self, item_id: int) -> Optional[Dict]:
        for it in self.menu:
            if int(it.get("id")) == int(item_id):
                return it
        return None

    def _next_id(self) -> int:
        if not self.menu:
            return 1
        return max(int(i["id"]) for i in self.menu) + 1

    # -------------------------
    
    def display_menu(self):
        # header
        print(Colors.BOLD + Colors.CYAN + "\nCHATORA_RESTAURANT MENU" + Colors.RESET)
        header = f"{'ID':<4} {'Item':<30} {'Type':<10} {'Half':>6} {'Full':>6}"
        print(Colors.UNDER + header + Colors.RESET)
        # rows
        for it in sorted(self.menu, key=lambda x: int(x["id"])):
            tid = str(it["id"]).ljust(4)
            name = (it["name"][:28] + "..") if len(it["name"]) > 30 else it["name"].ljust(30)
            typ = it["type"]
            
            color = Colors.GREEN if typ.lower().startswith("veg") else Colors.RED
            half = f"{it['half']:.0f}".rjust(6)
            full = f"{it['full']:.0f}".rjust(6)
            print(f"{tid} {name} {color}{typ:<10}{Colors.RESET} {half} {full}")
        print()

    # -------------------------
    # Ordering & Billing
    # -------------------------
    def take_order(self):
        try:
            self.display_menu()
            print("Place order — choose items by ID. Enter blank line to finish.")
            order_items: List[Tuple[Dict, str, int, float]] = []
            # Each order entry: (item_dict, plate_type('half'/'full'), quantity, line_total)
            while True:
                sid = input("Item ID (blank to finish): ").strip()
                if sid == "":
                    break
                if not self.validation.is_valid_id(sid):
                    print("Invalid ID format. Try again.")
                    continue
                item = self._find_item_by_id(int(sid))
                if not item:
                    print("No item with that ID. Try again.")
                    continue
                plate_type = input("Plate type (half/full): ").strip().lower()
                if plate_type not in {"half", "full"}:
                    print("Plate type must be 'half' or 'full'.")
                    continue
                qty = input("Quantity (1-5): ").strip()
                if not self.validation.is_valid_quantity(qty):
                    print("Quantity must be an integer between 1 and 5.")
                    continue
                qty_i = int(qty)
                price_per = item["half"] if plate_type == "half" else item["full"]
                line_total = price_per * qty_i
                order_items.append((item, plate_type, qty_i, line_total))
                print(f"Added: {item['name']} x{qty_i} ({plate_type}) -> {line_total:.2f}")

            if not order_items:
                print("No items ordered.")
                return

            # compute totals
            subtotal = sum(line[3] for line in order_items)
            # simple tax/service example: 5% tax + 2% service
            tax = subtotal * 0.05
            service = subtotal * 0.02
            total = subtotal + tax + service

            # payment
            print("\nPayment methods: 1. Cash  2. Google Pay  3. Netbanking")
            pay_choice = input("Choose payment method (1/2/3): ").strip()
            pay_map = {"1": "Cash", "2": "Google Pay", "3": "Netbanking"}
            payment_method = pay_map.get(pay_choice, None)
            if payment_method is None:
                print("Invalid payment method. Defaulting to Cash.")
                payment_method = "Cash"

            # timestamp
            order_time = datetime.now().isoformat(sep=" ", timespec="seconds")

            # generate bill
            print(Colors.BOLD + Colors.MAGENTA + "\n------- BILL -------" + Colors.RESET)
            print(f"CHATORA_RESTAURANT\tTime: {order_time}")
            print("-" * 40)
            for item, plate, qty, line_total in order_items:
                name = item["name"]
                typ = item["type"]
                print(f"{name} ({plate}) x{qty} -> {line_total:.2f} [{typ}]")
            print("-" * 40)
            print(f"Subtotal: {subtotal:.2f}")
            print(f"Tax (5%): {tax:.2f}")
            print(f"Service (2%): {service:.2f}")
            print(Colors.BOLD + f"Total: {total:.2f}" + Colors.RESET)
            print(f"Payment Method: {payment_method}")
            print("--------------------\n")

            # log the order
            try:
                order_log = {
                    "timestamp": order_time,
                    "items": [
                        {"id": int(i[0]["id"]), "name": i[0]["name"], "plate": i[1], "qty": i[2], "line_total": i[3]}
                        for i in order_items
                    ],
                    "subtotal": subtotal,
                    "tax": tax,
                    "service": service,
                    "total": total,
                    "payment_method": payment_method,
                }
                
                orders_log_path = os.path.join(DB_DIR, "orders.json")
                existing = []
                if os.path.exists(orders_log_path):
                    try:
                        with open(orders_log_path, "r", encoding="utf-8") as f:
                            existing = json.load(f) or []
                    except Exception:
                        existing = []
                existing.append(order_log)
                with open(orders_log_path, "w", encoding="utf-8") as f:
                    json.dump(existing, f, indent=2)
                self.logger.info(f"New order placed at {order_time} - total {total:.2f}")
            except Exception as e:
                self.logger.error(f"Failed to save order log: {e}")

        except Exception as e:
            print("An error occurred while taking order.")
            self.logger.error(f"Exception in take_order: {e}")

    # -------------------------
    # Admin operations: add/update/delete
    # -------------------------
    def _admin_authenticate(self) -> bool:
        try:
            print("Admin authentication required.")
            admin_id = input("Admin ID: ").strip()
            admin_email = input("Admin Email: ").strip()
            admin_pw = getpass.getpass("Admin Password: ").strip()
            if not (self.validation.is_valid_id(admin_id) and self.validation.non_empty(admin_email)):
                print("Invalid admin credential format.")
                return False
            if int(admin_id) == ADMIN["id"] and admin_email.lower() == ADMIN["email"].lower() and admin_pw == ADMIN["password"]:
                self.logger.info("Admin authenticated for menu changes.")
                return True
            else:
                print("Admin authentication failed.")
                self.logger.warning("Admin authentication failed for menu change attempt.")
                return False
        except Exception as e:
            self.logger.error(f"Exception in admin auth: {e}")
            return False

    def add_item(self):
        if not self._admin_authenticate():
            return
        try:
            nid = self._next_id()
            print(f"Adding new item with ID {nid}")
            name = input("Item name: ").strip()
            if not self.validation.is_valid_item_name(name):
                print("Invalid name.")
                return
            typ = input("Type (Veg/Non-Veg): ").strip()
            if not self.validation.is_valid_type(typ):
                print("Type must be 'Veg' or 'Non-Veg'.")
                return
            half = input("Half plate price: ").strip()
            if not self.validation.is_valid_price(half):
                print("Invalid price for half.")
                return
            full = input("Full plate price: ").strip()
            if not self.validation.is_valid_price(full):
                print("Invalid price for full.")
                return
            new_item = {"id": nid, "name": name, "type": typ.title(), "half": float(half), "full": float(full)}
            self.menu.append(new_item)
            if self._save_menu(self.menu):
                print("Item added successfully.")
                self.logger.info(f"Admin added menu item {nid} - {name}")
            else:
                print("Failed to save new item.")
        except Exception as e:
            print("An error occurred while adding item.")
            self.logger.error(f"Exception in add_item: {e}")

    def update_item(self):
        if not self._admin_authenticate():
            return
        try:
            sid = input("Enter Item ID to update: ").strip()
            if not self.validation.is_valid_id(sid):
                print("Invalid ID.")
                return
            item = self._find_item_by_id(int(sid))
            if not item:
                print("Item not found.")
                return
            print(f"Updating item {item['id']} - {item['name']}")
            name = input(f"Name [{item['name']}]: ").strip() or item['name']
            typ = input(f"Type [{item['type']}]: ").strip() or item['type']
            if not self.validation.is_valid_type(typ):
                print("Invalid type.")
                return
            half = input(f"Half [{item['half']}]: ").strip() or str(item['half'])
            if not self.validation.is_valid_price(half):
                print("Invalid half price.")
                return
            full = input(f"Full [{item['full']}]: ").strip() or str(item['full'])
            if not self.validation.is_valid_price(full):
                print("Invalid full price.")
                return
            # update fields
            item['name'] = name
            item['type'] = typ.title()
            item['half'] = float(half)
            item['full'] = float(full)
            if self._save_menu(self.menu):
                print("Item updated.")
                self.logger.info(f"Admin updated menu item {sid}")
            else:
                print("Failed to save updated item.")
        except Exception as e:
            print("An error occurred while updating item.")
            self.logger.error(f"Exception in update_item: {e}")

    def delete_item(self):
        if not self._admin_authenticate():
            return
        try:
            sid = input("Enter Item ID to delete: ").strip()
            if not self.validation.is_valid_id(sid):
                print("Invalid ID.")
                return
            item = self._find_item_by_id(int(sid))
            if not item:
                print("Item not found.")
                return
            confirm = input(f"Confirm delete {item['id']} - {item['name']}? (y/N): ").strip().lower()
            if confirm != "y":
                print("Deletion cancelled.")
                return
            self.menu = [i for i in self.menu if int(i['id']) != int(sid)]
            if self._save_menu(self.menu):
                print("Item deleted.")
                self.logger.info(f"Admin deleted menu item {sid}")
            else:
                print("Failed to save after deletion.")
        except Exception as e:
            print("An error occurred while deleting item.")
            self.logger.error(f"Exception in delete_item: {e}")

    # -------------------------
    
    def main(self):
        try:
            while True:
                print(Colors.BOLD + Colors.BLUE + "\nMENU/ORDER MODULE" + Colors.RESET)
                print("1. View Menu")
                print("2. Take Order (Staff/Admin)")
                print("3. Admin - Add Item")
                print("4. Admin - Update Item")
                print("5. Admin - Delete Item")
                print("6. Back/Exit")
                choice = input("Choose: ").strip()
                if choice == "1":
                    self.display_menu()
                elif choice == "2":
                    self.take_order()
                elif choice == "3":
                    self.add_item()
                elif choice == "4":
                    self.update_item()
                elif choice == "5":
                    self.delete_item()
                elif choice == "6":
                    break
                else:
                    print("Invalid choice.")
        except Exception as e:
            print("Menu module encountered an error.")
            self.logger.error(f"Exception in menu main loop: {e}")

if __name__ == "__main__":
    mo = MenuOrder()
    try:
        mo.main()
    except KeyboardInterrupt:
        print("\nExiting menu module.")
    except Exception as e:
        mo.logger.error(f"Fatal error in domain.menu_order __main__: {e}")


from __future__ import annotations
import os
import json
import getpass
from datetime import datetime, date, time, timedelta
from typing import List, Dict, Optional, Set

# Constants
NUM_TABLES = 20
SEATS_PER_TABLE = 6
RESTAURANT_CAPACITY = 500

# Restaurant open/close
RESTAURANT_OPEN = time(hour=10, minute=0)    # 10:00
RESTAURANT_CLOSE = time(hour=22, minute=0)   # 22:00

# Booking START window (user request): bookings may start only between 10:00 and 18:00
BOOKING_START_ALLOWED = time(hour=10, minute=0)  # 10:00
BOOKING_START_LAST = time(hour=18, minute=0)     # 18:00

MIN_HOURS = 1
MAX_HOURS = 4
MAX_ADVANCE_DAYS = 90  # ~3 months

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
DB_DIR = os.path.join(BASE_DIR, "database")
BOOKING_FILE = os.path.join(DB_DIR, "bookings.json")

# Admin 
ADMIN = {"id": 100, "name": "suman rathore", "email": "suman@gmail.com", "password": "suman123"}

# Try to import Validation and Logger; 
try:
    from domain.validation import Validation
except Exception:
    class Validation:
        @staticmethod
        def non_empty(x): return bool(x and str(x).strip())
        @staticmethod
        def parse_date(s):
            try: return datetime.strptime(s.strip(), "%Y-%m-%d").date()
            except Exception: return None
        @staticmethod
        def parse_time(s):
            try: return datetime.strptime(s.strip(), "%H:%M").time()
            except Exception: return None
        @staticmethod
        def is_valid_hours(x):
            try:
                v = int(x); return 1 <= v <= MAX_HOURS
            except Exception: return False
        @staticmethod
        def is_today_or_future_within_limit(d: date) -> bool:
            try:
                today = date.today()
                return (d >= today) and (d <= today + timedelta(days=MAX_ADVANCE_DAYS))
            except Exception:
                return False
        @staticmethod
        def is_valid_person_count(x):
            try:
                v = int(x); return 1 <= v <= RESTAURANT_CAPACITY
            except Exception:
                return False
        @staticmethod
        def is_valid_contact(c):
            try:
                s = str(c).strip(); return s.isdigit() and len(s) == 10
            except Exception:
                return False
        @staticmethod
        def is_valid_id(x):
            try: return int(x) > 0
            except Exception: return False
        @staticmethod
        def within_opening_hours(start_t: time, hours: int) -> bool:
            
            try:
                dt_start = datetime.combine(date.today(), start_t)
                dt_end = dt_start + timedelta(hours=int(hours))
                return (start_t >= RESTAURANT_OPEN) and (dt_end.time() <= RESTAURANT_CLOSE)
            except Exception:
                return False

try:
    from domain.logs import get_logger
    logger = get_logger()
except Exception:
    import datetime
    class SimpleLogger:
        def __init__(self):
            os.makedirs(DB_DIR, exist_ok=True)
            self.path = os.path.join(DB_DIR, "logs.txt")
        def _write(self, level, msg):
            try:
                ts = datetime.datetime.now().isoformat(sep=" ", timespec="seconds")
                with open(self.path, "a", encoding="utf-8") as f:
                    f.write(f"[{ts}] {level}: {msg}\n")
            except Exception:
                try: print(f"{level}: {msg}")
                except Exception: pass
        def info(self, m): self._write("INFO", m)
        def warning(self, m): self._write("WARNING", m)
        def error(self, m): self._write("ERROR", m)
    logger = SimpleLogger()

try:
    from domain.menu_order import MenuOrder
except Exception:
    MenuOrder = None


def _intervals_overlap(a_start: datetime, a_end: datetime, b_start: datetime, b_end: datetime) -> bool:
    return (a_start < b_end) and (a_end > b_start)


class TableBooking:
    def __init__(self, booking_file: str = BOOKING_FILE):
        os.makedirs(os.path.dirname(booking_file), exist_ok=True)
        self.booking_file = booking_file
        self.validation = Validation()
        self.logger = logger
        self._ensure_booking_file()

    
    def _ensure_booking_file(self):
        if not os.path.exists(self.booking_file):
            try:
                with open(self.booking_file, "w", encoding="utf-8") as f:
                    json.dump([], f)
                self.logger.info("Created bookings.json")
            except Exception as e:
                self.logger.error(f"Failed creating bookings.json: {e}")

    def _load_bookings(self) -> List[Dict]:
        try:
            with open(self.booking_file, "r", encoding="utf-8") as f:
                data = json.load(f) or []
            return data if isinstance(data, list) else []
        except Exception:
            return []

    def _save_bookings(self, bookings: List[Dict]) -> bool:
        try:
            with open(self.booking_file, "w", encoding="utf-8") as f:
                json.dump(bookings, f, indent=2)
            return True
        except Exception as e:
            self.logger.error(f"Failed to save bookings.json: {e}")
            return False

    def _next_booking_id(self, bookings: List[Dict]) -> int:
        if not bookings:
            return 1
        return max(int(b.get("booking_id", 0)) for b in bookings) + 1

    # admin auth
    def _admin_authenticate(self) -> bool:
        try:
            print("Admin authentication required.")
            aid = input("Admin ID: ").strip()
            aemail = input("Admin Email: ").strip()
            apw = getpass.getpass("Admin Password: ").strip()
            if not (self.validation.is_valid_id(aid) and self.validation.non_empty(aemail)):
                print("Invalid admin credential format.")
                self.logger.warning("Admin provided invalid auth format.")
                return False
            if int(aid) == ADMIN["id"] and aemail.lower() == ADMIN["email"].lower() and apw == ADMIN["password"]:
                self.logger.info("Admin authenticated for table booking admin action.")
                return True
            print("Admin authentication failed.")
            self.logger.warning("Admin authentication failed.")
            return False
        except Exception as e:
            self.logger.error(f"Exception during admin auth: {e}")
            return False

    
    def _tables_needed(self, persons: int) -> int:
        return (persons + SEATS_PER_TABLE - 1) // SEATS_PER_TABLE

    def _occupied_tables_for_slot(self, booking_date: date, start_time: time, hours: int, exclude_booking_id: Optional[int] = None) -> Set[int]:
        occupied: Set[int] = set()
        bookings = self._load_bookings()
        req_start = datetime.combine(booking_date, start_time)
        req_end = req_start + timedelta(hours=hours)
        for b in bookings:
            try:
                if exclude_booking_id is not None and int(b.get("booking_id", -1)) == int(exclude_booking_id):
                    continue
                b_date = datetime.strptime(str(b.get("date", "")), "%Y-%m-%d").date()
                b_start_time = datetime.strptime(str(b.get("start_time", "")), "%H:%M").time()
                b_start = datetime.combine(b_date, b_start_time)
                b_end = b_start + timedelta(hours=int(b.get("hours", 1)))
                if _intervals_overlap(req_start, req_end, b_start, b_end):
                    for t in b.get("tables", []):
                        occupied.add(int(t))
            except Exception:
                continue
        return occupied

    def available_tables(self, booking_date: date, start_time: time, hours: int, exclude_booking_id: Optional[int] = None) -> List[int]:
        try:
            occupied = self._occupied_tables_for_slot(booking_date, start_time, hours, exclude_booking_id=exclude_booking_id)
            all_tables = set(range(1, NUM_TABLES + 1))
            free = sorted(list(all_tables - occupied))
            return free
        except Exception as e:
            self.logger.error(f"Error computing available tables: {e}")
            return []

    def show_tables_status(self, booking_date: date, start_time: time, hours: int, exclude_booking_id: Optional[int] = None):
        try:
            free = set(self.available_tables(booking_date, start_time, hours, exclude_booking_id=exclude_booking_id))
            print(f"\nTable statuses for {booking_date} at {start_time.strftime('%H:%M')} for {hours} hour(s):")
            for tid in range(1, NUM_TABLES + 1):
                status = "Available" if tid in free else "Booked"
                print(f"Table {tid:02d}: {status}")
            print()
        except Exception as e:
            self.logger.error(f"Error showing table statuses: {e}")

    #  booking flow
    def book_table(self):
        try:
            d_in = input("Booking date (YYYY-MM-DD): ").strip()
            booking_date = self.validation.parse_date(d_in) if hasattr(self.validation, "parse_date") else None
            if not booking_date:
                print("Invalid date format. Use YYYY-MM-DD.")
                return
            if not self.validation.is_today_or_future_within_limit(booking_date):
                print(f"Booking must be today or within next {MAX_ADVANCE_DAYS} days (no past dates).")
                return

            t_in = input("Start time (HH:MM, 24-hour) - bookings may START only between 10:00 and 18:00: ").strip()
            start_t = self.validation.parse_time(t_in) if hasattr(self.validation, "parse_time") else None
            if not start_t:
                print("Invalid time format. Use HH:MM.")
                return

            hours_in = input(f"How many hours to book ({MIN_HOURS}-{MAX_HOURS}): ").strip()
            if not self.validation.is_valid_hours(hours_in):
                print("Invalid hours input.")
                return
            hours = int(hours_in)

            # Enforce booking start window (10:00..18:00)
            if start_t < BOOKING_START_ALLOWED or start_t > BOOKING_START_LAST:
                print(f"Bookings may START only between {BOOKING_START_ALLOWED.strftime('%H:%M')} and {BOOKING_START_LAST.strftime('%H:%M')}.")
                return

            # Also ensure booking does not extend past restaurant close (22:00)
            dt_start = datetime.combine(booking_date, start_t)
            dt_end = dt_start + timedelta(hours=hours)
            if dt_end.time() > RESTAURANT_CLOSE:
                print(f"Booking would end at {dt_end.time().strftime('%H:%M')}, which is after restaurant closing at {RESTAURANT_CLOSE.strftime('%H:%M')}. Reduce hours or choose earlier start.")
                return

            persons_in = input("Number of persons: ").strip()
            if not self.validation.is_valid_person_count(persons_in):
                print("Invalid number of persons.")
                return
            persons = int(persons_in)
            needed_tables = self._tables_needed(persons)
            if needed_tables * SEATS_PER_TABLE > RESTAURANT_CAPACITY:
                print("Requested seating exceeds restaurant capacity.")
                return

            # Show statuses
            self.show_tables_status(booking_date, start_t, hours)

            free_tables = self.available_tables(booking_date, start_t, hours)
            if len(free_tables) < needed_tables:
                print(f"Not enough tables available. Needed {needed_tables}, Free {len(free_tables)}. Free tables: {free_tables}")
                return

            allocated = free_tables[:needed_tables]
            print(f"Allocating tables: {allocated}")

            customer_name = input("Customer name: ").strip()
            contact = input("Contact number (10 digits): ").strip()
            if not self.validation.is_valid_contact(contact):
                print("Invalid contact number.")
                return
            notes = input("Special notes (optional): ").strip()

            bookings = self._load_bookings()
            booking_id = self._next_booking_id(bookings)
            record = {
                "booking_id": booking_id,
                "date": booking_date.strftime("%Y-%m-%d"),
                "start_time": start_t.strftime("%H:%M"),
                "hours": hours,
                "tables": allocated,
                "persons": persons,
                "customer_name": customer_name,
                "contact": contact,
                "notes": notes,
                "created_at": datetime.now().isoformat(sep=" ", timespec="seconds"),
                "order": None,
                "payment": None
            }
            bookings.append(record)
            if not self._save_bookings(bookings):
                print("Failed to persist booking.")
                return

            print(f"Booking confirmed. ID: {booking_id}. Date: {record['date']} Start: {record['start_time']} Tables: {allocated}")
            self.logger.info(f"Booking {booking_id} created for {customer_name} on {record['date']} {record['start_time']} tables {allocated}")

            # Show updated statuses
            print("\nUpdated table statuses after booking:")
            self.show_tables_status(booking_date, start_t, hours)

            # Offer to take order immediately
            take_now = input("Take order now for this booking? (y/N): ").strip().lower()
            if take_now == "y":
                self._take_order_for_booking(booking_id)

        except Exception as e:
            print("An error occurred during booking.")
            self.logger.error(f"book_table exception: {e}")

    def _take_order_for_booking(self, booking_id: int):
        try:
            if MenuOrder is None:
                subtotal_raw = input("Enter order subtotal amount: ").strip()
                try:
                    subtotal = float(subtotal_raw)
                except Exception:
                    print("Invalid amount.")
                    return
                gst = round(subtotal * 0.18, 2)
                final = round(subtotal + gst, 2)
                print(f"GST (18%): {gst:.2f} | Final total: {final:.2f}")
                payment = self._collect_payment(final)
                bookings = self._load_bookings()
                for b in bookings:
                    if int(b.get("booking_id", -1)) == booking_id:
                        b["order"] = {"subtotal": subtotal, "gst": gst, "final_total": final, "note": "manual entry"}
                        b["payment"] = payment
                        break
                self._save_bookings(bookings)
                self.logger.info(f"Manual order recorded for booking {booking_id}: total {final:.2f}")
                return

            mo = MenuOrder()
            if hasattr(mo, "take_order"):
                mo.take_order()
            elif hasattr(mo, "main"):
                mo.main()
            else:
                print("Menu module present but has no order entrypoint.")
                return

            orders_path = os.path.join(DB_DIR, "orders.json")
            if not os.path.exists(orders_path):
                print("Order log not found.")
                return
            with open(orders_path, "r", encoding="utf-8") as f:
                orders_list = json.load(f) or []
            if not orders_list:
                print("No recorded orders to attach.")
                return
            last_order = orders_list[-1]
            base_total = float(last_order.get("total", 0.0))
            gst = round(base_total * 0.18, 2)
            final_total = round(base_total + gst, 2)
            print(f"Order base {base_total:.2f}, GST {gst:.2f}, Final {final_total:.2f}")
            payment = self._collect_payment(final_total)
            bookings = self._load_bookings()
            for b in bookings:
                if int(b.get("booking_id", -1)) == booking_id:
                    b["order"] = {"menu_order_reference": last_order, "gst": gst, "final_total": final_total}
                    b["payment"] = payment
                    break
            self._save_bookings(bookings)
            self.logger.info(f"Order attached to booking {booking_id}: final {final_total:.2f}")
        except Exception as e:
            self.logger.error(f"_take_order_for_booking exception: {e}")

    def _collect_payment(self, amount: float) -> Dict:
        try:
            print("Payment methods: 1. Cash  2. Google Pay  3. Netbanking")
            ch = input("Choose (1/2/3): ").strip()
            method = {"1": "Cash", "2": "Google Pay", "3": "Netbanking"}.get(ch, "Cash")
            if method == "Cash":
                print(f"Collected cash: {amount:.2f}")
                return {"method": "Cash", "amount": round(amount, 2), "timestamp": datetime.now().isoformat(sep=" ", timespec="seconds")}
            txn = input(f"Enter transaction/reference ID for {method}: ").strip()
            return {"method": method, "amount": round(amount, 2), "txn_id": txn, "timestamp": datetime.now().isoformat(sep=" ", timespec="seconds")}
        except Exception as e:
            self.logger.error(f"_collect_payment exception: {e}")
            return {"method": "Unknown", "amount": round(amount, 2), "timestamp": datetime.now().isoformat(sep=" ", timespec="seconds")}

    # listing / admin operations
    def list_bookings(self, for_date: Optional[date] = None):
        try:
            bookings = self._load_bookings()
            if for_date:
                bookings = [b for b in bookings if b.get("date") == for_date.strftime("%Y-%m-%d")]
            if not bookings:
                print("No bookings found.")
                return
            print("\nBookings:")
            for b in sorted(bookings, key=lambda x: (x.get("date", ""), x.get("start_time", ""))):
                print(f"ID:{b.get('booking_id')} | Date:{b.get('date')} | Start:{b.get('start_time')} | Hours:{b.get('hours')} | Tables:{b.get('tables')} | Persons:{b.get('persons')} | Name:{b.get('customer_name')}")
            print()
        except Exception as e:
            self.logger.error(f"list_bookings exception: {e}")

    def update_booking(self):
        if not self._admin_authenticate():
            return
        try:
            bookings = self._load_bookings()
            bid = input("Booking ID to update: ").strip()
            if not bid.isdigit():
                print("Invalid booking ID.")
                return
            bid_i = int(bid)
            booking = next((b for b in bookings if int(b.get("booking_id", -1)) == bid_i), None)
            if not booking:
                print("Booking not found.")
                return

            # -------------------------------------------------------------------
            new_date_in = input(f"Date [{booking['date']}]: ").strip() or booking['date']
            new_date = self.validation.parse_date(new_date_in)
            if not new_date:
                print("Invalid date.")
                return
            if not self.validation.is_today_or_future_within_limit(new_date):
                print("Date must be today or within next 90 days.")
                return

            new_time_in = input(f"Start time [{booking['start_time']}]: ").strip() or booking['start_time']
            new_time = self.validation.parse_time(new_time_in)
            if not new_time:
                print("Invalid time.")
                return

            new_hours_in = input(f"Hours [{booking['hours']}]: ").strip() or str(booking['hours'])
            if not self.validation.is_valid_hours(new_hours_in):
                print("Invalid hours.")
                return
            new_hours = int(new_hours_in)

            #  booking start window and closing check
            if new_time < BOOKING_START_ALLOWED or new_time > BOOKING_START_LAST:
                print(f"Bookings may START only between {BOOKING_START_ALLOWED.strftime('%H:%M')} and {BOOKING_START_LAST.strftime('%H:%M')}.")
                return
            dt_start = datetime.combine(new_date, new_time)
            dt_end = dt_start + timedelta(hours=new_hours)
            if dt_end.time() > RESTAURANT_CLOSE:
                print(f"Updated booking would end at {dt_end.time().strftime('%H:%M')}, after closing at {RESTAURANT_CLOSE.strftime('%H:%M')}.")
                return

            new_persons_in = input(f"Persons [{booking['persons']}]: ").strip() or str(booking['persons'])
            if not self.validation.is_valid_person_count(new_persons_in):
                print("Invalid persons.")
                return
            new_persons = int(new_persons_in)
            needed_tables = self._tables_needed(new_persons)

            # compute available excluding this booking
            free = self.available_tables(new_date, new_time, new_hours, exclude_booking_id=bid_i)
            if len(free) < needed_tables:
                print(f"Not enough tables available for new slot. Free: {free}")
                return

            allocated = free[:needed_tables]
            booking['date'] = new_date.strftime("%Y-%m-%d")
            booking['start_time'] = new_time.strftime("%H:%M")
            booking['hours'] = new_hours
            booking['persons'] = new_persons
            booking['tables'] = allocated
            booking['modified_at'] = datetime.now().isoformat(sep=" ", timespec="seconds")

            self._save_bookings(bookings)
            print(f"Booking {bid_i} updated. New tables: {allocated}")
            self.logger.info(f"Booking {bid_i} updated by admin. New tables: {allocated}")
        except Exception as e:
            print("Failed to update booking.")
            self.logger.error(f"update_booking exception: {e}")

    def delete_booking(self):
        if not self._admin_authenticate():
            return
        try:
            bookings = self._load_bookings()
            bid = input("Booking ID to delete: ").strip()
            if not bid.isdigit():
                print("Invalid booking ID.")
                return
            bid_i = int(bid)
            booking = next((b for b in bookings if int(b.get("booking_id", -1)) == bid_i), None)
            if not booking:
                print("Booking not found.")
                return
            confirm = input(f"Confirm delete booking {bid_i} on {booking['date']} {booking['start_time']}? (y/N): ").strip().lower()
            if confirm != 'y':
                print("Deletion cancelled.")
                return
            bookings = [b for b in bookings if int(b.get("booking_id", -1)) != bid_i]
            self._save_bookings(bookings)
            print("Booking deleted.")
            self.logger.info(f"Booking {bid_i} deleted by admin.")
        except Exception as e:
            print("Failed to delete booking.")
            self.logger.error(f"delete_booking exception: {e}")

    def show_available(self):
        try:
            d_in = input("Date to check (YYYY-MM-DD): ").strip()
            booking_date = self.validation.parse_date(d_in)
            if not booking_date:
                print("Invalid date.")
                return
            t_in = input("Start time (HH:MM): ").strip()
            start_t = self.validation.parse_time(t_in)
            if not start_t:
                print("Invalid time.")
                return
            hours_in = input(f"Hours ({MIN_HOURS}-{MAX_HOURS}): ").strip()
            if not self.validation.is_valid_hours(hours_in):
                print("Invalid hours.")
                return
            hours = int(hours_in)

            #  booking start allowed window and closing check
            if start_t < BOOKING_START_ALLOWED or start_t > BOOKING_START_LAST:
                print(f"Bookings may START only between {BOOKING_START_ALLOWED.strftime('%H:%M')} and {BOOKING_START_LAST.strftime('%H:%M')}.")
                return
            dt_start = datetime.combine(booking_date, start_t)
            dt_end = dt_start + timedelta(hours=hours)
            if dt_end.time() > RESTAURANT_CLOSE:
                print(f"Requested slot would end at {dt_end.time().strftime('%H:%M')}, after closing at {RESTAURANT_CLOSE.strftime('%H:%M')}.")
                return

            self.show_tables_status(booking_date, start_t, hours)
        except Exception as e:
            print("Failed to show availability.")
            self.logger.error(f"show_available exception: {e}")

    def main(self):
        try:
            while True:
                print("\nTABLE BOOKING MODULE")
                print("1. Book Table")
                print("2. Show Available Tables")
                print("3. List Bookings (all)")
                print("4. List Bookings (by date)")
                print("5. Admin - Update Booking")
                print("6. Admin - Delete Booking")
                print("7. Back/Exit")
                ch = input("Choose: ").strip()
                if ch == "1":
                    self.book_table()
                elif ch == "2":
                    self.show_available()
                elif ch == "3":
                    self.list_bookings()
                elif ch == "4":
                    d_in = input("Date (YYYY-MM-DD): ").strip()
                    d = self.validation.parse_date(d_in)
                    if not d:
                        print("Invalid date.")
                    else:
                        self.list_bookings(for_date=d)
                elif ch == "5":
                    self.update_booking()
                elif ch == "6":
                    self.delete_booking()
                elif ch == "7":
                    break
                else:
                    print("Invalid choice.")
        except Exception as e:
            self.logger.error(f"table_booking main loop exception: {e}")
            print("Table booking module encountered an error.")


if __name__ == "__main__":
    tb = TableBooking()
    try:
        tb.main()
    except KeyboardInterrupt:
        print("\nExiting table booking module.")
    except Exception as e:
        tb.logger.error(f"Fatal error in table_booking: {e}")



from datetime import datetime, date, time, timedelta
import re
from typing import Optional, Union

#  constants
NUM_TABLES = 20
SEATS_PER_TABLE = 6
RESTAURANT_CAPACITY = 500
OPENING_TIME = time(hour=10, minute=0)   # 10:00
CLOSING_TIME = time(hour=22, minute=0)   # 22:00
MIN_HOURS = 1
MAX_HOURS = 4
MAX_ADVANCE_DAYS = 90   # roughly 3 months
MIN_PASSWORD_LENGTH = 4
MIN_NAME_LENGTH = 1

EMAIL_REGEX = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


class Validation:

    @staticmethod
    def non_empty(value: Optional[str]) -> bool:
        """True if value is a non-empty string after stripping."""
        try:
            return bool(value and isinstance(value, str) and value.strip() != "")
        except Exception:
            return False

    # -----------------------
    # ID / numeric checks
    # -----------------------
    @staticmethod
    def is_valid_id(value: Union[str, int]) -> bool:
        """Positive integer ID check (accepts '123' or 123)."""
        try:
            if isinstance(value, int):
                return value > 0
            s = str(value).strip()
            if not s or not s.isdigit():
                return False
            return int(s) > 0
        except Exception:
            return False

    @staticmethod
    def is_positive_int(value: Union[str, int]) -> bool:
        """Non-negative integer (0 allowed)."""
        try:
            if isinstance(value, int):
                return value >= 0
            s = str(value).strip()
            if not s or not s.isdigit():
                return False
            return int(s) >= 0
        except Exception:
            return False

    # -----------------------
    # Contact / email / password
    # -----------------------
    @classmethod
    def is_valid_email(cls, email: Optional[str]) -> bool:
        """Basic email validation using regex."""
        try:
            if not cls.non_empty(email):
                return False
            return bool(EMAIL_REGEX.match(email.strip()))
        except Exception:
            return False

    @staticmethod
    def is_valid_password(pw: Optional[str]) -> bool:
        """Minimal password policy: at least MIN_PASSWORD_LENGTH printable chars."""
        try:
            if not pw or not isinstance(pw, str):
                return False
            return len(pw.strip()) >= MIN_PASSWORD_LENGTH
        except Exception:
            return False

    @staticmethod
    def is_valid_contact(contact: Optional[str]) -> bool:
        """
        Indian-style contact validation:
         - exactly 10 digits
         - digits only
        """
        try:
            if not contact:
                return False
            s = str(contact).strip()
            return bool(s.isdigit() and len(s) == 10)
        except Exception:
            return False

    # -----------------------
    # Menu / item validations
    # -----------------------
    @staticmethod
    def is_valid_item_name(name: Optional[str]) -> bool:
        """Non-empty name; reasonable max length enforced."""
        try:
            if not name or not isinstance(name, str):
                return False
            n = name.strip()
            return MIN_NAME_LENGTH <= len(n) <= 200
        except Exception:
            return False

    @staticmethod
    def is_valid_type(tp: Optional[str]) -> bool:
        """Accepts common spellings for Veg/Non-Veg (case-insensitive)."""
        try:
            if not tp or not isinstance(tp, str):
                return False
            t = tp.strip().lower()
            allowed = {
                "veg",
                "vegetarian",
                "non-veg",
                "non veg",
                "nonveg",
                "nonvegetarian",
                "non vegetarian",
                "nonvegetarian",
            }
            return t in allowed
        except Exception:
            return False

    @staticmethod
    def is_valid_price(val: Union[str, int, float]) -> bool:
        """Non-negative numeric price. Accepts numbers or numeric strings."""
        try:
            if isinstance(val, (int, float)):
                return float(val) >= 0.0
            s = str(val).strip()
            if not s:
                return False
            # allow a single decimal point
            if s.count(".") > 1:
                return False
            return bool(re.fullmatch(r"\d+(\.\d+)?", s)) and float(s) >= 0.0
        except Exception:
            return False

    @staticmethod
    def is_valid_quantity(q: Union[str, int]) -> bool:
        """Quantity limited to integer 1..5 inclusive."""
        try:
            if isinstance(q, int):
                return 1 <= q <= 5
            s = str(q).strip()
            if not s.isdigit():
                return False
            v = int(s)
            return 1 <= v <= 5
        except Exception:
            return False

    # -----------------------
    # Date/time checks
    # -----------------------
    @staticmethod
    def parse_date(s: str) -> Optional[date]:
        """
        Parse date in ISO format YYYY-MM-DD. Returns date or None on failure.
        """
        try:
            if not s or not isinstance(s, str):
                return None
            return datetime.strptime(s.strip(), "%Y-%m-%d").date()
        except Exception:
            return None

    @staticmethod
    def parse_time(s: str) -> Optional[time]:
        """
        Parse time in HH:MM (24-hour). Returns time or None on failure.
        """
        try:
            if not s or not isinstance(s, str):
                return None
            return datetime.strptime(s.strip(), "%H:%M").time()
        except Exception:
            return None

    @staticmethod
    def parse_datetime(s: str) -> Optional[datetime]:
       
        if not s or not isinstance(s, str):
            return None
        s2 = s.strip()
        fmts = ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M", "%Y-%m-%dT%H:%M:%S", "%Y-%m-%d")
        for fmt in fmts:
            try:
                return datetime.strptime(s2, fmt)
            except Exception:
                continue
        return None

    @staticmethod
    def within_opening_hours(start_t: time, hours: int) -> bool:
        
        try:
            if not isinstance(start_t, time):
                return False
            hours_i = int(hours)
            if hours_i < MIN_HOURS or hours_i > MAX_HOURS:
                return False
            dt_start = datetime.combine(date.today(), start_t)
            dt_end = dt_start + timedelta(hours=hours_i)
            start_ok = start_t >= OPENING_TIME
            end_ok = dt_end.time() <= CLOSING_TIME
            return start_ok and end_ok
        except Exception:
            return False

    @staticmethod
    def is_today_or_future_within_limit(d: date) -> bool:
        
        try:
            if not isinstance(d, date):
                return False
            today = date.today()
            if d < today:
                return False
            return d <= today + timedelta(days=MAX_ADVANCE_DAYS)
        except Exception:
            return False

    # -----------------------
    # Table / booking checks
    # -----------------------
    @staticmethod
    def is_valid_table_id(x: Union[str, int]) -> bool:
        """True if x corresponds to a table id between 1 and NUM_TABLES inclusive."""
        try:
            if isinstance(x, int):
                return 1 <= x <= NUM_TABLES
            s = str(x).strip()
            if not s.isdigit():
                return False
            v = int(s)
            return 1 <= v <= NUM_TABLES
        except Exception:
            return False

    @staticmethod
    def is_valid_person_count(x: Union[str, int]) -> bool:
        """Validate person count between 1 and RESTAURANT_CAPACITY."""
        try:
            if isinstance(x, int):
                return 1 <= x <= RESTAURANT_CAPACITY
            s = str(x).strip()
            if not s.isdigit():
                return False
            v = int(s)
            return 1 <= v <= RESTAURANT_CAPACITY
        except Exception:
            return False

    @staticmethod
    def is_valid_hours(x: Union[str, int]) -> bool:
        """Validate booking hours between MIN_HOURS and MAX_HOURS inclusive."""
        try:
            if isinstance(x, int):
                v = x
            else:
                s = str(x).strip()
                if not s.isdigit():
                    return False
                v = int(s)
            return MIN_HOURS <= v <= MAX_HOURS
        except Exception:
            return False

    # -----------------------
    # Reporting 
    # -----------------------
    @staticmethod
    def is_positive_number(x: Union[str, int, float]) -> bool:
        
        try:
            if isinstance(x, (int, float)):
                return float(x) >= 0.0
            s = str(x).strip()
            if not s:
                return False
            if s.count(".") > 1:
                return False
            if not re.fullmatch(r"\d+(\.\d+)?", s):
                return False
            return float(s) >= 0.0
        except Exception:
            return False
