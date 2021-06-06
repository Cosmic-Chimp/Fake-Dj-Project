//--- Hamburger Menu Animation Script ---//

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
/*
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
*/
/// onclick animate and close ///
let toggleMenu = () => {
  //alert("hallo");
  $(".icon").toggleClass("close");
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
};