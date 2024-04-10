const nomes = ['joao', 'maria', 'jose'];

const resultado = nomes.some((nome) => {
    return nome === 'joao';
});

console.log(resultado);