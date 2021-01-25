class Ground{
constructor(x,y,width,hight){

    var Goption = {
        isStatic: true
        
        }
        
        this.body = Bodies.rectangle(x,y,width,hight, Goption);
        
        World.add(world,this.body);
        this.width=width;
        this.height=hight; 
}
display(){
    rectMode(CENTER);
    fill("brown");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}