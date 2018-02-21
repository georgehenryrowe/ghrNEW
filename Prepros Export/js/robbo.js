var head, jaw, robBW, robColour, mic, button;

var state = 0;
var robAge = 0;

var system;

var funeralPlaying 	= false;
var walkenPlaying 	= false;
var walkenPlaying2 	= false;
var robPlaying 		= false;
var micOn 			= false;

var headScale = 0.1;

var shakingValue = 0;

function preload() {

	head 		= loadImage('img/rob/walkenTop.png');
	jaw 		= loadImage('img/rob/walkenBottom.png')
	robBW 		= loadImage('img/rob/robBW.png');
	robColour 	= loadImage('img/rob/robColour.png')
	rob2	 	= loadImage('img/rob/rob2.png')
	robHead 	= loadImage('img/rob/robHead.png')
	robJaw	 	= loadImage('img/rob/robJaw.png')

	funeral 	= loadSound('sounds/funeral_01.mp3');
	walken 		= loadSound('sounds/happyBirthday.mp3');
	walken2		= loadSound('sounds/happybirthday2.mp3');
	walken3		= loadSound('sounds/happybirthday3.mp3');
	walken4		= loadSound('sounds/happybirthday4.mp3');
	walken5		= loadSound('sounds/happybirthday5.mp3');
	walken6		= loadSound('sounds/happybirthday7.mp3');
	walken7		= loadSound('sounds/happybirthday8.mp3');
	walken8		= loadSound('sounds/happybirthday9.mp3');
	walkenshort	= loadSound('sounds/birthdayshort.mp3');
	robgov		= loadSound('sounds/robGov.mp3');

}

function setup() {

	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
	background(30);

	// var time = millis();

	// for (var i = 1; i < 255; i++) {
	// 	coloursArray[i] = random(255);
	// }

	// for (var i = 0; i < soundArray.length; i++) {
	// 	soundArray[0] = noise0;
	// }

	amplitude = new p5.Amplitude();

	system = new ParticleSystem(createVector(width/2, 0));

}

