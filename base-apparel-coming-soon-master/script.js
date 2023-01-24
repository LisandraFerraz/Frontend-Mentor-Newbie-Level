const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");

function validateInfo() {
  console.log(emailInput.value);
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    emailInput.value === undefined ||
    emailInput.value === "" ||
    !emailInput.value ||
    !emailInput.value.match(validRegex)
  ) {
    emailInput.style.borderColor = "#F96464";
    errorMsg.innerHTML = "Please provide a valid email";
    document.getElementById("errorIcon").classList.remove("hide");
    return false;
  }
}
