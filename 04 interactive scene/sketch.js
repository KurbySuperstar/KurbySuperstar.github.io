// interactive sketch
// Ian Herperger
// 9/24/2024
//allows my name to appear
let name = "Ian_Herperger";
//make the window
function setup() {
  createCanvas(windowWidth, windowHeight);
} 

var currentBack = 0
var move = 0
function draw() {
  bG();
  //background(0,0,0)
  noStroke()
  fill(255,255,255);
  //make the moon
  ellipse(windowWidth/2,windowHeight,windowHeight*2,windowHeight*0.15);
  //make the sun
  if (mouseX > windowWidth*0.5){
    fill(255,0,0);
    circle(windowHeight*0.2 +move,windowWidth*0.1,200);
  }
  else{
    fill(255,255,0);
  circle(windowHeight*0.2 + move  ,windowWidth*0.1,200);

  }
  fill(0,0,0);
  stroke(255,255,255);
  circle(mouseX,mouseY -50,50);
  //Makes the dude you move around with mouse
  arc(mouseX, mouseY-50,20,20,mouseX + 20, mouseX - 20);
  line(mouseX,mouseY-25,mouseX,mouseY+50);
  line(mouseX,mouseY-10,mouseX+25,mouseY+15);
  line(mouseX,mouseY-10,mouseX-25,mouseY+15);
  line(mouseX,mouseY+50,mouseX+25,mouseY+75);
  line(mouseX,mouseY+50,mouseX-25,mouseY+75);
  //calls to the function that moves the sun
  moveSun()
  //makes my neam appear
  textSize(60);
  text(name,width*0.7,height*0.99)
}
//changes the background on a middle mouse press
function bG(){
  if (currentBack === 0){
    background(0);
  }
  else if (currentBack === 1){
    background(255,0,0);
  }
  else if (currentBack ===2){
    background(0,255,0);
  }
  else{
    background(0,0,255);
  }

}
//up th function that allows the bg to change on middle mouse press
function mousePressed(){
  if (mouseButton === CENTER && currentBack ===0){
    currentBack+=1
  }
  else if (mouseButton === CENTER && currentBack === 1){
    currentBack += 1
  }
  else if (mouseButton === CENTER && currentBack === 2){
    currentBack+=1
  }
  else if (mouseButton === CENTER&& currentBack === 3){
    currentBack-=3
  }
}
// This function allows a key press to move the sun
function moveSun(){
  if (move > windowWidth){
    move -= windowWidth 
  }
  else if (keyIsPressed === true){
    move += 10    
  }

}
