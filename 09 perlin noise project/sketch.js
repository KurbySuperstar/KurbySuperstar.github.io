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
  frameRate(60)
}

function draw() {
  background(220);
  terrain = 5+frameCount/20;
  generateTerrain()
}
function generateTerrain(){
let highestPoint = 0
let highestPointx = 0
let average = 0
  for(let x = 0; x <= width; x += rectWidth){
noFill();
let rectHeight = noise(terrain);
rectHeight = map(rectHeight,0,1,50,1000);
if (rectHeight > highestPoint){
  highestPoint = rectHeight
  highestPointx = x
}
average = height -rectHeight
rect(x,height,rectWidth,-rectHeight);
terrain += terraininterval
  }
  drawFlag(highestPointx,height - highestPoint)  
  stroke(255,0,90)
  line(0,average,width,average)
  stroke(0)
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
function drawFlag(x,y){
line(x,y,x,y-100)
triangle(x,y-100,x,y-60,x+30,y+-80)

}