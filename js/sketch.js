function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('sketch-holder');
    colorMode(HSB,360,100,100,100);
}

function draw() {
    background(30);

    //for generating a nice sine wave
    var amplitude = 400;
    var period = 2000;
    var changingValue = amplitude * sin(TWO_PI * frameCount / period);
    
    if (changingValue < 0) {
      changingValue = 0;
    }
  
    //usefull drawing area stuff
    var startGap = 200;
    var sizeOfDrawableArea = width-(startGap*2);
    //var sizeOfSquare = 300;
    var numberOfThings = 1600;
    var gapBetweenThings = 50;
  
    //the golden ratio
    var goldenRatio = (1 + sqrt(5))/2;
  
    //********************* put cool stuff below here
  
    //noFill();
    noStroke();
    // lights();
    //stroke(360);
    //pushMatrix();
    //translate(-500, -500);
    //popMatrix();
    rotate(changingValue*0.01);
    translate(-width/2,-height/2);
    
    for (var x = 0; x < numberOfThings; x+=gapBetweenThings) {
      for (var y = 0; y < numberOfThings; y+=gapBetweenThings) {
        var d = dist(width*0.5, height*0.5, x, y);
        var maxDist = dist(0, 0, width*0.5, height*0.5);
        //var timeDelay = map(d, 0, maxDist, 1000, 2000);
        push();
        //fill(d,60,80);
        fill(d,100,100);
        //rotate(changingValue*(d*0.00001));
        translate(x, y, changingValue*(d*0.01));
        rotateX(changingValue*(d*0.0001));
        rotateX(changingValue*(d*0.0001));
        rotateZ(changingValue*(d*0.0001));
        //println(nf(var(d*0.1+(frameCount*0.2)),2));
        //if (d*0.1+(frameCount*0.2) >= 360.0) {
        //  exit();
        //}
        box(50);
        pop();
      }
    }
}