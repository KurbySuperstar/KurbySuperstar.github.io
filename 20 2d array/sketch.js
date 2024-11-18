// Puzzle Game
// Ian Herperger
// 10/29/2024



//makes open grid and variables needed to make grid
const NUM_ROWS = 60;
const NUM_COLS = 50;
let winCon = 0;
let rectWidth, rectHeight;
let currentRow, currentCol;
let grid =[];


//set up grid and screen
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomize();

}

// fills grid with correct colours
function drawGrid(){
//draw the squares for the grid that appears
  for (let y = 0; y < NUM_ROWS; y++){
    for (let x = 0; x < NUM_COLS; x++){
      fill(grid[y][x]);
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}

// keeps track of which square your mouse is over
function determineActiveSquare(){
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);
}


// flips square colour on grid
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

// call the win function and the grid function also the green cross overlay
function draw() {
  background(220);
  determineActiveSquare();

  drawGrid();

  overlay();
  win();
}

// makes it so when clickd it flips square and when shift clicked flips one square
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


// adds a way  to win the game with all squares being one clolour
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

// let the board be randomized each time you start the game up
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


// creats the green overlay
function overlay(){
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);

  fill(0,200,0,100);
  rect(currentCol*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect((currentCol-1)*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect((currentCol+1)*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect(currentCol*rectWidth,(currentRow-1)*rectHeight,rectWidth,rectHeight);
  rect(currentCol*rectWidth,(currentRow+1)*rectHeight,rectWidth,rectHeight);
}