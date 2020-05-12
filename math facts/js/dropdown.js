const burgerIcon = document.getElementById("dropdown-button");
const expandedMenu = document.querySelector(".dropdown-content");

const openCloseMenu = (e) => {
  if (burgerIcon.contains(e.target)) {
    expandedMenu.classList.toggle("show");
    return;
  } else {
    if (expandedMenu.classList.contains("show")) {
    expandedMenu.classList.remove("show");
    return;
  } else return;
}
}
     
document.addEventListener("click", openCloseMenu);