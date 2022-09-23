const input = require('readline-sync')
var f = Number(input.question(`Digite a temperatura em Fahrenheit: `))

var c = (5*(f-32)/9)

console.log(`A temperatura em Fahrenheit é de ${f} 
e sua correspondente em Celsius é de: ${c}`)