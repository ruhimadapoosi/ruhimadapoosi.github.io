
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function RMenter()  {
    var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
    let btnevent2 =false;

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for 1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      // outputVolume(.15);  // turn down the volume.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering 1");
        textAlign(CENTER);
        textSize(30);
        noStroke();

        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
        // snd1.stop();
        flymouse.visible = false;
        hatmouse.visible = false;
        rufmouse.visible = false;

        if ( !snd1.isPlaying() ) {
          snd1.play();
       }
        snd3.stop();
    
    }


    this.draw = function()
    {
      background(bg1);
      // this is the draw function for all p5.play commands
     

    

      // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress("Info",width-120,height-70,100,40,color(220,100,100),color(159, 133, 237),color(250));  
        if (btnevent1) { // help
        btnevent1 = false;
        this.sceneManager.showScene( RMstage );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress("Let the Show Begin",width/2-100,height-200,200,40,color(120,180,100),color(159, 133, 237),color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         this.sceneManager.showNextScene();
      }
    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {
    }
}

///////////////////////  2  ////////////////////////

function RMstage()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

   let btnevent1 = false;
   let btnevent2 = false;
   let btnevent3 = false;


   let speedx = 2; 
   let speedx2 = 0.5; 
   let speedx3 = 1; 

  let texttemp = "";
  let texttemp2 = "";
  let texttemp3 = "";


  this.setup = function() {
      console.log("We are at setup for main");
      note = createInput("winged text");
      note.position(190,692);
      note.changed(newText);

      note2 = createInput("dancing text");
      note2.position(190, 732);
      note2.changed(newText);

      note3 = createInput("marching text");
      note3.position(440, 712);
      note3.changed(newText);

      textSize (25);


    }


  this.enter = function()
  {
    console.log("We are at entering main");
    
    snd1.stop();
    note.show();
    note2.show();
    note3.show();

  }



    this.draw = function() {
      background(bg2);

      // this is the draw function for all p5.play commands
     
      if ( !snd3.isPlaying() ) {
        snd3.play();
     }
  
    // ghosty.changeAnimation("normal");

    //  if ( ghosty.mouse.hovering() ) {
    //     console.log("over");
    //     ghosty.changeAnimation("stand");
    //     ghosty.position.x += random(-9,9);
    //     ghosty.position.y += random(-9,9);
    //     snd2.play();  // lots of fast sound playing
    //  }
      
     if (flymouse.mouse.pressing() || hatmouse.mouse.pressing() || rufmouse.mouse.pressing()) {
           if ( !snd4.isPlaying() ) {
              snd4.play();
          } else {
              snd4.pause();

          }

     }  


    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Info",width-120,height-70,100,40,color(220,100,100),color(159, 133, 237),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      note.hide();
      note2.hide();
      note3.hide();
      this.sceneManager.showScene( RMinfo );
    }

    btnevent2 = checkButtonPress("Main",width-230,height-70,100,40,color(220,100,100),color(159, 133, 237),color(250));  
    if (btnevent2) { // help
      btnevent2 = false;
      note.hide();
      note2.hide();
      note3.hide();
      this.sceneManager.showScene( RMenter );
    }



      //flymouse movement
      // console.log("speedx " + speedx);
    if (flymouse.position.x < 100 || flymouse.position.x > 700) {
      speedx = -speedx;
      }
      flymouse.position.x += speedx

    btnevent3 = checkImgButtonPress(wingbtn,30,505,50,45);
    if (btnevent3) { // help
      texttemp = note.value();

      flymouse.visible = true;
      flymouse.position.x = 101;
      flymouse.position.y = 90;
    }

    if (hatmouse.position.x < 119 || hatmouse.position.x > 550) {
      speedx2 = -speedx2;
      }
      hatmouse.position.x += speedx2

    btnevent4 = checkImgButtonPress(hatbtn,30,550,50,45);
    if (btnevent4) { // help
      texttemp2 = note2.value();
      hatmouse.visible = true;
      hatmouse.position.x = 120;
      hatmouse.position.y = 310;
    }

    if (rufmouse.position.x < 200 || rufmouse.position.x > 651) {
      speedx3 = -speedx3;
      }
      rufmouse.position.x += -speedx3

    btnevent5 = checkImgButtonPress(rufbtn,280,525,50,45);
    if (btnevent5) { // help
      texttemp3 = note3.value();
      rufmouse.visible = true;
      rufmouse.position.x = 650;
      rufmouse.position.y = 400;
    }

    // // idk what i did but it broke the code so this is offfff :(( no secret messages today
    //    if (texttemp == 'cheese' || 'Cheese' || 'CHEESE' || 'money') {
    //   texttemp = '🧀🧀🧀'}
    //   else {
    //   texttemp = note.value()  
    //   }

    // console.log (texttemp);

    push();
    flymouse.text = texttemp;
    flymouse.textAlignY = 70;
    flymouse.textAlignX = 15;
    flymouse.textSize = 30;

    flymouse.textStrokeWeight = 5;
    flymouse.textStroke = 'white';
    //... soooo idk why the text stroke isnt showing.
    // i tested it out on the p5.play learn website and it worked fine there
    // tried messing with the p5play code directly and it didnt do anything (i undid that of course)
    // maybe it has something to do with the sprites being bitmaps? idk. 


    // rotateText(flymouse.text, flymouse.textAlignX, flymouse.textAlignY, 150, 5);
    // flymouse.textspacingAngle = 20;
    // flymouse.textRadius = 150;
    // flymouse.drawCurvedText;
    pop();
      
    push();
    hatmouse.text = texttemp2;
    hatmouse.textAlignY = 13;
    hatmouse.textAlignX = 45;
    hatmouse.textSize = 30;
    hatmouse.textStroke = 'white';
    pop();

    push();
    rufmouse.text = texttemp3;
    rufmouse.textAlignY = 5;
    rufmouse.textAlignX = -15;
    rufmouse.textSize = 30;
    rufmouse.textStroke = 'white';
    pop();


    }  //end

    this.mousePressed = function()
    {

    }


}



