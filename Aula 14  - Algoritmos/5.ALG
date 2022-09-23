Algoritmo "semnome"


Var

 F: real
 C: real
 
 usuario: inteiro
 dt_nascimento: inteiro
 ano: inteiro
 idade:inteiro

Inicio

escreva("qual o  nome de usuario?")
leia(usuario)

escreva("qual a data de nascimento? ")
leia(dt_nascimento)

escreva("qual o  ano atual? ")
leia(ano)

idade <- ano - dt_nascimento
escreva("a sua idade é de:",idade)

Fimalgoritmo