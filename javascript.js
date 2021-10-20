function toPage(path){

//alert("hello " + path);

//<a href="plane.html"> </a>

//window.open(path);

window.location=path;

}


var theImg = document.getElementById('theImg');
var poe = document.getElementsByClassName('poem');
var poem = poe[0];
var blinkingDivs = document.getElementsByClassName("blinking");
let carArray = ["hondaonsoil.jpg", "hondafromback.jpeg", "sleekhondadriving.jpg", "hondainside.jpg", "hondaandtree.jpeg", "hondaindriveway.jpg", "hondaonsidewalk.jpeg","hondaInterior.jpg"];
var carPicture = document.getElementById("car-picture");
var carCounter = 0;
//var audio = document.getElementsByTagName('audio');
//audio[0].addEventListener('play', fadeIn(poem,3000), false);

function fadeIn(el, time) {
  el.style.opacity= 0;

  var last = +new Date();
  var tick = function() {
   el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

   if (+el.style.opacity < 1) {
     (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
   }
  };

  tick();
}
function changeCar(){
  if(carCounter>= carArray.length){
    carCounter =0;
  }
  carPicture.src = "car_pictures/" + carArray[carCounter];
  carCounter++;
}
function changeColor(){
  let r = Math.floor(Math.random() * 250);
  let g = Math.floor(Math.random() * 250);
  let b = Math.floor(Math.random() * 0);
  for(let i=0, j=0; i<blinkingDivs.length; i++, j++){
     r = Math.floor(Math.random() * 151);
     g = Math.floor(Math.random() * 0);
     b = Math.floor(Math.random() * 0);
    blinkingDivs[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    
   //poem.style.backgroundColor = (poem.style.backgroundColor == "yellow") ? ((i+3%3) ? "white" : "green") : "yellow";
  }
}
let colorToggle;
let carToggle;
function colorStarter(){
  colorToggle =setInterval(changeColor, 400);
  colorToggle =setInterval(changeCar, 3000);
}

function colorStop(){
clearInterval(colorToggle);
clearInterval(carToggle);
}


