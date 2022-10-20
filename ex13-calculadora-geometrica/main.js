let base;
let base2;
let height;
let length
let side;
let radius;

do {
    let option = showMenu()
    calculator(option)
} while(option !== "6")


function showMenu() {
    option = prompt(
        "Calculadora Geométrica\n"
         + "\nEscolha uma Opção: "
         + "\n1 - área do triângulo"
         + "\n2 - área do retângulo"
         + "\n3 - área do quadrado"
         + "\n4 - área do trapézio"
         + "\n5 - área do círculo"
         + "\n6 - Sair"
        )
    return option
}

function areaOfTriangle(base, height) {
    return (base * height) / 2
}

function areaOfRectangle(length, height) {
    return length * height
}

function areaOfSquare(side) {
    return side * 2
}

function areaOfTrapezoid(base1, base2, height) {
    return ((base1 + base2) * height) / 2
}

function areaOfCircle(radius) {
    return Math.PI * (radius**2)
}

function calculator(option) {
    switch(option) {
        case "1":
            base = parseFloat(prompt("Informe o valor da base"))
            height = parseFloat(prompt("Informe o valor da altura"))
            alert("A área do triangulo é " + areaOfTriangle(base, height))
            break
        case "2":
            base = parseFloat(prompt("Informe o valor da base"))
            height = parseFloat(prompt("Informe o valor da altura"))
            alert("A área do retangulo é " + areaOfRectangle(base, height))
            break
        case "3":
            side = parseFloat(prompt("Informe o valor dos lados"))
            alert("A área do quadrado é " + areaOfSquare(side))
            break
        case "4":
            base = parseFloat(prompt("Informe o valor da base maior"))
            base2 = parseFloat(prompt("Informe o valor da base menor"))
            height = parseFloat(prompt("Informe o valor da altura"))
            alert("A área do trapézio é " + areaOfTrapezoid(base, base2, height))
            break
        case "5":
            radius = parseFloat(prompt("Informe o valor do raio"))
            alert("A área do circulo é " + areaOfCircle(radius))
            break
        case "6":
            alert('Finalizando...')
            break
        default:
            alert("Opção inválida")
            break
    }
}

