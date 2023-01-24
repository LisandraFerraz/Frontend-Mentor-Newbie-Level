function getRate(event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  let rate = event.target.innerText;

  document.querySelector("#resultdisplay").innerText =
    "You selected " + rate + " out of 5.";
}

document.querySelector(".rating-opts").addEventListener("click", getRate);

function changeContent() {
  document.getElementById("imageid").src =
    "./images/illustration-thank-you.svg";
  document
    .getElementById("illustration")
    .classList.remove("illustration-round");
  document.getElementById("illustration").classList.add("illustrationActive");
  document.getElementById("resultdisplay").classList.remove("hide");
  document.getElementById("body-title").innerHTML = "Thank you!";
  document.getElementById("body-title").classList.add("titleActive");
  document.getElementById("body-text").innerHTML =
    "We appreciathe you taking the time to give a rating. If " +
    "you ever need more support, don’t hesitate to get in touch!";
  document.getElementById("body-text").classList.add("body-textActive");
  document.getElementById("illustration").classList.add("illustrationActive");
  document.getElementById("submitBtn").classList.add("hide");
}
