/*
    Faça uma função que tem um parâmetro
    chamado idade e que determina a faixa
    etária de uma pessoa a partir dessa idade.

    21 anos ou menos -> Jovem
    22 a 65 anos -> adulto
    66 ou mais anos -> idoso

    sua função deverá retornar um string que 
    informa se a pessoa é jovem, adulto ou idoso.
*/

// recebo a idade
// verifico se é menor ou igual a 18
// 

function verificaIdade(idade) {
    if (idade <= 21) {
        // jovem
        console.log(`Sou uma pessoa Jovem`);
    } else if (idade < 66) {
        //adulto
        console.log(`Sou uma pessoa Adulta`);
    } else {
        // idoso
        console.log(`Sou uma pessoa Idosa`);
    }
}

verificaIdade(70);