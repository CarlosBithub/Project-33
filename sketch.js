var snowbackground,character1,edges,test

  const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var snowflake = [];


function preload(){
  snowbackground=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world= engine.world;

  //test=new snow(450,50,20);
  

  //character1=createSprite(400, 300, 50, 50);
  //character1.velocityX=4
  //character1.shapeColor=rgb(0,0,255);

  
}

function draw() {
  background(snowbackground);
  Engine.update(engine)

  //edges=createEdgeSprites();
  //character1.bounceOff(edges)

  //test.display();

  for(var i=0; i<snowflake.length; i++){
    snowflake[i].display();
  }

  if(frameCount%10===0){
    snowflake.push(new snow(random(1,800),20,20))
  }

  
 

  //if(character1.x>750){
     //character1.velocityX=-4
  //}

  //if(character1.x<100){
    //character1.velocityX=4

  //}
     
  


  
  
  drawSprites();
}