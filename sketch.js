var p1,p2,asteroid1,asteroid2,asteroid3;
var blast,blastImage,space,spaceImage;
var spaceShip,spaceShipImage, laserImage;
var shoot = 0;

var earth;
var laser,asteroidGroup,laserGroup;
var explosionImage;
var instruction = 0;
var play = 1;
var end = 2;
var gameState = instruction;


function preload() {
  
 
spaceShipImage = loadImage("Spaceship.jpg");
spaceImage = loadImage("sky.png");
earth = loadImage("earth.jpg");
asteroid1 = loadImage("asteroid.jpg");
asteroid2 = loadImage("asteroid.jpg");
asteroid3 = loadImage("asteroid.jpg");
explosionImage = loadImage("blst.jpg");
laserImage = loadImage("fire.jpg");


}

function setup() {

  createCanvas(800,800);

space = createSprite(800,800);
space.addImage(spaceImage);
space.velocityY = (5+ score/10)

spaceShip = createSprite(250,600);
spaceShip.addImage(spaceShipImage)
spaceShip.scale = 0.6;

p1 = createSprite(250,600);
p1.setCollider("rectangle",70,-27,5,265,156);
p1.visible = false;
 
p2 = createSprite(250,600);
p2.setCollider("rectangle",70,-27,5,265,24);
p2.visible = false;

asteroidGroup = new laserGroup;
laserGroup = new laserGroup;



  drawSprites();
}
function draw( ){


 if(gameState === play){
   //console.log(frameCount);

 }
if(space.y > 800){
  space.y = 300;
}
shoot = shoot -1;

if(keyCode = "32"){
  laser = createSprite(spaceShip.x , spaceShip.y)
  laser.addImage(laserImage);
  laser.velocityY = -8;
  laser.scale = 0.7;
  laserGroup.add(laser);
  laserSound.play();
  shoot = laser.y;
}

if(keyDown("right")&&spaceShip.x < 1400){
  spaceShip.x = spaceShip.x + 10;
  p1.x = p1.x + 10;
  p2.x = p2.x + 10;

}
if(keyDown("left")&&spaceShip.x < 1400){
  spaceShip.x = spaceShip.x - 10;
  p1.x = p1.x - 10;
  p2.x = p2.x - 10;

}

if(asteroidGroup.isTouching(p2) || asteroidGroup.isTouching(p1)){
  asteroidGroup.destroyEach();
  var blast = createSprite(spaceShip.x,spaceShip.y - 5);
  blast.addImage(blastImage);
  blast.lifetime = 25;
  spaceShip.destroy();
  gameState = end ;        

}
 if(asteroidGroup.isTouching(laserGroup)){
   asteroidGroup.destroyEach();
   laserGroup.destroyEach();
   score = score + 1;


 }
 astroids();
 drawSprites();
 stroke("white");
    fill("white");
    textSize(30);
    text("score : " + score,210,60)
    
    if(asteroidGroup.isTouching(endline)) {
      asteroidGroup.destroyEach();
      gameState = end;
    }
    
  }
  if(gameState === end) {
    space.velocityY = 0;
    stroke("yellow");
    fill("white");
    textSize(40);
    text("GAME OVER!",canvas.width/2-400,canvas.height/2);
    text("The asteroids destroyed the planet",canvas.width/2-400,canvas.height/2+100);
    text("Your final score:"+score,canvas.width/2-400,canvas.height/2+200);

    
  }


  if(gameState === instruction) {
    stroke("white");
    fill("white");
    textFont("trebuchetMS")
    textSize(50);
    text("------Guardians OF Galaxy------",canvas.width/2-300,canvas.height/2-300);
    text("ENJOY THE GAME!",canvas.width/2-300,canvas.height/2+100);
    stroke("yellow");
    fill("yellow");
    textSize(35);
    textFont("Apple Chancery");
    text("Welcome",canvas.width/2-300,canvas.height/2-250);
    text(" Some asteroids are coming towords Earth.",canvas.width/2-300, canvas.height/2 - 210);
    text("  You are The famous Marvel's Guardians of the galaxy",canvas.width/2-300,canvas.height/2-170);
    text("  Help the people and Earth !",canvas.width/2-300,canvas.height/2-130);
    text("  press 'Space Key' to shoot.",canvas.width/2-300,canvas.height/2-90);
    text("  use right and left arrows to move.",canvas.width/2-300,canvas.height/2-50);
    text("  press 'S' to start game.",canvas.width/2,canvas.height/2-10);
    
    if(keyDown("s")) {
      gameState = play;
    } 
    if(keyDown("r")) {
      gameState = instruction;
    }
  }

  

function asteroids() {
  if(frameCount % 110 === 0) {

}}