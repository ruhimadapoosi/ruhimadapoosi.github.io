function setup() {
createCanvas(600, 600);
noStroke(0);}


function draw() {

  {
background('#fae'); // pink
fill(255, 320, 0); // circle color

push();
  translate(0, 0);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
ellipse(132, 82, 200, 200); //  circle
pop();
push();
  translate(0, 0);
  translate(p5.Vector.fromAngle(millis() / 1000, -60));
ellipse(520, 582, 200, 200); //  circle
pop();
push();
  translate(0, 0);
  translate(p5.Vector.fromAngle(millis() / 1000, -10));
ellipse(450, 200, 200, 200); //  circle
pop();
push();
  translate(0, 0);
  translate(p5.Vector.fromAngle(millis() / 1900, 40));
ellipse(150, 400, 200, 200); //  circle
pop();

}
{for (var y = 0; y <= height; y += 40) {
for (var x = 0; x <= width; x += 40) {
fill(240, 300, 150);
ellipse(x, y, 40, 40);
}
}
}

{
fill(100,50,100);
beginShape(); //Hair top
vertex(200, 100);
vertex(400, 100);
vertex(450, 200);
vertex(150, 200);
endShape();
beginShape(); //Hair middle
vertex(150, 200);
vertex(450, 200);
vertex(420, 240);
bezierVertex(420, 240, 435, 250, 450, 400);
vertex(450, 400);
vertex(150, 400);
bezierVertex(160, 240, 170, 250, 180, 230);
endShape();
}
{
fill(240,200,0);
beginShape(); //bleached hair
vertex(200, 340);
bezierVertex (200, 340, 210, 340, 220, 300);
vertex(220, 300);
vertex(380, 300);
bezierVertex (380, 300, 370, 310, 400, 340);
vertex(400, 340);
bezierVertex (400, 340, 420, 350, 400, 400);
vertex(400, 400);
vertex(200, 400);
bezierVertex (200, 400, 170, 340, 200, 340);
vertex(200, 400);
endShape();
}
{
fill(200,100,0);
ellipse(300, 250, 200, 250); // face circle
beginShape(); //neck 
vertex(280, 350);
vertex(320, 350);
vertex(320, 425);
vertex(280, 425);
endShape();
beginShape(); //body 
vertex(200, 450);
vertex(400, 450);
vertex(320, 410);
vertex(280, 410);
endShape();
}

{

}

{
fill(100,50,100);
beginShape(); //bangs
vertex(250, 100);
vertex(350, 100);
bezierVertex(350, 100, 370, 150, 350, 200);
vertex(350, 200);
vertex(250, 200);
bezierVertex(250, 200, 230, 150, 250, 100);
endShape();
}
{
fill(100,50,100);
beginShape(); //shoulder strap thing 
vertex(200, 450);
vertex(400, 450);
vertex(400, 430);
vertex(200, 430);
endShape();
}
{
fill(51);
ellipse(260,254,30);//Eye Left
beginShape(); //EyeTop Left
vertex(235, 237);
vertex(250, 235);
vertex(280, 235);
vertex(285, 247);
vertex(270, 245);
vertex(230, 255);
endShape();
}
{
fill(100,50,100);
beginShape(); //Left brow 
vertex(240, 215);
vertex(280, 210);
vertex(285, 227);
vertex(270, 230);
vertex(230, 235);
endShape();
}
{
push();
fill(100,50,100);
beginShape(); //Right brow 
translate(80, 0);
vertex(240, 210);
vertex(280, 215);
vertex(285, 235);
vertex(270, 230);
vertex(230, 227);
endShape();
pop();
}
{
push();
translate(80, 0);
fill(51);
ellipse(260,254,30);//Eye Right
beginShape(); //EyeTop Right
vertex(235, 237);
vertex(250, 235);
vertex(280, 235);
vertex(285, 247);
vertex(270, 245);
vertex(230, 255);
endShape();
pop();
}
{
fill(230,200,230);
beginShape(); //Mouth 
vertex(260, 310);
vertex(335, 310);
vertex(320, 335);
vertex(270, 335);
endShape();
}
{
fill(190,80,0);
beginShape(); //nose 
vertex(300, 250);
vertex(320, 300);
vertex(280, 300);
endShape();
}
{
fill(255,175,200);
beginShape(); //sleeves? 
vertex(150, 600);
vertex(450, 600);
vertex(400, 450);
vertex(200, 450);
endShape();
}
{
fill(100,50,100);
beginShape(); //body? 
vertex(220, 600);
vertex(380, 600);
vertex(380, 430);
vertex(220, 430);
endShape();
}
}
