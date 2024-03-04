/*
    Declare uma variável que armazene um
    objeto contendo os seguintes dados de uma pessoa:
    - nome
    - idade
    - profissão
    - altura

    Faça uma função que tem um parâmetro e não retorne valores

    essa função deve imprimir na tela a apresentação de uma pessoa,
    seguindo o modelo abaixo

    "Olá, meu nome é João, sou um jovem de 12 anos, 1.4m de altura e sou estudante"
    
*/

const pessoaObj = {
    nome: 'Arthur',
    idade: 21,
    altura: 1.78,
    profissao: 'desocupado'
} // criado objeto com os dados de uma pessoa

function apresentar(pessoa) {
    console.log(`Olá! meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, tenho ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}

apresentar(pessoaObj);
