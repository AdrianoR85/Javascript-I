let patients = ["Lara", "Triss", "Ciri"]
let option = ""

do {
    let showPatients = ""
    for(let index = 0; index < patients.length; index++) {
        showPatients += (index + 1) + "º - " + patients[index] + "\n"
    }

    console.log(showPatients)

    option = prompt(
    "Pacientes:\n" + showPatients 
     + "\nEscolha uma Opção: "
     + "\n1 - Novo Paciente"
     + "\n2 - Consultar paciente"
     + "\n3 - Sair"
    )

    switch(option) {
        case "1":
            const newPatient = prompt("Nome do Paciente: ")
            patients.push(newPatient)
            alert("Paciente " + newPatient + " adicionado na lista de espera")
            break
        case "2":
            const patientAttended = patients.shift()
            alert(patientAttended + " Foi removido da fila")
            break
        case "3":
            alert('Saindo...')
            break
        default:
            alert("Opção inválida")
            break
    }
} while(option !== "3")