// Recursion and Fractals
// Ian Herperger
// Novemeber 13,2024
//



function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  seed = random(100);
}

function draw() {
  background(255);
  randomSeed(seed);
  //cricleInCircle(width/2,height/2,width);
  //cantor(width*0.1,height*0.3,width*0.8,6);
  //circleFractal(width/2,height/2,height/2);
  squareFractal(width/2,height/2,width/2);
}
function squareFractal(x,y,len){
  if(len >10){
    rectMode(CENTER);
    fill(random(255),random(255),random(255));
    
    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(0,0,len);
    pop();

    squareFractal(x-len/2,y-len/2,len/2);
    squareFractal(x+len/2,y+len/2,len/2);
    squareFractal(x-len/2,y+len/2,len/2);
    squareFractal(x+len/2,y-len/2,len/2);

  }
  //base case
}
function circleFractal(x,y,d){
  if(d>2){
    circle(x,y,d);
    circleFractal(x-d/2,y,d/2);
    circleFractal(x+d/2,y,d/2);
    circleFractal(x,y+d/2,d/2);
  }
  //base case
}
function cantor(x,y,len,depth){
  if(depth > 0){
    line(x,y,x+len,y);
    let newY = y + 20;
    cantor(x,newY, len/3, depth -1);
    cantor(x + 2/3*len,newY,len/3,depth-1);
  }
  //baseCase

}
function cricleInCircle(x,y,d){
  if (d > 10){
    circle(x,y,d);
    let den = map(mouseX,0,width,1.01,1.5);
    cricleInCircle(x,y,d/den);
  }
  // implicicit base case
}