const txtCep = document.querySelector("#cep")
const txtEndereco = document.querySelector("#endereco")
const txtBairro = document.querySelector("#bairro")
const txtUf = document.querySelector("#uf")
const txtEstado = document.querySelector("#estado")
const txterro = document.querySelector("span#erro")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")
const linguagens = document.getElementsByName('l')

console.log(typeof(linguagens))

var array = [linguagens[0], linguagens[1], linguagens[2]]

const toggleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

txtCep.addEventListener('keypress', (e)=>{
    const soNumeros = /[0-9]/
     const key = String.fromCharCode(e.keyCode)

     if(!soNumeros.test(key)){
        e.preventDefault()
     }
})

txtCep.addEventListener('keyup', (e)=>{
    const valorInput = e.target.value
    if(valorInput.length == 8){
        pegarCep(valorInput)
    }
})

const preencherCampos = async (cep)=>{
    setTimeout(toggleModal,3000)

    txtEndereco.value = cep.logradouro
    txtBairro.value = cep.bairro
    txtEstado.value = cep.localidade
    txtUf.value = cep.uf
}

const limparCampos = async()=>{
    txtEndereco.value = ""
    txtBairro.value = ""
    txtEstado.value = ""
    txtUf.value = ""
}


const pegarCep = async (cepCompleto)=>{
    const url = `https://viacep.com.br/ws/${cepCompleto}/json/`

    const reposta = await fetch(url)
    const dados = await reposta.json()
    console.log(dados)

    //metodo que verifica se existe a propriedade passada como parametro
    if(dados.hasOwnProperty('erro')){
       txterro.innerHTML = 'CEP INVALIDO!' 
       limparCampos()
    } else{
        toggleModal()
        txterro.innerHTML = ""
        preencherCampos(dados)
    }  
}


    // linguagens[2].addEventListener('click', ()=>{
    //     toggleModal()
    // })
    // array.map((elemento)=>{
    //     elemento.addEventListener('click', ()=>{
    //         toggleModal()
    //     })
    // })

    linguagens.forEach((elemento)=>{
        elemento.addEventListener('click',()=>{
            toggleModal()
        })
    })
    // linguagens.values.map((elemento)=>{
    //     elemento.addEventListener('click',()=>{
    //         toggleModal()
    //     })
    // })



    // linguagens[1].addEventListener('click',()=>{
    //     setTimeout(toggleModal,2000) 
    // })
    // linguagens[2].addEventListener('click',()=>{
    //     setTimeout(toggleModal,2000) 
    // })
    // linguagens[0].addEventListener('click',()=>{
    //     setTimeout(toggleModal,2000) 
    // })

    
