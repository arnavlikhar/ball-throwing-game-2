class Basket
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
    this.body = Bodies.rectangle(this.x,this.y, 100,100);
    this.image = loadImage("basket.png");
		World.add(world,this.body);
	}
	display()
	{		
			push()
			imageMode(CENTER);
			image(this.image, this.x,this.y,200,200 )
			this.body.scale=2.5
			pop()
			
	}

}