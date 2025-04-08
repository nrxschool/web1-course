//if-else

let idade = 17;

if (idade >= 18) {
  console.log("Maior de Idade");
} else {
  console.log("Menor de idade");
}

//switch
let diaSemana = 2;

switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Outro dia da semana")
}

// Laços de repetição
//for, while, do-while

for (let i = 0; i < 5; i++) {
  console.log(i);
}


let contador = 1;
console.log('While');
while (contador < 5) {
  console.log(contador);
  contador++;
}

//do-while
console.log('do-While');
let contador2 = 5;

do {
  console.log(contador2);
  contador2++;
} while (contador2 < 5)


// Funções

function soma(a, b) {
  return a + b;
}

let resultado = soma(5, 5)

console.log("Soma = ", resultado)


document.getElementById("meuBotao")
  .addEventListener("click", function () {
    console.log("Ação do evento de click")
  })
