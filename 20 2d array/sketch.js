// Puzzle Game
// Ian Herperger
// 10/29/2024

const NUM_ROWS = 5;
const NUM_COLS = 5;
let winCon = 0;
let rectWidth, rectHeight;
let currentRow, currentCol;
let grid =[];
//let gridData = [[0,0,0,255,0],
                // [255,0,255,0,255],
                // [0,255,0,0,0],
                // [0,0,255,0,255]];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomize();

}
function drawGrid(){
//draw the squares for the grid that appears
  for (let y = 0; y < NUM_ROWS; y++){
    for (let x = 0; x < NUM_COLS; x++){
      fill(grid[y][x]);
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}
function determineActiveSquare(){
  //know which squares are currently no solved
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);
}


function flip(col, row){
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS){
    if (grid[row][col] === 0){
      grid[row][col] = 255;
    }
    else{ 
      grid[row][col] = 0;
    }
  }
}

function draw() {
  background(220);
  determineActiveSquare();

  drawGrid();

  win();
  overlay();
}
function mousePressed(){
  if(keyIsDown(SHIFT)){
    flip(currentCol, currentRow );
  }
  else{


    flip(currentCol, currentRow );//mouse
    flip(currentCol-1, currentRow );//left
    flip(currentCol+1, currentRow );//right
    flip(currentCol, currentRow-1 );//up
    flip(currentCol, currentRow+1 );//down
  }

}
function win(){
  let fv = grid[0][0];
  let white = grid.every(row => row.every(value=> value === fv));
  if(white){
    stroke(0);

    textAlign(CENTER);
    textSize(50);
    fill(0);
    text("YOU WIN",width/2,height/2);

  }
  let black = grid.every(row => row.every(value=> value === fv));
  if(black){
    fill(255);
    textAlign(CENTER);
    textSize(50);
    text("YOU WIN",width/2,height/2);

  }

}
function randomize(){
  for(let i =0; i< NUM_ROWS;i++){
    let rowArray = [];
    for(let i =0; i< NUM_COLS;i++){
      r = int(random(0,2));
      if (r === 0){
        rowArray.push(0);
      }
      else{
        rowArray.push(255);
      }

    }
    grid.push(rowArray);

  }
}

function overlay(){
  //know which squares are currently no solved
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);

  fill(0,200,0);
  rect(currentCol*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect((currentCol-1)*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect((currentCol+1)*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect(currentCol*rectWidth,(currentRow-1)*rectHeight,rectWidth,rectHeight);
  rect(currentCol*rectWidth,(currentRow+1)*rectHeight,rectWidth,rectHeight);
}