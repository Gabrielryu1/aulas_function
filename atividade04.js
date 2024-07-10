let verificarpalindromo = A => {
  
    A = A.toLowerCase().replace(/[\W_]/g, '');

    return A === A.split('').reverse().join('');
};

console.log(verificarpalindromo("Ame a ema")); 
console.log(verificarpalindromo("Reviver")); 
console.log(verificarpalindromo("Luz azul")); 