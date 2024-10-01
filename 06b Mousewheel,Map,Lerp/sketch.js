// Mousewheel,Map,lerp
//Ian Herperger
//sept,25,2024

let x, y; //pos of circle
let w = 50; // width of circle


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x= width/2;   y = height/2;

  let r = map(x,0,width,0,255);
  let g = map(y,0,height,0,255);
  let b = map(x,0,width,255,0);
  stroke(r,g,b);
  noFill();
}

function draw() {
  //movment
  x= lerp(x,mouseX,0.12); y = lerp(y,mouseY,0.12);
  circle(x,y,w);
}
function mouseWheel(event){
  print(event.delta);
  if(event.delta > 0){
    w -= 10;
    if(w < 10) w = 10;
  }
  else w += 10;
}
