//references: 
//https://openprocessing.org/sketch/1373497 --> CodeFromClass on video capture
// https://openprocessing.org/sketch/1374384 --> CodeFromClass on edge detection 
// in-class-code, pixel attraction/manipulation/ movement 
// 


//GLOBAL VARIABLES 


//var video;
let inside;
let birdsFly;
let shelter;
let cycles;
let ground; 
let train;

let memories; 
let timeline;
let alley;
let mirrored;
let glimmer;
let copper;
let copperInverted;
let aforest; 
let growth;
let dead;
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
let building;
let wired9;
let wired1;

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

let pixelLevel= 5;

function preload(){ // function preloading--> loading all media items before set up 

//song= loadSound('nightOwlEdit.wav')
	

	
theFont= loadFont('goudyMedieval.ttf');
birdsFly= loadImage('birdsFly.JPG');
shelter= loadImage('shelter.JPG');
cycles= loadImage('cycles.JPG');
ground= loadImage('ground.jpg');
train= loadImage('train.JPG');
	
building= loadImage('building.JPG');
memories= loadImage('memories.jpg');
timeline= loadImage('timeline.png');
copper= loadImage('copper.png');
dead= loadImage('dead.JPG');
growth= loadImage('growth.png');
copperInverted= loadImage('copperInverted.png')
mirrored= loadImage('mirrored.png');
fye2= loadImage('fye2.png');
fye= loadImage('fye.png');
wired9= loadImage('wired9.png');
wired1= loadImage('wired1.png');	
tree= loadImage('BladeRunnerTree.png');
tree1= loadImage('BladeRunnerTree1.png');
tree2= loadImage('BladeRunnerTree2.png');
tree3= loadImage('BladeRunnerTree3.png');
ghostGirl= loadImage('ghostGirl.png');
ghostGirl2= loadImage('ghostGirl2.png');
ghostGirl3= loadImage('ghostGirl3.png');
daCat= loadImage('daCAT.png');
daCat1= loadImage('daCAT1.png');
alley= loadImage('alley.JPG');

ghostLine= loadImage('ghostLine.png');
catLine= loadImage('catLine.png');
treeLine= loadImage('treeLine.png');
aforest= loadImage('aforest.png');

spread= loadImage('spread.JPG');
eye1= loadImage('eye1.png');
eye6= loadImage('eye6png.png');
glimmer= loadImage('glimmer.jpg');
}

