
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	
	roofObject = new Rooftop(500,50,750,60);
	bobObject1 = new Bob(50,60,100);
	bottomtop = new Rooftop(500,670,7500,30);
	rope1 = new Rope(roofObject.body,bobObject1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('cyan');
  


  bobObject1.display();
  roofObject.display();
  bottomtop.display();
  rope1.display();
  drawSprites(); 
}



