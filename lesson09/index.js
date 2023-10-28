const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');
function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s", "😎");

// Styled
console.log("%cThis is styled", "font-size:30px; background-color:red; \
  text-shadow: 10px 10px 0 blue");

// warning!
console.warn("Warning");
// Error :|
console.error("Error");
// Info
console.info("Crocodiles eat 3-4 people per year!");
// Testing
console.assert(1 === "2", "This is wrong!");
// clearing
console.clear();
// Viewing DOM Elements
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`); 
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`That makes it ${dog.age * 7} in dog years`);
  console.groupEnd();
});
// counting
console.count("Tarik");
console.count("Tarik");
console.count("Refia");
console.count("Tarik");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then(data => data.json)
  .then(data => {
    console.timeEnd("fetching data");
  });

console.table(dogs);