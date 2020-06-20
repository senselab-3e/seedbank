function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    stroke(200);
}

function draw() {
    background(360);
    fill(360);

    //rect(0, 0, window.innerWidth - 1, window.innerHeight - 1);
    for (var i = -100; i <= width; i += 25) {
        line(i, 0, i + (mouseY * 0.1), mouseX);
        line(i + (mouseY * 0.1), mouseX, i, width);
    }
    noFill();
    //rect(0, 0, window.innerWidth - 1, window.innerHeight - 1);
}