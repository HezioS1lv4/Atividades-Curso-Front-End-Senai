const btn = document.querySelector('#btnpesquisar')
const lista = document.querySelector('#lista')
const txtUsuario = document.querySelector('#campoUsuario')

btn.addEventListener('click',async ()=>{
    const usuario = txtUsuario.value
    const url = `https://api.github.com/users/${usuario}`
    let resposta = await fetch(url)
    let dados = await resposta.json()
    console.log(dados)

    if(dados.hasOwnProperty('message')){
        alert("Usuario nao econtrado!")
    } else{
        let div = document.createElement('div')
    let div2 = document.createElement('div')
    let username = document.createElement('h1')
    let followers = document.createElement('p')
    let following = document.createElement('p')
    let img = document.createElement('img')
    
    div.classList.add('usuarios')
    div2.appendChild(username)
    div2.appendChild(followers)
    div2.appendChild(following)

     username.innerHTML = 'Nome de usuario: '+ dados.login
     followers.innerHTML = 'Seguidores '+ dados.followers
     following.innerHTML = 'Seguindo: '+ dados.following
     img.setAttribute('src', dados.avatar_url)

     div.appendChild(img)
     div.appendChild(div2)
     div2.appendChild(username)
     div2.appendChild(followers)
     div2.appendChild(following)

     lista.appendChild(div)
    }

    
})