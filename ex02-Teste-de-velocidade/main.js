const carName01 = prompt('Nome carro 01: ')
const carSpeed01 = prompt('Velocidade do carro 01: ')
const carName02 = prompt('Nome do carro 02: ')
const carSpeed02 = prompt('Velocidade do carro 02: ')


if(carSpeed01 > carSpeed02) {
    alert(`O ${carName01} é mais rápido`)
} else if(carSpeed01 < carSpeed02) {
    alert(`O ${carName02} é mais rápido`)
} else {
    alert('Os dois carro estão na mesma velocidade.')
}