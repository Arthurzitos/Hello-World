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

const produtosConsumidos = [
        {
            nome: "Coca Cola",
            precoUnit: 1200,
            quantidade: 1
        },

        {
            nome: "Coxinha",
            precoUnit: 1000,
            quantidade: 2
        },

        {
            nome: "Caldo de Cana",
            precoUnit: 1600,
            quantidade: 1
        }
];

const cartaoConsumo = {
    cliente: {
        nome: "Fulano",
        idade: 21
    },
    produtosConsumidos: produtosConsumidos
}

console.log(cartaoConsumo);