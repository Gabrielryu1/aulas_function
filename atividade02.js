const ler = require('readline-sync');

let A = ler.question("Digite uma frase pequena: ");

let contar= frase => frase.length;

let quantidadeDeCaracteres = contar(A);

console.log(`A frase "${A}" possui ${quantidadeDeCaracteres} caracteres.`);
