const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const list = document.querySelector("#bands");

function sortProper(array) {
  function clearText(text) {
    const splitElement = text.split(" ");
    const badWords = ["The", "A", "An"];
    if(badWords.includes(splitElement[0]))
      text = text.substring(splitElement[0].length+1, text.length+1);
    return text;
  }

  return array.sort((a, b) => {
    const clearA = clearText(a);
    const clearB = clearText(b);
    return clearA > clearB ? 1 : -1;
  });
}

function populateList(array) {
  array.forEach(element => list.innerHTML += `<li>${element}</li>`);
}

populateList(sortProper(bands));