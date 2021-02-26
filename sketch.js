var canvas;
var music;
var surface1,surface2,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
  surface1=createSprite(0,595,350,30);
  surface1.shapeColor="green";

  surface2=createSprite(290,595,180,30);
  surface2.shapeColor="yellow";

  surface3=createSprite(490,595,180,30);
  surface3.shapeColor="red";

  surface4=createSprite(700,595,180,30);
  surface4.shapeColor="blue";


    //create box sprite and give velocity
 box=createSprite(random(20,750),500,30,30);
 box.shapeColor="white";
 box.velocityY=4;
 music.play();
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
   // 

 

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor="green";
        box.velocityY=0;
        music.stop();
    }
    if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor="yellow";
        box.velocityY=0;
        music.stop();
    }
    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor="red";
        box.velocityY=0;
        music.stop();
    }
    if(box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor="blue";
        box.velocityY=0;
        music.stop();
    }
    drawSprites();
}
