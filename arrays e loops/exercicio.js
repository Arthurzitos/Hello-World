/*
    Exercício para praticar com ARRAYS

    O que deve ser feito?

    * Criar um array com 5 nomes de paises
    * Adicionar um pais no fim da lista
    * Imprimir a lista na tela

    * Remova um país do fim da lista
    * Imprimir a lista na tela


    * Adicionar um pais no começo da lista
    * Imprimir a lista na tela
    * Remova um pais no começo da lista
    * Imprimir a lista na tela

    * Imprima o último país da lista na tela
    * Imprima o segundo pais da lista na tela
    * Imprima o país de indice 2 na tela
*/


const teste = ["a", "b", "c", "d", "e"];
console.log(teste);

teste.push("f"); // adiciona um item ao final da lista
console.log(teste);

teste.pop(); // remove um item ao final da lista
console.log(teste);

teste.unshift("Z"); // adiciona um item ao começo da lista
console.log(teste);

teste.shift(); // remove um item ao começo da lista
console.log(teste);

console.log(teste[4]); // imprime o último algoritmo escrito no array

console.log(teste[1]); // imprime o segundo algoritmo escrito no array

console.log(teste[2]); // imprime o algoritmo com indicice 2 no array

