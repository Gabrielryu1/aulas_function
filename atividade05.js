let contarPalavra = (palavras, palavraEspeci) =>
    palavras.filter(palavra => palavra.toLowerCase() === palavraEspeci.toLowerCase()).length;


let paragrafo = [
    "Este", "é", "um", "exemplo", "é", "parágrafo", "onde", "exemplo", "é", "uma", "palavra", "repetida"
];
let palavraProcurada = "é";

let resultado = contarPalavra(paragrafo, palavraProcurada);
console.log(resultado); 
