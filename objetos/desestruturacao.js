const pessoa = {
    nome: "Fulano",
    idade: 20,
    cidade: "Florianópolis",
    Profissão: "QA",
};

// const nome = pessoa.nome;
// const idade = pessoa.idade;

// Desestruturando objeto

const {nome, idade} = pessoa;

console.log(nome, idade);
