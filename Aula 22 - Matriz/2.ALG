Algoritmo "semnome"
var
vetA:vetor[1..5,1..5] de real
vetB:vetor[1..5,1..5] de real
i,j:inteiro

inicio

para i de 1 ate 5 faca
     para j de 1 ate 5 faca
          escreva("Digite os numeros: [",i, " + ", j, " ] ")
          leia(vetA[i,j])
     fimpara
fimpara

para i de 1 ate 5 faca
     para j de 1 ate 5 faca
          escreva(vetA[i,j]:7)
     fimpara
     escreval("")
fimpara

para i de 1 ate 5 faca
     para j de 1 ate 5 faca
          vetB[i,j]<- (vetA[i,j]^3)
     fimpara
fimpara

para i de 1 ate 5 faca
     para j de 1 ate 5 faca

          escreva(vetB[i,j]:7)

     fimpara
     escreval("")
fimpara

fimalgoritmo