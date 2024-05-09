const banco = require('../bancoDeDados.js');

class ErroHTTP extends Error {
    constructor(mensagem, statusCode) {
        super(mensagem);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
    }
}

// criar conta bancária
const criarContaMidlleware = ((conta) => {
    const ultimoId = banco.contas.length;
    conta.id = ultimoId +1;
    conta.saldo = 0;

    const index = banco.contas.findIndex(obj => obj.numero_conta === conta.numero_conta);

    if (index !== -1) {
        throw new ErroHTTP('Já existe uma conta com este número.', 500);
    }

    banco.contas.push(conta);
    return conta;
});

// atualizar conta bancária
const atualizarContaMidlleware = ((id, novaConta) => {
    const index = banco.contas.findIndex(obj => obj.id === Number(id));
    if (index !== -1) {
        banco.contas[index] = novaConta;
        return banco.contas[index] 
    }
    throw new ErroHTTP('Conta não encontrada', 404);
})

// excluir conta bancária
const excluirContaMidlleware = ((id) => {
    const index = banco.contas.findIndex(obj => obj.id === Number(id));
    if (index !== -1) {
        banco.contas.splice(index, 1);
        return 'Conta removida!';
    }
    throw new ErroHTTP('Conta não encontrada', 404);
});

const constultarContaMidlleware = ((conta) => {
    const index = banco.contas.findIndex(obj => obj.numero_conta === conta.numero_conta && obj.agencia === conta.agencia);
    if (index === -1) throw new ErroHTTP('Conta inexistente', 500);
    if (banco.contas[index].senha !== conta.senha) throw new ErroHTTP('Senha incorreta.', 500);

    return banco.contas[index];
});

module.exports = {
    criarContaMidlleware,
    atualizarContaMidlleware,
    excluirContaMidlleware,
    constultarContaMidlleware
}