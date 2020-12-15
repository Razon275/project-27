class Chain{
    constructor(body1,body2,offsetX,offsetY){
      var option={  
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.chain=Constraint.create(option);
      
      World.add(world,this.chain)
    }
    fly(){
     this.chain.bodyA=null
  }
    display(){
      if(this.chain.bodyA){
 
      
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
    }
    
 }