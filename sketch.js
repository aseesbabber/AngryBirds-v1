const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var box2;

function setup(){
  var canvas=createCanvas(1200,600);
engine = Engine.create();
world = engine.world;

console.log(ground);
box1 = new Box(800,560,70,70);
box2 = new Box(1000,560,70,70);
Engine.run(engine);
ground = new Ground(600,590,1200,30);
pig1 = new Pig (900,560);

log1 = new Log(900,500,300,PI/2);


box3 = new Box(800,450,70,70);
box4 = new Box(1000,450,70,70);

log2 = new Log(900,400,300,PI/2);
pig2 = new Pig (900,450);

box5 = new Box(900,350,80,80);
log3 = new Log(800,300,150,PI/7);
log4 = new Log(975,300,150,-PI/7);

bird = new Bird(200,100);

}
function draw()
{
  background(0);

  ground.display();
  
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}