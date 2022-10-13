const fname = prompt('Informe o seu primeiro nome: ');
const lastname = prompt('Informe o seu segundo nome: ')
const study = prompt('O que você está estudando? ')
const birthday = prompt('Qual o seu ano de nascimento? ')

const age = 2022 - birthday;
console.log(age)

alert(` Novo recruta:
        Nome: ${fname} ${lastname}
        Campo de estudo: ${study} 
        Idade: ${age} ` 
)