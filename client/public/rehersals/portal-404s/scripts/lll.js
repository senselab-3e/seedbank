function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    stroke(200);
}

function draw() {
    background(360); // 360 is the color. 0 is black, 360 is white. 
    fill(360);
    //rect(0, 0, window.innerWidth - 1, window.innerHeight - 1);

    for (var i = -100; i <= width; i += 42) { /// the += is the space between each line 
        line(0, i + (mouseY * 0.1), mouseX, i + (mouseY * 0.1)); // 
        line(window.innerWidth - 1, i + (mouseY * 0.1), mouseX, i + (mouseX * 0.1));
        //line(900 + (mouseX * 0.1), i, (mouseX * 0.1), i+ (mouseX * 0.2)); // 

        //BELOW IS THE ORIGINAL CODE:
        //line(i, 0, i + (mouseX * 0.1), mouseY);
        //line(i + (mouseX * 0.1), mouseY, i, height);
    }
    noFill();
    //rect(0, 0, window.innerWidth - 1, window.innerHeight - 1);
}