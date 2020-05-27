var song;
var fft;
var button;

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('sketches/teebs1.m4a');
}

function setup() {
    createCanvas(256, 256);
    colorMode(HSB);
    angleMode(DEGREES);
    button = createButton('toggle');
    button.mousePressed(toggleSong);
    song.play();
    fft = new p5.FFT(0.9, 128);
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    //console.log(spectrum);
    //stroke(255);
    noStroke();
    translate(width / 2, height / 2);
    beginShape(); //
    for (var i = 0; i < spectrum.length; i++) {
        var angle = map(i, 0, spectrum.length, 0, 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 20, 100);
        fill(i, 255, 255); // comment this out, and the begin shape end shape, and ring back the stroke and g
        var x = r * cos(angle);
        var y = r * sin(angle);
        // stroke(i, 255, 255);
        vertex(x, y)
        //line(0, 0, x, y);
        //vertex(x, y);
        //var y = map(amp, 0, 256, height, 0);
        //rect(i * w, y, w - 2, height - y);
    }
    endShape(); //
}


// var song;
// var amp;
// var button;

// var volhistory = [];

// function toggleSong() {
//     if (song.isPlaying()) {
//         song.pause();
//     } else {
//         song.play();
//     }
// }

// function preload() {
//     song = loadSound('sketches/teebs1.m4a');
//     // the location of this was in relation to the index.html file location, rather then this script file location
// }

// function setup() {
//     createCanvas(200, 200);
//     button = createButton('toggle');
//     button.mousePressed(toggleSong);
//     song.play();
//     amp = new p5.Amplitude();
// }

// function draw() {
//     background(0);
//     var vol = amp.getLevel();
//     volhistory.push(vol);
//     stroke(255);
//     noFill();
//     push();
//     var currentY = map(vol, 0, 1, height, 0);
//     translate(0, height / 2 - currentY);
//     beginShape();
//     for (var i = 0; i < volhistory.length; i++) {
//         var y = map(volhistory[i], 0, 1, height, 0);
//         vertex(i, y);
//     }
//     endShape();
//     pop();
//     if (volhistory.length > width - 50) {
//         volhistory.splice(0, 1);
//     }

//     stroke(255, 0, 0);
//     line(volhistory.length, 0, volhistory.length, height);
//     //ellipse(100, 100, 200, vol * 200);
// }