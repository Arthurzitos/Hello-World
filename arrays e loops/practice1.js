// Faça um programa que conta quantas letras "a" existem numa determinada palavra
// e imprima o resultado na tela

const palavra = "palavra";

let quantidade = 0;

for (let letra of palavra) { // percorrendo o array inteiro
    if (letra === "a") { // procurando a letra A
        quantidade++; // somando quantas letras A foram encontradas
    }
}

console.log(quantidade); // exibindo resultado