fftSize = 2048;

// setup
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('soundSketch-holder');
    colorMode(HSB, 360, 100, 100, 100);
    rectMode(CENTER);

    drums = EDrums('x...x...x...x...');
    drums = EDrums('....o.......o...');
    // drums = EDrums('.o.*.*.*.o.*...*');
    follow = Follow(drums);

    fft = FFT(fftSize);
    waveform = new Uint8Array(fft.frequencyBinCount);

    bass = FM('bass')
        .note.seq([0, 0, 0, 7, 14, 13].rnd(), [1 / 8, 1 / 16].rnd(1 / 16, 2))

    rhodes = Synth('rhodes', {
            amp: .35
        })
        .chord.seq(Rndi(0, 6, 3), 1)
        .fx.add(Delay())

    frameRate(30);
    strokeWeight(1);
}

// draw
function draw() {

    var mouseColour = map(mouseX,0,width,0,360);

    //for generating a nice sine wave
    var amplitude = 200;
    var period = 2000;
    var changingValue = amplitude * cos(TWO_PI * frameCount / period);

    fft.getByteTimeDomainData(waveform);
    // rotateZ(frameCount*0.01);
    translate(-width / 2, -height / 2);

    stroke(mouseColour, 100, 100);
    noFill();
    beginShape();
    for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], 0, 255, height, 0);
        vertex(x, y);
    }
    endShape();
}

function keyReleased() {
    if (keyCode == 83) {
        save('myCanvas.png');
        console.log("Save");
    }
}