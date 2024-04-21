// praticando com reduce

const array = [ 0, 1, 2, 3, 4];

let somaTotal = array[0]; // passando INDICE do array

for (let i = 1; i < array.length; i++) {
    const elementoAtual = array[i];

    somaTotal = somaTotal + elementoAtual;
}

console.log(somaTotal); // retorna 10