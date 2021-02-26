class SlingShot {

    constructor(bodyA,pointB){
       var options= {
            bodyA : bodyA,
            pointB : pointB,
            stiffness :0.04,
            length: 10 
       } 
       this.pointB = pointB;
       this.sling = Constraint.create(options);
       World.add(world,this.sling);
   
    }
    //to empty bobyA so that the bird can fly
    fly(){
      this.sling.bodyA = null;
    }

    attach(body){
      this.sling.bodyA = body;

    }

    
     display(){
       //display only when there is a bodyA
       if(this.sling.bodyA){
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
   
       strokeWeight(3);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
     }
   
   }