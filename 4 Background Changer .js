const button = document.querySelector("button");

button.addEventListener("click", function onButtonClick () {
  const rado = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  const $backco = document.querySelector("body");
  const $text = document.querySelector("p");
  $text.textContent = "HEX COLER :" + rado;
  $backco.style.backgroundColor = rado;
});
