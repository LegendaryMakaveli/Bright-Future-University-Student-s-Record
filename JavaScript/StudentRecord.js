const prompt = require("prompt-sync")();

let studentsRecords = {
    "Courses": new Set([
        "Math", "Physics", "Computer Science", "Biology", "Chemistry",
        "Statistics", "English", "Economics", "History", "Philosophy", "Sociology",
        "Art", "Music", "Engineering", "Law", "Medicine", "Business", "Political Science",
	"Geography", "Psychology"
    ])
};


function registerStudent() {
    let userName = prompt("Enter student username (press Ok to stop):").trim();
    if (userName.toLowerCase() === "ok") return;

    let studentDetails = {};
    studentDetails["Name"] = prompt("Enter student name:").trim();
    studentDetails["Age"] = parseInt(prompt("Enter student age:"));

    if (studentDetails["Age"] < 18 || studentDetails["Age"] > 50) {
        console.log("Age must be between 18 and 50");
        return;
    }

    let studentCourse = new Set();
    console.log("Enter courses for student (type Ok to stop):");

    while (true) {
        let course = prompt("courses:");
        if (course.toLowerCase() === "ok") break;

        if (studentsRecords["Courses"].has(course)) {
            studentCourse.add(course);
        } else {
            console.log("Course not available. Available courses:", studentsRecords["Courses"]);
        }
    }

    studentDetails["Courses"] = studentCourse;
    studentDetails["Address"] = {
        "City": prompt("Enter student city:").trim().toLowerCase(),
        "ZipCode": prompt("Enter zip code:")
    };

    studentsRecords[userName] = studentDetails;
    console.log(`Student ${userName} added successfully!\n`);
}


function displayStudentInfo(userName) {
    console.log("Student data", studentsRecords[userName]);
}

function displayStudentCourse(userName) {
    console.log("Student courses", studentsRecords[userName]["Courses"]);
}

function displayStudentZipCode(userName) {
    console.log("Student ZipCode", studentsRecords[userName]["Address"]["ZipCode"]);
}

function displayStudentCity(userName) {
    console.log("Student City", studentsRecords[userName]["Address"]["City"]);
}


function addToStudentCourse(userName, course) {
    if (studentsRecords["Courses"].has(course)) {
        studentsRecords[userName]["Courses"].add(course);
    } else {
        console.log("Course not available. Available courses:", studentsRecords["Courses"]);
    }
    console.log("Updated student course", studentsRecords[userName]["Courses"]);
}

function addCoursesToGeneralCourses(course) {
    if (!studentsRecords["Courses"].has(course)) {
        studentsRecords["Courses"].add(course);
    } else {
        console.log("Course is already offered");
    }
    console.log(studentsRecords["Courses"]);
}

function removeCoursesFromGeneralCourses(course) {
    if (studentsRecords["Courses"].has(course)) {
        studentsRecords["Courses"].delete(course);
    } else {
        console.log("Course is not offered before nah");
    }
    console.log(studentsRecords["Courses"]);
}


function updateUsername(oldUserName, newUserName) {
    if (studentsRecords[oldUserName]) {
        studentsRecords[newUserName] = studentsRecords[oldUserName];
        delete studentsRecords[oldUserName];
    } else {
        console.log(`Username '${oldUserName}' not found`);
    }
}

function updateName(userName, newName) {
    if (studentsRecords[userName]) {
        studentsRecords[userName]["Name"] = newName;
    } else {
        console.log(`username '${userName}' not found`);
    }
}

function updateAge(userName, newAge) {
    if (studentsRecords[userName]) {
        studentsRecords[userName]["Age"] = newAge;
    } else {
        console.log(`username '${userName}' not found`);
    }
}

function updateCity(userName, newCity) {
    if (studentsRecords[userName]) {
        studentsRecords[userName]["Address"]["City"] = newCity;
    } else {
        console.log(`username '${userName}' not found`);
    }
}

function updateZip(userName, newZipCode) {
    if (studentsRecords[userName]) {
        studentsRecords[userName]["Address"]["ZipCode"] = newZipCode;
    } else {
        console.log(`username '${userName}' not found`);
    }
}


function getNumberOfStudentInRecord() {
    let count = 0;
    for (let key in studentsRecords) {
        if (key !== "Courses") count++;
    }
    return count;
}


function menu() {
    while (true) {
        console.log("\nWELCOME TO BRIGHT FUTURE UNIVERSITY");
        console.log("HERE WE...... WHAT DO WE DO AGAIN SELF");
        console.log("ANYWAY WHAT DO YOU WANNA DO??");
        console.log("\n========== Student Record Menu ==========");
        console.log("1. Register new student");
        console.log("2. Display student info");
        console.log("3. Display student courses");
        console.log("4. Display student city");
        console.log("5. Display student zip code");
        console.log("6. Add course to student");
        console.log("7. Add new course to general list");
        console.log("8. Remove course from general list");
        console.log("9. Update username");
        console.log("10. Update student name");
        console.log("11. Update student age");
        console.log("12. Update student city");
        console.log("13. Update student zip code");
        console.log("14. Get total number of students");
        console.log("0. Exit");

        let choice = prompt("Choose an option:").trim();

        if (choice === "0") {
            console.log("Thank you for using this app.... Goodbye!");
            break;
        } else if (choice === "1") {
            registerStudent();
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "2") {
            let userName = prompt("Enter username:").trim();
            displayStudentInfo(userName);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "3") {
            let userName = prompt("Enter username:").trim();
            displayStudentCourse(userName);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "4") {
            let userName = prompt("Enter username:").trim();
            displayStudentCity(userName);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "5") {
            let userName = prompt("Enter username:").trim();
            displayStudentZipCode(userName);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "6") {
            let userName = prompt("Enter username:").trim();
            let course = prompt("Enter course to add:").trim();
            addToStudentCourse(userName, course);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "7") {
            let course = prompt("Enter new course to add:").trim();
            addCoursesToGeneralCourses(course);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "8") {
            let course = prompt("Enter course to remove:").trim();
            removeCoursesFromGeneralCourses(course);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "9") {
            let oldUserName = prompt("Enter old username:").trim();
            let newUsername = prompt("Enter new username:").trim();
            updateUsername(oldUserName, newUsername);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "10") {
            let userName = prompt("Enter username:").trim();
            let newName = prompt("Enter new name:").trim();
            updateName(userName, newName);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "11") {
            let userName = prompt("Enter username:").trim();
            let newAge = parseInt(prompt("Enter new age:"));
            updateAge(userName, newAge);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "12") {
            let userName = prompt("Enter username:").trim();
            let newCity = prompt("Enter new city:").trim();
            updateCity(userName, newCity);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "13") {
            let userName = prompt("Enter username:").trim();
            let newZipCode = prompt("Enter new zip code:").trim();
            updateZip(userName, newZipCode);
	    console.log(" ");
	    console.log(" ");
        } else if (choice === "14") {
            console.log("Total students:", getNumberOfStudentInRecord());
	    console.log(" ");
	    console.log(" ");
        } else {
            console.log("You get eyes nah!!.");
        }
    }
}

menu();
