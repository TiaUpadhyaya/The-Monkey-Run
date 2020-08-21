var obstacleImage,bananaImage,backgroundImage,monkey,groundImage,obstacle;
var obstaclesGroup,score,player_running,ground,backG,foodGroup,food,score;

function preload(){
 backgroundImage= loadImage("jungle.jpg");
 player_running=                                                              loadImage("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png",  "monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png","Monkey_9.png",      "Monkey_10.png");
  bananaImage= loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300); 
  backG = createSprite(0,0,400,300);
  backG.addImage("backG",backgroundImage);
  backG.scale=1;
  backG.x = backG.width /2;
  backG.velocityX = -6;
  monkey= createSprite(50,180,20,50);
  monkey.addAnimation("monkey", player_running);
  monkey.scale=0.1;
  ground = createSprite(300,250,600,20);
  ground.velocityX=-4;
  ground.visible=false;
  
  obstaclesGroup = new Group();
  foodGroup = new Group();
  score=0;
}


function draw(){
edges=createEdgeSprites();
 


if (backG.x < 200){
  backG.x = backG.width/2;
}
if(keyDown("space") && monkey.y >= 170){
   monkey.velocityY = -8 ;
 }
 monkey.velocityY = monkey.velocityY + 0.34;
 monkey.collide(ground);
if(foodGroup.isTouching(monkey)){
  score=score+2;
  foodGroup.destroyEach();
}
switch(score){
  case 10: monkey.scale=0.12;
       break;
  case 20: monkey.scale=0.14;
       break;       
  case 30: monkey.scale=0.16;
       break;
  case 40: monkey.scale=0.18;
       break;   
       default: break;
}
if(obstaclesGroup.isTouching(monkey)){ 
  monkey.scale=0.1;
  score=0;
} 
food();
obstacles();
drawSprites();

stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 500,50);  
}


function obstacles() {
  if(frameCount  % 80 === 0) {
    var obstacle = createSprite(400,250,10,40);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX = -4;
    
    obstacle.scale = 0.15;
    obstacle.lifetime = 134;
    
    obstaclesGroup.add(obstacle);
  }
}      
                           
 function food(){
 if(frameCount % 80 === 0) {
  var  food = createSprite(400, 200);
  food.y = Math.round(random(120,200));
  food.addImage("food",bananaImage);
  food.scale = 0.05;
  food.velocityX = -3;                                                                                           
  food.lifetime = 134;
  foodGroup.add(food);
 }
}                          