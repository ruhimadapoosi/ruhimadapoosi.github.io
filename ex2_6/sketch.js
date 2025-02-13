
let cx,cy;
let bgc;
let gridSize;
let pizza;
let f1;

function preload (){
  f1 = loadFont ("assets/unamusedfont.otf");
}
function setup() {
    createCanvas(800, 800);
    background(255);
    // bgc - color function, allows u to store 
    // a color swatch instead of typing in the
    // hex code every time 
    bgc = color(20,1);
    // set up a assets folder then add an image.
    pizza = loadImage("assets/herlock.png")
    background = loadImage("assets/sage.jpg")
    // cx and cy are center of canvas
    // saying to go 400 across/400 down 
    cx = width/2;
    cy = height/2;
    // size of the images on the grid
    gridSize = 40;
    // size of text 
    textSize(40);
    textFont(f1);
}

function draw() {
    // optional fade trick
    //fill(bgc);
    //rect(9,9,width,height);
 
    // function keyPressed & and function mouseMoved
    // true/false
    // functions already defined 

    // keyIsPressed - global property 
    // mouseX, mouseY - global
    // checking constantly if keyIsPressed
    // if it is, then it triggers function keyChoice
    if( keyIsPressed) {  // true/false
       keyChoice();
    }

    // for (let i = 0; i <10; i+=20) {
    //   fill (20,100,20);
    //   rect (i,30,40,40);
    // }

    for (let i = 0; i < 200; i+=20) {
      rect(20,20,70,50)
      ellipse (20,20,40,40)
    }

}




// wrapper functions
function keyChoice() {
 // the 'key' maps what characters on the keyboard you can use.
 // switch statment
 //switch selects 1 value and 
 // another way of writing this:
 // if (key == 'a') {do something}
 // almost a function w/i a function
 // if a, then do this, if w, then do this...etc...
switch(key) {
case 'a':
  console.log("a left");  // left
  cx+= -gridSize;
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 'w':
  console.log("w up");  // up
  cy+= -gridSize; 
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 'd':
  console.log("d  right");  //right
  cx+= gridSize;
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 's':
  console.log("s back");  // back
  cy+= gridSize;
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 't':
    console.log("t text");  // text
    fill(255,0,0);
    text("Pizza!",cx,cy,200);
    break;
case 'r':
    console.log("r text");  // text
    fill(255,0,0);
    text("yippee",cx+random(-20,20),cy+random(-20,20),200);
    break;
case 'b':
    console.log("background");  // text
    image(background,0,0,height,width)
    break;
default:             // Default executes if the case labels
  console.log("try again");   // don't match the switch parameter
  break;
}

//if u comment it out then it will go on as u hold
//but w it it means after 1 hit ur done and need to
//repress the key
key = "";  // you can empty it so, it does not double trigger

}
