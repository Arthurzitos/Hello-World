const banco = require('../bancoDeDados.js');

class ErroHTTP extends Error {
    constructor(mensagem, statusCode) {
        super(mensagem);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
    }
}


const criarTransferencia = ((transferencia) => {
    const ultimoId = banco.transferencias.length;
    transferencia.id = ultimoId +1;

    banco.transferencias.push(transferencia);
    return transferencia;
});

const criarSaque = ((saque) => {
    const ultimoId = banco.saques.length;
    saque.id = ultimoId +1;

    banco.saques.push(saque);
    return saque;
});

const criarDeposito = ((deposito) => {
    const ultimoId = banco.depositos.length;
    deposito.id = ultimoId +1;

    banco.depositos.push(deposito);
    return deposito;
});

const depositarEmContaMidlleware = ((deposito) => {
    const index = banco.contas.findIndex(obj => obj.numero_conta === deposito.numero_conta && obj.agencia === deposito.agencia);

    if (deposito.valorDepositado <= 0) throw new ErroHTTP('O valor do deposito precisa ser maior que zero', 500);
    
    if (index === -1) throw new ErroHTTP('Conta inexistente', 500);
    
    banco.contas[index].saldo = banco.contas[index].saldo + deposito.valorDepositado;

    criarDeposito(deposito);

    return banco.contas[index];
});

const sacarDaContaMidlleware = ((saque) => {
    const index = banco.contas.findIndex(obj => obj.numero_conta === saque.numero_conta && obj.agencia === saque.agencia);
    
    if (saque.valorSacado <= 0 ) throw new ErroHTTP('Valor do saque precisa ser maior que zero', 500);

    if (index === -1) throw new ErroHTTP('Conta não encontrada, verifique os dados.', 500);

    if (banco.contas[index].senha !== saque.senha) throw new ErroHTTP('Senha incorreta.', 500);

    banco.contas[index].saldo = banco.contas[index].saldo - saque.valorSacado;

    criarSaque(saque);

    return banco.contas[index];

});

const transferirEntreContasMidlleware = ((transferencia) => {
    const indexDestinatario = banco.contas.findIndex(obj => obj.numero_conta === transferencia.contaDestinatario && obj.agencia === transferencia.agenciaDestinatario);
    const indexRemetente = banco.contas.findIndex(obj => obj.numero_conta === transferencia.contaRemetente && obj.agencia === transferencia.agenciaRemetente);

    if (indexDestinatario === -1) throw new ErroHTTP('Conta Destinatario Inexistente.', 500);
    if (indexRemetente === -1) throw new ErroHTTP('Conta Remetente Inexistente.', 500);
    if (transferencia.valorTransferido <= 0) throw new ErroHTTP('Valor da transferencia precisa ser maior do que zero.', 500);
    if (transferencia.valorTransferido > banco.contas[indexRemetente].saldo) throw new ErroHTTP('Saldo insuficiente.', 500);
    if (banco.contas[indexRemetente].senha !== transferencia.senhaRemetente) throw new ErroHTTP('Senha incorreta.', 500);

    banco.contas[indexRemetente].saldo = banco.contas[indexRemetente].saldo - transferencia.valorTransferido;
    banco.contas[indexDestinatario].saldo = banco.contas[indexDestinatario].saldo + transferencia.valorTransferido;

    criarTransferencia(transferencia);

    return 'Transferencia realizada com sucesso.';
});

const emitirExtratoMidlleware = ((conta) => {
    const index = banco.contas.findIndex(obj => obj.numero_conta === conta.numero_conta && obj.agencia === conta.agencia);
    if (index === -1) throw new ErroHTTP('Conta inexistente', 500);
    if (banco.contas[index].senha !== conta.senha) throw new ErroHTTP('Senha incorreta.', 500);

    let retorno = {
        saques: [],
        depositos: [],
        transferencias: []
    };

    retorno.saques = banco.saques.filter(obj => obj.numero_conta === conta.numero_conta);
    retorno.depositos = banco.depositos.filter(obj => obj.numero_conta === conta.numero_conta);
    retorno.transferencias = banco.transferencias.filter(obj => obj.contaRemetente === conta.numero_conta || obj.contaDestinatario === conta.numero_conta);

    return retorno;

});

module.exports = {
    depositarEmContaMidlleware,
    sacarDaContaMidlleware,
    transferirEntreContasMidlleware,
    emitirExtratoMidlleware
}