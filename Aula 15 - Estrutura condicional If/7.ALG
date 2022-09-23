Algoritmo "semnome"

Var

n1, n2, n3, n4, n5 : real

inicio

  escreva("Qual 1º valor: ")

  leia(n1)

  escreva("Qual 2º valor: ")

  leia(n2)

  escreva("Qual 3º valor: ")

  leia(n3)

  escreva("Qual 4º valor: ")

  leia(n4)

  escreva("Qual 5º valor: ")

  leia(n5)

  se ((n1 > n2) e (n1 > n3) e (n1 > n4) e (n1 > n5)) entao

     escreval( "O maior valor digitado foi : " , n1)

  fimse

  se ((n2 > n1) e (n2 > n3) e (n2 > n4) e (n2 > n5)) entao

     escreval( "O maior valor digitado foi : " , n2)

  fimse

  se ((n3 > n1) e (n3 > n2) e (n3 > n4) e (n3 > n5)) entao

     escreval( "O maior valor digitado foi : " , n3)

  fimse

  se ((n4 > n1) e (n4 > n2) e (n4 > n3) e (n4 > n5)) entao

     escreval( "O maior valor digitado foi : " , n4)

  fimse

  se ((n5 > n1) e (n5 > n2) e (n5 > n3) e (n5 > n4)) entao

     escreval( "O maior valor digitado foi : " , n5)

  fimse



  se ((n1 < n2) e (n1 < n3) e (n1 < n4) e (n1 < n5)) entao

     escreval( "O menor valor digitado foi : " , n1)

  fimse

  se ((n2 < n1) e (n2 < n3) e (n2 < n4) e (n2 < n5)) entao

     escreval( "O menor valor digitado foi : " , n2)

  fimse

  se ((n3 < n1) e (n3 < n2) e (n3 < n4) e (n3 < n5)) entao

     escreval( "O menor valor digitado foi : " , n3)

  fimse

  se ((n4 < n1) e (n4 < n2) e (n4 < n3) e (n4 < n5)) entao

     escreval( "O menor valor digitado foi : " , n4)

  fimse

  se ((n5 < n1) e (n5 < n2) e (n5 < n3) e (n5 < n4)) entao

     escreval( "O menor valor digitado foi : " , n5)

  fimse
Fimalgoritmo