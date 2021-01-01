var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box_side1Sprite,box_side2Sprite,box_side3Sprite;
var box_side1Body,box_side2Body,box_side3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box_side1Sprite=createSprite(400,650,200,20);
	box_side1Sprite.shapeColor=color("red");
	box_side2Sprite=createSprite(500,610,20,100);
	box_side2Sprite.shapeColor=color("red");
	box_side3Sprite=createSprite(300,610,20,100);
	box_side3Sprite.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 
	World.add(world, ground);
	text("hi",200,200);
    
	box_side1Body = Bodies.rectangle(400,650,200,20, {isStatic:true});
	box_side2Body = Bodies.rectangle(500,610,20,100, {isStatic:true});
	box_side3Body = Bodies.rectangle(300,610,20,100, {isStatic:true});
	//box_side1Body.position.x=helicopterSprite.x

	/*
	box_side2 = Bodies.rectangle(width/2,200,20,100, {isStatic:true});
	*/
	World.add(world,box_side1Body);
	World.add(world,box_side2Body);
	World.add(world,box_side3Body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box_side1Sprite.x= box_side1Body.position.x
  box_side1Sprite.y= box_side1Body.position.y
  box_side2Sprite.x= box_side2Body.position.x
  box_side2Sprite.y= box_side2Body.position.y
  box_side3Sprite.x= box_side3Body.position.x
  box_side3Sprite.y= box_side3Body.position.y
  /*if(keyPressed("downArrow")){
  Matter.Body.setStatic(packageSprite,false);
}*/
//box_side1.display(body);

packageBody.restitution=0.5;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	Matter.Body.setStatic(packageBody,false);

    
  }
}



