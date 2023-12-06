let song; 

let ghostGirl;
let eyesLie1;
let eyesLie2;
let eyesLie3;
let eyesLie4;
let eyesLie5;
let eyesLie6;
let eyesLie7;
let eyesLie8;
let eyesLie9;

let dead;

let wired_6;
let wired_5;
let wired_4;
let wired_3;
let wired_2;
let wired_1;
let wired1;
let wired2;
let wired3;
let wired4;
let wired5;
let wired6;
let wired7;
let wired8;
let wired9;
let wired10;
let wired11;
let wired12;
let wired13;
let wired14;


let daCAT;

pixelLevel=5;
pixelLvl=10;
pixelLvl2=8;

function preload(){

song= loadSound('media/nightOwlEdit.wav'); //SONGNNGNNGNGNNGNNG

dead= loadImage('media/dead.JPG');
daCAT = loadImage('media/daCAT.png');
eyes1= loadImage('media/eyes1.png');	
ghostGirl= loadImage('media/ghostGirl.png');
	
eyesLie1= loadImage('media/eyeslie1.png');
eyesLie2= loadImage('media/eyeslie2.png');
eyesLie3= loadImage('media/eyeslie3.png');
eyesLie4= loadImage('media/eyeslie4.png');
eyesLie5= loadImage('media/eyeslie5.png');
eyesLie6= loadImage('media/eyeslie6.png');
eyesLie7= loadImage('media/eyeslie7.png');
eyesLie8= loadImage('media/eyeslie8.png');
eyesLie9= loadImage('media/eyeslie9.png');
	
wired_6= loadImage('media/wired-6.png');
wired_5= loadImage('media/wired-5.png');
wired_4= loadImage('media/wired-4.png');
wired_3= loadImage('media/wired-3.png');
wired_2= loadImage('media/wired-2.png');
wired_1= loadImage('media/wired-1.png');
wired1 = loadImage('media/wired1.png');
wired2 = loadImage('media/wired2.png');
wired3 = loadImage('media/wired3.png');
wired4 = loadImage('media/wired4.png');
wired5 = loadImage('media/wired5.png');
wired6 = loadImage('media/wired6.png');
wired7 = loadImage('media/wired7.png');
wired8 = loadImage('media/wired8.png');
wired9 = loadImage('media/wired9.png');
wired10 = loadImage('media/wired10.png');
wired11= loadImage('media/wired11.png');
wired12= loadImage('media/wired12.png');
wired13= loadImage('media/wired13.png');
wired14= loadImage('media/wired14.png');
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(255);
	
}

function draw() {
	
	 song.rate(mouseX/500);
	song.play(); // SONGGFGGGGGEGFEWJFYIWEGFIWEGFIUGEIUFHIWE	
	
 if(frameCount < 25){   // scene one ends at 25 frames
    scene1(); 
 } else if (frameCount < 100){  // scene 2 ends at 50 frames
   scene2();
 } else if (frameCount<125){ // scene 3 ends at 75 frames
  scene3();
 }
 else if( frameCount<150){ // scene 4 ends at 100 frames
  scene4();
 }
 else if( frameCount<160){// scene 5 ends at 125 frames
  scene5();
 }
 else if( frameCount<170){// scene 6 ends at 150 frames
  scene6();
 }
 else if( frameCount<180){// scene 7 ends at 175 frames
  scene7();
 }
else if (frameCount<190){
	scene9();
}
else if (frameCount<200){
	scene10();
}
else if (frameCount<205){
	scene11();
}
	else if (frameCount<210){
	scene12();
}
	else if (frameCount<215){
	scene13();
}
	else if (frameCount<225){
	scene14();
}
	else if (frameCount<235){
	scene15();
}
	else if (frameCount<245){
	scene16();
}
	else if (frameCount<275){
	scene17();
}
	else if (frameCount<285){
	scene18();
}
	else if (frameCount<320){
	scene19();
}
	else if (frameCount<450){
	scene20();	
}

}

function scene1(){
	pixelDensity(1); 
	image(wired_6,0,0,windowWidth,windowHeight);

	loadPixels(); // pixelation in the nation 
	 	for (let x = 0; x < width; x += pixelLvl) {
  	for (let y = 0; y < height; y += pixelLvl) {
      
			// finding the pixel information of the image 
      let i = (x + y * width) * 4;

      let r = pixels[i + 0]; 
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
			noStroke();
    	let o= random(-50,50);
     ellipse(x+o, y+o, pixelLvl);
}
		}

}

function scene2(){
	pixelDensity(1); 
	image(wired_5,0,0,windowWidth,windowHeight);
	
	loadPixels(); // pixelation in the nation 
	 	for (let x = 0; x < width; x += pixelLvl) {
  	for (let y = 0; y < height; y += pixelLvl) {
      
			// finding the pixel information of the image 
      let i = (x + y * width) * 4;

      let r = pixels[i + 0]; 
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
			noStroke();
     let o= random(-40,40);
      ellipse(x+o, y+o, pixelLvl);
}
		}

}

function scene3(){
	pixelDensity(1); 
	image(wired_4,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth/2+90, windowHeight/2+90);
	image(ghostGirl,windowWidth/3, windowHeight/2+400);
	
	loadPixels(); // pixelation in the nation 
	 	for (let x = 0; x < width; x += pixelLvl2) {
  	for (let y = 0; y < height; y += pixelLvl2) {
      
			// finding the pixel information of the image 
      let i = (x + y * width) * 4;

      let r = pixels[i + 0]; 
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
			noStroke();
     let o= random(-30,30);
      ellipse(x+o, y+o, pixelLvl);
}
		}

}

