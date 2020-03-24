export default function sketch8(p) {

    let angle = 0.0;
    let jitter = 0.0;

    p.setup = function () {
        p.createCanvas(500, 500);
        p.noStroke();
        p.fill(255);
        //Draw the rectangle from the center and it will also be the
        //rotate around that center
        p.rectMode(p.CENTER);
    }

    p.draw = function () {
        p.background(51);

        // during even-numbered seconds (0, 2, 4, 6...) add jitter to
        // the rotation
        if (p.second() % 2 === 0) {
            jitter = p.random(-0.1, 0.1);
        }
        //increase the angle value using the most recent jitter value
        angle = angle + jitter;
        //use cosine to get a smooth CW and CCW motion when not jittering
        let c = p.cos(angle);
        //move the shape to the center of the canvas
        p.translate(p.width / 2, p.height / 2);
        //apply the final rotation
        p.rotate(c);
        p.rect(0, 0, 10, 380);
    }
}