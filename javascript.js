const button = document.querySelector("button");
const $text = document.querySelector("p");

button.addEventListener("click", function onButtonClick () {
  const rado = "#" + Math.round(Math.random() * 1000)
  $text.textContent = rado;
});

function enterkey() {
	if (window.event.keyCode == 13) {
    var num =  Number(document.getElementById('num').value);
    const $text = document.querySelector("p");
    if (num>999 || num<100)
      $text.textContent = "세자리가 아닙니다.";
    else
      $text.textContent = "알고리즘만 여기다 적용후, 정답 삭제하면 될듯?";
    }
}
