document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const buttons = document.querySelector(".buttons");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    buttons.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
