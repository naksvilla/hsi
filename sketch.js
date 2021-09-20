const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;
//create a object for ball
ball = new Ball(460,200,60,60)

//create a object for blower
blower = new Blower(460,460,180,150)
//create a object for blowerMouth
blowerMouth = new BlowerMouth(295,480,150,50);



  btn2 = createImg('click.png');
btn2.position(20,30);
btn2.size(50,50);
btn2.mouseClicked(blow)
//add the mouseClicked option 
}
 
function draw() {
  background(59);
  Engine.update(engine);

  blower.show()
  blowerMouth.show();
  ball.show()
}

function blow() {
    //add the applyforce
 ball.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5})
 

}
