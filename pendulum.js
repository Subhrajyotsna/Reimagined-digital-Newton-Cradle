class Sand{
	constructor(x,y,r)
	{
		var options={
			restitution:1,
			friction:0,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var sandpos=this.body.position;		
			push()
			translate(sandpos.x, sandpos.y);
			rectMode(CENTER)
			strokeWeight(1);
			stroke("black");
			fill("#F79AC0");
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}