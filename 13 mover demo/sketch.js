// mover
// Ian H
// 10/15/2024


let movers = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <1000; i++){
    movers.push(new mover(random(width),random(height)));

  }
}

function draw() {
  background(220);
  for(let i = 0; i < movers.length; i++){
    movers[i].move();
    movers[i].display();
  }
}
function mouseClicked(){
  movers.push(new mover(mouseX,mouseY));
}

class mover{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.xspeed = 2;
    this.yspeed =2;


  }

  display(){
    fill(255);
    ellipse(this.x,this.y,10,10);
  }
  move(){
    this.x += this.xspeed;
    this.y += this.yspeed;
    if(this.x < 0 || this.x> width){
      this.xspeed *= -1;

    } 
    if(this.y < 0 || this.y > height){
      this.yspeed *= -1;

    } 

  }



}