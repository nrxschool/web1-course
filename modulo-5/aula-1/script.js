var nome = "João"; //Variável do tipo string
let idade = 25; //Variável do tipo número
const PI = 3.14; //Constante do tipo flutuante

let estaChovendo = true; //Boolean
let numeros = [1, 2, 3, 5, 6] //Array
let pessoa = { nome: "José", idade: 40 } //Object

let valorIndefinido; //Undefined
let valorNulo = null; //Null

console.log(typeof valorIndefinido);
console.log(valorNulo);

console.log(nome);

let x = 10;
let y = 5;

//operadores aritiméticos
let soma = x + y; //Operado de adição
let subtracao = x - y; //Operado de subtracao
let multiplicacao = x * y; //Operado de multiplicacao
let divisao = x / y; //Operado de divisão

//Operadores de comparação
let igualdade1 = x == y; // verifico valores
let igualdade2 = x === y; //verifico valores e tipo
let diferente = x !== y;
let maiorQue = x > y;
let menorQue = x < y;

console.log(igualdade1)
console.log(maiorQue)

// Operadores lógicos ou boleanos

let eLogico = true && true;
let ouLogico = false || true;
let negacao = !true;

console.log(eLogico)

console.log(negacao)

let nomeCompleto = "Nearx" + " " + "School";

console.log(nomeCompleto);