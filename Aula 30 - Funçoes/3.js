var input = require('readline-sync')

console.log('')
console.log('(Questão 03')
console.log('Informe 5 valores e retorne os pares')
console.log('')

var vetor = []
var c = 0

for(let i=0; i <=4;i++){
    c++
    vetor.push(input.question(`Informe o ${c} numero: `))
}

console.log(vetor.filter( (v)=> v % 2 == 0))
