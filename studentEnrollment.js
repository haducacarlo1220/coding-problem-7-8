
let DSA = [];
let PL = [];
let Networks = [];

// Function to prompt the user to select a subject
function selectSubject() {
    let subjectChoice = prompt("Select a subject: (A) DSA, (B) PL, (C) Networks").toUpperCase();
    switch (subjectChoice) {
        case 'A':
            subjectOperations(DSA, "DSA");
            break;
        case 'B':
            subjectOperations(PL, "PL");
            break;
        case 'C':
            subjectOperations(Networks, "Networks");
            break;
        default:
            console.log("Invalid choice. Try again.");
            selectSubject();
    }
}

// Function to handle operations for each subject
function subjectOperations(subjectArray, subjectName) {
    let operationChoice = prompt('Select an operation for ${subjectName}: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit').toUpperCase();
    switch (operationChoice) {
        case 'A':
            enrollStudent(subjectArray, subjectName);
            break;
        case 'B':
            unenrollStudent(subjectArray, subjectName);
            break;
        case 'C':
            selectSubject();
            break;
        case 'D':
            exitProgram();
            break;
        default:
            console.log("Invalid choice. Try again.");
            subjectOperations(subjectArray, subjectName);
    }
}

// Function to enroll a student
function enrollStudent(subjectArray, subjectName) {
    let studentName = prompt('Enter the name of the student to enroll in ${subjectName}:');
    subjectArray.push(studentName);
    console.log('${studentName} has been enrolled in ${subjectName}.');
    subjectOperations(subjectArray, subjectName);
}

// Function to unenroll a student
function unenrollStudent(subjectArray, subjectName) {
    if (subjectArray.length === 0) {
        console.log('No students are currently enrolled in ${subjectName}.');
    } else {
        console.log('Enrolled students in ${subjectName}: ${subjectArray.join(", ")}');
        let studentName = prompt('Enter the name of the student to unenroll from ${subjectName}:');
        let index = subjectArray.indexOf(studentName);
        if (index !== -1) {
            subjectArray.splice(index, 1);
            console.log('${studentName} has been unenrolled from ${subjectName}.');
        } else {
            console.log('${studentName} is not enrolled in ${subjectName}.');
        }
    }
    subjectOperations(subjectArray, subjectName);
}

// Function to exit the program
function exitProgram() {
    console.log("Final enrollment list:");
    console.log('DSA: ${DSA.join(", ")}');
    console.log('PL: ${PL.join(", ")}');
    console.log('Networks: ${Networks.join(", ")}');
    console.log("Exiting program...");
}

// Start the program
selectSubject();