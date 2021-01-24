class ball{
  constructor(x,y,r){
    var options={
      friction:1.2,
      density:2.3,
      restitution:0.5
    }
    this.x=x
    this.y=y
    this.r=r
    this.body =Bodies.circle(this.x,this.y,this.r,options);
    this.image=loadImage("basket.png");
    World.add(world,this.body)
  }
display(){
  push()
  var angle = this.body.angle;
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  fill("red");
  ellipseMode(RADIUS)
  ellipse(0,0,this.r,this.r);
  pop()
  }
}

