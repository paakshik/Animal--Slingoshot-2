class Ground  {

    constructor(x,y,width,height){


    this.width = width;
    this.height =  height;

    this.body = Bodies.rectangle(x,y,this.width,this.height,{isStatic: true});
    World.add(world,this.body)
}

    show(){
  
        let Angle = this.body.angle;
    push();
  
    rectMode(CENTER);
noStroke()
        fill('green')
rect(this.body.position.x,this.body.position.y, this.width, this.height);
    pop();

    }
    }