var bola;
var edge;
var tela;
var musica;
var um;
var dois;
var tres;
var quatro;
function preload(){
musica=loadSound("music.mp3");

}
function setup(){
tela=createCanvas(400,400);
um= createSprite(350,395,70,10);
dois= createSprite(250,395,70,10);
tres= createSprite(150,395,70,10);
quatro= createSprite(50,395,70,10);
bola= createSprite(random(10,200),200,20,20);
bola.shapeColor="white"
bola.velocityX=4;
bola.velocityY=6;
}

function draw() {
 background("gray");

um.shapeColor="green";
dois.shapeColor="red";
tres.shapeColor="orange";
quatro.shapeColor="blue";


if(bola.isTouching(um)){
bola.shapeColor="green";
 musica.play(); 
 bola.velocityX=-8;
bola.velocityY=10;
  
}
if(bola.isTouching(dois)){
bola.shapeColor="red";
musica.play(); 
bola.velocityX=-4;
bola.velocityY=-8;
  
}
if(bola.isTouching(tres)){
bola.shapeColor="orange";
musica.pause(); 
bola.velocityX=0;
bola.velocityY=0;
  
}
if(bola.isTouching(quatro)){
bola.shapeColor="blue";
musica.play(); 
bola.velocityX=-6;
bola.velocityY=8;
}


 
  edge=createEdgeSprites();
     
     bola.bounceOff(edge);
 
  
  bola.bounceOff(um);
  bola.bounceOff(dois);
  bola.bounceOff(tres);
  bola.bounceOff(quatro);
  
   drawSprites()
}
