var flower;
var grass;
var leaf;
var vine;
var initials ='rm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('f.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  flower = loadImage('flower.png');
  grass = loadImage('grass.png');
  leaf = loadImage('leaf.png');
  vine = loadImage('vine.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

  // Create a color picker and set its position.
  myPicker = createColorPicker('deeppink');
  myPicker.position(600, 0);

  describe('color picker');

}

function draw() {
  
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function 
  
   // color picker
  let c = myPicker.color();
  
  //distance + midpoints to warp/string things
        const distance = dist(mouseX, mouseY, pmouseX, pmouseY)
      const midX = (mouseX + pmouseX) / 2
      const midY = (mouseY + pmouseY) / 2
 if (toolChoice == '1' ) {  // first tool 
   
    stroke(c);
    strokeWeight(5);

    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool - eraser

    stroke(screenbg);
        strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { // fourth tool
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // purplify
  push();
   blendMode(LIGHTEST);
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);
  pop();
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
push();
    blendMode(HARD_LIGHT);
    noStroke();
    fill(c);
    circle(mouseX, mouseY, distance);
pop();
  } else if (toolChoice == '7') {
      
      tint(c);
    image(leaf, midX, midY, 50, distance);
    

  } else if (toolChoice == '8') {

          tint(c);
    image(vine, mouseX-25, mouseY-25, 50, 50);

  } else if (toolChoice == '9') {
    noStroke();
    fill(c,random(225),c,c);
    circle(midX, midY, distance)
  } else if (toolChoice == '0') {
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    ellipse(midX, midY, distance);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
  tint(255,random(255),random(255),255,);
    image(flower, mouseX-25, mouseY-25, 50, 50);
  } else if (toolChoice == '3') { // third tool
  tint(random(255),250,60,300,);
    image(grass, mouseX-50, mouseY-50, 100, 100);   
 }
else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
  tint(c);
    image(flower, mouseX-25, mouseY-25, 50, 50);
  } 

}
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
 
  
  
}
