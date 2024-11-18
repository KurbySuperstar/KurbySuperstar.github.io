// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let scale = 30;
//the depth for  the leaves
let dep = 4
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  seed = random(100)

}
//set the colours and draw the tree
function draw() {
  randomSeed(seed)
  background(255);
  drawTree(width/2, height*0.9, 90, 6);

}
function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
//how thick the lines are
strokeWeight(depth)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle))*depth*scale; //calculate endpoints of

    let y2 = y1 - sin(radians(angle))*depth*scale; //using trig ratios. Get

    let density = map(mouseX,0,width,1,30)

    drawLine(x1, y1, x2, y2, depth);
    if(depth <= dep )
      {drawLeaf(x2,y2,depth*20)}
    
    //for a 2-branch tree:
    drawTree(x2, y2, angle-density, depth-1);
    drawTree(x2, y2, angle+density, depth-1);
    drawTree(x2, y2, angle, depth-1);
  }
}

//change the depth manually with x and z
function keyPressed(){
  if(key === "x"){
    dep += 1;

  }
  if(key === "z"){
    dep -= 1;

  }

}


//draw the leafs
function drawLeaf(x,y,dia){

  fill(random(255),random(255),random(255))
  circle(x,y,dia)

}