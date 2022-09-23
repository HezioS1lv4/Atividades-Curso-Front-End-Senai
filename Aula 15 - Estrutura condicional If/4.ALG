Algoritmo "semnome"

Var

num1: real
num2: real
num3: real
num4: real
media: real

Inicio

escreva("Escreva sua 1a nota: ")
leia(num1)

escreva("Escreva sua 2a nota: ")
leia(num2)

escreva("Escreva sua 3a nota: ")
leia(num3)

escreva("Escreva sua 4a nota: ")
leia(num4)

media <- (num1 + num2 + num3 + num4) /4

se media >=6 entao
escreva("Aprovado")
senao
escreva("Reprovado")
fimse

Fimalgoritmo