const navbar = document.querySelector("#main");
const logo = document.querySelector(".logo");
const origin = navbar.offsetTop;

function setPosition() {
  if(window.scrollY > origin) {
    document.body.style.paddingTop = navbar.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  }
  else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", setPosition);