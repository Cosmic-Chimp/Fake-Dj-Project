//--- Hamburger Menu Animation Script ---//

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

/* old func*/

/*hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
*/

/* new func*/

/// onclick animate and close ///
let toggleMenu = () => {
  //alert("hallo");
  $(".icon").toggleClass("close");
  navLinks.classList.toggle("open");
  // links.forEach(link => {
  //   link.classList.toggle("fade");
  // });
};
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});