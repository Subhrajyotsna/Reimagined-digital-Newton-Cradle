class constr {
    constructor(body1,body2,offsetX,offsetY)
     {
       this.offsetX = offsetX
       this.offsetY = offsetY
         var options = {
             bodyA:body1,
             bodyB:body2,
             
            pointB:{x:this.offsetX,y:this.offsetY}
         }
 this.constr=Constraint.create(options)
World.add(world,this.constr)
    }
    display(){
        strokeWeight(4);
        
        line(this.constr.bodyA.position.x,this.constr.bodyA.position.y,this.constr.bodyB.position.x+this.offsetX,this.constr.bodyB.position.y+this.offsetY);
    }
}