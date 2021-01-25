class Bird{
    constructor(x,y){
        var option = {
            restitution:0.8,
            density:1.5,
            friction:1
          }
          
          this.body = Bodies.rectangle(x,y,50,50,option);
          World.add(world,this.body);
          this.width = 50;
          this.height = 50;
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        rectMode(CENTER);
        fill("red");
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rect(0, 0,this.width,this.height);
        pop();
    }
    
    }