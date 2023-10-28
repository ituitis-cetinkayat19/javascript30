const videos = Array.from(document.querySelectorAll("[data-time]"));
const seconds = videos.map(video => video.dataset.time).map(timeCode => {
  const [mins, secs] = timeCode.split(":").map(parseFloat);
  return mins * 60 + secs;
}).reduce((a, b) => a + b);
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft %= 60;
console.log(hours + " hours, " + minutes + " minutes, " + secondsLeft + " seconds");