
const acender = document.getElementById('acender');
const apagar = document.getElementById('apagar');

const lamp = document.getElementById('lamp');

function lampOn(){
    lamp.src = 'img/ligada.jpg';
}

function lampOff(){
    lamp.src = 'img/desligada.jpg'
}
acender.addEventListener('click',lampOn);
apagar.addEventListener('click',lampOff);
