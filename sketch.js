const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Render = Matter.Render;

var ball1,basket1;
var ground;
var score=0;
var box1;
function setup() 
{
  createCanvas(1600, 700);
  engine=Engine.create();
  world=engine.world;
  
  ball1= new ball(100,200,20);
  basket1= new Basket(900,600);
  ground=new Ground(width/2,700,width,20);
  box1=new Ground (100,500,50,50)
   //box.visible=false;


}

function draw() {
  Engine.update(engine);
  background("white");
  textSize(40)
  text("SCORE:"+score,100,100)
  ball1.display();
  basket1.display();
  ground.display();
  box1.display();
  isTouching();
}
  


function isTouching(ball1,box1)
{ if (ball1.x - box1.x < box1.width/2 + ball1.width/2 && box1.x - ball1.x < box1.width/2 + ball1.width/2 && ball1.y - box1.y < box1.height/2 + ball1.height/2 && box1.y - box1.y < box1.height/2 + ball1.height/2){
  score=score+1
}
else
{
  return false
}
}



function keyPressed() {
  if (keyCode === UP_ARROW)
   {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:120,y:-205});
  }

  if(keyCode === 32){
    Matter.Body.setPosition(ball1.body,{x:100,y:200});
  }
}
