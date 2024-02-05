// Praticando com loops em js

/* 
    Faça um programa que imprima todos os elementos
    de um ARRAY que contém alguns números quaisquer.
*/

const numbers = [1, 2, 3, 4, 5];

let indices = 0;

while (indices < numbers.length) {
    console.log(numbers[indices]);
    indices++;
}

// for (let indice = 0; indice < numbers.length; indice++) {
//    console.log(numbers[indice]);
// }