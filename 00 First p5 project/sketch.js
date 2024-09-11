// First Day Demo
// Ian Herperger
// sept 10, 2024
//
//Interactive Programs -> don't finsih...


function setup() {
  //Happens one tu=ime at the start
  createCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(1100, 1100, WEBGL);

  describe('A white triangle spins around on a gray canvas.');
}

function draw() {
  background(200);

  // Rotate around the y-axis.
  rotateY(frameCount * 0.01);

  // Draw the triangle.
  triangle(-20, 25, 8, -30, 36, 25);
}