function scene4(){
	pixelDensity(1); 
	image(wired_3,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth/2+30, windowHeight/2+30);
	image(ghostGirl,windowWidth/3, windowHeight/2+350);

	loadPixels(); // pixelation in the nation 
	 	for (let x = 0; x < width; x += pixelLvl2) {
  	for (let y = 0; y < height; y += pixelLvl2) {
      
			// finding the pixel information of the image 
      let i = (x + y * width) * 4;

      let r = pixels[i + 0]; 
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
			noStroke();
  let o= random(-15,15);
      ellipse(x+o, y+o, pixelLvl);
}
		}
	
}

function scene5(){
	pixelDensity(1); 
	image(wired_2,0,0,windowWidth,windowHeight);
image(daCAT,windowWidth/2, windowHeight/2);
image(ghostGirl,windowWidth/3, windowHeight/2+320);
	
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
     let o= random(-8,8);
      ellipse(x+o, y+o, pixelLvl2);
}
		}

}

function scene6(){
	pixelDensity(1); 
	image(wired_1,0,0,windowWidth,windowHeight);
image(daCAT,windowWidth/2-50, windowHeight/2-50);
image(ghostGirl,windowWidth/3, windowHeight/2+275);
	
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
      ellipse(x+o, y+o, pixelLvl2);
}
		}
}

function scene7(){
	pixelDensity(1); 
	image(wired1,0,0,windowWidth,windowHeight);
image(daCAT,windowWidth/2-60, windowHeight/2-60);	
image(ghostGirl,windowWidth/3, windowHeight/2+200);

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
      let o= random(-2,2);
       ellipse(x+o, y+o, pixelLevel);
}
		}
}

function scene8(){
	pixelDensity(1); 
	image(wired2,0,0,windowWidth,windowHeight);
image(daCAT,windowWidth/2-40, windowHeight/2-40);
image(ghostGirl,windowWidth/3, windowHeight/2+150);
	
	

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
      let o= random(-5,5);
       ellipse(x+o, y+o, pixelLevel);
}
		}
}

function scene9(){
	pixelDensity(1); 
	image(wired3,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth/2, windowHeight/2);
	image(ghostGirl,windowWidth/3, windowHeight/2+100);
	
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

function scene10(){
	pixelDensity(1); 
	image(wired4,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth/2+20, windowHeight/2+20);
	image(ghostGirl,windowWidth/3, windowHeight/2+20);

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
      let o= random(-5,5);
       ellipse(x+o, y+o, pixelLevel);
}
		}
}

function scene11(){
	pixelDensity(1); 
	image(wired5,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth+50, windowHeight+50);
	image(ghostGirl,windowWidth/3, windowHeight/2);
	
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
      let o= random(-10,10);
      ellipse(x+o, y+o, pixelLevel);
}
		}
}

function scene12(){
	pixelDensity(1); 
	image(wired6,0,0,windowWidth,windowHeight);
image(daCAT,windowWidth/2+90, windowHeight/2+90);
	image(ghostGirl,windowWidth/3, windowHeight/2-20);

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
      let o= random(-20,20);
       ellipse(x+o, y+o, pixelLevel);
		}
		}


}

function scene13(){
pixelDensity(1); 
	image(wired7,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth/2+160, windowHeight/2+160);
	image(ghostGirl,windowWidth/3, windowHeight/2-40);
	
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
      let o= random(-40,40);
       ellipse(x+o, y+o, pixelLevel);
		}
		}
}

function scene14(){
pixelDensity(1); 
	image(wired8,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth/2+200, windowHeight/2+200);
	image(ghostGirl,windowWidth/3, windowHeight/2-60);

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
      let o= random(-60,60);
       ellipse(x+o, y+o, pixelLevel);
		}
		}
	
}

function scene15(){
pixelDensity(1); 	
	image(wired9,0,0,windowWidth,windowHeight);
	
	image(daCAT,windowWidth/2+220, windowHeight/2-90+220);
	image(ghostGirl,windowWidth/3, windowHeight/2-80);

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
      let o= random(-100,100);
       ellipse(x+o, y+o, pixelLevel);
		}
		}
	
}

function scene16(){
	pixelDensity(1); 
	image(wired10,0,0,windowWidth,windowHeight);
	
	image(daCAT,windowWidth/2+300, windowHeight/2+300);
	image(ghostGirl,windowWidth/3, windowHeight/2-110);
	
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
      let o= random(-200,200);
       ellipse(x+o, y+o, pixelLevel);
		}
		}
	
}


function scene17(){
pixelDensity(1); 
	image(wired11,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth/2+320, windowHeight/2+320);
	image(ghostGirl,windowWidth/3, windowHeight/2-140);
	
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
      let o= random(-300,300);
       ellipse(x+o, y+o, pixelLevel);
		}
		}

}

function scene18(){
	pixelDensity(1); 
	
	image(wired12,0,0,windowWidth,windowHeight);
	image(daCAT,windowWidth/2+350, windowHeight/2+350);
	image(ghostGirl,windowWidth/3, windowHeight/2-150);

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
      let o= random(-500,500);
       ellipse(x+o, y+o, pixelLevel);
		}
		}
	
}
	
function scene19(){
		image(wired13,0,0,windowWidth,windowHeight);
	image(ghostGirl,windowWidth/3, windowHeight/2-150);
	
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
      let o= random(-800,800);
       ellipse(x+o, y+o, pixelLevel);
		}
		}
}

function scene20(){
	image(dead,0,0,windowWidth,windowHeight);
	imageMode(CENTER);
	
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
      let o= random(-14,14);
      ellipse(x+o, y+o, pixelLevel); // move pixels by -14,14
    }
  }	
	imageMode(CORNER);
	
}