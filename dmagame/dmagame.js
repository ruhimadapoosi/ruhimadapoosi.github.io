var ballx = 250;
var bally = 250;
var ballSize = 40;
var gameState= "L1";
var number = random(1, 300);
var bee;
var bg1, bg2, bg3, bg4, bg5, bg6;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  bee = loadImage('https://ruhimadapoosi.github.io/dmagame/bee.png');
  bg1 = loadImage('https://ruhimadapoosi.github.io/dmagame/lv1bg.png');
  bg2 = loadImage('https://ruhimadapoosi.github.io/dmagame/lv1bg2.png');
  bg3 = loadImage('https://ruhimadapoosi.github.io/dmagame/lv2bg.png');
  bg4 = loadImage('https://ruhimadapoosi.github.io/dmagame/lv2bg2.png');
  bg5 = loadImage('https://ruhimadapoosi.github.io/dmagame/lv3bg.png');
  bg6 = loadImage('https://ruhimadapoosi.github.io/dmagame/lv3bg2.png');

}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  } // end setup


function draw() {
  background(bg1);

  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
    

} // end draw


function levelOne(){
  text("Get the bee to the flower! ", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
  }
  if (ballx > 300 && ballx < 500 && bally < 500 && bally > 300){
   textSize(30);
   textAlign(CENTER);
   background (bg2);
   text('Yippee! You did it! click for the next round. ', width/2, height/2);  
      if (mouseIsPressed == true) {
      // call level 2
      gameState= "L2";
  }
  }
  
  image(bee, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);

} // end level one

function levelTwo(){
  background(bg3);
  text("Get the bee to the flower", width/2, height-20);
   var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
  }
  if (ballx > 100 && ballx < 200 && bally < 250 && bally > 150){
   textSize(30);
   textAlign(CENTER);
   background (bg4);
   text('You made it!', width/2, height/2);  
      if (mouseIsPressed == true) {
      // call level 3
      gameState= "L3";
  }


  }
  
  image(bee, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} // end level two

function levelThree(){
  background(bg5);
  text("Get the bee to the flower", width/2, height-20);
   var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
  }
  if (ballx > 175 && ballx < 225 && bally < 425 && bally > 375){
   textSize(30);
   textAlign(CENTER);
   background (bg6);
   text('Yippee!', width/2, height/2);  
  }
  
  image(bee, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} // end level three