function draw() {

	var level = amplitude.getLevel();

	var textSizeLarge = width/5;
	var textSizeMedium = width/20;
	var textSizeSmall = width/60;

	if (width < 400) {
		textSizeSmall = width/40;
	}

	nextButton(20,20);

	imageMode(CENTER);
	textAlign(LEFT,CENTER);

	switch(state) {
		case 0:
			walken8.stop();
			walkenPlaying = false;

			background(30);

			fill(255);
			textSize(textSizeSmall);
			text("Happy Birthday Robbo. Here is some birthday 'fun'.", 20, 70);
			text("When ready, press the NEXT button to go to the next bit of birthday 'fun', you jeb end.", 20, 100);
			text("On some of them, move and click the mouse. You jeb end.", 20, 130);
			text("Make sure your volume is on and loud.", 20, 160);
			text("Works best in Chrome on a desktop or laptop.", 20, 190);
			text("Jeb end.", 20, 220);
			break;
	    case 1:
			background(30);
			noTint();

			if (walkenPlaying == false) {
				walken.play();
				walkenPlaying = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);
			var headShake = map(level, 0, 1, 0, 10);

			rotate(radians(headShake));
			image(head,width/2,300,head.width/2,head.height/2);
			// rotate(radians(headShake));
			translate(headShake,0);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);

	        break;
	    case 2:

		    walken.stop();
		    walkenPlaying = false;

		    background(30);

		 //    textSize(textSizeSmall);
			// text("Wait for it...", 10, 40);

		    robAge+=0.1;

			fill(100, 202, 53);
			textSize(textSizeLarge);
			text(nf(robAge,1), width/2-100, height/2);

			if (robAge >= 30 && funeralPlaying == false) {
				funeral.play();
				funeralPlaying = true;
			}

			if (robAge >= 30) {
				background(4*(50*level),8*(25*level),10*(20*level));

				system.addParticle();
				system.run();

				textAlign(CENTER,CENTER);

				image(rob2,width/2-width/4,height/2-(level*200),rob2.width/4,rob2.height/4);
				image(rob2,width/2+width/4,height/2-(level*200),rob2.width/4,rob2.height/4);

				fill(4*(100*level),8*(200*level),12*(100*level));
				text("30!", width/2, height/2);
				textSize(textSizeMedium*(1+level));
				text("You're nearly dead!", width/2, height/2+200);
			}
		    break;
		 case 3:
		 	funeral.stop();
		 	funeralPlaying = false;

		    image(robBW,mouseX,mouseY);
		    if (mouseIsPressed) {
			    image(robColour,mouseX,mouseY);
			}
		    break;
		 case 4:
		 	background(30);
			if (walkenPlaying == false) {
				walken2.play();
				walkenPlaying = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);
			var headShake = map(level, 0, 1, 0, 10);

			rotate(radians(headShake));
			image(head,width/2,300,head.width/2,head.height/2);
			translate(headShake,0);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);

		 	break;
		 case 5:
		 	walken2.stop();
		 	walkenPlaying = false;

		 	headScale += 40;
		 	translate(headScale,0);
			tint(random(255),random(255),random(255));
		 	image(rob2,0,height/2);

		 	if (headScale > width) {
		 		headScale = 0;
		 	}
		 	break;
		 case 6:
 		 	noTint();
		 	background(255);

			if (walkenPlaying2 == false) {
				walkenshort.play();
				walkenPlaying2 = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);

			image(head,width/2,300,head.width/2,head.height/2);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);
			image(robBW,width/2+85,height/2,robBW.width/4,robBW.height/4);
			image(robBW,width/2-40,height/2,robBW.width/4,robBW.height/4);
			break;
		case 7:
			walkenshort.stop();
			walkenPlaying2 = false;

			background(30);

			if (walkenPlaying == false) {
				walken3.play();
				walkenPlaying = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);
			var headShake = map(level, 0, 1, 0, 10);
			// var headSize = map(level, 0, 1, 1, 2);

			// scale(headSize);
			rotate(radians(headShake));
			image(head,width/2,300,head.width/2,head.height/2);
			// rotate(radians(headShake));
			translate(headShake,0);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);
			break;
		case 8:
			walken3.stop();
			walkenPlaying = false;

			background(30);

			fill(random(255),random(255),random(255));
			textAlign(CENTER,CENTER);
			textSize(textSizeMedium);
			text("It's your birthday you twat", width/2, height/2);
			break;
		case 9:
			background(30);

			if (walkenPlaying == false) {
				walken4.play();
				walkenPlaying = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);
			var headShake = map(level, 0, 1, 0, 10);
			// var headSize = map(level, 0, 1, 1, 2);

			// scale(headSize);
			rotate(radians(headShake));
			image(head,width/2,300,head.width/2,head.height/2);
			// rotate(radians(headShake));
			translate(headShake,0);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);
			break;
		case 10:
			walken4.stop();
			walkenPlaying = false;

			if (funeralPlaying == false) {
				funeral.play();
				funeralPlaying = true;
			}

			// background(30);

			var wordGrow = map(level, 0, 1, 1.5, 10);

			fill(random(255),random(255),random(255));
			textAlign(CENTER,CENTER);
			textSize(textSizeMedium*wordGrow);
			translate(width/2,height/2);
			rotate(radians(frameCount));
			text("BIRTHDAY", 0,0);
			break;
		case 11:
			funeral.stop();
			funeralPlaying = false;
			background(30);

			if (walkenPlaying == false) {
				walken5.play();
				walkenPlaying = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);
			var headShake = map(level, 0, 1, 0, 10);
			// var headSize = map(level, 0, 1, 1, 2);

			// scale(headSize);
			rotate(radians(headShake));
			image(head,width/2,300,head.width/2,head.height/2);
			// rotate(radians(headShake));
			translate(headShake,0);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);
			break;
		case 12:
			walken5.stop();
			walkenPlaying = false;

			if (funeralPlaying == false) {
				funeral.play();
				funeralPlaying = true;
			}

			var wordGrow = map(level, 0, 1, 2, 20);

			image(rob2,width/2-width/4,height/2-(level*200),rob2.width/4,rob2.height/4);
			image(rob2,width/2+width/4,height/2-(level*200),rob2.width/4,rob2.height/4);

			fill(random(255),random(255),random(255));
			textAlign(CENTER,CENTER);
			textSize(textSizeMedium*wordGrow);
			translate(width/2,height/2);
			rotate(radians(frameCount));
			text("ROB", 0,0);
			break;
		case 13:
			funeral.stop();
			funeralPlaying = false;

			background(30);

			if (walkenPlaying == false) {
				walken6.play();
				walkenPlaying = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);
			var headShake = map(level, 0, 1, 0, 10);
			// var headSize = map(level, 0, 1, 1, 2);

			// scale(headSize);
			rotate(radians(headShake));
			image(head,width/2,300,head.width/2,head.height/2);
			// rotate(radians(headShake));
			translate(headShake,0);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);
			break;
		case 14:
			walken6.stop();
			walkenPlaying = false;

			background(30);
			noTint();

			if (robPlaying == false) {
				robgov.play();
				robPlaying = true;
			}

			var jawMove = map(level, 0, 1, 470, 600);
			var headShake = map(level, 0, 1, 0, 10);

			rotate(radians(headShake));
			image(robHead,width/2,300,head.width/2,head.height/2);
			// rotate(radians(headShake));
			translate(headShake,0);
			image(robJaw,width/2,jawMove,jaw.width/2,jaw.height/2);
	        break;
		case 15:
			robgov.stop();
			robPlaying = false;

			background(30);
			noTint();

			if (walkenPlaying == false) {
				walken7.play();
				walkenPlaying = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);
			var headShake = map(level, 0, 1, 0, 10);

			// scale(headSize);
			rotate(radians(headShake));
			image(head,width/2,300,head.width/2,head.height/2);
			// rotate(radians(headShake));
			translate(headShake,0);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);
	        break;
	    case 16:
			walken7.stop();
			walkenPlaying = false;

			// background(30);

			fill(random(255),random(255),random(255));
			textAlign(CENTER,CENTER);
			textSize(textSizeMedium*(Math.cos(frameCount)));
			text("It's still your birthday you twat", width/2, height/2);
	    	break;
		case 17:
			background(30);
			noTint();

			if (walkenPlaying == false) {
				walken8.play();
				walkenPlaying = true;
			}

			var jawMove = map(level, 0, 1, 490, 600);
			var headShake = map(level, 0, 1, 0, 10);

			// scale(headSize);
			rotate(radians(headShake));
			image(head,width/2,300,head.width/2,head.height/2);
			// rotate(radians(headShake));
			translate(headShake,0);
			image(jaw,width/2+30,jawMove,jaw.width/2,jaw.height/2);
	        break;
	}

}

var numberOfStates = 17;

function keyReleased() {
	if (keyCode == 82) {
	state++;
}
	if (state > numberOfStates) {
		state = 0;
	}
}

function deviceShaken() {
	shakingValue ++;

	if (shakingValue % 30 == 0) {
	state++;
}
	if (state > numberOfStates) {
		state = 0;
	}
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 400.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(random(255),random(255),random(255), this.lifespan);
  strokeWeight(2);
  fill(random(255),random(255),random(255), this.lifespan);
  ellipse(this.position.x, this.position.y, 20, 20);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

var nextButton = function(width, height) {
	  button = createButton('NEXT');
	  button.position(width, height);
	  button.mouseReleased(changeState);
};

var changeState = function() {
	state++;
	if (state > numberOfStates) {
		state = 0;
	}
}