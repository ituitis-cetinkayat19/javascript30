const h1 = document.querySelector("h1");
document.body.addEventListener("mousemove", (event) => {
  const x = -(event.clientX - (h1.offsetLeft + h1.offsetWidth / 2)) / 3;
  const y = -(event.clientY - (h1.offsetTop + h1.offsetHeight / 2)) / 3;

  h1.style.textShadow = `
    ${x}px ${y}px 0 rgba(255,0,0,1),
    ${-y}px ${x}px 0 rgba(0,255,0,1),
    ${-x}px ${-y}px 0 rgba(0,0,255,1),
    ${y}px ${-x}px 0 rgba(255,0,255,1)
    `;
});