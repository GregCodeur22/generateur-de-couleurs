let red;
let green;
let blue;

let result = document.createElement("div");
document.body.appendChild(result);

setInterval(() => {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);

  result.textContent = `background : rgb(${red}, ${green}, ${blue})`;
  result.classList.add("res");

  document.body.style.background = ` rgb(${red}, ${green}, ${blue}) `;
}, 1000);
