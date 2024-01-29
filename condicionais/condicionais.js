// Escrever um programa que diga se a pessoa pode ou não
// ver o filme, dado que a censura de idade é para maiores de 16 anos

/*
    Tem ingresso? sim.
    É maior de 16 anos? sim.
    Então: Pode ver o filme.
    É menor de idade e está com os pais?
    Então: Pode ver o filme
    Se não: Não pode ver o filme.
*/

const temIngresso = true;
const censura = 16;
const idade = 18;
const estaComOsPais = false;

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode ver o filme.")
    } else {
        console.log("Não pode ver o filme.");
    }
} else {
    console.log("Não pode ver o filme.");
}
