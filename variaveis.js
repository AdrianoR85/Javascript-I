// var - global e pode ser alterada
var ano = '2022';
console.log(ano);

// let - contém um escopo e pode ser alterada.
let dia = 25;
console.log(dia); // 25
dia = 30
console.log(dia) // 30

// const - contém um escopo e não se altera.
const mes = 'Maio';
console.log(mes)
mes = 'Agosto'
console.log(mes); // Uncaught TypeError TypeError: Assignment to constant variable.
