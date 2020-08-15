var zenia,taurus,cyclap;
var deformation;
var speed1,weight;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1000,500);

  speed = Math.round(random(4,10));
  weight = Math.round(random(500,1500));

  deformation = Math.round((0.5 * speed * weight) / 250);
  
  zenia = createSprite(50, 100, 20, 10);
  zenia.shapeColor = "green";

  taurus = createSprite(50, 200, 20,10);
  taurus.shapeColor = "blue";

  cyclap = createSprite(50, 300, 20, 10);
  cyclap.shapeColor = "red";

  wall1 = createSprite(950,100,20,80);
  wall2 = createSprite(950,200,20,80);
  wall3 = createSprite(950,300,20,80);
  
  console.log(deformation);
}

function draw() {
  background(0,0,0);

  zenia.velocityX = speed;
  taurus.velocityX = speed;
  cyclap.velocityX = speed;

  if(zenia.isTouching(wall1)){
    speed = 0;
    if(deformation <= 10){
      zenia.shapeColor = "green";
      taurus.shapeColor = "green";
      cyclap.shapeColor = "green";
    }else if(deformation > 10 && deformation <= 20){
      zenia.shapeColor = "orange";
      taurus.shapeColor = "orange";
      cyclap.shapeColor = "orange";
    }else if(deformation > 20){
      zenia.shapeColor = "red";
      taurus.shapeColor = "red";
      cyclap.shapeColor = "red";
    }
  }

  console.log(deformation);

  drawSprites();
}