const numeros = [3, 20, 13, 50, 1, 4, 2, 13];
// ordenação de elementos em ordem CRESCENTE
numeros.sort((a, b) => {
    return (a - b);
});

console.log(numeros);

// ordenação de elementos em ordem DECRESCENTE
numeros.sort((a, b) => {
    return (b - a);
});

console.log(numeros);