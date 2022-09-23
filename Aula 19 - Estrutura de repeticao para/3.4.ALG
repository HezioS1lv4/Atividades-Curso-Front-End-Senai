algoritmo "semnome"
var
   c, numI, numF: inteiro
inicio
   escreva("Informe o inicio da contagem: ")
   leia(numI)

   escreva("Informe o final da contagem: ")
   leia(numF)

   se numF > numI entao
      para c<- numI ate numF passo 1 faca
         escreval(c)
      fimpara
   senao
         para c<- numI ate numF passo -1 faca
            escreval(c)
         fimpara
   fimse


fimalgoritmo