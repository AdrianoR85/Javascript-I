// var - global e pode ser alterada
// globa e can be modified
var ano = '2022';
console.log(ano);

// let - contém um escopo e pode ser alterada.
// Exist a scope but cannot be modified
let dia = 25;
console.log(dia); // 25
dia = 30
console.log(dia) // 30

// const - contém um escopo e não se altera.
// Exist a scope but cannot be modified
const mes = 'Maio';
console.log(mes)
mes = 'Agosto'
console.log(mes); // Uncaught TypeError TypeError: Assignment to constant variable.
