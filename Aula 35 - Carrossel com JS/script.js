var imgs = document.getElementById('img')
var img = document.querySelectorAll('#img img')

let currentImage = 0

function carroselAuto(){
    currentImage++
    if(currentImage > img.length - 1){
        currentImage = 0
    }
    imgs.style.transform = `translateX(${-currentImage * img[0].offsetWidth}px)`
}

setInterval(carroselAuto, 1000)