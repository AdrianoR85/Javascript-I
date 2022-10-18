let cards = []
let option = ""

do {

    const totalCards = cards.length;
    option = prompt(
    "Total de Cartas no barralho: " + totalCards 
     + "\nEscolha uma Opção: "
     + "\n1 - Adicionar uma carta"
     + "\n2 - Puxar um carta"
     + "\n3 - Sair"
    )

    switch(option) {
        case "1":
            const newCard = prompt("Nome da Carta: ")
            cards.unshift(newCard)
            alert("Nova carta adicionada")
            break
        case "2":
            const takeCard = cards.shift()
            alert(takeCard)
            break
        case "3":
            alert('Saindo...')
            break
        default:
            alert("Opção inválida")
            break
    }
} while(option !== "3")