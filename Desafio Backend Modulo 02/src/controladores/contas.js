const banco = require('../bancoDeDados.js');

const { criarContaMidlleware,
    atualizarContaMidlleware,
    excluirContaMidlleware,
    constultarContaMidlleware } = require('../intermediarios/validarContas.js');

// Criar conta bancária
const criarConta = ((conta) => {
    return criarContaMidlleware(conta);
});

// Listar contas bancárias
const listarContas = (() => {
    return banco.contas;
});

// Atualizar os dados do usuário da conta bancária
const atualizarConta = ((id, novaConta) => {
    return atualizarContaMidlleware(id, novaConta);
});

// Excluir uma conta bancária
const excluirConta = ((id) => {
    return excluirContaMidlleware(id);
});

// Consultar saldo da conta bancária
const constultarConta = ((conta) => {
    return constultarContaMidlleware(conta);
});



module.exports = {
    criarConta,
    listarContas,
    atualizarConta,
    excluirConta,
    constultarConta
}