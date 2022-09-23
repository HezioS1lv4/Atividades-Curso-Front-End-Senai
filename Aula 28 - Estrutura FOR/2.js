const input = require('readline-sync')

var inicio = Number(input.question('Digite por onde quer comecar: '))
var final = Number(input.question('Digite onde quer terminar: '))


for(i=inicio;i<=final;i++){
    console.log('Numero'+ i)
}