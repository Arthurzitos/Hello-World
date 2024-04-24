const express = require('express');

const app = express();

app.get('/cadastro', (request, response) => {
    response.send("Realize seu cadastro");
});

app.get('/atualizarCadastro', (request, response) => {
    response.send("Atualização de cadastro");
});

app.listen(3000);