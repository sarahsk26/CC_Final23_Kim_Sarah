//references: 
//https://openprocessing.org/sketch/1373497 --> CodeFromClass on video capture
// https://openprocessing.org/sketch/1374384 --> CodeFromClass on edge detection 


//GLOBAL VARIABLES 


//var video;

let mirrored;
let glimmer;

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

let growth;
let wired9;

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

let pixelLevel= 4;

function preload(){ // function preloading--> loading all media items before set up 

//song= loadSound('nightOwlEdit.wav')
	
theFont= loadFont('goudyMedieval.ttf');
	
growth= loadImage('growth.jpg');

mirrored= loadImage('mirrored.png');
fye2= loadImage('fye2.png');
fye= loadImage('fye.png');
wired9= loadImage('wired9.png');
	
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
glimmer= loadImage('glimmer.jpg');
}

function setup() { 					// SETUP function 
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	
//pixelDensity(1); // reference to CodeFromClass Code on live video capture 
//  video = createCapture(VIDEO);
//video.hide();
	
	w= 1;
	h=1;

	
}// end of setup function 

function draw() {// start of the draw function 
	
	
// song.rate(mouseX/500);
	//song.play();
background(0);
	
  //image(video, 0, 0, width, height); // move this and manipulate the colors of the pixels 
// have this video play after sceneCAT, sceneTree, and sceneGhostgirl
	// make it very blue and pixelated then fade it out to ___ another image (select and image by today)

sceneStart();

}



function sceneStart(){ // function start scene (first scene)

	textSize(30);  // text size 
  noFill();
  textAlign(CENTER); // text alignmnet in the center
  textFont(theFont);// using the 'theFont' text font
	
	let d= random(50,130);	
stroke(255,d); // 
  strokeWeight(2); // 
  text("to exist is to perceive and to sense, forming in coincidence the substances within,",windowWidth/2,windowHeight/4-80 );
	  text("hold down the eye and you shall see the births of creatures that were meant to be",windowWidth/2,windowHeight/4-40 );
	
	
	
	
	
let x= windowWidth/2;
let y= windowHeight/2;
	
ww=windowWidth/4;
hh= windowHeight/2;
let f = random(-5,5);

let p= random(20,130);
tint(255,p);
image(ghostLine,x+600,y,ww/3+f,hh/2+f);
image(catLine,x-700, y, ww/2+f,hh/2+f);
image(treeLine,x+80,y, ww+f,hh+f);
	

	
if (mouseIsPressed === true) { // start of the mouseIsPressed
tint(255,200);	
w= w+ random(-10,15);
h= h+ random(-10,14);

image(tree,x+80,y, w,h);
image(ghostGirl2,x+600,y,w/3,h/2);
image(daCat1, x-700, y, w/1.7,h/1.9);

	
	if (w>windowWidth/4){
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
	
	for(let i=0; i<10; i++){ // conditions for the rain instance 
      let x= random(width);
      let y= random(height);
      let r= random(3);
    let rp = new Rain(x,y,r); // creating a new instance of the Rain class
    rains.push(rp);   
  }   

for(var i=0; i<rains.length;i++){ // the rain 
  rains[i].exist(); // the functions of rain
  rains[i].fall();
  }

if (w>windowWidth/4){// if the width of the image exceeds half the width of the window, the next scene is overlayed (sceneCharacters)
sceneCharacters();
}
}// end of Start screen 



function sceneCharacters(){ // start of character display scene 

rectMode(CORNER);
fill(0);
rect(0,0,windowWidth,windowHeight);
	
for(let i=0; i<1000; i++){ // conditions for the rain instance 
      let x= random(width);
      let y= random(height);
      let r= random(3);
    let rp = new Rain(x,y,r); // creating a new instance of the Rain class
    rains.push(rp);   
  }   
tint(255,200);
	
ww=windowWidth/4;
hh= windowHeight/2;
	
let x= windowWidth/2;
let y= windowHeight/2;

image(daCat1, x-700, y, ww/2,hh/2);
image(tree2,x+80,y, ww,hh);
image(ghostGirl3,x+600,y,ww/3,hh/2);


textSize(50);  // text size 
  noFill();
  textAlign(CENTER); // text alignmnet in the center
  textFont(theFont);// using the 'theFont' text font
	
	let p= random(10,120);	
stroke(255,p); // stroke= white
  strokeWeight(2); // strokeWeight=1
  text("'1'",x-685,y-200 );
	text("'2'",x+50,y-200 );
	text("'3'",x+590,y-200);
	
	textSize(30);
	
		let d= random(50,130);	
stroke(255,d); // 
  strokeWeight(2); // 
  text("pick one player, maybe two, maybe three, to share a glimpse of one of their memories",windowWidth/2,windowHeight/4-80 );
	 
	
	
	
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
	image(wired9,0,0,windowWidth,windowHeight);
	
	imageMode(CENTER);
	
let tt= width*2+ random(-5,20);
let aa= height*2+random(-5,20);
	
image(daCat1, 40, windowHeight*3/4-50,tt, aa );

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

function sceneNext(){
	
	fill(255,0,0);
	
	
	rect(0,0,windowWidth, windowHeight);
	
	
}


function sceneTree(){
pixelDensity(1); 
	imageMode(CORNER);
	image(glimmer, 0,0,windowWidth,windowHeight);
	imageMode(CENTER);
	
	//for(var a=0; a<1400; a+=50){ 
	//	let u= random(-15,5);
	//	let u_= random(-5,15);
	//	let o= random(-40,40);
//	let w_= windowWidth/2+90+a+u;
//let w__= windowWidth/2+90-a+u_;
//		let h_= windowHeight/2+o;

	//	let y= random(-300,300);
		
	//	image(tree, w_,h_, windowWidth/2+y, windowHeight*2+y);
	//	image(tree, w__,h_, windowWidth/2+y, windowHeight*2+y);
	
	image(tree,windowWidth/3, windowHeight*3/4, width*2, height*2);
	image(tree,windowWidth*2/3, windowHeight/2-200, width*2.4, height*2);
	image(tree,windowWidth*5/6, windowHeight/3, width, height*2);
	image(tree,windowWidth/2-100, windowHeight/3, width*1.3, height*2);
	image(tree,windowWidth*9/10+100, windowHeight/3, width*3, height*3);
	image(tree,windowWidth*9/10+250, windowHeight/2, width, height*3.1);
	
	
		
	
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


function sceneGhost(){
	pixelDensity(1); 
	imageMode(CORNER);
	image(mirrored, 0,0,windowWidth,windowHeight);
	imageMode(CENTER);
	
	let o= random(-5,20);
	let w_= width/6+o;
	let h_= height/2+o;
	
	image(ghostGirl3, windowWidth/2,windowHeight/2, w_, h_);
	
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
	
//	if (w_> width/6){
		
	//	sceneNext();
//	}
	
	
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
