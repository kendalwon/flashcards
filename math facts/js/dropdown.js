var burgerIcon = document.getElementById("dropdown-button");
var expandedMenu = document.querySelector(".dropdown-content");

function openCloseMenu(e) {
  if (burgerIcon.contains(e.target)) {
    expandedMenu.classList.toggle("show");
    console.log('toggle');
    return;
  } else {
    if (expandedMenu.classList.contains("show")) {
    expandedMenu.classList.remove("show");
    console.log('hide');
    return;
  } else return;
}
}
     
document.addEventListener("click", openCloseMenu);