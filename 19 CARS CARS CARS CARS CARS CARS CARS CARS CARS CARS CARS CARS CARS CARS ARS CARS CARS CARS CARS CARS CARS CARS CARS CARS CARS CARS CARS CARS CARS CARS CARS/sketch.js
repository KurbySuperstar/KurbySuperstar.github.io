// CARS CARS CARS CARS CARS CARS CARS cARS CARS CARS CAR CARS CARS CARS CARS CARS CARS CARS CARS
// Ian.H
// 10/18/2024

let dash1 = 0;
let dash2 = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(155);
  drawRoad();
}


function drawRoad(){
  fill(0);
  noStroke();
  rect(0,height/3.5,width,400);
  stroke(255);
  strokeWeight(5);
  while (dash1 < width){
    line(dash1,height/2,dash2,height/2);
    dash1 += 40;
    dash2 += 40;
  }
  dash1 = 0;
  dash2 = 20;

}

class vehicle{
  constructor(type,x,y,colour, direction){
    this.x = x;
    this.y = y;
    this.colour = colour(random(255), random(255),random(255));
    this.direction = direction;
    this.xspeed = random(1,70);

    this.type = type;


  }

}