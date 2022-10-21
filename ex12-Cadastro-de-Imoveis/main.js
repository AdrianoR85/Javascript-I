let properties = []
let option = ""

do {
    const totalproperties = properties.length;
    option = prompt(
    "Imóveis Cadastrado: " + totalproperties + "\n"
     + "\nEscolha uma Opção: "
     + "\n1 - Cadastrar no Imóveil"
     + "\n2 - Listar Imóveis"
     + "\n3 - Sair"
    )

    switch(option) {
        case "1":
            const propertie = {}
            propertie.name = prompt("Nome do Proprietário: ")
            propertie.room = prompt('Quantidade de quartos: ')
            propertie.bath = prompt("Quantidade de banheiros: ")
            propertie.garage = prompt("Possui garagem? ")

            const save = confirm(
                "Deseja salvar este imóvel?\n" +
                "\nProprietário: " + propertie.name +
                "\nQuartos: " + propertie.room +
                "\nBanheiros: " + propertie.bath +
                "\nPossui garagem? " + propertie.garage
            )

            if (save) {
                properties.push(propertie)
            }
            break
        case "2":
            listProperties()
            // let showProperties = ""
            // for(let i = 0; i < properties.length; i++) {
            //     showProperties +=
            //     "\nProprietário: " + properties[i].name +
            //     "\nQuartos: " + properties[i].room +
            //     "\nBanheiros: " + properties[i].bath +
            //     "\nPossui garagem? " + properties[i].garage + "\n"
            // }
            // alert("Propriedades:\n" + showProperties)
            break
        case "3":
            alert('Saindo...')
            break
        default:
            alert("Opção inválida")
            break
    }
} while(option !== "3")

function listProperties() {
    const showProperties = properties.reduce((textStart, propertie, indice) => {
        textStart += "Propriedade: " +  propertie.name 
        textStart += "\nQuartos: " +  propertie.room 
        textStart += "\nBanheiros: " +  propertie.bath 
        textStart += "\nGaragem: " +  propertie.garage + "\n"
        return textStart
    }, "")

    alert(showProperties)
}