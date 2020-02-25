var mRect,fRect;

function setup() {
  createCanvas(800,400);
 fRect= createSprite(200, 200, 50, 80);
 fRect.shapeColor="green";
 fRect.debug=true;
 mRect= createSprite(600, 200, 80, 30);
 mRect.shapeColor="green";
 mRect.debug=true;

 mRect.velocityX=-4;
 fRect.velocityX=4;
}

function draw() {
  background(0);  

 // mRect.x=mouseX;
 // mRect.y=mouseY;

bounceOff(mRect,fRect);




  
  
  drawSprites();
}






