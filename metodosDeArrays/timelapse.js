const usuarios = [
    {id: 11, nome: 'Arthur', idade: 21},
    {id: 14, nome: 'Joao', idade: 24},
    {id: 16, nome: 'Leonardo', idade: 23},
    {id: 12, nome: 'Mateus', idade: 29},
];

console.log(usuarios); // imprime os IDs de forma desordenada

usuarios.sort((primeiro, segundo) => {
    return primeiro.id - segundo.id;
});

console.log(usuarios); // imprime os IDs de forma CRESCENTE

usuarios.sort((primeiro, segundo) => {
    return segundo.id - primeiro.id;
});

console.log(usuarios); // imprime os IDs de forma DECRESCENTE

// separando por idade

usuarios.sort((velho, novo) => {
    return velho.idade - novo.idade;

});

console.log(usuarios); // imprime as idades de forma CRESCENTE

usuarios.sort((velho, novo) => {
    return novo.idade - velho.idade;
});

console.log(usuarios); // retorna as idades em ordem DECRESCENTE
