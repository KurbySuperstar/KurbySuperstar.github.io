// Terrain Generation
// Ian Herperger
// 10,3,2024


//variables to create the terrain
let rectWidth =  20;
let terrain = 5;
let terraininterval = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60)
}
//call the functions making the average and terrain. also the variables for the average
function draw() {
  background(147,241,245);
  terrain = 5+frameCount/20;
 totalrect = 0;
 totalsum = 0;
  generateTerrain()
  average()
}
//Takes variables from up top to create terrain
function generateTerrain(){
  stroke(0)
let highestPoint = 0
let highestPointx = 0
for(let x = 0; x <= width; x += rectWidth){
fill(211,123,236)
stroke(211,123,236)
let rectHeight = noise(terrain);
rectHeight = map(rectHeight,0,1,50,1000);
totalsum += rectHeight
totalrect ++;
if (rectHeight > highestPoint){
  highestPoint = rectHeight
  highestPointx = x
}
rect(x,height,rectWidth,-rectHeight);
terrain += terraininterval

  }
  //calls the function to draw the flag at the highest point
  drawFlag(highestPointx,height - highestPoint)  

}
//allows you to change the size of the rectangles the terrain is made of
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

//creates the flag that is drawn and its posistion
function drawFlag(x,y){
fill(0,0,0)
stroke(0,0,0)
line(x,y,x,y-100)
triangle(x,y-100,x,y-60,x+30,y+-80)

}
//creates the rectangles shwoing the average
function average(){
  let averageHeight= totalsum / totalrect;
  stroke(255,0,0)
  fill(255,0,0)
  rect(0,height-averageHeight,width,30)
  fill(0)
}