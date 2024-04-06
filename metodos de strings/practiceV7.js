// criar algoritmo que retorne datas no seguinte formato
// 01/01/2014
// 21/02/2022

function imprimirData (dia, mes, ano) {
    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = String(mes).padStart(2, "0");

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}
imprimirData(1, 1, 2014);