
function setup() {
  createCanvas(600,400);

  box = createSprite(200,200 , 60 , 60)
  box.velocityX = (10)
  box.velocityY = (10)
  
  edges = createEdgeSprites()
  
}

function draw() 
{
  background(30);

  // console.log("Hello Bennet")

  if(keyDown("RIGHT")){
    background("red")
  }

  if(keyDown("LEFT")){
    background("blue")
  }

  box.bounceOff(edges)

  drawSprites()
}




