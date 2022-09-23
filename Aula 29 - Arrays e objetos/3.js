const input = require('readline-sync')
 
var mes = []

for(i = 0; i<=11;i++){
    mes.push(input.question('Digite um mes em numeros: '))
}
if(mes=1){
    mes='janeiro'
}

if(mes=2){
    mes='fevereiro'
}

console.log(mes)