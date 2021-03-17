class Mango{
    constructor(x,y){ 
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,80,80,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);

        //accept x and y positions
       //Create the Mango using Bodies.rectangle
       //add the image
    }
    display(){
        //display the Mango - use push,pop,translate,rotate,image
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,80,80);
        pop();
    }
}
