const usuarios = [
    { nome: 'Joao', idade: 23},
    { nome: 'Pedro', idade: 18},
    { nome: 'Ana', idade: 29},
    { nome: 'Maria', idade: 19}
];

const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });

    if (resultado) {
        console.log("Festa Liberada");
    } else {
        console.log("Possui menor de idade");
    };
}

fiscalizarFesta(usuarios);