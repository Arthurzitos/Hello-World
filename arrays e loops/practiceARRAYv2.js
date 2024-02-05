// Praticando um pouco mais com ARRAYS

// Faça um programa que calcula e imprime na tela a soma dos itens de um array

const numbers = [10, 20];

let soma = 0;

for (let indice = 0; indice < numbers.length; indice++) {
    soma += numbers[indice];
}

console.log(soma);