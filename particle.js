// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Gravitational Attraction



var Particle = function() {
  this.pos = createVector(random(width), random(height));
  console.log(Math.random(0, windowWidth))
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.mass = noise(1) * 10;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0.1);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.pos.x, this.pos.y, this.mass * 16, this.mass* 16);
  };
}
