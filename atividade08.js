let Aprovados = (alunos) => {
    let nomesAprovados = [];

    for (let aluno of alunos) {
        if (aluno.nota >= 60) {
            nomesAprovados.push(aluno.nome.toUpperCase());
        }
    }

    return nomesAprovados;
};

let alunos = [
    { nome: 'João', nota: 85 },
    { nome: 'Maria', nota: 50 },
    { nome: 'Pedro', nota: 70 }
];

const nomesAprovados = Aprovados(alunos);
console.log(nomesAprovados); 
