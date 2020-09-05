
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8;
var box9, box10,box11, box12, box13, box14, box15, box16;
var hexagon;
function preload()
{

}

function setup() {
	createCanvas(2000, 500);


	engine = Engine.create();
	world = engine.world;

	
ledge = new Ground(505,400,210,20);
ground= new Ground(800,500,2000,30)

//bottom row
box1=new Box(415,370,30,40);
box2=new Box(445,370,30,40);
box3=new Box(475,370,30,40);
box4=new Box(505,370,30,40);
box5=new Box(535,370,30,40);
box6=new Box(565,370,30,40);
box7=new Box(595,370,30,40);

//third row
box8=new Box(445,330,30,40);
box9=new Box(475,330,30,40);
box10=new Box(505,330,30,40);
box11=new Box(535,330,30,40);
box12= new Box(565,330,30,40);

//second row
box13= new Box(475,290,30,40);
box14 = new Box(505,290,30,40);
box15 = new Box(535,290,30,40);

//top row
box16= new Box(505,250,30,40);

hexagon = new Hexagon(100,300,30,30);

sling= new Sling(hexagon.body,{x:100, y:300})

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  
  ledge.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

hexagon.display();
sling.display();

 
 
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(hexagon.body, {x:100,y:300});
  sling.attach(hexagon.body);
  }
  }