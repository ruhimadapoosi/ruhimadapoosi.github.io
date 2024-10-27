var base;

var hairf;
var hairb;

var tops;

var bottom;

var bow; 
var accessories; 

//set up interactions
var currentbase = 0;
var currenthair = 0;
var currenttops = 0;
var currentbottom = 0;

function preload() {
 //base
 base = loadImage("base_01.png");

 //bow
 bow0 = loadImage("bow_01.png");
 bow1 = loadImage("bow_02.png");
 bow2 = loadImage("bow_02.png");

 //hair
 hairf0 = loadImage("hair_01_front.png");
 hairf1 = loadImage("hair_02_front.png");
 hairf2 = loadImage("hair_03_front.png");
 
 hairb0 = loadImage("hair_01_back.png");
 hairb1 = loadImage("hair_02_back.png");
 hairb2 = loadImage("hair_03_back.png");

 //tops
 tops0 = loadImage("top_01.png");
 tops1 = loadImage("top_02.png");
 tops2 = loadImage("top_03.png");

 //bottoms
 bottom0 = loadImage("bottom_01.png");
 bottom1 = loadImage("bottom_02.png");
 bottom2 = loadImage("bottom_03.png");

//accessories 
 accessories = loadImage("accessories.png");


//array for items
   bow = [bow0, bow1, bow2];
   hairf = [hairf0, hairf1, hairf2];
   hairb = [hairb0, hairb1, hairb2];
   tops = [tops0, tops1, tops2];
   bottom = [bottom0, bottom1, bottom2];
   
}

function setup() {
  createCanvas(698,1440);

}


function draw() {
   background(255, 254, 238);
  // bow
  image(bow[currenttops], 0, 0, 698, 1440);
  
  // hair back
 image(hairb[currenthair], 0, 0, 698, 1440);

 //base 
 image(base, 0, 0, 698, 1440);
  
 //bottom
 image(bottom[currentbottom], 0, 0, 698, 1440);

 //tops
 image(tops[currenttops], 0, 0, 698, 1440);
 
  //hair front
 image(hairf[currenthair], 0, 0, 698, 1440);

 //accessories 
  image(accessories, 0, 0, 698, 1440);

} 

//changes + looping arrays
function hairchange () {
    currenthair = currenthair + 1;
    if (currenthair == 3) {
    currenthair = 0;
    }
}
function topschange () {
    currenttops = currenttops + 1;
    if (currenttops == 3) {
    currenttops = 0;
    }
}
function bottomchange () {
    currentbottom = currentbottom + 1;
    if (currentbottom == 3) {
    currentbottom = 0;
    }
}
//limited box for item change clicks
function mousePressed () {
 
  //hair change
  if (mouseX > 200 && mouseX < 550 && mouseY > 100 && mouseY < 500){
     hairchange (); 
    }
  //tops change
  if (mouseX > 200 && mouseX < 550 && mouseY > 500 && mouseY < 800){
     topschange (); 
    }
  //bottom change
  if (mouseX > 200 && mouseX < 550 && mouseY > 800 && mouseY < 1300){
     bottomchange (); 
    }

}
