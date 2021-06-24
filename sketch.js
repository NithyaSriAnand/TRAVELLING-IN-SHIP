
var ship,shipmoving;
var sea,seaimage;

function preload(){
  
  shipmoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png"); 
  seaimage = loadImage("sea.png");
}

function setup(){
createCanvas(3000,3000); 

sea = createSprite(64,64,60,15); 
sea.addImage(seaimage);

ship = createSprite(300,342,10,10); 
ship.addAnimation("moving",shipmoving); 
ship.scale=0.5;


}

function draw() {
  background("blue");
  sea.velocityX=-7
  if(sea.x<0)
  {
    sea.x=sea.width/2;
  }

  drawSprites();
 
}