module.exports = {
    banco: {
        nome: 'Cubos Bank',
        numero: '123',
        agencia: '0001',
        senha: 'Cubos123Bank'
    },

    contas: [{
        id: 1,
        numero_banco: '123',
        titular: 'Fulano',
        numero_conta: '4567',
        agencia: '0001',
        senha: 'Cubos123Bank',
        saldo: 100
    },
    {
        id: 2,
        numero_banco: '123',
        titular: 'Ciclano',
        numero_conta: '1234',
        agencia: '0001',
        senha: 'Cubos123Bank',
        saldo: 100
    }],

    saques: [{
        id: 1,
        numero_conta: '4567',
        agencia: '0001',
        senha: 'Cubos123Bank',
        valorSacado: 100
    }],

    depositos: [{
        id: 1,
        numero_conta: '4567',
        agencia: '0001',
        valorDepositado: 100
    }],

    transferencias: [
        {
            id: 1,
            contaRemetente: '4567',
            agenciaRemetente: '0001',
            senhaRemetente: 'Cubos123Bank',
            contaDestinatario: '1234',
            agenciaDestinatario: '0001',
            valorTransferido: 100
        }
    ]
}