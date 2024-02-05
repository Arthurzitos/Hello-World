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

const paises = ["Brasil", "França", "Alemanha", "Egito", "Portugal"];

paises.push("Marrocos"); // adicionando um país no fim da lista.

// console.log(paises);

paises.pop(); // removendo um país do fim da lista.

// console.log(paises);

paises.unshift("Argentina"); // adicionando um pais no começo da lista.

// console.log(paises);

paises.shift(); // removendo um pais no começo da lista

// console.log(paises);

// console.log(paises[4]); // imprimindo o último país da lista

// console.log(paises[1]); // imprimindo o segundo pais da lista

console.log(paises[2]); // imprimindo o pais com indice 2 da lista