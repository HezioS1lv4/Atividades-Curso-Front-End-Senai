const txtCep = document.querySelector("#cep")
const txtEndereco = document.querySelector("#endereco")
const txtBairro = document.querySelector("#bairro")
const txtUf = document.querySelector("#uf")
const txtEstado = document.querySelector("#estado")

txtCep.addEventListener('focusout',async ()=>{
    const cep = txtCep.value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const resposta = await fetch(url)
    const dados = await resposta.json()
    // console.log(dados)

    txtEndereco.value = dados.logradouro
    txtBairro.value = dados.bairro
    txtUf.value = dados.uf
    txtEstado.value = dados.localidade

})