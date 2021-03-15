class Sling{
constructor(x,y,body){
const opts = {
pointB: {
x:x ,
y:y 

},
bodyA:body,
stiffness:0.05,
length: 100  

}

this.sling = Matter.Constraint.create(opts);
World.add(world,this.sling);
}
move(){
    this.sling.bodyA = null;
}
show(){
push();

    if (this.sling.bodyA){

let posB= this.sling.pointB;    
let posA=this.sling.bodyA.position 

strokeWeight(10);
stroke('green');

line(posA.x,posA.y,posB.x ,posB.y  + 20);
line(posA.x,posA.y ,posB.x + 30,posB.y + 200);



    }
    
pop();
}
attack(body){
this.sling.bodyA = body;
}

}