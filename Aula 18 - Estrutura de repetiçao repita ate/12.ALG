

Var
c: inteiro
n: inteiro
cont:inteiro

Inicio
cont <- 1
repita
      escreval("                 ")
      escreval("|===============|")
      escreval("|     MENU      |")
      escreval("|===============|")
      escreval("|===============|")
      escreval("| [1] de 1 a 10 |")
      escreval("| [2] de 10 a 1 |")
      escreval("| [3] para sair |")
      escreval("=================")
      leia(n)
      escolha (n)
      caso 1
           n <- 1
           c <- 1
           repita
                 escreva(c)
                 c <- c + 1
           ate(c > 10)
      caso 2
           n <- 2
           c <- 10
      repita
            escreva(c)
            c <- c - 1
            ate(c < 1)
      caso 3
           n <- 3
           se (n > 2) entao
           cont <- cont + 1
           fimse
      fimescolha
ate(cont > 1)
limpatela
escreva("Saindo...")