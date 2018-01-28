var changingValue;
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('sketch-holder');
    colorMode(HSB, 360, 100, 100, 100);
    var running = false;
    // blendMode(BURN);
}

function draw() {

    background(30);

    //for generating a nice sine wave
    var amplitude = 200;
    var period = 2000;
    var changingValue = amplitude * cos(TWO_PI * frameCount / period);

    if (changingValue < 0) {
        changingValue = 0;
        noLoop();
        console.log("stopped");
    }

    //useful drawing area stuff
    // var sizeOfThing = windowWidth*0.1;
    var sizeOfThing = 150;
    var numberOfThings = 1600;
    var gapBetweenThings = sizeOfThing;

    //the golden ratio
    var goldenRatio = (1 + sqrt(5)) / 2;

    //********************* put cool stuff below here

    noStroke();
    rotate(changingValue * 0.01);
    translate(-width / 2, -height / 2);

    for (var x = 0; x < numberOfThings; x += gapBetweenThings) {
        for (var y = 0; y < numberOfThings; y += gapBetweenThings) {
            var d = dist(width * 0.5, height * 0.5, x, y);
            var maxDist = dist(0, 0, width * 0.5, height * 0.5);
            //var timeDelay = map(d, 0, maxDist, 1000, 2000);
            push();
            fill(d / 2, 100, 100);
            translate(x, y, changingValue * (d * 0.01));
            rotateX(changingValue * (d * 0.0001));
            rotateX(changingValue * (d * 0.0001));
            rotateZ(changingValue * (d * 0.0001));
            box(sizeOfThing);
            pop();
        }
    }
}

function mouseClicked() {
    // loop();
    // changingValue++;
    // console.log("running");
}