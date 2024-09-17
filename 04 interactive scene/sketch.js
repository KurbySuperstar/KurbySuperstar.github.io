// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke()
  fill(255,255,255);
  ellipse(windowWidth/2,windowHeight,windowHeight*2,windowHeight*0.15);
  if (mouseX > windowWidth*0.5){
    fill(255,0,0);
    circle(windowHeight*0.2,windowWidth*0.1,200);
  }
  else{
    fill(255,255,0);
  circle(windowHeight*0.2,windowWidth*0.1,200);

  }
  fill(0,0,0);
  stroke(255,255,255);
  circle(mouseX,mouseY -50,50);
  arc(mouseX, mouseY-50,20,20,mouseX + 20, mouseX - 20);
  line(mouseX,mouseY-25,mouseX,mouseY+50);
  line(mouseX,mouseY-10,mouseX+25,mouseY+15);
  line(mouseX,mouseY-10,mouseX-25,mouseY+15);
  line(mouseX,mouseY+50,mouseX+25,mouseY+75);
  line(mouseX,mouseY+50,mouseX-25,mouseY+75);
}
