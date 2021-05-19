var hr, min, sec, hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  fill(255);
  ellipse(0, 0, 210, 210);
  hr = hour();
  min = minute();
  sec = second();
  hrAngle = map(hr%12, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);
  push();
  rotate(secAngle);
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 0, 100, 0)
  pop();
  push();
  rotate(minAngle);
  stroke(0, 255, 0);
  strokeWeight(5);
  line(0, 0, 80, 0);
  pop();
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();
  noFill();
  stroke(255, 0, 0);
  arc(0, 0, 200, 200, 0, secAngle);
  stroke(0, 255, 0);
  arc(0, 0, 165, 165, 0, minAngle);
  stroke(0, 0, 255);
  arc(0, 0, 110, 110, 0, hrAngle);
}