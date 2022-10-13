const name = prompt('Informe o seu nome:')

let moreCity = prompt('Você já vistou alguma cidade').toLowerCase()
let cities = ""
let totalCity = 0

while(moreCity.trim() === "sim") {
    const city = prompt('Qual cidade: ')
    cities += ` - ${city}\n`
    totalCity ++

    moreCity = prompt('Você vistou mais alguma cidade: ')
}

alert(`
    Turista: ${name}
    Total de cidades visitadas: ${totalCity}
    cidades visitadas:\n ${cities}
`)
