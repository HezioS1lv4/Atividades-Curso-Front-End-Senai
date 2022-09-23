Algoritmo "semnome"

var

Altura : real

sexo : caractere

inicio

escreval("Será digitado a altura de alguém masculino ou feminino? ")

escreva("m / f")

leia(sexo)

enquanto (sexo <> " ") ou (sexo <> "") faca

    escreva("Digite a altura: ")

    leia(Altura)

    se sexo = "m" entao

         escreval((72 * Altura) - 58)

    fimse

    se sexo = "f" entao

         escreval((62 * Altura) - 44)

    fimse

    escreval("Será digitado a altura de alguém masculino ou feminino? ")

    escreval("m / f")

    escreva("Aperte enter se desejar parar o programa")

    leia(sexo)

fimenquanto

Fimalgoritmo