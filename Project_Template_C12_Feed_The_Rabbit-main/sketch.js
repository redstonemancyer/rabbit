var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesimg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesimg = loadImage("apple.png")
  leavesimg = loadImage("leave.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apples = createSprite(200,200)
}



function draw() {
  background(100);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  //spawnApples()
  drawSprites();
  
  if (frameCount %80 == 0){
     if(apples == 1){
       createApples()
     }
     else{
       createLeaves()
     }
}
}
function createApples(){
  apples = createSprite(random(50,350),40,40)
  apples.addImage(applesimg)
  apples.scale = 0.1
  apples.velocityY = -3
}
  function createLeaves(){
    leaves = createSprite(random(50,350),40,40)
    leaves.addImage(leavesimg)
    leaves.scale = 0.1
    leaves.velocityY = -3
}

//hey i could not figure it out please explain in the next class
//and thell me how to fix this code