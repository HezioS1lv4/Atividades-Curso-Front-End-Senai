const input = require('readline-sync')
console.log(`Nesse console iremos ler a base de um triangulo e calcular a sua área`)
var b = Number(input.question(`Digite a base do triangulo: `))
var a = Number(input.question(`Digite a altura do triangulo? `))

var area = (b*a)/2

console.log(`A área do triângulo é de acordo com a base (${b}) e a
altura (${a}): ${area}`)