fftSize = 2048;
var randomNumbers = [];
var increaser = 0;
var hasBeenRun = false;

// setup
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('soundSketch-holder');
    colorMode(HSB, 360, 100, 100, 100);
    rectMode(CENTER);

    drums = EDrums('x...x...x...x...');
    drums = EDrums('....o.......o...');
    // drums = EDrums('----------------');
    follow = Follow(drums);

    fft = FFT(fftSize);
    waveform = new Uint8Array(fft.frequencyBinCount);

    frameRate(30);

}

// draw
function draw() {

    // var mouseColour = map(mouseX, 0, width, 0, 360);
    background( follow.getValue() * 255 );
    
    //for generating a nice sine wave
    var amplitude = 200;
    var period = 2000;
    var changingValue = amplitude * cos(TWO_PI * frameCount / period);

    if (hasBeenRun == true) {
        for (var i = 0; i < 100; i++) {
            randomNumbers[i] = int(random(14));
        };

        bass = FM('bass')
            .note.seq([randomNumbers[1], randomNumbers[2], randomNumbers[3], randomNumbers[4]].rnd(), [1 / 8, 1 / 16].rnd(1 / 16, 2));

        rhodes = Synth('rhodes', {
                amp: .5,
                maxVoices: 4
            })
            .chord.seq(Rndi(randomNumbers[5], randomNumbers[6], randomNumbers[7]), 1)
            .fx.add(Delay())
            .fx.add(Flanger(0.1, 0.5, 30));

        hasBeenRun = false;

    }

    fft.getByteTimeDomainData(waveform);
    // rotateZ(frameCount*0.01);
    translate(-width / 2, -height / 2);

    stroke(map(mouseX,0,width,0,320), 100, 100);
    strokeWeight(fftSize*0.005);
    noFill();
    beginShape();
    for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], 0, 255, height, 0);
        vertex(x, y);
    }
    endShape();

    increaser++;

    if (increaser > 360) {
        increaser = 0;
    }

    // console.log(increaser);
}

function keyReleased() {
    if (keyCode == 83) {
        save('myCanvas.png');
        console.log("Save");
    }
}

function mouseReleased() {
    // for (var i = 0; i < 100; i++) {
    //     randomNumbers[i] = int(random(14));
    // };
    hasBeenRun = true;
    console.log("RUN");
}