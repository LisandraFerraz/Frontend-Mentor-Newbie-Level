var accordionItem = document.getElementsByClassName("accordion-item opened");
var accordionHeader = document.getElementsByClassName("accordion-head");

for (i = 0; i < accordionHeader.length; i++) {
  accordionHeader[i].addEventListener("click", toggleItem);
}

function toggleItem() {
  var item = this.parentNode.className;
  for (i = 0; i < accordionItem.length; i++) {
    accordionItem[i].className = "accordion-item closed";
  }
  if (item == "accordion-item closed") {
    this.parentNode.className = "accordion-item opened";
  }
}
