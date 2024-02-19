/*
    Declare uma variável que armazene um OBJETO
    contendo as seguintes PROPRIEDADES:
    Nome, idade, altura, se tem CNH e apelidos.

    Depois faça um programa que imprime na tela o belo texto abaixo,
    substituindo os dados pessoais pelos dados do objeto

    "José tem 30 anos, 1.73m de altura, possui CNH e os seguintes apelidos: Jr, Juninho".
*/

const pessoa = {
    nome: "Junior",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho"]
} // criando objeto "pessoa" com as propriedades solicitadas

const textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH"; // diminuindo o codigo utilizando operador ternário

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCNH} e seus apelidos são: `);
// imprimindo resposta em tela

for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
} // percorrendo o array todo para verificar quantos propriedades ele tem.
    

