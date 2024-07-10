let obter = (funcionarios) => {
    return funcionarios.map(funcionario => `${funcionario.Nome} ${funcionario.ultimo}`);
};

let funcionarios = [
    { Nome: 'João', ultimo: 'Silva' },
    { Nome: 'Maria', ultimo: 'Santos' },
    { Nome: 'Pedro', ultimo: 'Almeida' }
];

let nomesCompletos = obter(funcionarios);
console.log(nomesCompletos);
