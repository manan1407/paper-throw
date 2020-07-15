class paper {

    constructor(x,y){
        this.body = Bodies.circle(x,y,20,{isStatic:true,restitution:0.3,friction:0.5,density:1.2});
        this.radius = 25;
        World.add(world,this.body);
    }

    display(){
       var position = this.body.position

        push ();
        rectMode(CENTER);
        fill ("violet");
        circle(position.x,position.y,this.radius);
        pop ();
    }
}