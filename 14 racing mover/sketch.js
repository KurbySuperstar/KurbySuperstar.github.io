// Project Title
// Your Name
// Date


let circle1;
let circle2;
let circle3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circle1 = new RoundRacer(random(300,500),'lightgreen');
  circle2 = new RoundRacer(random(200,400),'red');
  circle3 = new RoundRacer(random(0,200),'blue');
}

function draw() {
  background(220);
  circle1.display();
  circle2.display();
  circle3.display();
  circle1.move();
  circle2.move();
  circle3.move();

}

class RoundRacer{
  
  constructor(ypos,colour){
    this.xpos = 0;
    this.ypos = ypos;
    this.colour = colour;
    this.xspeed = random(3,15);
  }
  move(){
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos >= width){
      this.xpos = 0;
    }

  }
  display(){
    fill(this.colour);
    circle(this.xpos,this.ypos,10);
  }
}

