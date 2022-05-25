// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Gravitational Attraction

// One particle, one attractor
var particle;
var attractor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  particle = new Particle();
  attractor = new Attractor(width/2, height/2);
  background(240, 10, 50)
 


}

function draw() {
 
  attractor = new Attractor();
  // Attractor attracts particle
  var force = attractor.calculateAttraction(particle);
  particle.applyForce(force);
  attractor.display();

  particle.update();
  particle.display();

  
}
