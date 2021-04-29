class Block{
  constructor(x,y){
   var op = {
    isStatic: true,
    friction: 0.8
   }
    this.body = Bodies.rectangle(x,y,50,40,op);
    World.add(world,this.body);
  }
  display(){
   rectMode(CENTER)
   var pos = this.body.position;
   rect(pos.x,pos.y,50,40);
  }
}