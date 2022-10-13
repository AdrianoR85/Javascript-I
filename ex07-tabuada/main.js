const number = Number(prompt('Robo da Tabuada\n Você deseja ver a tabuada de qual número? '))
let multiplicationTable = ""

for(let index = 1; index < 21; index++){
    result = number * index
    multiplicationTable += `${number} x ${index} = ${result}\n`
} 

alert(
    "Resultado da tabuada do " + number + "\n" + multiplicationTable
)