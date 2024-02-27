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

// console.log(cartaoConsumo); // Término da solução do primeiro exercício


// Exercício 3
/*
    - Imprima o nome do cliente
    - Imprima a idade do cliente
    - Modifique a idade do cliente
    - Imprima a nova idade do cliente
    - Imprima o nome do primeiro produto consumido
    - Imprima o preço unitário do último produto consumido
*/

console.log(cartaoConsumo.cliente.nome);
console.log(cartaoConsumo.cliente.idade);
cartaoConsumo.cliente.idade = 31;
console.log(cartaoConsumo.cliente.idade);
console.log(cartaoConsumo.produtosConsumidos[0].nome);
console.log(cartaoConsumo.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);
