
//location x offset
let lxo = 55;
//location y offset
let lyo = 0;

let layer2;

function setup() {
  createCanvas(600, 600);
  background(255);
 // put setup code here
 layer2 = createGraphics(width,height);
}

function draw() {
  background(228, 255, 212);
  layer2.clear();

  noStroke(0);
  layer2.noStroke(0);

  console.log (mouseX +" " +mouseY);
  let r = random (255); 
  for ( let i = 30; i < 500; i+=30 ) { 
  for ( let j = 40; j < 600; j+=30 ) { 
    fill(r,40,r,90);
     rect(i,j,13,10);

  }
  }

  for ( let i = 50; i < 600; i+=20 ) { 
    for ( let j = 90; j < 500; j+=20 ) { 
      fill(40,r,r,90);
      rect(i,j,13,10);
    }
    }

  let my = mouseY/3;
  let mx = mouseX/3;

  // BG shape 1
  beginShape();
  fill(198, 230, 71,190);
  vertex(100+my, 20+my);
  vertex(385+my, 20+my);
  vertex(400+my, 150+my);
  vertex(185+my, 400+my);
  vertex(130+my, 400+my);
  endShape(CLOSE);

  
  if ( mouseIsPressed) {
    console.log ("hi :)");}

  // BG shape 2
  beginShape();
  fill(56, 235, 211,190);
  vertex(10+mx+lxo, 40+mx);
  vertex(185+mx, 50+mx);
  vertex(285+mx, 400+mx);
  vertex(190+mx, 400+mx);
  endShape(CLOSE);

  //head 
  fill(229, 180, 237);
  ellipse (200+lxo,200+my,300,325);

  //mouth
  layer2.fill(143, 52, 40);
  layer2.ellipse (200+lxo,270+my,90,60);

  layer2.erase();
  //mouth top
  layer2.fill(40, 93, 143);
  layer2.ellipse (200+lxo,250+my,90,50);
  layer2.noErase();

  //nose
  fill(40, 93, 143);
  triangle (175+lxo,250+my, 200+lxo, 180+my, 225+lxo,250+my);


  //eyebrows 
  fill (62, 40, 107);
  rect(125+lxo,120+my,50,20)
  rect(225+lxo,120+my,50,20)

  //eye whites
  fill(232, 215, 200);
  ellipse (150+lxo,170+my,50,50);
  ellipse (250+lxo,170+my,50,50);


  // eye inside color change
  let r2 = random (20000)

  if (r2  < 400) { 
    fill(64, 41, 20);
    ellipse (150+lxo,175+my,40,40);
    ellipse (250+lxo,175+my,40,40);

   } else { 
    fill(random(200), 41, random(200));
    ellipse (150+lxo,175+my,40,40);
    ellipse (250+lxo,175+my,40,40);
   }
 



   if ( mouseIsPressed) {
    if ( mouseX < 400) {
      if ( mouseY < 400) {
      fill(186, 124, 217);
      ellipse(width/4, height/4, 60, 60);
      fill(227, 218, 93);
      ellipse(width/4, height/4, 20, 20);
      }
    }}

    if ((mouseX > 400) && (mouseX > 400)) {
    fill(28, 88, 112);
    ellipse(500,500,60,60);
  } 
     

  image(layer2, 0, 0);

   
  //  //eye inside OLD
  //   fill(64, 41, 20);
  //   ellipse (150+lxo,175,40,40);
  //   ellipse (250+lxo,175,40,40);

  // put drawing code here
}
