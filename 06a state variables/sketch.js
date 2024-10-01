// state variables
// Ian Herperger
// sept,25,2024

//global variabels
let currentColour = 0; //0,1,2 
let myColour;
let circleSize = 50;
let growing = false;//2-state variable
function setup() {
  createCanvas(windowWidth, windowHeight);
  myColour = color(123,232,134);
}

function draw() {
  background(myColour);
  //circle code - fill colour. using swithc statment
  switch(currentColour){//branches based on currretncolour
    case 0:
      fill(255,0,255);
      break;
    case 1:
      fill(myColour);
      break;
    case 2:
      fill(255,255,0)
      break;
  }
  if(frameCount % 1 === 0){//true one every to frames
    //0,1,2,3,4,5,6,7,8,9,
    currentColour +=1
    if(currentColour > 2) currentColour =0;
  }
  //circle code - modify circle size
if (growing) circleSize += 2;
else circleSize -=2;
//circle code
circle(windowWidth/2,windowHeight/2,circleSize)


}
function keyPressed(){
  //gets called automatically once per key press
  if(key === "a"){
    growing = !growing;
  }
}