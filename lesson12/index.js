let konamiProgress = 0;
let complete = false;
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
window.addEventListener("keyup", (event) => {
  if(!complete) {
    if(event.keyCode == konami[konamiProgress]) {
      konamiProgress++;
      if(konamiProgress >= konami.length)
        complete = true;
    }
    else
      konamiProgress = 0;
    if(complete) {
      document.querySelector("#done").textContent = "You Did It!";
      const img = document.createElement("img");
      img.src = "done.gif";
      img.width = 500;
      document.body.appendChild(img);
    }
  }
});
