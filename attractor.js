//Gravitational Attraction

var Attractor = function() {
  this.pos = createVector(mouseX, mouseY);
  this.mass = noise(14) * 80;
  this.G = 1;

  this.calculateAttraction = function(p) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.pos, p.pos);
    // Distance between objects
    var distance = force.mag();
    // Artificial constraint
    distance = constrain(distance, 5, 30);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  }

  // Method to display
  this.display = function() {
   
    strokeWeight(2);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.mass*2, this.mass*2);
  }
}
