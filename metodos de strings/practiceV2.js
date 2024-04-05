// quero obter apenas os dois dígitos
// di estado de uma cidade

const cidade = "Florianopolis - SC";
const penultimoIndex = cidade.length - 2

let estado = cidade.slice(penultimoIndex);

console.log(estado);