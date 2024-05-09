const bodyParser = require('body-parser');
const express = require('express');
const { catchAll, notFound } = require('./error');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.use(notFound); // utilizar o tratamento de erro 404

app.use(catchAll); // utilizar o tratamento de erro 500

module.exports = app;