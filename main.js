//--- Hamburger Menu Animation Script ---//

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

/// Attempt at onclick close ///
/*
const burgerAnchors = document.querySelector("nav-links.open");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("closed");
})
*/
///   Closes visible menu,but not on click -> Ask Chris ///