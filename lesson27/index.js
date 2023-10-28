const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;
let speed = 0;
let walk = 0;
let sweep;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  walk = 0;
  speed = 0;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  clearInterval(sweep);
});

function letGo() {
  sweep = setInterval(() => {slider.scrollLeft -= speed / 4}, 10);
  isDown = false;
  walk = 0;
  slider.classList.remove("active");
}

slider.addEventListener("mouseleave", letGo);
slider.addEventListener("mouseup", letGo);

slider.addEventListener("mousemove", (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  let prevWalk = walk;
  walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
  speed = walk - prevWalk;
});