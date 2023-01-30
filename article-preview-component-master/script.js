var toggle = document.getElementById("toggle");
var socialShare = document.getElementById("shareOpts");
var activeToggle = document.getElementById("active-toggle");

toggle.addEventListener("click", toggleShare, false);
activeToggle.addEventListener("click", toggleShare, false);

function toggleShare() {
  if (socialShare.className === "active") {
    socialShare.className = "";
  } else {
    socialShare.className = "active";
  }
}
