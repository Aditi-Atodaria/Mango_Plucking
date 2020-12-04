class Stone{
    constructor(){
       var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2 
       }
       
        //use Bodies.circle to create the stone
        this.body = Bodies.circle(15,320,30, options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }

    display(){
        //use push pop translate rotate image
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,50,50);
        pop();
        
    }
}
