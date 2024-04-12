// criar uma função que verifique dentro de um array se existe algum nome de arquivo que termine em .bat
// se sim:
    // exibir em tela: virus detectado
// se nao:
    // exibir em tela: nenhum virus detectado


const arquivos = ['index.html', 'script.js', 'style.css', 'config.exe'];

const verificaVirus = (arrayArquivo) => {
    const resultado = arrayArquivo.some((arquivo) => {
        const validaExtensao = arquivo.indexOf('.bat');
        return validaExtensao !== -1;
    });

    if (resultado){
        console.log("Vírus detectado");
    } else {
        console.log("Nenhum Vírus detectado");
    };

}

verificaVirus(arquivos);
