students_records = {
	"Courses": {  "Math", "Physics", "Computer Science", "Biology", "Chemistry",
        "Statistics", "English", "Economics", "History", "Philosophy", "Sociology",
        "Art", "Music", "Engineering", "Law", "Medicine", "Business", "Political Science",
	"Geography", "Psychology"
}
}




def register_student() :
	global students_records
	user_name = input("Enter student username (press Ok to stop):  ").strip()
	if user_name.lower() == "ok" :
		return

	student_details = {}
	student_details["Name"] = input("Enter student name:  ").strip()
	student_details["Age"] = int(input("Enter student age:  "))


	if student_details["Age"] < 18 or student_details["Age"] > 50 :
		print("Age must be between 18 and 50")
		return


	student_course = set()
	print("Enter courses for student (press Ok to stop):  ")

	while True :
		course = input("courses:  ")
		if course.lower() == "ok" :
            		break

		if course in students_records["Courses"] :
			student_course.add(course)
		else :
			print("Course not available. Available courses: ", students_records["Courses"])


	student_details["Courses"] = student_course
	student_details["Address"] = {
		"City": input("Enter student city:  ").strip().lower(),
		"Zip_code": input("Enter zip code:  ").strip()
	}

	students_records[user_name] = student_details
	print(f"Student {user_name} added successfully!\n")




def display_student_info(user_name) :
	global students_records
	print("Student data", students_records[user_name])



def display_student_course(user_name) :
	global students_records
	print("Student courses", students_records[user_name]["Courses"])



def display_student_zip_code(user_name) :
	global students_records
	print("Student ZipCode", students_records[user_name]["Address"]["Zip_code"])



def display_student_city(user_name) :
	global students_records
	print("Student City", students_records[user_name]["Address"]["City"])



def add_to_student_course(user_name, course) :
	global students_records
	if course in students_records["Courses"] :
		students_records[user_name]["Courses"].add(course)
	else :
		print("Course not available. Available courses: ", students_records["Courses"])
	print("Updated student course", students_records[user_name]["Courses"])



def add_courses_to_general_courses(course) :
	global students_records
	if course not in students_records["Courses"] :
		students_records["Courses"].add(course)
	else :
		print("Course is already offered")
	print(students_records["Courses"])



def remove_courses_from_general_courses(course) :
	global students_records
	if course in students_records["Courses"] :
		students_records["Courses"].remove(course)
	else :
		print("Course is not offered before nah")
	print(students_records["Courses"])



def update_username(old_username, new_username) :
	global students_records
	if old_username in students_records :
		students_records[new_username] = students_records.pop(old_username)
	else :
		print(f"Username '{old_username}' not found")



def update_name(user_name, new_name) :
	global students_records
	if user_name in students_records :
		students_records[user_name]["Name"] = new_name
	else :
		print(f"username '{user_name}' not found")



def update_age(user_name, new_age) :
	global students_records
	if user_name in students_records :
		students_records[user_name]["Age"] = new_age
	else :
		print(f"username '{user_name}' not found")



def update_city(user_name, new_city) : 
	global students_records
	if user_name in students_records :
		students_records[user_name]["Address"]["City"] = new_city
	else :
		print(f"username '{user_name}' not found")



def update_zip(user_name, new_zip_code) :
	global students_records
	if user_name in students_records :
		students_records[user_name]["Address"]["Zip_code"] = new_zip_code
	else :
		print(f"username '{user_name}' not found")



def get_number_of_student_in_record() :
	global students_records
	return len([students for students in students_records if students != "Courses"])


print(" ")
print(" ")
print(" ")
def menu() :

	while True :
		print("WELCOME TO BRIGHT FUTURE UNIVERSITY")
		print("HERE WE...... WHAT DO WE DO AGAIN SELF")
		print("ANYWAY WHAT DO YOU WANNA DO??")
		print("\n==========Student Record Menu==========")
		print("1. Register new student")
		print("2. Display student info")
		print("3. Display student courses")
		print("4. Display student city")
		print("5. Display student zip code")
		print("6. Add course to student")
		print("7. Add new course to general list")
		print("8. Remove course from general list")
		print("9. Update username")
		print("10. Update student name")
		print("11. Update student age")
		print("12. Update student city")
		print("13. Update student zip code")
		print("14. Get total number of students")
		print("0. Exit")

		choice = input("Choose an option: ").strip()

		if choice == "0" :
			print("Thank you for using this app.... Goodbye!")
			break
		elif choice == "1" :
			register_student()
		elif choice == "2" :
			user_name = input("Enter username: ").strip()
			display_student_info(user_name)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "3" :
			user_name = input("Enter username: ").strip()
			display_student_course(user_name)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "4" :
			user_name = input("Enter username: ").strip()
			display_student_city(user_name)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "5" :
			user_name = input("Enter username: ").strip()
			display_student_zip_code(user_name)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "6" :
			user_name = input("Enter username: ").strip()
			course = input("Enter course to add: ").strip()
			add_to_student_course(user_name, course)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "7" :
			course = input("Enter new course to add: ").strip()
			add_courses_to_general_courses(course)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "8" :
			course = input("Enter course to remove: ").strip()
			remove_courses_from_general_courses(course)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "9" :
			old_name = input("Enter old username: ").strip()
			new_username = input("Enter new username: ").strip()
			update_username(old_name, new_username)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "10" :
			user_name = input("Enter username: ").strip()
			new_name = input("Enter new name: ").strip()
			update_name(user_name, new_name)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "11" :
			user_name = input("Enter username: ").strip()
			new_age = int(input("Enter new age: "))
			update_age(user_name, new_age)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "12" :
			user_name = input("Enter username: ").strip()
			new_city = input("Enter new city: ").strip()
			update_city(user_name, new_city)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "13" :
			user_name = input("Enter username: ").strip()
			new_zip_code = input("Enter new zip code: ").strip()
			update_zip(user_name, new_zip_code)
			print(" ")
			print(" ")
			print(" ")

		elif choice == "14" :
			print("Total students:", get_number_of_student_in_record())
			print(" ")
			print(" ")
			print(" ")

		else :
			print("You get eyes nah!!.")


menu()










