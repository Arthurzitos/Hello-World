const banco = require('../bancoDeDados.js');

class ErroHTTP extends Error {
    constructor(mensagem, statusCode) {
        super(mensagem);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
    }
}

const {
    depositarEmContaMidlleware,
    sacarDaContaMidlleware,
    transferirEntreContasMidlleware,
    emitirExtratoMidlleware

} = require('../intermediarios/validarMovimentacaoEmContas.js');

// Depósitar em uma conta bancária
const depositarEmConta = ((deposito) => {
    try {
        return depositarEmContaMidlleware(deposito);
    } catch (error) {
        throw new ErroHTTP(error.message, error.statusCode);
    }
});

// Sacar de uma conta bancária
const sacarDaConta = ((saque) => {
    return sacarDaContaMidlleware(saque);
});

// Transferir valores entre contas bancárias
const transferirEntreContas = ((transferencia) => {
    return transferirEntreContasMidlleware(transferencia);
});

// Emitir extrato bancário
const emitirExtrato = ((conta) => {
    return emitirExtratoMidlleware(conta);
});

module.exports = {
    depositarEmConta,
    sacarDaConta,
    transferirEntreContas,
    emitirExtrato
}