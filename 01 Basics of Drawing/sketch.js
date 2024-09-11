// Basics of Drawing
// Ian Herperger
// sept 11. 2024
//
//2D primitives, colour, animation, mouse/keyboard events.



function setup() {
  //happens once, at *very* start
  createCanvas(500, 500);
}

function draw() {
  // when possible try
  // to keep draw() clean
  background(220);
  drawCircles();
  
}
function drawCircles(){
  // contains the code to
  // draw five circles
  fill(0, 100, 250); circle(0,0,50);fill(0, 250, 250); circle(width/2,height/2,50);fill(0, 200, 250); circle(width,height,50);fill(0, 0, 250); circle(0,height,50);fill(100, 0, 0); circle(width,height,50);fill(0, 0, 50); circle(width,0,50);
  circle(width*0.666666666666666666667,height/2,50)
}

