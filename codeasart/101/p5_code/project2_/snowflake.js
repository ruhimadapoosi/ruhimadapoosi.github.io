
// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 15);
  this.fill = color(random (5,200),random (10,124), random (5,124));
  this.fill2 = color(random (5,200),random (10,124), random (5,124),random (10,200));

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));
  
  ///////////////////////soft body variables//////////////////////
  // center point
  this.centerX = 0.0, this.centerY = 0.0;
  ///
  this.r = 45, this.rotAngle = -90;
  this.accelX = 0.0, this.accelY = 0.0;
  this.deltaX = 0.0, this.deltaY = 0.0;
  // this.springing = 0.0009, this.damping = 0.98;
  this.springing = 0.0009, this.damping = 0.98;

  //corner nodes
  this.nodes = 10;

  ////zero fill arrays
    this.nodeStartX = [];
    this.nodeStartY = [];
    this.nodeX = [];
    this.nodeY = [];
    this.angle = [];
    this.frequency = [];

    // soft-body dynamics
    this.organicConstant = 0.0;

    this.centerX = this.posX;
    this.centerY = this.posX;
  ///////////////////////////////soft body setup code//////////////
      //initialize arrays to 0
    for (let i = 0; i < this.nodes; i++){
      this.nodeStartX[i] = 0;
      this.nodeStartY[i] = 0;
      this.nodeY[i] = 0;
      this.nodeY[i] = 0;
      this.angle[i] = 0;
    }  
    // iniitalize frequencies for corner nodes
    for (let i = 0; i < this.nodes; i++){
      this.frequency[i] = random(5, 12);
    }  
  //////////////////////////////////snowflake function code///////
  this.update = function(time, w) {
    // console.log('w value: ' + w);
    // x position follows a circle
    // let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius/2 * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }

    ///////soft body//////////////
    this.deltaX = this.posX - this.centerX;
    this.deltaY = this.posY - this.centerY;
  
    //springing fx
    this.deltaX *= this.springing;
    this.deltaY *= this.springing;
    this.accelX += this.deltaX;
    this.accelY += this.deltaY;
  
      // move predator's center
      this.centerX += this.accelX;
      this.centerY += this.accelY;

    // slow down springing
      this.accelX *= this.damping;
      this.accelY *= this.damping;

  // change curve tightness
  this.organicConstant = 1 - ((abs(this.accelX) + abs(this.accelY)) * 0.1);

  //move nodes
  for (let i = 0; i < this.nodes; i++){
    this.nodeX[i] = this.nodeStartX[i] + sin(radians(this.angle[i])) * (this.accelX * 2);
    this.nodeY[i] = this.nodeStartY[i] + sin(radians(this.angle[i])) * (this.accelY * 2);
    this.angle[i] += this.frequency[i];
  }

  };

  this.display = function() {
    // push ();
    // fill(this.fill);
    // ellipse(this.posX, this.posY, this.size);
    // pop ();

    push ();
  //  calculate node  starting locations
    for (let i = 0; i < this.nodes; i++){
      ///this.nodeStart_[i] = this.STARTING LOCATION + cos/sin * SIZE 
      this.nodeStartX[i] = this.centerX + cos(radians(this.rotAngle)) * 20;
      this.nodeStartY[i] = this.posY + sin(radians(this.rotAngle)) * 20;
      this.rotAngle += 360.0 / this.nodes;
    }

    // draw polygon
    curveTightness(this.organicConstant);
    fill(this.fill2);
    beginShape();
    for (let i = 0; i < this.nodes; i++){
      curveVertex(this.nodeX[i], this.nodeY[i]);
      }
    for (let i = 0; i < this.nodes-1; i++){
      curveVertex(this.nodeX[i], this.nodeY[i]);
      }
    endShape(CLOSE);
    pop (); 
};

this.display2 = function() {
  push ();
  fill(this.fill);
  ellipse(this.posX, this.posY, this.size);
  pop ();

}

this.display3 = function() {
  // push ();
  // fill(this.fill);
  // ellipse(this.posX, this.posY, this.size);
  // pop ();

  push ();
//  calculate node  starting locations
  for (let i = 0; i < this.nodes; i++){
    ///this.nodeStart_[i] = this.STARTING LOCATION + cos/sin * SIZE 
    this.nodeStartX[i] = this.centerX + cos(radians(this.rotAngle)) * 20;
    this.nodeStartY[i] = this.posY + sin(radians(this.rotAngle)) * 20;
    this.rotAngle += 180.0 / this.nodes;
  }

  // draw polygon
  curveTightness(this.organicConstant);
  fill(this.fill2);
  beginShape();
  for (let i = 0; i < this.nodes; i++){
    curveVertex(this.nodeX[i], this.nodeY[i]);
    }
  for (let i = 0; i < this.nodes-1; i++){
    curveVertex(this.nodeX[i], this.nodeY[i]);
    }
  endShape(CLOSE);
  pop (); 
};


this.display4 = function() {
  // push ();
  // fill(this.fill);
  // ellipse(this.posX, this.posY, this.size);
  // pop ();

  push ();
//  calculate node  starting locations
  for (let i = 0; i < this.nodes; i++){
    ///this.nodeStart_[i] = this.STARTING LOCATION + cos/sin * SIZE 
    this.nodeStartX[i] = this.centerX + cos(radians(this.rotAngle)) * 20;
    this.nodeStartY[i] = this.posY + sin(radians(this.rotAngle)) * 20;
    this.rotAngle += 380.0 / this.nodes;
  }

  // draw polygon
  curveTightness(this.organicConstant);
  fill(this.fill2);
  beginShape();
  for (let i = 0; i < this.nodes; i++){
    curveVertex(this.nodeY[i], this.nodeX[i]);
    }
  for (let i = 0; i < this.nodes-1; i++){
    curveVertex(this.nodeY[i], this.nodeX[i]);
    }
  endShape(CLOSE);
  pop (); 
};

}
//////////notes bc soft body was confusing me
//x, velocity, delta time
//new x = x + (velocity + delta)
// delta = 1 (one frame = 1 cycle thru draw = change in time)
// then  new x = x + velocity 

//acceleration - changes velocity 
//mass (a single value)
//forces - external/internal factor that
//causes the mass to accelerate (force = mass*accel)

//
