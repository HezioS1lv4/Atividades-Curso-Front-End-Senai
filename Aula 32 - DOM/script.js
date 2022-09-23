var dt_nascimento = document.getElementById('dt_nascimento')
var bnt = document.getElementById('btn')
var sexo = document.getElementsByName('sexo')
var resultado = document.getElementById('resultado')
var img = document.getElementById('img')

function calcular(){
    var date = new Date()
    var anoAtual = date.getFullYear()
    var idade = anoAtual - dt_nascimento.value

    if(sexo[0].checked){
        resultado.innerHTML = `<h4>Homem com ${idade} anos</h4>`

        if(idade < 10){
            img.src = 'imagens/menino.jpg'
        } else if(idade < 26){
            img.src = 'imagens/meninoAdolescente.jpg'
        } else if(idade < 60){
            img.src = 'imagens/homem.jpg'
        } else{
            img.src = 'imagens/homem_idoso.jpg'
        }
    } else if(sexo[1].checked){
        resultado.innerHTML= `<h4>Mulher com ${idade} anos!</h4>`

        if(idade < 10){
            img.src = 'imagens/menina.jpg'
        } else if(idade < 26){
            img.src = 'imagens/meninaAdolescente.jpg'
        } else if(idade < 60){
            img.src = 'imagens/mulher.jpg'
        } else{
            img.src = 'imagens/mulher_idosa.jpg'
        }
    }
}