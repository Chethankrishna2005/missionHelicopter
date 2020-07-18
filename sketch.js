var helicopterIMG, helicopter, package1,packageIMG;
var packageBody,ground,box1,box2,box3;
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
	
	package1=createSprite(width/2, 80, 10,10);
	package1.addImage(packageIMG)
	package1.scale=0.2

	box1=createSprite(350,700, 300,40);
	box2=createSprite(200,625, 40,150);
	box3=createSprite(500,625, 40,150);
	
	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,30);
	groundSprite.shapeColor=color(48,22,2);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 30 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill="#98AFC7"
  package1.x= packageBody.position.x 
  package1.y= packageBody.position.y 
  package1.collide(box1,box2,box3);
  helicopter.display();
  package1.display();
  box1.display();
  box2.display();
  box3.display();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



