const fname = prompt('Informe o seu primeiro nome: ');
const lastname = prompt('Informe o seu segundo nome: ')
const study = prompt('O que você está estudando? ')
const birthday = prompt('Qual o seu ano de nascimento? ')
const data = new Date();
const currentYear = data.getFullYear();

const age = currentYear - birthday;
console.log(age)

alert(` Novo recruta:
        Nome: ${fname} ${lastname}
        Campo de estudo: ${study} 
        Idade: ${age} ` 
)