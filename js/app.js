function checkFullName(fullName) {
    //Check fullName
    if (fullName.length == 0) {
        alert("FullName cannot be empty.");
    } else {
        for (let i = 0; i < fullName.length; i++) {
            if (fullName.charAt(0) !== fullName.charAt(0).toUpperCase()) {
                alert("The first letter of each word must be uppercase.");
            }
            if (fullName.charAt(i) === ' ' && fullName.charAt(i + 1) !== fullName.charAt(i + 1).toUpperCase()) {
                alert("The first letter of each word must be uppercase.");
            }
        }
    }
}

function checkUserName(userName) {
    //Check userName
    if (userName.length == 0) {
        alert("UserName cannot be empty.");
    } else {
        if (userName.indexOf(' ') >= 0) {
            alert("Username cannot contain a space character.");
        }
        var usernameRegex = /^[0-9a-zA-Z_]+$/;
        if (userName.match(usernameRegex)) {
            // do nothing
        } else {
            alert("Username must have letters, numbers and character _ only");
        }

        if (userName.charAt(0) <= '9' && userName.charAt(0) >= '0') {
            alert("Username cannot begin with a digit.");
        }
    }

}

function checkEmail(email) {
    //Check email
    if (email.length == 0) {
        alert("Email cannot be empty.");
    } else {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            // do nothing
        } else {
            alert("Invalid email address!");
        }
    }
}

function checkPhoneNumber(phoneNumber) {
    //Check Phone Number
    if (phoneNumber.length == 0) {
        alert("Phone Number cannot be empty.");
    } else {
        if (phoneNumber.length != 10 || phoneNumber.charAt(0) != 0) {
            alert("Phone number must have 10 number, the first digit must be 0.");
        }
    }
}

function checkBirthDay(birthday) {
    // Check birthday
    // This function do nothing because I've set the condition for BirthDay field.
    if (birthday.length == 0) {
        alert("Birthday cannot be empty.");
    }
}

function formValidation() {
    var fullName = document.getElementById("name").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var birthday = document.getElementById("birthday").value;

    checkFullName(fullName);
    checkUserName(userName);
    checkEmail(email);
    checkPhoneNumber(phoneNumber);
    checkBirthDay(birthday);
}