//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1;
var line2;
var line3;
var ground;
var Basketball1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

line1 = new Rect(600,670,200,20);
line2 = new Rect(500,660,20,200);
line3 = new Rect(700,660,20,200);
ground = new Ground(400,690,800,20)
Basketball1 = new Basketball(100,660,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1.display();
  line2.display();
  line3.display();
  ground.display();
  Basketball1.display();
  Basketball1.display();
  text(mouseX+ ","+ mouseY,mouseX,mouseY);
}
function keyPressed(){
  if(keyCode === UP_ARROW){ 
    Matter.Body.applyForce(Basketball1.body,Basketball1.body.position,{x:30,y:-35});
  }
}

