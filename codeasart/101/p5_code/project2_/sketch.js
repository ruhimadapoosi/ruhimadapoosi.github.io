let recMode = false;
let can;

let snowflakes = []; // array to hold snowflake objects
let snowflakes2 = []; 

let centerX = 0.0, centerY = 0.0;

let counterx = 0; 
let countery = 0;

let nextxArr = [400,50,200,100];
let nextyArr = [200,200,100,50];


function setup() {
  can = createCanvas(1920, 1080);
  fill(240);
  noStroke();

    noStroke();
    frameRate(30);
    counterx = nextxArr[0];
    countery = nextyArr[0];

}

function draw() {
  background(240);
  let t = frameCount / 60; // update time

  console.log(frameCount);



  

  if (frameCount < 150) {
    console.log("the first act");

      // create a random number of snowflakes each frame
       for (let i = 0; i < random(5); i++) {
        snowflakes.push(new snowflake()); // append snowflake object
        }
      // loop through snowflakes with a for..of loop
      for (let flake of snowflakes) {
        flake.update(t, 0.6); // update snowflake position
        flake.display3(); // draw snowflake
      }
} else if (frameCount < 400) {
    console.log("the second act");
        // create a random number of snowflakes each frame
      for (let i = 0; i < random(5); i++) {
        snowflakes2.push(new snowflake()); // append snowflake object
       }
      // loop through snowflakes with a for..of loop
      for (let flake of snowflakes2) {
        flake.update(t, 0.6); // update snowflake position
        flake.display2(); // draw snowflake
      }
      for (let flake of snowflakes) {
        flake.update(t, 0.6); // update snowflake position
        flake.display(); // draw snowflake
      }
} else if (frameCount < 450) {
  console.log("the third act");
      // create a random number of snowflakes each frame
    for (let i = 0; i < random(5); i++) {
      snowflakes2.push(new snowflake()); // append snowflake object
      }
    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes2) {
      flake.update(t, 0.6); // update snowflake position
      flake.display4(); // draw snowflake
      flake.display2(); // draw snowflake
    }
    for (let flake of snowflakes) {
      flake.update(t, 0.6); // update snowflake position
      flake.display(); // draw snowflake
      // flake.display4(); // draw snowflake
    }
} else if (frameCount < 500) {
  console.log("the fourth act");
    for (let i = 0; i < random(5); i++) {
      snowflakes.push(new snowflake()); // append snowflake object
    }
    for (let flake of snowflakes2) {
      flake.update(t, 0.3); // update snowflake position
      flake.display4(); // draw snowflake
      flake.display2(); // draw snowflake
      flake.display(); // draw snowflake
    }

    for (let flake of snowflakes) {
      flake.update(t, 0.3); // update snowflake position
      flake.display(); // draw snowflake
      flake.display2(); // draw snowflake
    }
} else if (frameCount < 700) {
  console.log("the fifth act");
    for (let flake of snowflakes) {
      flake.update(t, 2); // update snowflake position
      flake.display2(); // draw snowflake
    }
    for (let flake of snowflakes2) {
      flake.update(t, 2); // update snowflake position
      // flake.display(); // draw snowflake
      // flake.display4(); // draw snowflake
      flake.display2(); // draw snowflake
      flake.display(); // draw snowflake
      flake.display4(); // draw snowflake
    }
} else {
  console.log("the sixth act");
    for (let flake of snowflakes) {
      flake.update(t, 0.6); // update snowflake position
      flake.display2(); // draw snowflake
    }
    for (let flake of snowflakes2) {
      flake.update(t, 0.6); // update snowflake position
      // flake.display(); // draw snowflake
      // flake.display4(); // draw snowflake
      flake.display2(); // draw snowflake
      flake.display(); // draw snowflake
      flake.display4(); // draw snowflake
    }
}
    recordit();

}
/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {
  let k = key;
  console.log("Key pressed: " + k);

  if (k == 's' || k == 'S') {
    console.log("Stopped Recording");
    recMode = false;
    noLoop(); // Stop looping to prevent frame saving
  }

  if (k == ' ') {
    console.log("Start Recording");
    recMode = true;
    loop(); // Start looping to allow frame saving
  }
}

function recordit() {  // new version
  if (recMode == true) {
    let ext = nf(frameCount, 4); // create a padded frame number
    saveCanvas(can, 'frame-' + ext, 'jpg'); // Save the canvas as a JPG
    console.log("Recording frame " + ext);
  }
}