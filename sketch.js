let n = 6;
let d = 71;
let dSlider;

function setup() {
    
  createCanvas(400, 400);
  angleMode(DEGREES);
  dSlider =createSlider(1,181,1)
}

function draw() {
  background(000);
  translate(width/2,height/2);
  stroke(0,255,255);
  d=dSlider.value();
  noFill();
  beginShape();
  strokeWeight(1);
  for(let i= 0 ; i<360; i++){
    let k = i*d;
    let r= 150*sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  noFill();
  stroke(255,0,55,100);
  strokeWeight(4);
  beginShape();
  for(let i= 0 ; i<360; i++){
    let k = i;
    let r= 150*sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);
  }
  endShape();
  
  
  
}