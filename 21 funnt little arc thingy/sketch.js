// Recaman
// Ian.H
// 11/1/2024
//
// start of the sequence: 0,1,3,6,2,7,13,20,12,21
let sequence = [];
let stepAmount = 1;
let currentvalue = 0;

let largest = 0;
let scaleAmount;
let arclist = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  translate(0,height/2);
  addToSequence();
  scaleAmount = lerp(scaleAmount,width/largest,0.05);
  scale(scaleAmount);
  renderArcs();
  
}

function addToSequence(){
  let backwards = currentvalue - stepAmount;
  if(backwards > 0 && !sequence.includes(backwards)){
    arclist.push( new rArc(currentvalue,backwards,sequence.length%2));
    sequence.push(backwards);
    currentvalue = backwards;
    stepAmount ++;


  }
  else{
    let forwards = currentvalue + stepAmount;
    arclist.push( new rArc(currentvalue,forwards,sequence.length%2));
    sequence.push(forwards);
    currentvalue = forwards;
    stepAmount ++;
    if(currentvalue > largest){
      largest = currentvalue;
    }
  }
}
function renderArcs(){
  for(let r of arclist){
    r.display();
  }
}

class rArc{
  constructor(start,end,direction){
    this.start = start;
    this.end = end;
    this.direction = direction;
  }
  display(){
    let diameter = abs(this.start - this.end);
    let x = (this.start+this.end)/2;//center
    strokeWeight(0.5);
    if (this.direction ===0){
      arc(x,0,diameter,diameter,0,PI);
    }
    else{
      arc(x,0,diameter,diameter,PI,0);
    }
  }
}