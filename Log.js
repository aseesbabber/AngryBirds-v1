class Log{
    constructor(x,y,length,angle){
        var option = {
            restitution:0.8,
            density:1.5,
            friction:1
          }
          
          this.body = Bodies.rectangle(x,y,20,length,option);
          Matter.Body.setAngle(this.body,angle);
          World.add(world,this.body);
          this.width = 20;
          this.height = length;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        fill("white");
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rect(0, 0,this.width,this.height);
        pop();
    }
    
    }