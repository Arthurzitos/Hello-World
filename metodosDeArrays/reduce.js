// reduce()

// executa uma função callback passada como argumento
// para cada elemento do array que resulta
// apenas UM valor de retorno

// a função passada como argumento para o método reduce recebe 4 rgumentos:
// 1 - acumulador -> valor inicial (ou o valor do callback anterior)
// 2 - valorAtual -> valor do elemento atual
// 3 - index -> o indice atual do array
// 4 - array -> o array completo

//exemplo:

const array = [0, 1, 2, 3, 4];

array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
});

//resultado =  10;