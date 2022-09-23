var input = require('readline-sync')

console.log('')
console.log('Questao 04')
console.log('Informe 5 numeros e guarde esses valores dentro de um array, e depois retorne o dobro dos valores informados')
console.log('')

var vetor = []
var c = 0

for(let i = 0; i <= 4; i++){
    c++
    vetor.push(input.question(`Informe o ${c} numero: `))
}
console.log(vetor.map((v) => v * 2))