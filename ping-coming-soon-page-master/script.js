var email = document.getElementById("email");
var msgError = document.getElementById("errorMsg");

function validateForm() {
  var emailCheck =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    email.value === undefined ||
    email.value === "" ||
    email.value.length === 0 ||
    !email.value ||
    !email.value.match(emailCheck)
  ) {
    msgError.innerHTML = "Please provide a valid email adress";
    if (!email.classList.contains("errorSubmit")) {
      email.classList.add("errorSubmit");
    }
    return false;
  }
}
