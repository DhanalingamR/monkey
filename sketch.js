var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var fGroup, oGroup,b,o;
var score;
var survivalTime=0;
var ground;

function preload(){
  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png", "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkey=loadImage("sprite_0.png")
}

function setup() {
  createCanvas(600,600);
 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  monkey.velocityY=5;
  
  ground=createSprite(400,350,900,10);
  
  b.addImage("bananaImage")
  o.addImage("obstacleImage")
}

function draw() {
  background("white");

  
  
  if (monkey.isTouching(ground)){
    monkey.y=315;
    monkey.x=80;
  }
  
  if (keyDown("space")){
    monkey.velocityY=-4;
    monkey.gravity=3;
  }
  
  so();
  sf();
  
drawSprites();  
}

function sf(){

  
  
}






