let resp = ""
do {
    resp = prompt("Escolha uma das opções abaixo:\n"
    + "1 - Comprar\n"
    + "2 - Vender\n"
    + "3 - Alugar\n"
    + "4 - Emprestar\n"
    + "5 - Encerrar\n"
   )

   if(resp !== "encerrar") alert(`A opção escolhida foi a ${resp}`)
} while(resp !== "5")