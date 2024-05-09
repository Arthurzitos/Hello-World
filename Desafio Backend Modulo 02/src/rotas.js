const app = require('./index');

const { criarConta,
    listarContas,
    atualizarConta,
    excluirConta,
    constultarConta } = require('./controladores/contas.js');

const {
    depositarEmConta,
    sacarDaConta,
    transferirEntreContas,
    emitirExtrato
} =  require('./controladores/transacoes.js');

app.get('/teste', (req, res) => {
    res.send("Servidor funcionando!");
});

app.post('/criarConta', async (req, res) => {
    const body = await req.body;
    res.send(criarConta(body));
});

app.get('/listarContas', (req, res) => {
    res.send(listarContas());
});

app.put('/atualizarConta/:id', async (req, res) => {
    const body = await req.body;
    res.send(atualizarConta(req.params.id, body));
});

app.delete('/excluirConta/:id', async (req, res) => {
    console.log(req.params);
    res.send(excluirConta(req.params.id));
    
});

app.patch('/depositarEmConta', async (req, res) => {
    const body = await req.body;
    res.send(depositarEmConta(body));
});

app.patch('/sacarDaConta', async (req, res) => {
    const body = await req.body;
    res.send(sacarDaConta(body));
});

app.patch('/transferirEntreContas', async (req, res) => {
    const body = await req.body;
    res.send(transferirEntreContas(body));
});

app.get('/consultarConta', async (req, res) => {
    const body = await req.body;
    res.send(constultarConta(body));
});

app.get('/emitirExtrato', async (req, res) => {
    const body = await req.body;
    res.send(emitirExtrato(body));
});
