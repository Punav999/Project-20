var rect1,rect2,rect3;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200,230,40,60);
  rect1.shapeColor = "green";
 
  rect2 = createSprite(300,340,60,80);
  rect2.shapeColor = "blue"
  
   rect3 = createSprite(300,200,50,60);
   rect3.shapeColor = "yellow";
}

function draw() {
  background(20,25,35);  
  rect1.y = mouseY;
  rect1.x = mouseX;

  if(hasCollided(rect1,rect3))
  {
    rect1.shapeColor = "red";
    rect3.shapeColor = "white";
  }
  else{
    rect1.shapeColor = "green";
    rect3.shapeColor = "yellow";
  }

  if(hasCollided(rect1,rect2))
  {
    rect1.shapeColor = "red";
    rect2.shapeColor = "white";
  }
  else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "blue";
  }

  drawSprites();
}
function hasCollided(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&

    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2
    )
    {
      return true;
    }
    else{
      return false;
    }
}
