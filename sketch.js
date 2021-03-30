
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var rope1,rope2,rope3,rope4,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  hold = new Ground(400,150,550,50);
  bob1 = new Sand(200,550,100);
  bob2 = new Sand(300,550,100);
  bob3 = new Sand(400,550,100);
  bob4 = new Sand(500,550,100);
  bob5 = new Sand(600,550,100);
  
  rope1 =new constr(bob1.body,hold.body,-190, 0);
  rope2 =new constr(bob2.body,hold.body,-90, 0);
  rope3 =new constr(bob3.body,hold.body,0, 0);
  rope4 =new constr(bob4.body,hold.body,100, 0);
  rope5 =new constr(bob5.body,hold.body,200, 0);

	Engine.run(engine);
  
}


function draw() {
  
  background("cyan");
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  hold.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  textSize(50)
  textFont("italic")
  fill("#FC4C4E")
  text("Newton's Cradle😎",200,100)
}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(bob1.body,bob3.body.position,{x:-605,y:-300});
  }
}



