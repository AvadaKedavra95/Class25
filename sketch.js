
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1,d2,d3,ground,paper,options,bg,dust

function preload()
{dustImg = loadImage("dustbingreen.png")
	bg=loadImage("bg.jpg")
	
}

function setup() {
	createCanvas(1200, 550);
    options = {
		isStatic : true
	}

	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(600,520,1200,20,options);
	World.add(world,ground);
	d1=new Dustbin(1000,450,200,20);
	d2=new Dustbin(910,365,20,150);
	d3=new Dustbin(1090,365,20,150);
    paper=new Paper(100,400);
	
	Engine.run(engine);
   
	dust=createSprite(1000,395,200,200);
	dust.addImage("d",dustImg);
	dust.scale=0.7;


}


function draw() {
    background(bg);
  rectMode(CENTER);

  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,20);
  


 
  
  paper.display();
  drawSprites();
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:50,y:-55});
	   }
}


