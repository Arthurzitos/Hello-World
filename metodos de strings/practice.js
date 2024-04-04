// Verificar se o email recebido é válido
// Precisa ter pelo menos um @
// Precisa ter um ponto depois do @

const email = 'email@example.com';

const indexArroba = email.indexOf('@');
console.log(indexArroba); // 5

const indexPonto = email.indexOf(".", indexArroba);
console.log(indexPonto); // 13

if (indexPonto > indexArroba) {
    console.log("E-mail Válido");
} else {
    console.log("E-mail Inválido");
}