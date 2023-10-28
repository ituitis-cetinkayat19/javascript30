const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];
const check = document.getElementById("check");
const uncheck = document.getElementById("uncheck");

function addItem(event) {
  event.preventDefault();
  const text = (this.querySelector("[name=item]")).value;
  const item = {
    text: text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

addItems.addEventListener("submit", addItem);
populateList(items, itemsList);

function toggleDone(event) {
  if(event.target.matches("input")) {
    items[event.target.dataset.index].done = !items[event.target.dataset.index].done;
    localStorage.setItem("items", JSON.stringify(items));
  }
}

function checkAll() {
  items.forEach(item => item.done = true);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAll() {
  items.forEach(item => item.done = false);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

itemsList.addEventListener("click", toggleDone);
check.addEventListener("click", checkAll);
uncheck.addEventListener("click", uncheckAll);