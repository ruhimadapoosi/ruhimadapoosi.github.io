var bottomitems; 
var topitems; 
var fntop;
var fnbottom;
//set up interactions
var currentbottom = 0;
var currenttop = 0;


//preload imgs
function preload() {
 sb0 = loadImage("test_01.png");
 sb1 = loadImage("test_02.png");
 sb2 = loadImage("test_03.png");
 st0 = loadImage("top_01.png");
 st1 = loadImage("top_02.png");
 st2 = loadImage("top_03.png");
 t0 = loadImage("fntop_01.png");
 t1 = loadImage("fntop_02.png");
 t2 = loadImage("fntop_03.png");
 b0 = loadImage("fnbottom_01.png");
 b1 = loadImage("fnbottom_02.png");
 b2 = loadImage("fnbottom_03.png");

 //array for items
   bottomitems = [sb0,sb1,sb2];
   topitems = [st0,st1,st2];
   fntop = [t0, t1, t2];
   fnbottom = [b0, b1, b2];

}

function setup() {
  createCanvas(1000,600);
}

function draw() {
 background(51);
 
 //base 
 rect(150, 50, 100, 500);
 
 //load items
 image(bottomitems[currentbottom], 600, 300, 100, 100);
 image(topitems[currenttop], 600, 100, 100, 100);
 image(fntop[currenttop], 100, 150, 200, 200);
 image(fnbottom[currentbottom], 100, 300, 200, 200);

}

//changes
function bottomitemchange () {
    currentbottom = currentbottom + 1;
    if (currentbottom == 3) {
    currentbottom = 0;
    }
}
function topitemchange () {
    currenttop = currenttop + 1;
    if (currenttop == 3) {
    currenttop = 0;
    }
}

//restricted box for item change clicks
function mousePressed () {
   if (mouseX > 600 && mouseX < 700 && mouseY > 300 && mouseY < 400){
     bottomitemchange (); 
    }
   if (mouseX > 600 && mouseX < 700 && mouseY > 100 && mouseY < 200){
     topitemchange (); 
    }
}
