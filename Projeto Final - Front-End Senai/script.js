/* Menu */



/* Menu */

/* Carrosel */

//var imgs = document.getElementById('img')
//var img = document.querySelectorAll('#img img')

let currentImage = 0

// function carroselAuto(){
//     currentImage++
//     if(currentImage > img.length - 1){
//         currentImage = 0
//     }
//     imgs.style.transform = `translateX(${-currentImage * img[0].offsetWidth}px)`
// }

// setInterval(carroselAuto, 3000)

/* Carrosel */


/* Carrinho */

//var btn = document.querySelectorAll('.btn')
var assasinsCreed = document.getElementById('assasinsCreed')
var deadRising = document.getElementById('deadRising')
var farcry = document.getElementById('farcry')
var ghostRecon = document.getElementById('ghostRecon')
var gtaV = document.getElementById('gtaV')
var detroit = document.getElementById('detroit')
var fifa19 = document.getElementById('fifa19')
var ghostTsushima = document.getElementById('ghostTsushima')
var callOfduty = document.getElementById('callOfduty')
var nba = document.getElementById('nba')
/* Carrinho */


/* Carrinho */

const c  = (el)=>document.querySelector(el);
const cs = (el)=> document.querySelectorAll(el);

/* Modal */

const btnClose = document.getElementsByClassName('fechar-modal');

for (const fechar of btnClose){
    fechar.addEventListener('click', fecharModal);
}

function fecharModal(e){
    Array.from(document.querySelectorAll('.modal')).forEach((el) => el.classList.remove('visivel'));
}


assasinsCreed.addEventListener('click', abreModalAsassin);

function abreModalAsassin(e) {
    const modal = document.getElementById('modal01');
    modal.classList.add('visivel');
}

deadRising.addEventListener('click', abreModalDeadRising);

function abreModalDeadRising(e) {
    const modal = document.getElementById("modal02");
    modal.classList.add('visivel');
}

farcry.addEventListener('click', abreModalFarcry);

function abreModalFarcry(e) {
    const modal = document.getElementById("modal03");
    modal.classList.add('visivel');
}

ghostRecon.addEventListener('click', abreModalGhostR);

function abreModalGhostR(e) {
    const modal = document.getElementById("modal04");
    modal.classList.add('visivel');
}

gtaV.addEventListener('click', abreModalGTA);

function abreModalGTA(e) {
    const modal = document.getElementById("modal05");
    modal.classList.add('visivel');
}

detroit.addEventListener('click', abreModalDetroid);
function abreModalDetroid(e) {
    const modal = document.getElementById("modal06");
    modal.classList.add('visivel');
}

fifa19.addEventListener('click', abreModalFifa);
function abreModalFifa(e) {
    const modal = document.getElementById("modal07");
    modal.classList.add('visivel');
}

ghostTsushima.addEventListener('click', abreModalGhostT);
function abreModalGhostT(e) {
    const modal = document.getElementById("modal08");
    modal.classList.add('visivel');
}

callOfduty.addEventListener('click', abreModalCall);
function abreModalCall(e) {
    const modal = document.getElementById("modal09");
    modal.classList.add('visivel');
}

nba.addEventListener('click', abreModalNBA);
function abreModalNBA(e) {
    const modal = document.getElementById("modal10");
    modal.classList.add('visivel');
}