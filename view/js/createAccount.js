// validation//
let fieldName = document.querySelector('#name');
let nameError = document.querySelector('.namemsg');
let nameValidator = /[A-Z][a-z]* [A-Z][a-z]*/;

fieldName.onblur = function ()  { 
    if (!nameValidator.test(fieldName.value)) {
        nameError.style.display = "block";
    } else {
        nameError.style.display  = "none";
    }
};

let emailField = document.querySelector('#mail');
let emailError = document.querySelector('.mailMsg');
let emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

emailField.onblur = function () {
    if (!emailValidator.test(emailField.value)) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
}

let celphoneField = document.querySelector('.celphone');
let celphoneError = document.querySelector('.celphoneMsg');
let celphoneValidator = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

celphoneField.onblur = function () {
    if(!celphoneValidator.test(celphoneField.value)) {
        celphoneError.style.display = "block";
    }else {
        celphoneError.style.display = "none";
    }
}
let password = document.querySelector('.password')
let confPassword = document.querySelector('.confirm')
let passwordError = document.querySelector('.passwordMsg')

let passwordValidator = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
password.onblur = function () {
    if(!passwordValidator.test(password.value)) {
        passwordError.style.display = "block";
    }else {
        passwordError.style.display = "none"
        confPassword.disabled = 0

    }
}

let confpassError = document.querySelector('.confpassError')
let btnRegister = document.querySelector('button')
confPassword.onblur = function () {
    if(password.value == confPassword.value) {
        confpassError.style.display = "none"
        btnRegister.disabled = 0
    }else {
        confpassError.style.display = "block"
        btnRegister.disabled = 1
    }
}

// end validation//