function setup() { 					// SETUP function 
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	
	for(let i=0; i<200; i++){ // conditions for the rain instance 
      let x= random(width);
      let y= random(height);
      let r= random(3);
    let rp = new Rain(x,y,r); // creating a new instance of the Rain class
    rains.push(rp);   
  }   
	
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
  noStroke();
  textAlign(LEFT); // text alignmnet in the center
  textFont(theFont);// using the 'theFont' text font
	
	let d= random(90,130);	
fill(255,d);
  text("to exist is to perceive and to sense,",100,windowHeight/4-200 );
	text("forming in coincidence the substances within", 300, windowHeight/4-150);
	strokeWeight(1);
	stroke(180,120);
	  text("hold down the eye and you shall see",500,windowHeight/4-100);
	noStroke();
	text("the births of creatures that were meant to be", 700, windowHeight/4-50);
	
	
let x= windowWidth/2;
let y= windowHeight/2;
	
ww=windowWidth/4;
hh= windowHeight/2;
let f = random(-5,5);

let p= random(20,130);
tint(255,p);
image(ghostLine,x+600,y-20,ww/3+f,hh/2+f);
image(catLine,x-700, y-60, ww/2+f,hh/2+f);
image(treeLine,x+80,y-20, ww+f,hh+f);
	
if (mouseIsPressed === true) { // start of the mouseIsPressed
tint(255,200);	
w= w+ random(-3,9);
h= h+ random(-3,9);

image(tree,x+80,y-20, w,h);
image(ghostGirl2,x+600,y-20,w/3,h/2);
image(daCat1, x-700, y-60, w/1.7,h/1.9);

	
	if (w>windowWidth/4){
textSize(50);  // text size 
  noFill();
  textAlign(CENTER); // text alignmnet in the center
  textFont(theFont);// using the 'theFont' text font
	
	let p= random(10,120);	
fill(255,d);
  text("'release'",x,y/4 );
		
}


} // end of mouseIsPress
	
	imageMode(CENTER);
	
	eye();
	

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

image(daCat1, x-700, y-20, ww/2,hh/2);
image(tree2,x+80,y-60, ww,hh);
image(ghostGirl3,x+600,y-20,ww/3,hh/2);


textSize(30);  // text size 
	
 textAlign(CENTER);	
	let p= random(40,150);
	fill(240,p);
  text("'1'",x-685,y-300 );
	text("'2'",x+50,y-300 );
	text("'3'",x+590,y-300);
	
	textSize(30);
textAlign(LEFT);
		let d= random(50,130);	
fill(255,d);
  text("pick a figure, maybe two, maybe three, to share a glimpse of their memories",700,windowHeight*4/5+20);
	
	
	
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
	
	if(mouseX<windowWidth/6){
	image(wired9,0,0,windowWidth,windowHeight);
	}
	else if (mouseX>windowWidth/6 && mouseX<windowWidth*2/6){
	image(wired1,0,0,windowWidth,windowHeight);
	} 
	else if (mouseX>windowWidth*2/6 && mouseX<windowWidth*3/6){
		
	image(building, 0,0, windowWidth, windowHeight);
	}
	else if (mouseX>windowWidth*3/6 && mouseX<windowWidth*4/6 ){
		image(alley,0,0,windowWidth,windowHeight);
	}
else if (mouseX>windowWidth*4/6 && mouseX<windowWidth*5/6){
	
image(fye,0,0,windowWidth,windowHeight);
}
	else if (mouseX> windowWidth*5/6){
		image(fye2,0,0, windowWidth, windowHeight);
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
	
		
rectMode(CORNER);
	strokeWeight(1);
	fill(20,180);
	stroke(0,225);
	rect(20,18,100,40);
textSize(40);
	noStroke();
	fill(255);
		text("'esc'", 40, 50);

	
	imageMode(CENTER);
	
let tt= width/3+ random(-5,5);
let aa= height/3+random(-5,5);
	
	let a = random(180,230);
	
if(mouseY>windowHeight*9/10-150){
		let n= random(220,255);
		tint(255,n);
	}else {
		let s= random(160,190);
		tint(255,s);
	}
	
	
	
	rectMode(CORNERS);
	fill(20,180);
	stroke(0,225);
	rect(0,windowHeight*7/8-15, windowWidth, windowHeight);


		fill(255);
	noStroke();
	rect(0,windowHeight*9/10,windowWidth, windowHeight*9/10+2);
	rect(windowWidth/6-150, windowHeight*9/10-40, windowWidth/6-148, windowHeight*9/10);
	rect(windowWidth*2/6-150, windowHeight*9/10-40, windowWidth*2/6-148, windowHeight*9/10);
		rect(windowWidth/2-150, windowHeight*9/10-40, windowWidth/2-148, windowHeight*9/10);
		rect(windowWidth*4/6-150, windowHeight*9/10-40, windowWidth*4/6-148, windowHeight*9/10);
		rect(windowWidth*5/6-150, windowHeight*9/10-40, windowWidth*5/6-148, windowHeight*9/10);
	rect(windowWidth-150, windowHeight*9/10-40, windowWidth-148, windowHeight*9/10);
	text("timeline", windowWidth/2-100, windowHeight*9/10+60);
	
	image(daCat1, mouseX-200,mouseY,tt, aa );
	

}

function sceneNext(){
		fill(255,0,0);	
	rect(0,0,windowWidth, windowHeight);		
}


function sceneTree(){
pixelDensity(1); 
	imageMode(CORNER);
	
	//image(glimmer, 0,0,windowWidth,windowHeight);
	
			if(mouseX<windowWidth/6){
	image(ground,0,0,windowWidth,windowHeight);
	}
	else if (mouseX>windowWidth/6 && mouseX<windowWidth*2/6){
	image(birdsFly,0,0,windowWidth,windowHeight);
	} 
	else if (mouseX>windowWidth*2/6 && mouseX<windowWidth*3/6){
		
	image(cycles, 0,0, windowWidth, windowHeight);
	}
	else if (mouseX>windowWidth*3/6 && mouseX<windowWidth*4/6 ){
		image(shelter,0,0,windowWidth,windowHeight);
	}
else if (mouseX>windowWidth*4/6 && mouseX<windowWidth*5/6){
	
image(train,0,0,windowWidth,windowHeight);
}
	else if (mouseX> windowWidth*5/6){
		image(wired1,0,0, windowWidth, windowHeight);
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
			
			let o= random(-3,3);
      ellipse(x+o, y+o, pixelLevel);
		}
		}
	
	
rectMode(CORNER);
	fill(20,180);
	stroke(0,225);
	rect(20,18,100,40);
textSize(40);
	noStroke();
	fill(255);
		text("'esc'", 40, 50);
	
	
		let n= random(220,255);
		tint(255,n);

	fill(20,180);
	stroke(0,225);
	rect(0,windowHeight*7/8-15, windowWidth, windowHeight);
	
	
		rectMode(CORNERS);
		fill(255);
	noStroke();
	rect(0,windowHeight*9/10,windowWidth, windowHeight*9/10+2);
	rect(windowWidth/6-150, windowHeight*9/10-40, windowWidth/6-148, windowHeight*9/10);
	rect(windowWidth*2/6-150, windowHeight*9/10-40, windowWidth*2/6-148, windowHeight*9/10);
		rect(windowWidth/2-150, windowHeight*9/10-40, windowWidth/2-148, windowHeight*9/10);
		rect(windowWidth*4/6-150, windowHeight*9/10-40, windowWidth*4/6-148, windowHeight*9/10);
		rect(windowWidth*5/6-150, windowHeight*9/10-40, windowWidth*5/6-148, windowHeight*9/10);
	rect(windowWidth-150, windowHeight*9/10-40, windowWidth-148, windowHeight*9/10);
	text("timeline", windowWidth/2-100, windowHeight*9/10+60);
	
	imageMode(CENTER);
	image(tree,mouseX+80, mouseY-330, width/2, height);
	
		
}





