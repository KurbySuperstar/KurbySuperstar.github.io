// 05 loop drawing single
// Ian Herperger
// 9/19/2024
//
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  myBackground();
  myForeground();
  //this is wherer the screen draws the frame
}
function myBackground(){
  let rectHeight = 5
  for(let y = height; y>+ 0; y -= rectHeight){
    let value = map(y,0,height,0,255)
    noStroke();
    fill(value,y/5,y/2)
    rect(0,y,width,rectHeight)
  }
}
function myForeground(){
  for(let x = 0; x < width; x+= 50){
    stroke(0)
    fill(0);
    circle(x,height/2,40);
    fill(255);
    textAlign(CENTER)
    text(x,x,height/2);
  }
  //create stars x100
  let starCount = 0;
  randomSeed(1234525637)
  while(starCount < 100){
    fill(255,255,0)
    let x = random(0,width); let y = random(0,height)
    circle(x,y,10);
    starCount ++;
  }
}