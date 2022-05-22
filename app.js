const button = document.querySelector("button");
const h2 = document.querySelector("h2");
const section = document.querySelector("section");

button.addEventListener("click", () => {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8);
  section.style.backgroundColor = color;
  h2.innerText = color;
  console.log(color);
});
