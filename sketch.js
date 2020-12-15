
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Bobobj1,Bobobj2,Bobobj3,Bobobj4,Bobobj5;
var Roof,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Roof=new roof(400,200,300,20);
	Bobobj1=new Bob(300,225,50,50);
	Bobobj2=new Bob(350,225,50,50);
	Bobobj3=new Bob(400,225,50,50);
	Bobobj4=new Bob(450,225,50,50);
	Bobobj5=new Bob(500,225,50,50);
	chain1=new Chain(Bobobj1.body,Roof.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Roof.display();
  Bobobj1.display();
  Bobobj2.display();
  Bobobj3.display();
  Bobobj4.display();
  Bobobj5.display();
  drawSprites();
 
}



