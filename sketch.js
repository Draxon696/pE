const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground,ball;
function setup() {
  createCanvas(400,400);
 engine= Engine.create();
 world= engine.world;

 var ball_options={
   restitution:1.0
 }
 var ground_options={
  isStatic:true
}
 ground = Bodies.rectangle(10,381,390,20,ground_options);
ball= Bodies.circle(100,200,50,ball_options);

World.add(world,ground);
World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}