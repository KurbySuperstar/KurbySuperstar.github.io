// Drawing with loops
// Ian Herperger
// 10/9/2024

//global variables
let gridSpacing = 1;



function setup() {
  createCanvas(windowWidth, windowHeight);
 // loopReview();
}

function loopReview(){
  //quick nested loop preview(x,y)
  for (let x=0; x< 4; x++){//x: 0,1,2,3
    for (let y=0; y<4; y++){// y: 0,1,2,3
      print(x,y);

    }
  }
}

function draw() {
  background(220);
  renderGrid()
}

function circleDistance(x1,y1,x2,y2){
  //takes in two end points nd returns the straight line distance between them
  let a = abs(x1 - x2)
  let b = abs(y1 - y2)
  let c = sqrt(pow(a,2) + pow(b,2))
  return round(c);
}

function renderGrid(){
  //use nested loops to create a grid of shapes...
  for (let x =0; x<width ; x = x+ gridSpacing){
    for (let y = 0; y< height; y =y + gridSpacing){

      let d = circleDistance(x,y,mouseX,mouseY);
      if (d >150){
        fill(0)
      }
      else{
        fill(200,50,255)
      }
      circle(x,y,gridSpacing);
      fill(200)

      textSize(gridSpacing/2.5)
      textAlign (CENTER,CENTER)
      text(d,x,y)
    }
  }
}