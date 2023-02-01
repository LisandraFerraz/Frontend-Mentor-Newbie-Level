var nameUser = document.getElementById("name");
var surname = document.getElementById("surname");
var emailUser = document.getElementById("email");
var passwordUser = document.getElementById("password");

var nameMsg = document.getElementById("name-error");
var surnameMsg = document.getElementById("surname-error");
var emailMsg = document.getElementById("email-error");
var passMsg = document.getElementById("pass-error");

function validateForm() {
  const validRedex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!validateInfo(nameUser)) {
    nameMsg.innerHTML = "First Name cannot be empty";
    if (!nameUser.classList.contains("inputError")) {
      nameUser.classList.add("inputError");
    }
    return false;
  }
  if (!validateInfo(surname)) {
    surnameMsg.innerHTML = "Last Name cannot be empty";
    if (!surname.classList.contains("inputError")) {
      surname.classList.add("inputError");
    }
    return false;
  }
  if (!validateInfo(emailUser) || !emailUser.value.match(validRedex)) {
    emailMsg.innerHTML = "Looks like this is not an email";
    if (!emailUser.classList.contains("inputError")) {
      emailUser.classList.add("inputError");
    }
    return false;
  }
  if (!validateInfo(passwordUser)) {
    passMsg.innerHTML = "Password cannot be empty";
    if (!passwordUser.classList.contains("inputError")) {
      passwordUser.classList.add("inputError");
    }
    return false;
  }
}

function validateInfo(info) {
  if (info.value === undefined || info.value === "" || !info.value) {
    return false;
  } else {
    return true;
  }
}
