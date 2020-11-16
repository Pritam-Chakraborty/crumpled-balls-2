
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var paper;
var box1,box2,box3
var paperImg,dustbinImg


function preload()
{
	paperImg.loadImage("paper.png");
	dustbinImg.loadImage("dustbingreen.png")
}

function setup() {
  createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	paper = createSprite(200,380,25,25);
	box1  = createSprite(1000,385,100,10);
	
	paper.addImage(paperImg);
	box1.addImage(dustbinImg);
	


	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);

  ground.display();
  drawSprites();
}



