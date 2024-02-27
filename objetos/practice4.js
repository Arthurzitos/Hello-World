/*
    Faça um programa que imprime uma mesnagem amigável:
    - Que inclui chamar o cliente pelo nome
    Que informa o valor ele deve pagar.
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

let totalAPagar = 0;

for (let produto of produtosConsumidos) {
    totalAPagar +=produto.precoUnit * produto.quantidade;
}

const totalFormatado = (totalAPagar/100).toFixed(2);

console.log(`Sr(a) ${cartaoConsumo.nome}, você deve pagar ao caixa: R$${totalFormatado}`);