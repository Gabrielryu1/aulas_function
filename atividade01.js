let part = [
    {nome: "orochimaru", idade: 25},
    {nome: "sarutobi", idade: 75},
    {nome: "minato", idade: 22}
];


let verific = part => `o nome do meliante e ${part.nome}, a idade e ${part.idade}`;


let idadespares = participantes => participantes
    .map(participante => participante.idade)
    .filter(idade => idade % 2 === 0);


let idadesPares = idadespares(part);

console.log(idadesPares); 