////////////////////////////// 3 /////////////////

function RMinfo() {

  let btnevent1 =false;
  let btnevent2 =false;

    this.setup = function()  {
        console.log("We are at setup for help");
    }

    this.enter = function()
    {
     console.log("We are at entering for help");


     flymouse.visible = false;
     hatmouse.visible = false;
     rufmouse.visible = false;


      snd1.stop();
      snd3.stop();


    }

    this.draw = function() {
      background(bg3);
      // this is the draw function for all p5.play commands
     
      push();
      fill("white");
      textAlign(LEFT);
      textSize(25);
      text( "Hello gentlemice.\n Welcome to the Mouse Theater,\na digital whiteboard.\n\nType whatever your heart desires\nin the boxes at the bottom of the stage\nthen click the buttons on the left.\n\nThank you for joing us, please \n silence your phones and get \n ready for the performance.",30,70);
      textSize(15)
      text( "Click on the buttons below to go to the other scenes.", 30, 430);
      pop();


     btnevent1 = checkButtonPress("Stage",width-450,height-70,100,40,color(220,100,100),color(159, 133, 237),color(250));  
     if (btnevent1) { // stage
       btnevent1 = false;
       this.sceneManager.showScene(RMstage);
     }
 
     btnevent2 = checkButtonPress("Main",width-600,height-70,100,40,color(220,100,100),color(159, 133, 237),color(250));  
    if (btnevent2) { // help
      btnevent2 = false;
      this.sceneManager.showScene(RMenter);
    }



        
    }

   

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx &&
       mouseX < bx + boxW &&
       mouseY > by &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(159, 133, 237);
      btnc = ovcolor;
      btnstate = false;
      push();
      by = by +5
      pop();
    } else {
      console.log(str + " pressed");
      noStroke();
      btnc = dncolor;
      btnstate = true;
      playshortsound();

    }
    //if cursor not over box 
  } else {
    noStroke();
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box
  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);
    pop();

    return btnstate;
}


function checkImgButtonPress(img,bx,by,boxW,boxH) {

  let btnstate;

  // Test if the cursor is over the box
  if ( mouseX > bx &&
       mouseX < bx + boxW &&
       mouseY > by &&
       mouseY < by + boxH ) {
       overBox = true;


    if (!mouseIsPressed) {
      // btnstate = false;
      overBox = true;
      by = by +5
    } else {
      console.log(img + " pressed");
      btnstate = true;
      specialound();

    }
    //if cursor not over box 
  } else {
    noStroke();
    overBox = false;
  }

  push();
  translate(bx,by);
  image(img, 0,0, boxW, boxH);
  pop();
  return btnstate;
}

function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }
}


function specialound() {
  if ( !snd4.isPlaying() ) {
    snd4.play();
  } else {
     snd4.stop();
 }
}

function newText () {
  // let note = "hello"; 
  console.log (note);
}

// // "P5 Curved Text by Arkimedz", but modified by me
// function rotateText(txt, x, y, radius, spacingAngle) {
 
//  // Split the chars so they can be printed one by one
//   chars = txt.split("")

//   // Decide an angle
//   spacingAngle;

//   push()
//   // Let's first move to the center of the circle
//   translate(x, y)

//   // First rotate half back so that middle char will come in the center
//   rotate(radians(-chars.length * spacingAngle / 2))

//   for (let i = 0; i < chars.length; i++) {
//       text(chars[i], 0, -radius)

//       // Then keep rotating forward per character
//       rotate(radians(spacingAngle))
//   }
//   pop()

// }
