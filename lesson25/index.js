function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
  }

  const divs = [...document.querySelectorAll("div")];
  document.body.addEventListener("click", logText, {capture: false, once: true});
  divs.forEach(div => div.addEventListener("click", logText, {capture: false, once: true}));
  //once unbinds itself after event occur

  //          first event      second event      result
  //capture   false            false             3->2->1->body                capture default false
  //          false            true              1->2->3->body
  //          true             false             body->3->2->1
  //          true             true              body->1->2->3