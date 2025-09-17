var base;
var basebtn;

var hairf;
var hairb;

var hairbtn;

var tops;
var topsbtn;

var bottom;
var bottombtn;

var buddy;
var buddyhatt;
var buddyhatb;
var buddyfit; 
var buddyhold;

var buddybtn
var buddyhatbtn;
var buddyfitbtn;
var buddyholdbtn;

//set up interactions
var currentbase = 0;
var currenthair = 0;
var currenttops = 0;
var currentbottom = 0;
var currentbuddy = 0;
var currentbuddyhat = 0;
var currentbuddyfit = 0;
var currentbuddyhold = 0;

//preload imgs
function preload() {
 //base
 base0 = loadImage("base_01.png");
 base1 = loadImage("base_02.png");
 base2 = loadImage("base_03.png");
 
 basebtn0 = loadImage("btn_base_01.png");
 basebtn1 = loadImage("btn_base_02.png");
 basebtn2 = loadImage("btn_base_03.png");

 //hair
 btnhair0 = loadImage("btn_hair_01.png");
 btnhair1 = loadImage("btn_hair_02.png");
 btnhair2 = loadImage("btn_hair_03.png");
 
 hairf0 = loadImage("hair_01_front.png");
 hairf1 = loadImage("hair_02_front.png");
 hairf2 = loadImage("hair_03_front.png");
 
 hairb0 = loadImage("hair_01_back.png");
 hairb1 = loadImage("hair_02_back.png");
 hairb2 = loadImage("hair_03_back.png");

 //tops
 tops0 = loadImage("top_01.png");
 tops1 = loadImage("top_02.png");
 tops2 = loadImage("top_03.png");
 tops3 = loadImage("top_04.png");
 tops4 = loadImage("top_05.png");
 tops5 = loadImage("top_06.png");
 tops6 = loadImage("top_07.png");
 tops7 = loadImage("top_08.png");
 tops8 = loadImage("top_09.png");
 tops9 = loadImage("top_10.png");
 tops10 = loadImage("top_11.png");

 topsbtn0 = loadImage("btn_top_01.png");
 topsbtn1 = loadImage("btn_top_02.png");
 topsbtn2 = loadImage("btn_top_03.png");
 topsbtn3 = loadImage("btn_top_04.png");
 topsbtn4 = loadImage("btn_top_05.png");
 topsbtn5 = loadImage("btn_top_06.png");
 topsbtn6 = loadImage("btn_top_07.png");
 topsbtn7 = loadImage("btn_top_08.png");
 topsbtn8 = loadImage("btn_top_09.png");
 topsbtn9 = loadImage("btn_top_10.png");
 topsbtn10 = loadImage("btn_top_11.png");

 //bottoms
 bottom1 = loadImage("bottom_02.png");
 bottom2 = loadImage("bottom_03.png");
 bottom3 = loadImage("bottom_04.png");
 bottom4 = loadImage("bottom_05.png");
 bottom5 = loadImage("bottom_06.png");
 bottom6 = loadImage("bottom_07.png");
 bottom7 = loadImage("bottom_08.png");
 bottom8 = loadImage("bottom_09.png");

 bottombtn1 = loadImage("btn_bottom_02.png");
 bottombtn2 = loadImage("btn_bottom_03.png");
 bottombtn3 = loadImage("btn_bottom_04.png");
 bottombtn4 = loadImage("btn_bottom_05.png");
 bottombtn5 = loadImage("btn_bottom_06.png");
 bottombtn6 = loadImage("btn_bottom_07.png");
 bottombtn7 = loadImage("btn_bottom_08.png");
 bottombtn8 = loadImage("btn_bottom_09.png");

 //buddybase
 buddy0 = loadImage("buddy_01.png");
 buddy1 = loadImage("buddy_02.png");
 buddy2 = loadImage("buddy_03.png");
 buddy3 = loadImage("buddy_04.png");
 buddy4 = loadImage("buddy_05.png");
 buddy5 = loadImage("buddy_06.png");
 
 buddybtn0 = loadImage("btn_buddy_01.png");
 buddybtn1 = loadImage("btn_buddy_02.png");
 buddybtn2 = loadImage("btn_buddy_03.png");
 buddybtn3 = loadImage("btn_buddy_04.png");
 buddybtn4 = loadImage("btn_buddy_05.png");
 buddybtn5 = loadImage("btn_buddy_06.png");

//buddyhat
 buddyhatt0 = loadImage("buddy_hatt_01.png");
 buddyhatt1 = loadImage("buddy_hatt_02.png");
 buddyhatt2 = loadImage("buddy_hatt_03.png");

 buddyhatb0 = loadImage("buddy_hatb_01.png");

 btnbhat0 = loadImage("btn_buddyhat_01.png");
 btnbhat1 = loadImage("btn_buddyhat_02.png");
 btnbhat2 = loadImage("btn_buddyhat_03.png");

 //empty
 btnno = loadImage("btn_none.png");
 
//buddyfit
 buddyfit0 = loadImage("buddy_fit_01.png");
 buddyfit1 = loadImage("buddy_fit_02.png");
 buddyfit2 = loadImage("buddy_fit_03.png");

 btnbfit0 = loadImage("btn_buddyfit_01.png");
 btnbfit1 = loadImage("btn_buddyfit_02.png");
 btnbfit2 = loadImage("btn_buddyfit_03.png");

//buddyhold
 buddyhold0 = loadImage("buddy_hold_01.png");
 buddyhold1 = loadImage("buddy_hold_02.png");
 buddyhold2 = loadImage("buddy_hold_03.png");

 btnbhold0 = loadImage("btn_buddyhold_01.png");
 btnbhold1 = loadImage("btn_buddyhold_02.png");
 btnbhold2 = loadImage("btn_buddyhold_03.png");

//array for items
   base = [base0,base1,base2];
   hairf = [hairf0, hairf1, hairf2];
   hairb = [hairb0, hairb1, hairb2];
   tops = [tops0, tops1, tops2, tops3, tops4, tops5, tops6, tops7, tops8, tops9, tops10];
   bottom = [null, bottom1, bottom2, bottom3, bottom4, bottom5,bottom6, bottom7, bottom8];
   buddy = [buddy0,buddy1,buddy2,buddy3,buddy4,buddy5];
   buddyhatt = [buddyhatt0,buddyhatt1,buddyhatt2,null ];
   buddyhatb = [buddyhatb0,null ,null ,null ];
   buddyfit = [buddyfit0,buddyfit1,buddyfit2];
   buddyhold = [buddyhold0,buddyhold1,buddyhold2,null ];
   
//array for btns
   basebtn = [basebtn0, basebtn1, basebtn2];
   hairbtn = [btnhair0,btnhair1,btnhair2];
   topsbtn = [topsbtn0, topsbtn1, topsbtn2, topsbtn3, topsbtn4, topsbtn5, topsbtn6, topsbtn7, topsbtn8, topsbtn9, topsbtn10];
   bottombtn = [btnno, bottombtn1, bottombtn2, bottombtn3, bottombtn4, bottombtn5,bottombtn6, bottombtn7, bottombtn8];
   buddybtn = [buddybtn0,buddybtn1,buddybtn2,buddybtn3,buddybtn4,buddybtn5];
   buddyhatbtn = [btnbhat0,btnbhat1,btnbhat2,btnno];
   buddyfitbtn = [btnbfit0,btnbfit1,btnbfit2];
   buddyholdbtn = [btnbhold0,btnbhold1,btnbhold2,btnno];
}

