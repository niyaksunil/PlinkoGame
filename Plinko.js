// created the Plinko class
class Plinko {
  constructor(x,y,radius) {
    var options = {
      isStatic: true
    }

// created the circle body
    this.body = Bodies.circle(x,y,10,options);
    World.add(world, this.body);

  }

// displaying the function
  display(){
    var pos =this.body.position;
    push();
    ellipseMode(CENTER);
    fill("white");
    ellipse(pos.x, pos.y,10,10);
    pop();

  }

}