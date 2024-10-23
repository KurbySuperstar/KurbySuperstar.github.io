// CARS CARS CARS CARS CARS CARS CARS cARS CARS CARS CAR CARS CARS CARS CARS CARS CARS CARS CARS
// Ian.H
// 10/18/2024

let dash1 = 0;
let dash2 = 20;
let myCar;
let eastbound = [];
let westbound = [];
let light;
let count;

function setup() {
  createCanvas(windowWidth, windowHeight);
  count = 0;
  frameRate(60);
}

function draw() {
  background(155);
  drawRoad();
  for(let i=0; i<eastbound.length; i++){
    eastbound[i].action();
  }
  for(let i=0; i<westbound.length; i++){
    westbound[i].action();
  }
}


function drawRoad(){
  fill(0);
  noStroke();
  rect(0,height/3.5,width,400);
  stroke(255,225,0);
  strokeWeight(5);
  while (dash1 < width){
    line(dash1,height/2,dash2,height/2);
    dash1 += 40;
    dash2 += 40;
  }
  dash1 = 0;
  dash2 = 20;

}
function mouseClicked(){
  if(keyIsPressed && keyCode === SHIFT){
    westbound.push(new vehicle(0,random(height/2.2,height/3.2),1));

  }
  else{
    eastbound.push(new vehicle(width,random(height/1.9,height/1.5),0));
  }

}

class vehicle{
  constructor(x,y, direction){
    this.x = x;
    this.y = y;
    this.colour = color(random(255), random(255),random(255));
    this.direction = direction;
    this.xspeed = random(1,30);
    this.type = int(random(2));



  }
  action(){
    //call the other functions
    this.trafficLight();
    this.speedup();
    this.slowdown();
    this.move();
    this.colorchange();
    this.display();

  }
  display(){
    if(this.type ===0){

      this.drawCar();


    }
    else if(this.type === 1){
      this.drawTruck();
      

    }
  }
  drawCar(){
    strokeWeight(1);
    stroke(255);
    fill(this.colour);
    rect(this.x,this.y,100,40);

  }
  drawTruck(){
    strokeWeight(1);
    stroke(255);
    fill(this.colour);
    ellipse(this.x,this.y,100,40);

  }
  move(){
    if (this.direction === 1){
      if (light === 1){

        this.x += this.xspeed;
        if (this.x > width){
          this.x =0;
        }
      }
  

    }
    else if (this.direction === 0){
      if(light === 1){
        this.x -= this.xspeed;
        if (this.x < 0){
          this.x =width;
        }
      }
  

    }


  }
  speedup(){
    if (this.direction === 1){
      if (random(1,100) >= 100){
        xspeed += random(1,15);
      }
    }
    if (this.direction === 0){
      if (random(1,100) >= 100){
        xspeed += random(-15,-1);
      }
    }
  }
  slowdown(){
    if (this.direction === 1){
      if (random(1,100) >= 100){
        xspeed -= random(1,15);
      }
    }
    if (this.direction === 0){
      if (random(1,100) >= 100){ 
        xspeed -= random(-15,-1);
      }
    }
  }
  colorchange(){
    if(random(1,100) >= 100){
      this.colour = color(random(255),random(255),random(255));

    }
  }
  trafficLight(){
    noStroke();
    fill("green");
    light = 1;
    if(light === 1){
      rect(width/2, 50,30); 
    }
    // if (keyIsPressed &&  keyCode === 32){

    //   light = 0;


    //   for (let l = 0; l<240000; l++){
    //     fill(255,0,0);
    //     rect(width/2, 50,30);

    //   }
    // }

  }
}
