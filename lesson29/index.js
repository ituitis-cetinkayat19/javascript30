const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll(".timer__button");
const input = document.querySelector("input[name=minutes]");

let seconds;
let interval;
let blink_interval;

function addZero(value) {
    return ('0' + value).length == 2 ? '0' + value : value;
}

function displaySeconds() {
    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft %= 3600;
    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft %= 60;
    timeLeft.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(secondsLeft)}`;
}

function countDown() {
    seconds -= 1;
    if(seconds <= 0)
    {
        clearInterval(interval);
        timeLeft.style.color = "red";
        blink = setInterval(blink, 1000);
    }
    displaySeconds();
}

function blink() {
    timeLeft.style.color = timeLeft.style.color == "white" ? "red" : "white";
}

function beginCountdown(value) {
    clearInterval(interval);
    clearInterval(blink);
    seconds = value;
    interval = setInterval(countDown, 1000);
    displaySeconds();
    const now = Date.now();
    let new_date = new Date(now + Number(seconds) * 1000);
    endTime.textContent = `Be back at ${new_date.getHours()}:${new_date.getMinutes()}`;
    timeLeft.style.color = "white";
}

buttons.forEach(button => {
    button.addEventListener("click", function() {beginCountdown(this.dataset.time)});
});

input.addEventListener("input", function() {beginCountdown(input.value * 60)});