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

window.onscroll = function () {
  myfunction();
};
const header = document.getElementById("header");
function myfunction() {
  let pos = window.scrollY;
  console.log(pos);
  if (pos > 10) {
    header.classList.add("sticky");
    if (pos > 400) {
      header.classList.add("sticky-active");
    } else {
      header.classList.remove("sticky-active");
    }
  } else {
    header.classList.remove("sticky");
  }
}
