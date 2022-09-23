var txtInicio = document.getElementById("numeroInicial")
var txtFinal = document.getElementById("numeroFinal")
var txtPasso = document.getElementById("passo")
var btn = document.getElementById("btn")
var resultado = document.getElementById("resultado")


function contar(){
    let inicio = Number(txtInicio.value)
    let final = Number(txtFinal.value)
    let passo = Number(txtPasso.value)

    for(let c = inicio; c <= final; c += passo){
        resultado.innerHTML += ` <span></span> ${c}`
    }
}