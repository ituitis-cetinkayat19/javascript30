const inbox = document.querySelector(".inbox");
let shift = false;
let lastClicked;
window.addEventListener("keydown", event => {
  if(event.keyCode === 16)
    shift = true;
});
window.addEventListener("keyup", event => {
  if(event.keyCode === 16)
    shift = false;
});
const inputs = inbox.querySelectorAll("[type=checkbox]");
inputs.forEach((input, index) => {
  input.addEventListener("click", () => {
    if(lastClicked !== undefined && shift) {
      let min = Math.min(lastClicked, index);
      let max = Math.max(lastClicked, index);
      for(let i = min; i <= max; i++)
        inputs[i].checked = input.checked;
    }
    lastClicked = index;
  });
});