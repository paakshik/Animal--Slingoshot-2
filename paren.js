
class Parent{

constructor(x,y,width,height,image,sound){
var describer = {

restitution: 0.00000000000000000000000000001,
friction: 0.1,
isStatic:false
}
this.image = image;
this.width = width;
this.height =  height;
this.visibility = 255;

this.body = Bodies.rectangle(x,y, width,height,describer);
World.add(world, this.body)
}

show() {
    

if (this.body.speed < 9){
push(); 
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
image(this.image,0,0, this.width, this.height);
    pop();
}
    if (this.body.speed > 12){
     
        push();

        World.remove(world,this.body);
      this.visibility = this.visibility  - 5;

        pop();
    }

       
    }
   
}