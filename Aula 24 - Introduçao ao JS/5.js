const input = require('readline-sync')
var An = Number(input.question(`Digite o seu ano de nascimento: `))
var Ao = Number(input.question(`Em que anos estamos? `))


var i = (Ao - An)

console.log(`Sua idade de acordo com o ano ${Ao} é de: ${i}`)