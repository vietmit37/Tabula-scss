const navSlider = () => {
  const toggle = document.querySelector(".toggle");
  const nav = document.getElementById("nav-toggle");
  const header = document.querySelector(".header__responsive");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    header.classList.toggle("header__responsive--active");
    toggle.classList.toggle("toggle-active");
  });
};
navSlider();
