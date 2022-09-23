const input = require('readline-sync')
var num1 = Number(input.question(`Digite um numero: `))
var num2 = Number(input.question(`Digite outro numero: `))

var soma = num1 + num2

console.log(`A soma dos numeros digitados é de: ${soma}`)

