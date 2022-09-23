Algoritmo "semnome"
Var
nomes : vetor [0..4] de caractere
cont : inteiro

Inicio
para cont de 0 ate 4 faca
   escreval("Entre com um nome:")
   leia(nomes[cont])
fimpara

escreval()
escreval("Os nomes digitados foram:")

para cont de 0 ate 4 faca
   escreval(nomes[cont])
fimpara
escreval()

escreval("Os nomes digitados em ordem inversa foram:")
para cont de 4 ate 0 passo - 1 faca
   escreval(nomes[cont])
fimpara
Fimalgoritmo