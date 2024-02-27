const carro = {
    marca: "Toyota",
        modelo: "Etios",
        ano: 2020,
        potencia: 100
}; // criado objeto externo

const pessoa = {
    nome: "Arthur",
    altura: 1.78,
    carro: carro // chamando objeto externo através do nome da variável
    /*
    carro: {
        marca: "Toyota",
        modelo: "Etios",
        ano: 2020,
        potencia: 100
    }
    */ // criado objeto dentro do objeto principal

}; // criado objeto principal

console.log(pessoa); // imprimindo em tela