function sceneGhost(){
	pixelDensity(1); 
	imageMode(CORNER);
//	image(mirrored, 0,0,windowWidth,windowHeight);
	
		if(mouseX<windowWidth/6){
	image(mirrored,0,0,windowWidth,windowHeight);
	}
	else if (mouseX>windowWidth/6 && mouseX<windowWidth*2/6){
	image(glimmer,0,0,windowWidth,windowHeight);
	} 
	else if (mouseX>windowWidth*2/6 && mouseX<windowWidth*3/6){
		
	image(memories, 0,0, windowWidth, windowHeight);
	}
	else if (mouseX>windowWidth*3/6 && mouseX<windowWidth*4/6 ){
		image(dead,0,0,windowWidth,windowHeight);
	}
else if (mouseX>windowWidth*4/6 && mouseX<windowWidth*5/6){
	
image(aforest,0,0,windowWidth,windowHeight);
}
	else if (mouseX> windowWidth*5/6){
		image(copper,0,0, windowWidth, windowHeight);
	}

	
	imageMode(CENTER);
	
	let o= random(-5,5);
	let w_= width/8+o;
	let h_= height/4+o;


	
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
	
		
rectMode(CORNER);
	fill(20,180);
	stroke(0,225);
	rect(20,18,100,40);
textSize(40);
	noStroke();
	fill(255);
		text("'esc'", 40, 50);
	
	
	
	if(mouseY>windowHeight*9/10-150){
		let n= random(220,255);
		tint(255,n);
	}else {
		let s= random(160,190);
		tint(255,s);
	}
	
	rectMode(CORNERS);
	fill(20,180);
	stroke(0,225);
	rect(0,windowHeight*7/8-15, windowWidth, windowHeight);

	rectMode(CORNERS);
		fill(255);
	noStroke();
	rect(0,windowHeight*9/10,windowWidth, windowHeight*9/10+2);
	rect(windowWidth/6-150, windowHeight*9/10-40, windowWidth/6-148, windowHeight*9/10);
	rect(windowWidth*2/6-150, windowHeight*9/10-40, windowWidth*2/6-148, windowHeight*9/10);
		rect(windowWidth/2-150, windowHeight*9/10-40, windowWidth/2-148, windowHeight*9/10);
		rect(windowWidth*4/6-150, windowHeight*9/10-40, windowWidth*4/6-148, windowHeight*9/10);
		rect(windowWidth*5/6-150, windowHeight*9/10-40, windowWidth*5/6-148, windowHeight*9/10);
	rect(windowWidth-150, windowHeight*9/10-40, windowWidth-148, windowHeight*9/10);
	text("timeline", windowWidth/2-100, windowHeight*9/10+60);

	image(ghostGirl, mouseX,mouseY, w_, h_);
	
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