let x;
let y;
let outsideRadius = 50;
let insideRadius = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  gui = new Gui();
  let gui_setup = new dat.GUI();
  noFill();
  fill(0,0,0,0);
  gui_setup.add(gui,"numpoints",0,250);
  gui_setup.add(gui,"stroke",0,.3);
  //gui_setup.add(gui,"radius1",50,300);
  //gui_setup.add(gui,"radius2",50,300);
  //gui_setup.add(gui,"rotate", 0,10);
    gui_setup.add(gui, 'showDescription').onChange(description);
  
  
  gui_setup.add(gui,"r",0,255);
  gui_setup.add(gui,"g",0,50);
  gui_setup.add(gui,"b",0,255);
  gui_setup.add(gui,"alpha",100,200);
  
  gui_setup.addColor(gui,"color");
  gui_setup.addColor(gui,'bColor');
  
}
//codepen for examples
//if you find code outside of p5js, list url to give credit

function draw() {
  //background(gui.color);
  background(gui.bColor);
  
  for (let x = windowWidth / 2 - windowWidth / 4; x <= windowWidth / 2 + windowWidth / 4; x += windowWidth / 4) 
      for (let y = windowHeight / 2 - windowHeight / 4; y <= windowHeight / 2 + windowHeight / 4; y += windowHeight / 4){ diamond(x, y, random(50), random(3, 2));}
      
  strokeWeight(gui.stroke);
  stroke(gui.color);
  fill(gui.r,gui.g,gui.b,gui.alpha);
  //translate(width/2,height/2);
  //rotate(PI / gui.rotate);
  //diamond(0,0, gui.radius1, gui.radius2, gui.points);
}

function Gui(){
  this.numpoints = 10;
  this.stroke = .3;
  this.radius1 = 150;
  this.radius2 = 170;
  this.color = '#F1D04A';
  this.bColor = '#C93127';
  this.rotate = 5;
  this.showDescription = true;
  
  this.r = 10;
  this.g = 4;
  this.b = 150;
  this.alpha = 100;
}

function description(){
  if(gui.showDescription){
    d.style('display','block');
  } else {
    d.style('display','none');
  }
}
function diamond(x, y, radius1, radius2, npoints) {
  let numPoints = int(map(gui.numpoints, 0, width, 6, 60));
  let angle = 0;
  let angleStep = 180.0 / numPoints;

  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();
}