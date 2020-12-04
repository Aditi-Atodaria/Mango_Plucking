
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//load tree image and boy image
	gardenImage = loadImage("garden1.jpg");
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Boy Sprite and add the image

	boy = createSprite(100,720,5,5);
	boy.addImage(boyImage);
	boy.scale=0.15;

	//Create Tree Sprite and add the image
	tree = createSprite(900,470,20,20);
	tree.addImage(treeImage);
	tree.scale=0.6;
	
       
	
	//Create Ground object 
	

	//create 10 mango objects, mango1 to mango10
	mango1 = new Mango(400,100);
	mango2 = new Mango(450,150);
	mango3 = new Mango(550,150);
	mango4 = new Mango(400,200);
	mango5 = new Mango(310,160);
	mango6 = new Mango(350,150);
	mango7 = new Mango(400,150);
	mango8 = new Mango(550,200);
	mango9 = new Mango(450,220);
	mango10 = new Mango(310,200);
	

	//Create stone object
	stone = new Stone(100,720);
	 ground = new Ground(600,height,1200,20);
	//Create sling object by passing stone body and points(x,y)
	// slingshot = new SlingShot(stone.body,{x:200, y:50});
	//slingshot = new SlingShot(boy.body,{x:200, y:50});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gardenImage);
  drawSprites();

  //Display Ground,Mangos,stone,sling
   stone.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   ground.display();

  //detect collision between stone and all the mangoes using detectcollision()

 detectCollision(stone,mango1)
  
  
 
}

function mouseDragged(){
	//Use Matter.Body.setPosition to set the position of the stone
}

function mouseReleased(){
	if(keyCode === 32){
	sling.fly();
	}
}

function detectCollision(stone_arg,mango_arg){
	//Detect collision using the function mentioned in pdf
	stoneBodyPosition=stone_arg.body.position;
	mangoBodyPosition=mango_arg.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango_arg.r+stone_arg.r){
		Matter.body.setStatic(mango_arg.body,false);
	}

}
