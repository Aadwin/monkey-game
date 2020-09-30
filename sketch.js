var PLAY=1;
var END=0;
var gameState= PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(300,350,600,10);
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x);
  monkey.debug=true;
//obstaclesGroup.debug=true;
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background(225);
  if (gameState===PLAY){
    if (keyDown("space")&& monkey.y >= 290) {
    monkey.velocityY = -20;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
    if (ground.x < 200){
      ground.x = ground.width/2;
    }
    spawnFood();
    spawnObstacles();
  }
  else if (gameState===END){
    monkey.visibility=false;
    ground.visibility=false;
    FoodGroup.visibility=false;
    obstaclesGroup.visibility=false;
  }
  
  console.log(monkey.y);
  
  
  
  if (obstacleGroup.isTouching(monkey)){
    gamestate=END;
  }
  monkey.collide(ground);
  
  drawSprites();
}

function spawnFood(){
  if (frameCount % 80 === 0){
    var food = createSprite(600,315,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.velocityX=-4;
    food.lifetime=-1;
    food.scale=0.1;
    FoodGroup.add(food);
  }
}
  
function spawnObstacles(){
  if (frameCount % 80===0){
    var stone = createSprite(600,315,40,10);
    stone.x = Math.round(random(520,600));
    stone.addImage(obstaceImage);
    stone.velocityX=-4;
    stone.lifetime=-1;
    stone.scale=0.1;
    stone.depth=monkey.depth;
    obstacleGroup.add(stone);
    monkey.depth=monkey.depth+1;
    
  }
}
  
  
  
  
  







