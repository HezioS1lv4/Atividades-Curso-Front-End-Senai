const input = require('readline-sync')

//var alunos = ['Yan','Ruivin','Dudu','Juju','Jon','Baruque','Caio','Freitas','Hezio','Zeri']
//var notas = [5,7,6,9,1,6,2,7,6,14]

//for(let i = 0; i<alunos.length;i++){
//    console.log(`Aluno: ${alunos[i]}`)
//    console.log(`Nota: ${notas[i]}`)
//}

//var pessoa = [
//    {
//       nome: 'yan',
//       nota: 5
//    },
//    {
//       nome: 'ruivo',
//       nota: 7
//    },
//    {
//        nome: 'dudu',
//        nota: 6
//    },
//    {
//        nome: 'juju',
//        nota: 9
//     },
//     {
//         nome: 'jon',
//         nota: 1
//     },
//     {
//         nome: 'baruque',
//         nota: 6
//     },
//     {
//         nome: 'caio',
//         nota: 2
//     },
//     {
//         nome: 'freitas',
//         nota: 7
//     },
//     {
//         nome: 'hezio',
//         nota: 6
//     },
//     {
//         nome: 'zeri',
//         nota: 14
//     }
// ]
// console.log(`Aluno: ${pessoa[0].nome}`)
// console.log(`Nota: ${pessoa[0].nota}`)

// var media = (pessoa[0].nota+pessoa[1].nota+pessoa[2].nota+pessoa[3].nota+pessoa[4].nota+pessoa[5].nota+pessoa[6].nota+pessoa[7].nota+pessoa[8].nota+pessoa[9].nota) /10
// console.log(`A media da turma é: ${media}`)

// console.log(`A maior nota da sala foi: ${mn}`)


var aluno = []
var nota = []
var media = []
var maiorNota= 0
var alunoMaior

for(let i = 0; i<=2; i++){
    aluno.push(input.question('Aluno: '))
    nota.push(input.questionFloat('Nota: '))
    if(nota[i] > maiorNota){
        maiorNota = nota[i]
        alunoMaior = aluno[i]
    }
}

for(i = 0; i< aluno.length;i++){
    console.log(`O aluno: ${aluno[i]}`)
    console.log(`Nota: ${nota[i]}`)
    console.log(``)
}
console.log('A maior nota foi de ',alunoMaior, 'com: ',maiorNota)