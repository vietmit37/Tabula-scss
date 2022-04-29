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

// API
let service = new Service();

function getListTeacher() {
  service
    .fectData()
    .then((res) => {
      renderListTeacher(res.data);
    })
    .catch((err) => {
      {
        console.log(err);
      }
    });
}
function renderListTeacher(data) {
  let content = "";
  data.forEach((item) => {
    let {
      id,
      taiKhoan,
      hoTen,
      matKhau,
      email,
      loaiND,
      ngonNgu,
      moTa,
      hinhAnh,
    } = item;
    if (loaiND === "GV") {
      content += `
      <div
        class="col-lg-3 col-sm-6 col-12 wow fadeIn"
      >
        <div class="card">
          <img
            class="card-img-top"
            src="./images/${hinhAnh}"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">${ngonNgu}</h5>
            <h4 class="card-text">${hoTen}</h4>
            <p class="card-text">
             ${moTa}
            </p>
          </div>
        </div>
      </div> `;
    }
  });
  document.querySelector(".portfolio .row").innerHTML = content;
}
getListTeacher();
