const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector(".search-form input");
const list = document.querySelector("ul.suggestions");
input.addEventListener("input", () => {
  for(let child of Array.from(list.children))
    list.removeChild(child);
  if(input.value) {     
    fetch(endpoint).then(res => res.json()).then(json => {
      const results = json.filter(elem => elem.city.match(new RegExp(input.value, "i")) || elem.state.match(new RegExp(input.value, "i")));
      for(let result of results) {
        const regexp = new RegExp(input.value, "gi");
        result.city = result.city.replace(regexp, `<span class='hl'>${input.value}</span>`);
        result.state = result.state.replace(regexp, `<span class='hl'>${input.value}</span>`);
        const new_elem = document.createElement("li");
        new_elem.innerHTML = `<span class='name'>${result.city}, ${result.state}</span><span class='population'>${Number(result.population).toLocaleString()}</span>`;
        list.appendChild(new_elem);
      }
    });
  } else
    list.innerHTML = "<li>Filter For a City</li><li>Or a State</li>"
});