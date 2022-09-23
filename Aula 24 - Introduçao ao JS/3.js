const input = require('readline-sync')
var num1 = Number(input.question(`Digite o 1o numero: `))
var num2 = Number(input.question(`Digite o 2o numero: `))
var num3 = Number(input.question(`Digite o 3o numero: `))
var num4 = Number(input.question(`Digite o 4o numero: `))

var media = (num1 + num2 + num3 + num4) / 4

console.log(`A média dos numeros digitados é de: ${media}`)
