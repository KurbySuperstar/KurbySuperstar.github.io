// intro to objects
// Ian Herperger
// 10/10/2024

let myBook;
let myBook2;
let myBook3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 TextBook","JO MAMA","leatherbound",515,1234567891011,
    width*0.3
  );
  myBook2 = new Book("Hello","JO MAMA","softcover",300,1234567891011,
    width*0.3 +40
  );
  myBook3 = new Book("WHY","JO MAMA","hardcover",800,1234567891011,
    width*0.3 - 65
  );
}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
}
class Book{
//1.constructor
  constructor(title,author,coverType,pages,ISBN,x){
    this.title = title;
    this.author = author;
    this.coverType = coverType;
    this.pages = pages;
    this.isbn = ISBN;
    this.x = x; 
  }
  //2. class methods
  printSummary(){
    //print out a nicely formatted decrption of the object
    print(this.title + ", by " + this.author);
    print("length: " + this.pages + "pages");
    print("covertype: " + this.coverType);
    print("ISBN: " + this.isbn);
  }

  display(){
    //visualize the book based on its properties
    //width depends on pages (1/10scale)
    rectMode(CENTER); textAlign(CENTER,CENTER);
    switch(this.coverType){
    case "softcover":
      fill(250,200,200); break;
    case "hardcover":
      fill(120,255,240); break;
    case "leatherbound":
      fill(150,100,15);break;

    }
    rect(this.x,height/2,this.pages/10,150);
    textSize(20); fill(255);
    text(this.title[0],this.x, height/2 -50);
  } 

}
