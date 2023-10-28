const keys_down = {};
document.querySelectorAll(".key[data-key]").forEach(key => {
    keys_down[key.dataset.key] = false;
});


function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return;
    if(!keys_down[event.keyCode])
    {
        keys_down[event.keyCode] = true;
        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }
}

function removeTransition(event) {
    if(event.propertyName !== "transform") return;
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", event => {
    keys_down[event.keyCode] = false;
})

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));