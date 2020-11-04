class Division {
    constructor(x,y,w,h){
        var options={
            istacic:true



        }
        this.body=bodies.rectangle(x,y,w,h,options);
        this.w=width;
        this.h=height;
        World.add(world,this.body);
    }

        display() {
            var pos=this.body.position;
            rectMode(CENTER);
            translate(pos.x,pos.y);
            fill("white");
            rect(0,0,this.w,this.h);






        }
        







    }















