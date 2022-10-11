const valueInMeters = Number(prompt('Medida em metros: '))
const measureOfType = Number(prompt(
   ` Escolha uma das medidas abaixo: 
    1 - milímetro (mm)
    2 - centímetro (cm)
    3 - decímetro (dm)
    4 - decâmetro (dam)
    5 - hectômetro (hm)
    6 - quilômetro (km)
 `));
 let result = 0
 let message = ""

 switch(measureOfType){
    case 1:
        result = valueInMeters  * 1000
        alert(`${valueInMeters} metro (m) equivale a ${result} milímetro (mm)`)
        break
    case 2:
        result = valueInMeters  * 100
        alert(`${valueInMeters} metro (m) equivale a ${result} centímetro (cm) `)
        break
    case 3:
        result = valueInMeters  * 10
        alert(`${valueInMeters} metro (m) equivale a ${result} decímetro (dm)`)
        break
    case 4:
        result = valueInMeters  / 10
        alert(`${valueInMeters} metro (m) equivale a ${result} decâmetro (dam)`)
        break
    case 5:
        result = valueInMeters  / 100
        alert(`${valueInMeters} metro (m) equivale a ${result} hectômetro (hm)`)
        break
    case 6:
        result = valueInMeters  / 1000
        alert(`${valueInMeters} metro (m) equivale a ${result} quilômetro (km)`)
        break
    default:
        alert(`Opção Inválida`)
 }
