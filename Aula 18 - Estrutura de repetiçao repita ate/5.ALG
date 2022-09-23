Algoritmo "semnome"
var
n, Cont, Fat: inteiro
inicio

repita
escreval("Informe um número inteiro")
leia (n)
ate (n >= 0)
Cont <- 1
Fat <- 1
repita
Fat <- Fat * Cont
Cont <- Cont + 1
ate(cont > n)
escreva ("O fatorial de", n)
escreval(" é igual a", Fat)

fimalgoritmo