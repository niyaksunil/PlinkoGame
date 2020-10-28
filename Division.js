// created the Division class
class Division {
  constructor(x,y,width,height) {
    var options = {
      isStatic: true
    }

// created the rectangle body
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;      
    World.add(world, this.body);

  }
    
// displaying the function
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);

  }

}
