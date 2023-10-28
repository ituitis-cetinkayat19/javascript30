const hour = document.querySelector(".hour-hand");
const minute = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand");

let date = new Date();

function setDate() {
  date = new Date();
  let hour_value = date.getHours();
  let minute_value = date.getMinutes();
  let second_value = date.getSeconds();
  hour.style.transform = `rotate(${(hour_value % 12) * 30 + 90}deg)`;
  minute.style.transform = `rotate(${minute_value * 6 + 90}deg)`;
  second.style.transform =  `rotate(${second_value * 6 + 90}deg)`;
};

setDate();

setInterval(setDate, 1000);