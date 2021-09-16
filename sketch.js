const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;

//create ropes here

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
 

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	//create options here

	var roof_options={
		isStatic:true			
	}

	var bob_options = {
		restitution:0.001
	}



	//create bobs here
	bob1 = Bodies.circle(280,400,25,bob_options);
	World.add(world,bob1);
	
	bob2 = Bodies.circle(340,400,25,bob_options);
	World.add(world,bob2);	

	bob3 = Bodies.circle(400,400,25,bob_options);
	World.add(world,bob3);
	
	bob4 = Bodies.circle(460,400,25,bob_options);
	World.add(world,bob4);	

	bob5 = Bodies.circle(520,400,25,bob_options);
	World.add(world,bob5);


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	rope1 = new rope(bob1,roof,-80,0);
	rope2 = new rope(bob2,roof,-40,0);
	rope3 = new rope(bob3,roof,0,0);
	rope4 = new rope(bob4,roof,40,0);
	rope5 = new rope(bob5,roof,80,0);


	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() for ropes

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse for bobs

  ellipse(bob1.position.x,bob1.position.y,20,20);
  ellipse(bob2.position.x,bob2.position.y,20,20);
  ellipse(bob3.position.x,bob3.position.y,20,20);
  ellipse(bob4.position.x,bob4.position.y,20,20);
  ellipse(bob5.position.x,bob5.position.y,20,20);
 
}

//Write keyPressed() and apply force on pressing uparrow key on the first bob
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:50,y:0});
    }
}