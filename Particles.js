// created the Particles class
class Particles {
  constructor(x,y,radius) {
    var options = {
      'restitution':0.7,
      'friction':0.5,
      'density':0.9,
      isStatic : false     
    }

// created the circle body
    this.radius = radius;
    this.body = Bodies.circle(x,y,this.radius,options);
    this.colour = color(random(0,255),random(0,255),random(0,255));
    World.add(world, this.body);

  }
  
// displaying the function 
  display(){

    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    ellipseMode(RADIUS);
    fill(this.colour);
    ellipse(0,0,this.radius,this.radius);
    pop();

  }

}