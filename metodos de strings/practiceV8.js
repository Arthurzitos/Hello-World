// tranforme "arthur dos santos guimarães"
// em "Arthur Dos Santos Guimaraes"

const nome = "arthur dos santos guimaraes";
const arrayDeNomes = nome.split(" ");
let nomeFormatado = "";

for (let item of arrayDeNomes) {
    let primeiraLetra = item.slice(0, 1);
    let restoDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restoDoNome + " ";
}

console.log(nomeFormatado);