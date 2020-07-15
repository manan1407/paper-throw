
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(100,650);
	ground1= new ground(400,670,10,800)
	paddle1 = new dustbin(600,650,10,70);
	paddle2 = new dustbin(565,620,70,10);
	paddle3 = new dustbin(635,620,70,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
   paperObject.display();
   paddle1.display();
   paddle2.display();
   paddle3.display();
   ground1.display();
}



