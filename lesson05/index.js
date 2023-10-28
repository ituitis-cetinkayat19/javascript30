const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    if(!panel.classList.contains("open"))
    {
      panels.forEach(every => every.classList.remove("open"));
      panel.classList.add("open");
    }
    else
      panel.classList.remove("open");
  });
});