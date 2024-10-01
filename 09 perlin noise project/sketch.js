// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectWidth =  20;
let terrain = 5;
let terraininterval = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5)
}

function draw() {
  background(220);
  generateTerrain()
}
function generateTerrain(){
  for(let x = 0; x <= width; x += rectWidth){
noFill();
let rectHeight = noise(terrain);
rectHeight = map(rectHeight,0,1,10,255);
rect(x,height,rectWidth,-rectHeight);
terrain += terraininterval
  }
  
}
function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    rectWidth += 1
  }
  if(keyCode === LEFT_ARROW){
    if (rectWidth >  1){
    rectWidth -= 1
    }
  }
}
function drawFlag(){}