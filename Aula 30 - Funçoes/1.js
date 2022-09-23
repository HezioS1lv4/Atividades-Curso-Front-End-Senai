var input = require('readline-sync')

console.log('')
console.log('Questao 01')
console.log('Informe 2 numeros e imprima a soma dos dois')
console.log('')

var soma = (a,b) => a + b
var c = 0

    var quest1 = Number(input.question('Informe o primeiro numero: '))
    var quest2 = Number(input.question('Informe o segundo numero: '))

var somar = Number(soma(quest1,quest2))

console.log(`A soma entre (${quest1} e ${quest2}) = ${somar}`)