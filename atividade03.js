let Multiplicador = (precos, multiplicador) => {
    return precos.map(preco => preco * multiplicador);
};


let precos = [10, 20, 30, 40];
let multiplicador = 1.1; 
let precosaumentados = Multiplicador(precos, multiplicador);

console.log(precosaumentados); 
