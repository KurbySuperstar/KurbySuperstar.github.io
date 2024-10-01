// Perlin Noise Demo
// Ian Herperger
// 9/27/2024

// noise() VS Random()
let circleTime = 5; let circleInterval = 0.001;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60)
}

function draw() {
  background(220);
  line(width/2,0,width/2,height)

//random()
randomCircle()

//noise()
noiseCircle();
staircase();
}
function noiseCircle(){
  //draw a circle on the screen using noise for values
let cSize = noise(circleTime);
cSize = map(cSize,0,1,10,255);
fill(cSize/3,cSize/2,215)
circle(width*0.75,height/2,cSize)
text(round(cSize),width * 0.75,height/2)
circleTime += circleInterval;
}
function staircase(){

  let rectWidth =  20;
  for(let x = 0; x <= width; x += rectWidth){
noFill();
let rectHeight = random(50,500);
rect(x,height,rectWidth,-rectHeight);
  }
  
}
function randomCircle(){
  //draw a cricle on the screen, using random values of the diameter (later,colour)
 let cSize =random(10,200)
 circle(width*0.25,height/2,cSize)
 textAlign(CENTER,CENTER)
 textSize(50)
 text(round(cSize),width * 0.25,height/2)
}