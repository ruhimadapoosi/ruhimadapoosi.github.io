
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1,snd2;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var flymouse;
var wingbtn;

let note; 
let note2;

function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/theatersound.wav");
   snd2 = loadSound("assets/tick.wav");
   snd3 = loadSound("assets/fluteloop.wav");
   snd4 = loadSound("assets/harp.wav");

   bg1 = loadImage("assets/bg1.png");
   bg2 = loadImage('assets/bg3.png');
   bg3 = loadImage('assets/bg2.png');

   wingbtn = loadImage('assets/btn/wingbtn.png');
   hatbtn = loadImage('assets/btn/hatbtn.png');
   rufbtn = loadImage('assets/btn/ruffbtn.png');

}

function setup() {
    createCanvas(800, 600);
    //console.log(hell);
    mgr = new SceneManager();

    // ghosty = createSprite(0, 0);
    // ghosty.addAnimation("normal", "assets/ghost_spin0001.png",  "assets/ghost_spin0003.png");  // first image, and last image
    // ghosty.addAnimation("stand", "assets/ghost_standing0001.png",  "assets/ghost_standing0007.png"); // first image, and last image
    //  // make the sprite invisible until you need it.
    // ghosty.visible = false;


    flymouse = createSprite(0,0);
    flymouse.addAnimation("normal", "assets/anifly/anifly_0000.png",  "assets/anifly/anifly_0021.png");  // first image, and last image
    flymouse.visible = false;

    hatmouse = createSprite(0,0);
    hatmouse.addAnimation("normal", "assets/anihat/hatani_0000.png",  "assets/anihat/hatani_0027.png");  // first image, and last image
    hatmouse.visible = false;

    rufmouse = createSprite(0,0);
    rufmouse.addAnimation("normal", "assets/aniruf/aniruf_0000.png",  "assets/aniruf/aniruf_0015.png");  // first image, and last image
    rufmouse.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (RMenter);
    mgr.addScene (RMstage);
    mgr.addScene (RMinfo);
    mgr.showNextScene();

}

function draw()
{

    //
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( RMenter );
            note.hide();
            note2.hide();      
            note3.hide();      
            break;
        case '2':
            mgr.showScene( RMstage );
            break;
        case '3':
            mgr.showScene( RMinfo );
            note.hide();
            note2.hide();   
            note3.hide();         
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
