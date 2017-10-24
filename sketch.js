var colbg = 250;
var colstroke = 240;
var coltext = 200;
var colore = '#7ccbd5';
var colmnt = '#79cabc';
var colsec = '#8bcba4';

function setup() {
   createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  strokeCap(SQUARE);
  textFont('Monaco');
}

function draw() {
  background(colbg);
  
  //sole
  push();

  translate(width/2, height/9);
  noStroke();
  fill(coltext);
  ellipse(0, 0, 19, 19);

  stroke(coltext);
  strokeWeight(3);
  strokeCap(ROUND);

  for (var i = 0; i < 8; i++) {
    rotate(360 * i / 8);
    line(0, -21, 0, -17);
  }
  pop();

  //luna

  noStroke();
  fill(coltext);
  ellipse(width/2, height / 1.15, 30, 30);
  fill(colbg);
  ellipse(width/2+7, height / 1.15 - 5, 24, 24);

  //var orari

  var now = new Date();

  var mil = now.getMilliseconds();

  var sec = second() + mil / 1000;
  var mnt = minute() + sec / 60;
  var ore = hour() + mnt / 60;

  var secAngle = map(sec, 0, 60, 0, 360);
  var mntAngle = map(mnt, 0, 60, 0, 360);
  var oreAngle = map(ore, 0, 12, 0, 360);


  translate(width / 2, height / 2);

  push();

  rotate(-90);


  clockHand(190, colsec, secAngle);
  clockHand(230, colmnt, mntAngle);
  clockHand(270, colore, oreAngle);

  pop();


  //testo orario
  
  fill(coltext);
  textSize(20);

  var secondText = second() < 10 ? '0' + second() : second();
  var minuteText = minute() < 10 ? '0' + minute() : minute();
  var hourText = hour() < 10 ? '0' + hour() : hour();

  textAlign(CENTER);
  text(hourText + ':' + minuteText + ':' + secondText,0,8);
  textSize(14);
  
}


function clockHand(dim, colangle, angle) {
  noFill();
  stroke(colstroke);
  strokeWeight(6);
  arc(0, 0, dim, dim, 0, 360, OPEN);

  stroke(colangle);
  arc(0, 0, dim, dim, 0, angle, OPEN);
}


function mouseClicked() {

  if (mouseX > width/2.1 && mouseX<width/1.9 && mouseY>height/1.18 && mouseY<height/1.12) {

    colbg = '#1e243a';
    colstroke = '#3b3656';
    colangle = '#bf3d5f';
    coltext = '#444063';
    colore = '#84508d';
    colmnt = '#af4f7f';
    colsec = '#b84168';
  } else if (mouseX > width/2.1 && mouseX<width/1.9 && mouseY>height/14 && mouseY<height/7) {

    colstroke = 240;
    colbg = 250;
    colangle = '#72d3c1';
    coltext = 200;
    colore = '#7ccbd5';
    colmnt = '#79cabc';
    colsec = '#8bcba4';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
