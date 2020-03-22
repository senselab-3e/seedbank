export default function sketch3(p) {
    p.setup = function () {
        p.createCanvas(500, 500)
        p.background(0);
    };

    //function variableEllipse(x, y, px, py, p5) {
    //     let speed = p5.abs(x - px) + p5.abs(y - py);
    //     p.stroke(speed);
    //     p.ellipse(x, y, speed, speed);
    // }

    p.draw = function () {
        p.stroke(255);
        if (p.mouseIsPressed === true) {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }

    };
}