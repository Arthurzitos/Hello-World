const express = require('express');
const app = express();
const array = require('./array');

app.get('/usuarios', (req, res) => {
    res.send(array);
});

app.listen(3000);