const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const hammer = document.querySelector(".hammer");
let lastHole;
let timeUp = false;
let gameOn = false;
let score = 0;

document.body.addEventListener("mousemove", (e) => {
  if(gameOn) {
    hammer.style.left = (e.clientX - hammer.offsetWidth / 2) + "px";
    hammer.style.top = (e.clientY - hammer.offsetHeight / 2) + "px";
  }
});


function randTime(min, max) {
  return Math.random() * (max - min) + min;
}

function randomHole() {
  let hole;
  do {
    hole = holes[Math.floor(Math.random() * holes.length)];
  } while(hole === lastHole)
  lastHole = hole;
  
  return hole;
}

function peep() {
  const time = randTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if(!timeUp)
      peep();
  }, time);
}

function startGame() {
  score = 0;
  gameOn = true;
  scoreBoard.textContent = 0;
  timeUp = false;
  peep();
  setTimeout(() => {
    timeUp = true;
    gameOn = false;
  }, 10000);
}

function bonk(e) {
  if(!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", bonk));