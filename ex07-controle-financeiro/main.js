let option = ""
let balance = parseFloat(prompt('informe o valor disponível: '))

do {
    option = prompt("Saldo disponível: $" + balance
    + "\nO que você deseja fazer? \n"
    + "1 - Depositar\n"
    + "2 - Sacar\n"
    + "3 - Sair\n"
   )

   switch(option) {
    case "1":
        const deposit = parseFloat(prompt('Valor do deposito: '))
        balance += deposit
        break
    case "2":
        const withdraw = parseFloat(prompt('Valor do saque: '))
        if(balance >= withdraw) {
            balance -= withdraw
        } else {
            alert("Saldo Insufuciente para saque.")
        }
        break
    case "3":
        alert("Volte sempre...")
        break
    default:
        alert("Opção inválida")
        break
   }

} while(option !== "3")