Algoritmo "semnome"

Var

   impar,par,x, j,num, positivo, mediaPar, media: inteiro

Inicio

    x<-2

    j<-0

     enquanto j <> x faca

       escreva(" digite o valor: ")

       leia(num)

        se (num mod 2=0) e (num<>0) entao

          par <- par + 1

        fimse

        se (num mod 2<>0) e (num<>0) entao

          impar <- impar + 1

          fimse

        se (num > 0) entao

        positivo <- positivo + 1

        fimse

         media <- media + num

        se (num mod 2=0) e (num<>0) entao

         mediaPar <- mediaPar + num

         fimse

        j<-j+1

        x<-j+2

        se (num <= 0) entao

        x <- x-2

        fimse

     fimenquanto

          escreval("")

          escreval(" a media dos valores é ",media/j)

          escreval("")

          escreval(" a media dos valores pares é ",mediaPar/par)

          escreval("")

          escreval(" exitem " ,positivo, " numeros positivos ")

          escreval("")

          escreval("total de numeros impares ",impar," e total de numeros pares " ,par)

Fimalgoritmo