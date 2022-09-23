const abrirmodal = document.querySelector('#abrir-modal')
const fecharmodal = document.querySelector('#fechar-modal')
const fade = document.querySelector('#fade')
const modal = document.querySelector('#modal')
const eventos = [abrirmodal,fade,fecharmodal]

const toggleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

eventos.map((el)=>{
    el.addEventListener('click', ()=> toggleModal())
})