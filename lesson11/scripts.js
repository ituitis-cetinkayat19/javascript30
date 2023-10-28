const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = document.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullScreen = player.querySelector("#fullscreen");

function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    toggle.textContent = this.paused ? "▶" : "▐▐";
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function applyRange() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = 100 * video.currentTime / video.duration;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event) {
    const scrubTime = video.duration * event.offsetX / progress.offsetWidth;
    video.currentTime = scrubTime;
}

function toggleFullScreen() {
    video.requestFullscreen();
}

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("input", applyRange));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (event) => mousedown && scrub(event));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
fullScreen.addEventListener("click", toggleFullScreen);