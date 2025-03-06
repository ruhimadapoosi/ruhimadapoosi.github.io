// //Example 2.4.1
// // Intro to Arrays
// // 0,1,2,3 is always the way an array list is counted.
// let xlist = [30, 140, 240, 300];             
// let ylist = [150, 170, 190, 240];
// let foods = ["pizza", "pinepple","passionfruit","potato"];

// function setup() {
//     createCanvas(700, 500);
//     background(50);
//     textSize(20);
//     fill(255);
//     // getting the first or '0' item 
//     text(xlist[0] +  " is the first item in the xlist array" , 50, 50);
//     // setting or updating the '0' item
//     xlist[0] = 60; 
//     text(xlist[0] +  " is NOW the first item in the xlist array" , 50, 80);
//     // getting the '3' item 

//     text(ylist[3] +  " is the last item in the ylist array" , 50, 110);
  

//      // length is the number of items in an array
//     for (let i = 0; i < xlist.length; i++) { 
//         fill(255,0,0);
//         rect(xlist[i],ylist[i],10,10);    
//     }

//     for (let i = 0; i < foods.length; i++) {   
//         fill(210,100,200);
//         text(foods[i] +  " is now being served." , xlist[i],ylist[i] + 150);    
//     }

// }



////////////////////////////////////////////////////////////////

// //Example 2.4.2
// // Simple Array Version with vector movement code

// let speedXlist = [0.0, 0.0,0];
// let speedYlist = [0.0, 0.0,0];
// let loXlist = [0.0, 0.0,0];
// let loYlist = [0.0, 0.0,0];

// function setup() {

//     background(0);
//     createCanvas(500, 500);

//     // ball 1 
//     loXlist[0] = width/2;
//     loYlist[0] = height/2;

//     //ball 2
//     loXlist[1] = width/2;
//     loYlist[1] = height/2;

//     //ball 3
//     loXlist[2] = width/2;
//     loYlist[2] = height/2;


//     speedXlist[0] = random(-5,5);
//     speedXlist[1] = random(-5,5);
//     speedXlist[2] = random(-5,5);

//     speedYlist[0] = random(-5,5);
//     speedYlist[1] = random(-5,5);
//     speedYlist[2] = random(-5,5);

// }

// function draw() {
//     background(0);

//     console.log (speedXlist + " " + speedYlist);

//     // First one (item 0)
//     if ((loXlist[0]< 0)||(loXlist[0] > width)) {
//     speedXlist[0] = -speedXlist[0];
//     }
//     if ((loYlist[0]< 0) || (loYlist[0] > height)) {
//         speedYlist[0] = -speedYlist[0];
//     }
//     // Second one (item 1)
//     if ((loXlist[1]< 0)||(loXlist[1] > width)) {
//     speedXlist[1] = -speedXlist[1];
//     }
//     if ((loYlist[1]< 0) || (loYlist[1] > height)) {
//     speedYlist[1] = -speedYlist[1];
//     }

//     // Third one (item 1)
//     if ((loXlist[2]< 0)||(loXlist[2] > width)) {
//       speedXlist[2] = -speedXlist[2];
//       }
//       if ((loYlist[2]< 0) || (loYlist[2] > height)) {
//       speedYlist[2] = -speedYlist[2];
//       }
      
//     // update the position of the ball and print to screen
//     // neg/pos locations gonan make it move 

//     loXlist[0] += speedXlist[0];
//     loYlist[0] += speedYlist[0];
//     fill(255);
//     ellipse(loXlist[0], loYlist[0], 20, 20);

//     loXlist[1] += speedXlist[1];
//     loYlist[1] += speedYlist[1];
//     fill(190);
//     ellipse(loXlist[1], loYlist[1], 28, 28);

//     loXlist[2] += speedXlist[2];
//     loYlist[2] += speedYlist[2];
//     fill(190,0,0);
//     ellipse(loXlist[2], loYlist[2], 28, 28);

//   }


/////////////////////////////////////////////////////////////////////////

// Example 2.4.3 Adjustable Array Version

let count = 100;
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let cirSize = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);
let alphas = new Array(count);

function setup() {
  createCanvas(600, 600);
  noStroke();

  for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(-3, 3);
    speedY[i] = random(-3, 3);
    cirSize[i] = random(10, 50);
    colorsR[i] = int(random(0, 255));
    colorsG[i] = int(random(0, 255));
    colorsB[i] = int(random(0, 255));
    alphas[i] = int(random(0,255));
    console.log(speedX);
  }

  console.log (speedX);

}
function draw() {

  background(70);
  // makes a frame
  fill(250);
  rect(40, 40, width-80, height-80);

  for (let i = 0; i < loX.length; i++) {

     //check boundaries for all balls
     // note the '40+' and '-40' are to pull in the borders to match 
     // the background rect

    if (loX[i] < 40+cirSize[i]/2 || loX[i] > (width-40)-cirSize[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < 40+cirSize[i]/2 || loY[i] > (height-40)-cirSize[i]/2) {
      speedY[i] = -speedY[i];
    }

    //draw all balls
    push();
    translate(loX[i],loY[i]);
    fill(colorsR[i],colorsG[i] ,colorsB[i], alphas[i]);
    ellipse(0,0,cirSize[i],cirSize[i]);
    pop();

   
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];

  } // end of loop

}

