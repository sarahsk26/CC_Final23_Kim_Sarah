//GLOBAL VARIABLES 

let mirrored;

let tree;
let tree1; 
let tree2;
let tree3;
let eye1;
let eye6;
let ghostGirl;
let ghostGirl2;
let ghostGirl3;
let daCat;
let daCat1;

let catLine;
let treeLine;
let ghostLine;

let fye;
let fye2;

let spread;

let theFont;
let song;

let rains= [];

let w;
let h;

let pixelLevel= 7;

function preload(){ // function preloading--> loading all media items before set up 

//song= loadSound('nightOwlEdit.wav')
	
theFont= loadFont('goudyMedieval.ttf');

mirrored= loadImage('mirrored.png');
fye2= loadImage('fye2.png');
fye= loadImage('fye.png');
	
tree= loadImage('BladeRunnerTree.png');
tree1= loadImage('BladeRunnerTree1.png');
tree2= loadImage('BladeRunnerTree2.png');
tree3= loadImage('BladeRunnerTree3.png');
ghostGirl= loadImage('ghostGirl.png');
ghostGirl2= loadImage('ghostGirl2.png');
ghostGirl3= loadImage('ghostGirl3.png');
daCat= loadImage('daCAT.png');
daCat1= loadImage('daCAT1.png');

ghostLine= loadImage('ghostLine.png');
catLine= loadImage('catLine.png');
treeLine= loadImage('treeLine.png');


spread= loadImage('spread.JPG');
eye1= loadImage('eye1.png');
eye6= loadImage('eye6png.png');
	
}

function setup() { 					// SETUP function 
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

for(let i=0; i<1000; i++){ // conditions for the rain instance 
      let x= random(width);
      let y= random(height);
      let r= random(3);
    let rp = new Rain(x,y,r); // creating a new instance of the Rain class
    rains.push(rp);   
  }   
	
	w= 1;
	h=1;
	
}// end of setup function 

function draw() {// start of the draw function 
	
	
// song.rate(mouseX/500);
	//song.play();
background(0);
sceneStart();

}



function sceneStart(){ // function start scene (first scene)
	
let x= windowWidth/2;
let y= windowHeight/2;
	
ww=windowWidth/2;
hh= windowHeight;
let f = random(-5,5);

let p= random(10,100);
tint(255,p);
image(ghostLine,x+600,y,ww/3+f,hh/2+f);
image(catLine,x-700, y, ww/2+f,hh/2+f);
image(treeLine,x+80,y, ww+f,hh+f);
	
	
tint(255,225);
	
if (mouseIsPressed === true) { // start of the mouseIsPressed
tint(255,160);	
w= w+ random(-10,15);
h= h+ random(-10,15);

image(tree,x+80,y, w,h);
image(ghostGirl2,x+600,y,w/3,h/2);
image(daCat1, x-700, y, w/1.7,h/1.9);

	
	if (w>windowWidth/2){
textSize(50);  // text size 
  noFill();
  textAlign(CENTER); // text alignmnet in the center
  textFont(theFont);// using the 'theFont' text font
	
	let p= random(10,120);	
stroke(255,p); // stroke= white
  strokeWeight(1); // strokeWeight=1
  text("'release'",x,y/4 );
		
}
	

} // end of mouseIsPress
	
	imageMode(CENTER);
	
	eye();

for(var i=0; i<rains.length;i++){ // the rain 
  rains[i].exist(); // the functions of rain
  rains[i].fall();
  }

if (w>windowWidth/2){// if the width of the image exceeds half the width of the window, the next scene is overlayed (sceneCharacters)
sceneCharacters();
}
}// end of Start screen 



function sceneCharacters(){ // start of character display scene 
ww=windowWidth/2;
hh= windowHeight;
	
let x= windowWidth/2;
let y= windowHeight/2;

image(daCat1, x-700, y, ww/2,hh/2);
image(tree2,x+80,y, ww,hh);
image(ghostGirl3,x+600,y,ww/3,hh/2);


textSize(90);  // text size 
  noFill();
  textAlign(CENTER); // text alignmnet in the center
  textFont(theFont);// using the 'theFont' text font
	
	let p= random(10,120);	
stroke(255,p); // stroke= white
  strokeWeight(2); // strokeWeight=1
  text("'1'",x-685,y-300 );
	text("'2'",x+80,y-300 );
	text("'3'",x+590,y-300);

	
	
	
eye();
	
if (key === '1'){
	sceneCat();
	
}
	else if (key=== '2'){
	sceneTree();
	}
else if (key=== '3'){
	
	sceneGhost();
}
}


