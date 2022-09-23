var input = require('readline-sync')

console.log('')
console.log('Questao 02')
console.log('Informe 4 notas para saber a media')
console.log('')

var media = (n1,n2,n3,n4) => (n1 + n2 + n3 + n4) /4

for(var i = i; i <= 1; i++){
    var n1 = input.question('Informe a nota 1: ')
    var n2 = input.question('Informe a nota 2: ')
    var n3 = input.question('Informe a nota 3: ')
    var n4 = input.question('Informe a nota 4: ')
}
var mediaA = media(n1,n2,n3,n4)
console.log(`A média das notas informadas é: ${media} Pontos`)
