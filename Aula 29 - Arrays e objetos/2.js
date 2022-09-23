const input = require('readline-sync')

var num = []
var p 
var i 

for(i=0; i<=9; i++){
    num.push(input.question('Digite um numero: '))
}

console.log(`A quantidade de pares e impares é de: ${p},${i}`)
    
// }
// while(num<=10){
//     num.push(input.question('Digite um numero: '))
    
//     if(num % 2 == 0){
//         a = p
//         p = p + 1
//     }
//     else{
//         a = i
//         i = i + i
//     }
// }
