// Drawing Challlenge
// Ian Herperger
// Sept 13, 2024

// let rX = 50; let rY = 50;
let headsize = 100
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// function draw() {
//   background(220);
//   //moving rectangle
//   if (keyIsPressed) {
//     if (key === "a") {
//       rY += 10; //rY = rY +=10;
//       if (rY > height) rY = 0;
//     }
//   }
//   fill(255, 150, 50);
//   rect(rX, rY, 60, 35, 50, 0);
// }
// function keyPressed() {
//   // dont callhis function its automatic
//   if (keyCode===DOWN_ARROW){//Down Arrow
//     rY += 100;
//     }
// }
function draw(){
  fill(0,255,0);
  noStroke();
  circle(windowWidth*.5,windowHeight*.5,headsize);
  rect(windowWidth*.5 - headsize*0.5,windowHeight*.5,headsize*1,headsize*0.5);
  stroke(1,1,1);
  line(windowWidth*.5 - headsize*.25,windowHeight*.5 + headsize/5,windowWidth *0.5 + headsize*0.25,windowHeight*.5+ headsize/5);
  noStroke();
  rect(windowWidth*.5 - headsize*.5,headsize*5.7 - headsize*.5 ,headsize*.1,headsize*0.2)
  rect(windowWidth*.5 + headsize*.4,headsize*5.7 - headsize*.5,headsize*.1,headsize*0.2)
  fill(0,0,0)
  circle(windowWidth*.5 - headsize*.25,windowHeight*.5,headsize*.1);
  circle(windowWidth*.5 + headsize*.25,windowHeight*.5,headsize*.1);
}

