const pessoas = ['Mateus', 'leonardo', 'Arthur', 'joão', 'dalila'];

// Odenação CRESCENTE
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);

// Odenação DECRESCENTE
pessoas.sort((a, b) => {
    return b.localeCompare(a)
});

console.log(pessoas);


