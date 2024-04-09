// praticando com setInterval

const imprimir = () => {
    console.log("Imprimir");
    clearInterval(interval);
}

const interval = setInterval(imprimir, 1000);
