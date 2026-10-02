    let studentName;
    let studentID;
    let email;
    let age;

    const regex = /^\d{2}-\d{5}$/;

    studentName = prompt("Enter your name: ");
    studentID = prompt("Enter your student ID: ");

    if (regex.test(studentID)) {
        console.log("Student ID is valid.");
    } else {
        console.log("Student ID is invalid.");
    }

    email = prompt("Enter your email: ");
    age = Number(prompt("Enter your age: "));

    function validateAge(age) {
        if (age < 18) {
            return "You are not qualified.";
        } else {
            return "You are qualified.";
        }
    }

    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const letter = ['one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten'];
    
    console.log(
        'Hi ' + studentName +'\n',
        'Your student ID is: ' + studentID + '\n',
        'Your email is: ' + email + '\n',
        'Your age is: ' + age
    );
    console.log('Numbers :', number);
    console.log('Letters :', letter);
    console.log(validateAge(age));