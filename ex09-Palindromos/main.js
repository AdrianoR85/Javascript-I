const word = prompt('Digite uma palavra: ')
let invertedWord = ''           

for(let index = word.length - 1; index >= 0; index --) {
    invertedWord += word[index]
}

if( word.split(' ').join('') === invertedWord.split(' ').join('')) {
    alert(`${word} é um palímetro!`)
} else {
    alert(`${word} não é um palímetro
           ${word} !== ${invertedWord}
    `)
}
