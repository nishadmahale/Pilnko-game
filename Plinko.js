class Plinko{
    constructor(x,y,radius){
        var options={
            isstatic:true,
             }
            this.body=Bodies.circle(x,y,radius,options) ;
            World.add(world,this.body);
            }
          display(){
            pos=this.body.position;
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            ellipse(0,0, this.body);







          }  






    



















}