function setup() {
  createCanvas(1000,750);
}

function draw() {
 background(51);
 
 //base change btn 
 image(basebtn[currentbase], 340, 650, 50, 50);

 // hair back
 image(hairb[currenthair], 200, 100, 279, 534);

 //base 
 image(base[currentbase], 200, 100, 279, 534);

 //hair front
 image(hairf[currenthair], 200, 100, 279, 534);
 
 //bottom
 if (bottom[currentbottom] !== null) {
     image(bottom[currentbottom], 200, 100, 279, 534);} 

 //tops
 image(tops[currenttops], 200, 100, 279, 534);
 
 //back buddy hat
 if (buddyhatb[currentbuddyhat] !== null) {
    image(buddyhatb[currentbuddyhat], 500, 350, 222, 273);}

 //buddy base
 image(buddy[currentbuddy], 500, 350, 222, 273);

 //buddy hat front + other assetts 
 image(buddyfit[currentbuddyfit], 500, 350, 222, 273);
 if (buddyhatt[currentbuddyhat] !== null) {
    image(buddyhatt[currentbuddyhat], 500, 350, 222, 273);}
 if (buddyhold[currentbuddyhold] !== null) {
    image(buddyhold[currentbuddyhold], 500, 350, 222, 273);}

 //btn load
 image(hairbtn[currenthair], 100, 200, 50, 50);
 image(topsbtn[currenttops], 100, 300, 50, 50);
 image(bottombtn[currentbottom], 100, 400, 50, 50);
 
 image(buddybtn[currentbuddy], 575, 650, 50, 50);
 image(buddyhatbtn[currentbuddyhat], 750, 400, 50, 50);
 image(buddyfitbtn[currentbuddyfit], 750, 500, 50, 50);
 image(buddyholdbtn[currentbuddyhold], 750, 600, 50, 50);


}
//changes + looping arrays
function basechange () {
    currentbase = currentbase + 1;
    if (currentbase == 3) {
    currentbase = 0;
    }
}
function hairchange () {
    currenthair = currenthair + 1;
    if (currenthair == 3) {
    currenthair = 0;
    }
}
function topschange () {
    currenttops = currenttops + 1;
    if (currenttops == 11) {
    currenttops = 0;
    }
}
function bottomchange () {
    currentbottom = currentbottom + 1;
    if (currentbottom == 9) {
    currentbottom = 0;
    }
}
function buddychange () {
    currentbuddy = currentbuddy + 1;
    if (currentbuddy == 6) {
    currentbuddy = 0;
    }
}
function buddyhatchange () {
    currentbuddyhat = currentbuddyhat + 1;
    if (currentbuddyhat == 4) {
    currentbuddyhat = 0;
    }
}
function buddyfitchange () {
    currentbuddyfit = currentbuddyfit + 1;
    if (currentbuddyfit == 3) {
    currentbuddyfit = 0;
    }
}
function buddyholdchange () {
    currentbuddyhold = currentbuddyhold + 1;
    if (currentbuddyhold == 4) {
    currentbuddyhold = 0;
    }
}
//limited box for item change clicks
function mousePressed () {
  //base change
  if (mouseX > 340 && mouseX < 390 && mouseY > 650 && mouseY < 700){
     basechange (); 
    }
  //hair change
  if (mouseX > 100 && mouseX < 150 && mouseY > 200 && mouseY < 250){
     hairchange (); 
    }
  //tops change
  if (mouseX > 100 && mouseX < 150 && mouseY > 300 && mouseY < 350){
     topschange (); 
    }
  //bottom change
  if (mouseX > 100 && mouseX < 150 && mouseY > 400 && mouseY < 450){
     bottomchange (); 
    }
  //buddy change
  if (mouseX > 575 && mouseX < 625 && mouseY > 650 && mouseY < 700){
     buddychange (); 
    }
  //buddy hat change
  if (mouseX > 750 && mouseX < 800 && mouseY > 400 && mouseY < 450){
     buddyhatchange (); 
    }
  //buddy fit change
  if (mouseX > 750 && mouseX < 800 && mouseY > 500 && mouseY < 550){
     buddyfitchange (); 
    }
  //buddy hold change
  if (mouseX > 750 && mouseX < 800 && mouseY > 600 && mouseY < 650){
     buddyholdchange (); 
    }
}
