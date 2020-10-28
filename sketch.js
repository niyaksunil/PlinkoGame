// created the constant variables
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// created the variables 
var ground;
var divisions = [];
var particles = [];
var plinkos = [];
var divisionHeight = 300;

function setup(){
  createCanvas(480,600);

// created the engine and the world
    engine = Engine.create();
    world = engine.world;

// created the ground
    ground = new Ground(240,height,480,10);
  
// created the divisions using for loop
    for (var k = 0;k <= width; k = k+80){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }

// created the plinkos using for loop
    for (var k = 40;k <= width; k = k+50){
      plinkos.push(new Plinko(k,75));
    }

    for (var k = 15;k <= width-10; k = k+50){
      plinkos.push(new Plinko(k,125));
    }

    for (var j = 40;j <= width; j = j+50){
      plinkos.push(new Plinko(j,175));
    }

    for (var k = 15;k <= width-10; k = k+50){
      plinkos.push(new Plinko(k,225));
    }

}

function draw(){
  background(0);  

  Engine.update(engine);

// created the particles using for loop
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-20,width/2+20),10,10));
  }

// displaying the divisions
  for(var j = 0; j<divisions.length; j++){
    divisions[j].display();
  }

// displaying the plinkos 
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }

// displaying the particles
  for(var j = 0; j<particles.length; j++){
    particles[j].display();
  }

// displaying the ground
  ground.display();

}