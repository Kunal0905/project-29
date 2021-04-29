const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var stand1,stand2;
var polygon,polygonImg;
var rope1;

function preload(){
  polygonImg = loadImage("polygon.png");
}
function setup(){
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;
  block1 = new Block(300,600);
  block2 = new Block(350,600);
  block3 = new Block(400,600);
  block4 = new Block(350,520);
  block5 = new Block(325,560);
  block6 = new Block(375,560);
  stand1 = new Stand(350,630);

  block7 = new Block(530,400);
  block8 = new Block(580,400);
  block9 = new Block(630,400);
  block10 = new Block(580,320);
  block11 = new Block(555,360);
  block12 = new Block(605,360);
  stand2 = new Stand(580,430);

  polygon = Bodies.circle(50,250,40);
  World.add(world,polygon);
  
  rope1 = new Rope({x: 50, y: 50},polygon.body);

  Engine.update(engine);

}

function draw(){
  rectMode(CENTER)
  background(56,44,44);
  fill("blue")
  block1.display();
  block2.display();
  block3.display();
  block7.display();
  block8.display();
  block9.display();
  push()
  fill("pink")
  block4.display();
  block10.display();
  pop()
  push()
  fill("lightblue")
  block5.display();
  block6.display();
  block11.display();
  block12.display();
  pop()
  stand1.display();
  stand2.display();
  image(polygonImg,polygon.position.x,polygon.position.y,50,60)
  rope1.display();
  drawSprites();
}
