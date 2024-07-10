let A = (usuarios) =>
    usuarios
        .filter(usuario => usuario.idade > 18)
        .map(usuario => usuario.nome.toUpperCase());


let usuarios = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 17 },
    { nome: 'Pedro', idade: 30 }
];

const nomesMaioresDe18 = A(usuarios);
console.log(nomesMaioresDe18); 
