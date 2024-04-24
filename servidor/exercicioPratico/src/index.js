const express = require('express');
const app = express();
const arrayUsuarios = [
    { id: 11, nome: 'arthur', idade: 23 },
    { id: 2, nome: 'joao', idade: 18 },
    { id: 4, nome: 'paulo', idade: 30 },
    { id: 1, nome: 'maria', idade: 17 },
    { id: 123, nome: 'carla', idade: 17 },
];

app.get('/usuarios', (req, res) => {
    res.send(arrayUsuarios);
});

app.listen(3000);