var changingValue, sizeOfThing;
var scrollMove = 1;
var multiplierGap = 1;
var multiplier = 1;


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('sketch-holder');
    colorMode(HSB, 360, 100, 100, 100);
    var running = false;
    sizeOfThing = height / 10;
}

function draw() {

    background(30);

    //for generating a nice sine wave
    var amplitude = 200;
    var period = 2000;
    var changingValue = amplitude * cos(TWO_PI * frameCount / period);

    if (changingValue < 0) {
        changingValue = 0;
    }

    // var sizeOfThing = windowWidth*0.1;
    var numberOfThings = 2000;
    var gapBetweenThings = sizeOfThing*multiplier;

    //the golden ratio
    var goldenRatio = (1 + sqrt(5)) / 2;

    //********************* put cool stuff below here

    noStroke();
    rotate(changingValue * 0.01);
    translate(-width / 2, -height / 2);

    var scrollPlusSize = sizeOfThing + (scrollMove * 0.01);

    for (var x = 0; x < numberOfThings; x += gapBetweenThings) {
        for (var y = 0; y < numberOfThings; y += gapBetweenThings) {
            var d = dist(width * 0.5, height * 0.5, x, y);
            var maxDist = dist(0, 0, width * 0.5, height * 0.5);
            //var timeDelay = map(d, 0, maxDist, 1000, 2000);
            push();
            fill(d / 2 * map(mouseX, 0, width, 0.1, 2), 100, 100);
            translate(x, y, changingValue * (d * 0.01));
            rotateX(changingValue * (d * 0.0001));
            rotateY(changingValue * (d * 0.0002));
            rotateZ(changingValue * (d * 0.0001));
            box(scrollPlusSize);
            pop();
        }
    }
}

function mouseWheel(event) {
    // print(event.delta);
    scrollMove -= event.delta;
}

function keyReleased() {
    if (keyCode == 83) {
        save('myCanvas.png');
        console.log("Save");
    }
    if (keyCode == 75){
        noLoop();
    }
    if (keyCode == 76){
        loop();
    }
    if (keyCode == 187){
        multiplier-=0.1;
    }
    if (keyCode == 189){
        multiplier+=0.1;
    }
}

function mousePressed() {

}