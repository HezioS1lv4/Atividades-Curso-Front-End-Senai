var input = require('readline-sync')

console.log('')
console.log('Questao 05')
console.log('Informe um numero inicial e final e depois retorne  do valor inicial ate o final.')
console.log('')

function cont(i,f){
    if(i <= f){
        while(i <= f){
            console.log(i++)
        }
    }
    if(i >= f){
        while(i >= f){
            console.log(i--)
        }
    }
}

var v1 = []
var v2 = []

  v1.push(input.question('Informe o numero Inicial: '))
  v2.push(input.question('Informe o numero Final: '))

var conta = cont(v1,v2)

console.log(conta)