const number = Number(prompt('Robo da Tabuada\n Você deseja ver a tabuada de qual número? '))
let multiplicationTable = ""
let index = 1
do {
    result = number * index
    multiplicationTable += `${number} x ${index} = ${result}\n`
    index ++
} while (index < 21)

alert(
    "Resultado da tabuada do " + number + "\n" + multiplicationTable
)