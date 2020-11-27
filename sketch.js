var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(400, 400);
  //creating Monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  //creating Monkey
  ground = createSprite(400, 350, 500, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x)
  
  bananaGroup = createGroup();
 obstacleGroup = createGroup();
  
}

function draw() {
  background(255);

  bananas()
  Obstacles()
  if (ground.x < 150) {
    ground.x = ground.width / 2;
  }
   
  stroke("white");
  textSize(20);
  fill("white");
  text("score:" +score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate())
  text("survivaltime:" + survivaltime, 100,50);
  
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 1
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
    monkey.velocity.X
    stroke(0);
    fill("white");
    textSize(30);  
    text("Game Over", 200, 200);
  }
  monkey.collide(ground);

  drawSprites();
}

function bananas() {
  if (frameCount % 100 === 0) {
    var banana = createSprite(500, Math.round(random(120, 300)));
    banana.velocityX = -(6 + score / 100);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}

function Obstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(500, 310, 10, 10);
    obstacle.velocityX = -(6 + score / 100);
    obstacle.addImage(obstacleImage);
     obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}


