let titulo = document.getElementById("titulo");
let paragrafo = document.querySelector("p");
let botoes = document.querySelectorAll(".botoes")

titulo.textContent = "Novo Titulo";
paragrafo.innerHTML = "Novo <strong>parágrafo</strong>";

botoes[0].style.backgroundColor = "blue";
botoes[1].setAttribute("disabled", true);

//Eventos e Callbacks

botoes[0].addEventListener('click', function () {
  alert('você clicou em salvar')
})

paragrafo.addEventListener('mouseover', function () {
  console.log('evento de mouseover')
})

paragrafo.addEventListener('mouseout', function () {
  console.log('evento de mouseout')
})