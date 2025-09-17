let b1;
let b2;
let b3;
let bc = [];
let wc = [];

let count = 100;
let loX = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);

let wingrt = 1;
let speedw = 5;

let speedx= 2; 
let lx= 5;

let lx2= 0.2;
let speedx2 = 0.5;

let birdArray = new Array(15);

// rmBird (lx,ly,sc,dc,mc,wc,tail,deco,rt,bc,speedx)
// lx;  // x location
// ly;  // y location
// sc;  // scale
// dc;  // hat color
// mc;  // body + head color
// wc;  // wing color
// tail; // tail on (1) or off 
// deco; // hat on (1) or off
// rt; // wing rotation
// bc; // beak color 
// speedx;//custom speedx


function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);

  for (let i = 0; i < loX.length; i++) {
    colorsR[i] = int(random(0, 255));
    colorsG[i] = int(random(50, 55));
    colorsB[i] = int(random(10, 255));
  }



  bc = [colorsR[2],colorsG[50],colorsB[30]];
  wc = [colorsG[0],colorsR[0],colorsB[0]];


  b1 = new rmBird (lx,75,1,wc,bc,wc,0,1,0,wc,speedx);  
  b2 = new rmBird (lx,200,0.5,bc,bc,wc,1,1,0,bc,speedx);
  b3 = new rmBird (lx,300,0.25,wc,bc,wc,1,0,0,wc,speedx);

  
  for (let i = 0;  i < birdArray.length;i++) {

    let randomTail = int(random(0, 2));  
    let randomHat = int(random(0, 2));
    let randomSpeed = random(0.1, 5);

    birdArray[i] = new rmBird(
    random(0, width),
    random(10,500),
    random(0.05,0.75),
    [random(0, 255), random(50, 55), random(10, 255)],
    [random(0, 255), random(50, 55), random(10, 255)],
    [random(0, 255), random(50, 55), random(10, 255)],
    randomTail,
    randomHat,
    0,
    wc,
    randomSpeed);
  }

}


function draw() {
  background(0);

  // console.log(speedx + " ");
  // console.log(speedw + " ");
  // console.log(speedx2 + " ");
  // console.log(birdArray[14].speed);


  if (wingrt <-30 || wingrt > 20){
    speedw = -speedw;
  }
  wingrt += speedw;

  for (let i = 0;i < birdArray.length;i++) {
    birdArray[i].moveBird(); 
    birdArray[i].birdRot(wingrt,birdArray[i].lx);
    birdArray[i].specialHat();
    birdArray[i].hatToggle();
}


   if (lx < 0 || lx > width-250) {
    speedx = -speedx;
    }
  if (lx2 < 0 || lx2 > width-250) {
    speedx2 = -speedx2;
    }
  
   
  
    lx += speedx;
    lx2 += speedx2;

  b1.birdRot(wingrt,lx+100);
  b2.birdRot(wingrt,lx2+25);
  b3.birdRot(wingrt,lx+200);
  b3.specialHat();


 }



