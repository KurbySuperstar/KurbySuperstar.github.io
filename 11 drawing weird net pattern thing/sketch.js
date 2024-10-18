// net thingy
// Ian Herperger
// 10/9/2024

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let x = 0; x < width; x += 30){
    circle(x,0,20);
    line(x,0,mouseX,mouseY);

  }
  for(let y = 0; y < width; y += 30){
    circle(0,y,20);
    line(0,y,mouseX,mouseY);

  }
  for(let x = 0; x < width; x += 30){
    circle(x,height,20);
    line(x,height,mouseX,mouseY);

  }
  for(let y = 0; y < width; y += 30){
    circle(width,y,20);
    line(width,y,mouseX,mouseY);

  }
  
}