function sceneCat(){
pixelDensity(1); 
	
	imageMode(CORNER);
	image(spread,0,0,windowWidth,windowHeight);
	
	imageMode(CENTER);
	
let ww= width*3/4+ random(-15,10);
let hh= height*3/4+random(-15,10);
	
image(daCat1, 40, windowHeight*3/4,ww, hh );

	for(let i=0; i<1000; i++){ // conditions for the rain instance 
      let x= random(width);
      let y= random(height);
      let r= random(3);
    let rp = new Rain(x,y,r); // creating a new instance of the Rain class
    rains.push(rp);   
  } 
	
loadPixels(); // pixelation in the nation 
	 	for (let x = 0; x < width; x += pixelLevel) {
  	for (let y = 0; y < height; y += pixelLevel) {
      
			// finding the pixel information of the image 
      let i = (x + y * width) * 4;

      let r = pixels[i + 0]; 
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
			noStroke();
			
			let o= random(-13,13);
      ellipse(x+o, y+o, pixelLevel);
		}
		}

}


function sceneTree(){
pixelDensity(1); 
	imageMode(CORNER);
	image(fye, 0,0,windowWidth,windowHeight);
	imageMode(CENTER);
	
		image(tree, windowWidth/2+80,windowHeight/2, width/1.2, height/1.2);
	
	loadPixels(); // pixelation in the nation 
	 	for (let x = 0; x < width; x += pixelLevel) {
  	for (let y = 0; y < height; y += pixelLevel) {
      
			// finding the pixel information of the image 
      let i = (x + y * width) * 4;

      let r = pixels[i + 0]; 
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
			noStroke();
			
			let o= random(-13,13);
      ellipse(x+o, y+o, pixelLevel);
		}
		}
	
}


function sceneGhost(){
	pixelDensity(1); 
	imageMode(CORNER);
	image(mirrored, 0,0,windowWidth,windowHeight);
	imageMode(CENTER);
	
	let o= random(-10,5);
	
	image(ghostGirl3, windowWidth/2,windowHeight/2, width/6+o, height/2+o);
	
	loadPixels(); // pixelation in the nation 
	 	for (let x = 0; x < width; x += pixelLevel) {
  	for (let y = 0; y < height; y += pixelLevel) {
      
			// finding the pixel information of the image 
      let i = (x + y * width) * 4;

      let r = pixels[i + 0]; 
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
			noStroke();
			
			let o= random(-3,3);
    ellipse(x+o, y+o, pixelLevel);
		}
		}
}


function eye(){ // function eye (cursor)
	image(eye6,mouseX+88,mouseY-41,width/7,height/5);
}



class Rain { // RAIN CLASS AND QUALITIES 
  
  constructor(x,y,r){ //rain constructor: need x,y,r parameters 
    this.x=x;
    this.y=y;
    this.r=r;
    this.brightness= 190;

  }
  
  exist(){ // calls for the rain moelcules to be drawn(static)
    
      noStroke();
      let a= random(0,255);
      fill(this.brightness,a); // fill orginal 100 and random alpha (20,225)
      ellipse(this.x,this.y,this.r); // the rain molecules 
      
    }

  fall(){ // this is the movement path of the rain molecules 
    let w= random(-3,3); 
    let e= random(9,11);
    this.x=this.x+w; //x movement random(-10,10)
    this.y=this.y+e; // y movement --> increases 10 through each loop
    
    if(this.x>width){
      this.x=random(width); // if x becomes greater than the width it has random location set 
      this.y=0;
    }
    if(this.y>height){
  this.y=0; // if y exceeds the height of page, it starts from 0 
  this.x=random(width)
    }
  }
}
