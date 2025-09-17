class rmBird {

  lx;  // x location
  ly;  // y location
  sc;  // scale
  dc;  // hat color
  mc;  // body + head color
  wc;  // wing color
  tail; // tail on (1) or off 
  deco; // hat on (1) or off
  rt; // wing rotation
  bc; // beak color 
  speedx;//custom speedx
  
  constructor(llx,lly,lsc,ldc,lmc,lwc,ltail,ldeco,lrt,lbc,lspeedx,){
  
    this.lx = llx;
    this.ly = lly;
    this.sc = lsc;
    this.dc = ldc;
    this.mc = lmc;
    this.wc = lwc;
    this.tail = ltail;
    this.deco = ldeco;
    this.rt = lrt;
    this.bc = lbc;
    this.speedx = lspeedx
  
  }
  
   bird(llx) {
    push();
    noStroke();
    translate(this.lx,this.ly);
    this.lx += this.speedx; 
    this.lx = llx
    scale (this.sc);
    if (this.tail == 1) {
      push();
      this.rmTail(this.wc);
      pop();
      }
    this.rmHead(this.mc, this.bc, 0,0,this.deco, this.dc,10);
    this.rmBody(this.mc,this.wc,50,50,this.rt);
    pop();
  }
  
  birdRot(rot,llx){
    push();
    noStroke();
    translate(this.lx,this.ly);
    this.lx += this.speedx; 
    this.lx = llx 
      scale (this.sc);
    if (this.tail == 1) {
      push();
      this.rmTail(this.wc);
      pop();
      }
    this.rmHead(this.mc, this.bc, 0,0,this.deco, this.dc,10);
    this.rmBody(this.mc,this.wc,50,50,rot);
    pop();
  }
  
  moveBird() {
    push ();
      this.lx+=this.speedx;
      if (this.lx > width || this.lx < 0)  {
        this.speedx = -this.speedx;
      }
      pop();
    }
  
   specialHat (){
   
    if (key == 'b' || key == 'B'){  
    
      if (this.deco == 0 ){
        this.deco = 1;
        this.dc = color (random(200,255),random(0,255),random(100,255));
    
      } else {
        this.deco = 0;
        this.dc = color(random(200, 255), random(0, 255), random(100, 255));
      }
    }  
  }
  


  hatToggle(){
   
    if (key == 't' || key == 'T') {
      if (this.deco == 1 || this.deco == 0) {
        this.deco = 0;
      } 
    } 
      if (key == 'y' || key == 'Y') {
      if (this.deco == 0) {
        this.deco = 1;
        this.dc = color(random(200, 255), random(0, 255), random(100, 255)); // Change the hat color
      }
  }
  }

   rmBody( c, c2, lx, ly, rt) {
    
     fill(c);
     push();
     translate(lx, ly);
     rotate(radians(45));
     arc(0,0, 120, 120, 0, PI);
     pop();
  
     push ();
     rotate(radians(rt));
    this.rmWing(c2,lx,ly);
    pop();
  
  }
  
  
   rmWing (c2, lx, ly){
  
    fill(c2);
    push();
    translate(lx, ly);
    rotate(radians(45));
    arc(2,0, 70, 60, 0, PI);
    pop();
  
  }
  
   rmHead(c, c2, lx, ly, hat, c3, rot ) {
    this.rmBeak (c2,lx-29,ly+6);
    fill(c);
   push();
   translate(lx, ly);
   rotate(radians(rot));
  
   // if hat = 1 u get a hat, if hat isnt 1 then u dont get a hat
   if (hat == 1) {
    push();
    translate (-20,-30);
    fill(c3);
    rect(-20, -20 ,80,10,7);
    rect(0, -80 ,40,70,7);
    pop();
    }
  
   ellipse(0,0,60,60);
   pop();
  
   
  }
  
   rmBeak (c2,lx,ly){
  
    push();
   
    fill(c2);
    translate(lx, ly);
    rotate(radians(-180));
    triangle(0, 0, 25, 5, 0, 15);
    pop();
  
  }
  
   rmTail (wc){
  
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
  
}

  