var txtInicio = document.getElementById("numeroInicial")
var txtInicio = document.getElementById("numeroInicial")
var txtFinal = document.getElementById("numeroFinal")
var btn = document.getElementById("btn")
var resultado = document.getElementById("resultado")


function contar(){
    var inicio = Number(txtInicio.value)
    var final = Number(txtFinal.value)
    var resultado = inicio.value + final.value

    
    resultado.innerHTML =` <H4>aaaaaa ${resultado}</H4>`
    }

