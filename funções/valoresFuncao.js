// verificar se uma pessoa é maior de idade

function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        // maior de idade
        return true;
    } else {
        //menor de idade
        return false;
    }
}

const retornoFuncao =  verificarMaiorIdade(20);