/*
    Crie um objeto que represente o cartão de consumo de um cliente.
    O cartão deve ter:

    - Nome do Cliente
    - Idade do Cliente
    - Produtos consumidos (no mínimo três produtos)
        Cada produto deve ter:
            - Nome do produto
            - Preço unitário (em centavos)
            - quantidade comprada
*/


const cliente = {
    nome: "Fulano",
    idade: 21
}

const produtos = {
    refrigerante: {
        nomeProduto: "Coca-Cola",
        preçoUnitario: 5.49,
        qtdcomprada: 2
    },

    macarrao: {
        nomeProduto: "Miojo",
        preçoUnitario: 2.35,
        qtdcomprada: 3
    },

    fruta: {
        nomeProduto: "Maçã",
        preçoUnitario: 1.25,
        qtdcomprada: 5
    }

}

const consumido = {
    cliente: cliente,
    produtos: produtos
};

console.log(consumido);