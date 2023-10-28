// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(`players: ${players}`);
console.log("-------------");

// and we want to make a copy of it.

// You might think we can just do something like this:
const copy_players = players;

// however what happens when we update that array?
copy_players[3] = "Tarik";
// now here is the problem!
console.log(`copy_players: ${copy_players}`);
console.log(`players: ${players}`);
console.log("-------------");


// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const realCopy = players.slice();
const realCopy2 = [].concat(players);
const realCopy3 = [...players];
realCopy[2] = "Refia";
realCopy2[2] = "Usame";
realCopy3[2] = "Ayse";
console.log(`realCopy: ${realCopy}`);
console.log(`realCopy2: ${realCopy2}`);
console.log(`realCopy3: ${realCopy3}`);
console.log(`players: ${players}`);
console.log("-------------");

const complexArray = [{name: "Tarik"}];
const complexCopy = complexArray.slice();
const complexCopy2 = [].concat(complexArray);
const complexCopy3 =  [...complexArray];
complexCopy[0].surname = "Cetin";
complexCopy2[0].gender = "Male";
complexCopy3[0].glasses = true;
console.log(complexArray);
console.log(complexCopy);
console.log(complexCopy2);
console.log(complexCopy3);
console.log("-------------");
//these methods create a shallow copy, 
//works with arrays with primitive types but not non-primitive

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};
console.log(person);
console.log("-------------");
const copyPerson = person;
copyPerson.age = 100;
console.log(copyPerson);
console.log(person);
console.log("-------------");
// and think we make a copy:
const realPerson = Object.assign({}, person, {age: 120});
const realPerson2 = {...person};
realPerson2.age = 140;
console.log(realPerson);
console.log(realPerson2);
console.log(person);
console.log("-------------");
// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

//cheap trick
const realPersonDeep = JSON.parse(JSON.stringify(complexArray));
realPersonDeep[0].age = 22;
console.log(realPersonDeep);
console.log(complexArray);