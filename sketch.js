var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0 
var ground, groundImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}



function setup() {
  createCanvas(400,400)
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX= -4; 
  ground.x=ground.width /2;
  console.log(ground.x)
}


function draw() {

  background("white");
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  monkey.collide(ground);
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  drawSprites();
  
  spawnFood()
  spawnObstacles()
}

function spawnFood(){
  if(frameCount % 80 === 0){
  var food = createSprite(450,200,70,400);
  food.y = Math.round(random(120,200));
  food.addImage(bananaImage);
  food.scale = 0.05;
  food.lifetime = 50;  
  food.velocityX = -10;
    foodGroup.add(food);
  }    
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
  var obstacle = createSprite(400,310,70,400);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.lifetime = 50;  
  obstacle.velocityX = -10;
    
    obstacleGroup.add(obstacle);
  }
}



