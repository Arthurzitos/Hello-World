const usuarios = [
    {id: 11, nome: 'fulano', idade: 23},
    {id: 2, nome: 'ciclano', idade: 18},
    {id: 4, nome: 'beltrano', idade: 30},
    {id: 1, nome: 'cetano', idade: 17},
    {id: 123, nome: 'meltrano', idade: 17},
];

console.log(usuarios); // imprime os resultados de forma aleatoria

usuarios.sort((primeiro, segundo) => { 
    return primeiro.id - segundo.id;
});

console.log(usuarios); // imprime os resultados de forma CRESCENTE

usuarios.sort((primeiro, segundo) => { 
    return segundo.id - primeiro.id;
});

console.log(usuarios); // imprime os resultados de forma DECRESCENTE