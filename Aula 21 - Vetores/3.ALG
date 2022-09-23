Algoritmo "semnome"
Var
nums1 : vetor [0..5] de inteiro
nums2 : vetor [0..5] de inteiro
cont : inteiro
Inicio

para cont de 0 ate 5 faca
   escreval("Digite um número:")
   leia(nums1[cont])
   nums2[cont] <- nums1[cont] * 5
fimpara
escreval()
escreval("Resultado:")
para cont de 0 ate 5 faca
   escreval(nums1[cont], " ", nums2[cont])
fimpara
escreval()
Fimalgoritmo