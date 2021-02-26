
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6, mango7,mango8,mango9;
var world,boy;



function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1100,250,30);
	mango3 = new mango(1050,150,30);
	mango4 = new mango(1195,300,30);
	mango5 = new mango(1000,320,40);
	mango6 = new mango(1180,240,30);
	mango7 = new mango(900,270,40);
	mango8 = new mango(1000,250,30);
	mango9 = new mango(1130,150,40);

	treeObj=new tree(1050,620);
	groundObject=new ground(width/2,600,width,20);
  stone = new Stone(350,660,60);



  launcherObject = new SlingShot(stone.body, {x:200 , y:430});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(219,219,219);
  textSize(20);
  text("Press Space to get a Second Chance to Play!!",10,50);

  image(boy,150,360,250,290);
  drawSprites();

  groundObject.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  launcherObject.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}

function detectCollision(lstone, lmango){
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body);
	}
}





