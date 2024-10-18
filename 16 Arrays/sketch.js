// Arrays
// Ian Herperger
// Date

let names = ['jhon', 'Jane', 'Steafan'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //.push adds thing to end of list
  names.push('Liam');
  console.log(names);
  //.pop removes from end of list
  let nameLast = names.pop();
  console.log(names);
  console.log(nameLast);


  // .shift takes name from front
  let nameFirst = names.shift();
  console.log(names);
  console.log(nameFirst);

  names.push('Liam2');
  names.push('Liam3');
  names.push('Liam4');
  names.push('Liam5');

  for (n of names){
    console.log(n);
  }

  console.log(random(names));

}

function draw() {
  background(220);
}
