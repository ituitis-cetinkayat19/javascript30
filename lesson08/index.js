const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
ctx.globalCompositeOperation = "multiply";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
let hue = 0;

function draw(event) {
  if(isDrawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
    hue = hue > 360 ? hue - 360 : hue + 1;
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
      direction = !direction;
    ctx.lineWidth += direction ? 1 : -1;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);