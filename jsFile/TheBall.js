let imgBall = null
imgBall = document.getElementById("imgBall");
function init(){
    imgBall = document.getElementById("imgBall");
    imgBall.style.position = 'relative';
    imgBall.style.left = '0px';
}

function moveRight(){
    imgBall.style.left = parseInt(imgBall.style.left) + 10 + 'px';
}
function moveLeft(){
    imgBall.style.left = parseInt(imgBall.style.left) - 10 + 'px';
}

window.onload = init;
