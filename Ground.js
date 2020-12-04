class Ground{
    constructor(){
        var opt = {
            isStatic : true
        }
        this.ground = Bodies.rectangle(200,790,2400,10,opt);
        World.add(world,this.ground);
    }
    display(){
        rectMode(CENTER);
        fill("yellow")
        rect(this.ground.position.x,this.ground.position.y,2400,10);
    }
}