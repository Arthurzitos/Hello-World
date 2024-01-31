// Arrays: uma lista que guarda um ou mais valores dentro dele
// ex:
//    const array = [1, 2, 3];
// OBS: O tamanho do array é sempre maior do que o número de indices que o mesmo contém.
// Tamanho do array: 3
// Indices: 2
// por que? o primeiro índice de um array é sempre zero.

const nomesEstudantes = ["Julio", "Arthur", "Guto", "Eduardo", "Luis"];

//nomesEstudantes.push("Gabriel"); // adiciona itens no último indice do array
//nomesEstudantes.pop(); // remove itens do ultimo indice do array

// adicionando nome no último indice do array
// nomesEstudantes[nomesEstudantes.length] = "Aleff"; 

nomesEstudantes.shift(); // remove o primeiro elemento do array
nomesEstudantes.unshift("Carol"); // adiciona o primeiro elemento do array

console.log(nomesEstudantes); 


