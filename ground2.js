class Ground2 extends  Parent{
 
}
class Ground3 {
    constructor(x,y,width,height,image){
        var describer = {
        density:0.1,
        restitution: 0.1,
        friction: 1,
        isStatic:false
        }
        this.width = width;
        this.height =  height;
        this.image= image;
        this.body = Bodies.rectangle(x,y, width,height,describer);
       
        World.add(world, this.body)
        }
    show() {
        let Angle = this.body.angle;
    push(); 
    
     translate(this.body.position.x,this.body.position.y);
     imageMode(CENTER);
     rotate(Angle)
     image(this.image,0,0, this.width, this.height);
    pop();
    
    }
}