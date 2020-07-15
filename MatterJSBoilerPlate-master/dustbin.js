class dustbin {
    
    constructor(x,y,width,height){
      this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
      this.hieght = height;
      this.width = width;
       World .add(world,this.body);
    }

     display(){
         var position = this.body.position;
         push ();
         
         rectMode(CENTER);
         fill ("white");
         rect(position.x,position.y,this.hieght,this.width,{friction:1});
         pop ();
     }
}