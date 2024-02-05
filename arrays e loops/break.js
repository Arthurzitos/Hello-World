const palavra = "Alemanha";

let encontrado = false;

for (let letra of palavra) {
    if (letra === "h") {
        console.log("tem a letra H");
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("não tem a letra H");
}