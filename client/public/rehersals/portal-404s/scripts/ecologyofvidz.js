//declare your variable
var vid;
var roro;
var video3;
var plastic;
var dance;
var swing;
var clips;
var trees;
var coords = [0, 0, 0, 0, 0, 0, 0, 0];

var vidWidth = 200;
var vidHeight = 200;

var dancingWords = [];

class DanceSpan {
    constructor(element, x, y) {
        element.position(x, y);
        this.element = element;
        this.x = x;
        this.y = y;
    }

    brownian() {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
        this.element.position(this.x, this.y);
    }
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background('blue');

    //create a video and then hide it
    //refer to the video from the link that is created under assets :~)
    //video1
    vid = createVideo(['https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fvideo1.mp4?v=1574575289944']);
    vid.hide();
    //video2
    roro = createVideo(['https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fvideo2.mp4?v=1574575221045']);
    roro.hide();
    //video3
    video3 = createVideo(['https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fvideo3.mp4?v=1574575245089']);
    video3.hide();
    //dance
    dance = createVideo(['https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fvideo_2019-11-24_21-06-18.mp4?v=1574647636875']);
    dance.hide();
    //plastic
    plastic = createVideo(['https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fplastic.MOV?v=1574647647956']);
    plastic.hide();
    //swing
    swing = createVideo(['https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2FMVI_9770.MOV?v=1574649076651']);
    swing.hide();
    //clips
    clips = createVideo(['https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2F2019-11-21%2020.33.03.mov?v=1574648949838']);
    clips.hide();

    const texts = selectAll('.trees');

    for (let i = 0; i < texts.length; i++) {
        const paragraph = texts[i].html();
        const words = paragraph.split('. ');
        for (let j = 0; j < words.length; j++) {
            const spannedWord = createSpan(words[j]);
            spannedWord.addClass('jumpers');
            const dw = new DanceSpan(spannedWord, random(windowWidth), random(windowHeight));
            dancingWords.push(dw);
        }
    }

}

function draw() {
    background(49, 127, 130);
    push();
    image(plastic, 0, 0, windowWidth, windowHeight); // draw a second copy to canvas
    pop();
    // orbitControl();
    //put the videos in the draw loop as an image:
    push();
    translate(coords[0], coords[1]);
    image(roro, 500, 400, vidWidth, vidHeight); // draw the video frame to canvas
    pop();

    // filter(GRAY);
    push();
    translate(coords[2], coords[3]);
    image(vid, 10, 550, vidWidth, vidHeight); // draw a second copy to canvas
    pop();

    // filter(INVERT);
    push();
    translate(coords[4], coords[5]);
    image(clips, 900, 200, vidWidth, vidHeight); // draw a second copy to canvas
    pop();

    push();
    translate(coords[6], coords[7]);
    image(dance, 600, 10, vidWidth, vidHeight); // draw a second copy to canvas
    pop();

    image(video3, 600, 250, vidWidth, vidHeight); // draw a second copy to canvas
    image(swing, 400, 30, vidWidth, vidHeight); // draw a second copy to canvas

    for (let i = 0; i < dancingWords.length; i++) {
        dancingWords[i].brownian();
    }


}
//you can't have all these large video files playing at the same time, let alone autosound, which created a jagged and slow loading time, and is just painful to hear. 
//the field is already full. choose. do you want jumping vibrational text? that then move to video?
function mousePressed() {
    vid.loop(); // set the video to loop and start playing
    // roro.loop();
    //video3.loop();
    //plastic.loop();
    dance.loop();
    // swing.loop();
    // clips.loop();

}
//zpp33dz... what abut everytime u click the vidz pop up in new placeez?

function keyPressed() {
    for (i = 0; i < coords.length; i++) {
        coords[i] = random(0, 400);
    }
}