let speedx=2; 
let lox=200;
let deco;
let wingrt = 0;
let wingrt2 = 0;
let speedw=0.4; 
let speedw2=0.2; 

function setup() {
  createCanvas(600,600);
  background(40);
  rectMode(CENTER);
  noStroke();
  fill(200);
}

function draw() {

    background(40);
    rmTree();
    
    

        //everytime the test happens it flips pos or neg
        console.log(speedx + " ");
        console.log(speedw + " ");

      if (lox < 0 || lox > 400) {
        speedx = -speedx;
        }

      if (wingrt <-30 || wingrt > 20){
          speedw = -speedw;
        }

      if (wingrt2 <-10 || wingrt2 > 10){
          speedw2 = -speedw2;
        }

      lox += speedx;
      wingrt+= speedw;
      wingrt2+= speedw2;
      rmOrangebird (lox,wingrt);
      rmPurplebird(lox,wingrt2);
      rmBluebird (lox);
      
  
}

function mousePressed (){
  deco = 1; 
}

function mouseReleased() {
  deco = 0;}


function rmBluebird(lx) {
  push ();
  translate (50, 0);
  let k2 = color (217, 222, 67);
  let wc = color(78, 172, 207);
  let bc = color(141, 213, 240);
  rmBird(lx+100, 458, 0.5,k2, bc,wc,1,deco,-5);
  let k = color(189, 139, 23);
  rmBranch (k,lx+20, 520);
  pop();
}

function rmPurplebird(lx,rt) {
  push ();
  translate (0, 0);
  let k2 = color (232, 84, 200);
  let wc = color(222, 52, 235);
  let bc = color(170,0,200);
  rmBird(lx+100, 200, 1, k2, bc, wc,0,deco,rt);
  let k = color(189, 139, 23);
  rmBranch (k,lx+20, 320);
  pop();
}

function rmOrangebird(lx,rt) {
  push ();
  translate (60, -10);
  let k2 = color (204, 68, 10);
  let wc = color(252, 186, 3);
  let bc = color(242, 118, 46);
  rmBird(lx+100, 200, 0.25, k2, bc, wc,1,deco,rt);
  let k = color(189, 139, 23);
  rmBranch (k,lx+20, 235);
  pop();
}

function rmBird(lx,ly,sc,dc,bc,wc,tail,deco,rt) {
  push();
  translate(lx,ly);
  scale (sc);
  if (tail == 1) {
    push();
    rmTail (wc);
    pop();
    }
  let k2 = color (240, 238, 134);
  rmHead(bc, k2, 0,0,deco, dc,10);
  rmBody(bc,wc,50,50,rt);
  pop();
}

function rmBody( c, c2, lx, ly, rt) {
  
   fill(c);
   push();
   translate(lx, ly);
   rotate(radians(45));
   arc(0,0, 120, 120, 0, PI);
   pop();

   push ();
   rotate(radians(rt));
  rmWing(c2,lx,ly);
  pop();

}


function rmWing (c2, lx, ly){

  fill(c2);
  push();
  translate(lx, ly);
  rotate(radians(45));
  arc(2,0, 70, 60, 0, PI);
  pop();

}

function rmHead(c, c2, lx, ly, hat, c3, rot ) {
  rmBeak (c2,lx-29,ly+6);
  fill(c);
 push();
 translate(lx, ly);
 rotate(radians(rot));

 // if hat = 1 u get a hat, if hat isnt 1 then u dont get a hat
 if (hat == 1) {
  push();
  fill(c3);
  rect(0, -40 ,80,10,7);
  rect(0, -80 ,40,70,7);
  pop();
  }

 ellipse(0,0,60,60);
 pop();

 
}

function rmBeak (c2,lx,ly){

  push();
 
  fill(c2);
  translate(lx, ly);
  rotate(radians(-180));
  triangle(0, 0, 25, 5, 0, 15);
  pop();

}

function rmTail (wc){

  push();
  beginShape();
  fill(wc);
  vertex(20, 70);
  vertex(43, 62);
  vertex(200, 160);
  vertex(130, 155);
  endShape(CLOSE);
  pop();

}

function rmFeet (){

  push();

  pop();
}

function rmBranch (c,lx,ly){
  push();
  stroke (c);
  strokeWeight(5);

  line(lx, ly, 700, ly);
  pop();
}

function rmTree (){

  push ();
  fill(161, 224, 101);
  ellipse (600,300,500,500);
  ellipse (400,500,300,300);

  fill(58, 102, 16);
  ellipse (600,350,475,400);
  ellipse (400,550,250,200);
  ellipse (500,550,250,200);

  fill (189, 139, 23);
  rect (700,550,300,300,50);
  pop ();
}

