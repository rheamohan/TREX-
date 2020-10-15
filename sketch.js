var trex,trexImage
var ground,groundImage
var InvisibleGround
var cloudImage;

var obstacleImage1;
var obstacleImage2;
var obstacleImage3;
var obstacleImage4;
var obstacleImage5;
var obstacleImage6;
var cloudGroup
var obstaclesGroup 
score = 0;

function preload (){
  trexImage = loadAnimation ("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage ("ground2.png");
  cloudImage = loadImage ("cloud.png");
  obstacleImage1 = loadImage ("obstacle1.png");
  obstacleImage2 = loadImage ("obstacle2.png");
  obstacleImage3 = loadImage ("obstacle3.png");
  obstacleImage4 = loadImage ("obstacle4.png");
  obstacleImage5 = loadImage ("obstacle5.png");
  obstacleImage6 = loadImage ("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  cloudGroup = new Group();
  obstaclesGroup = new Group();
  
  trex = createSprite(30,135,10,10);
  trex.addAnimation ("run", trexImage);
  trex.scale = 0.5;
  
  ground = createSprite(10,160,400,30);
  ground.addImage ("ground",groundImage);
  ground.velocityX = -4;
  
  InvisibleGround = createSprite (200,170,800,10);
  InvisibleGround.visible = false;
}

function draw() {
  background(180);
  
  if (ground.x < 0){
  ground.x = ground.width/2;
  }
  
  if (keyDown("space") && trex.y > 120){
    trex.velocityY = -14;
  }
  
  // gravity
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(InvisibleGround);
  
  // text
  fill ("black");
  textSize (15);
  text ("Score_ " + score,500,50);
  //score = score + Math.round(getFrameRate()/30);
  score = score + Math.round(frameCount /6);

  
  spawnCloud();
  obstacles();
  
  
  drawSprites();
}

function spawnCloud() {
  if (frameCount % 60===0){
    var cloud = createSprite (600,random(30,120),10,10);
    cloud.addImage(cloudImage);  
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    cloud.depth = trex.depth-1;
    cloud.lifetime = 200;
    cloudGroup.add(cloud);
  }
}

function obstacles(){
  if (frameCount % 80===0){
    var obstacles = createSprite (600,140,10,10);
    obstacles.scale = 0.6;
    obstacles.velocityX = -4;
    obstacles.lifetime = 150
    
    
  var rand = Math.round(random(1,6));
    switch (rand){
      case 1:
      obstacles.addImage(obstacleImage1);
      break;
      
      case 2:
      obstacles.addImage(obstacleImage2);
      break;
      
      case 3:
      obstacles.addImage(obstacleImage3);
      break;
      
      case 4:
      obstacles.addImage(obstacleImage4);
      break;
      
      case 5:
      obstacles.addImage(obstacleImage5);
      break;
      
      case 6:
      obstacles.addImage(obstacleImage6);
      break;
      
      default: break
    }
    obstaclesGroup.add(obstacles);
  }
}




