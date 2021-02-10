document.querySelector("button").addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => {
    document.querySelector("h1." + input.id).innerText = input.value;
  });
});

document.querySelector("button").addEventListener("click", () => {
  document.querySelectorAll("select").forEach((select) => {
    document.querySelector("h1." + select.id).innerText = select.value;
  });
});
