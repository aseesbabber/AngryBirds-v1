class Box{
constructor(x,y,width,height){
    var option = {
        restitution:0.5,
        density:1.5,
        friction:1
      }
      
      this.body = Bodies.rectangle(x,y,width,height,option);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
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