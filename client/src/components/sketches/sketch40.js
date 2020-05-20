//import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch40(p) {

    let x = 0
    let y = 0;
    let xStep = 50;
    let yStep = 50;
    let a = 0
    let aA = 0;
    let num = 0;
    p.setup = function () {
        p.createCanvas(800, 800)
        //p.frameRate(12)
        num = p.int((p.width / xStep) * (p.height / yStep))
    }
    p.draw = function () {
        p.background('15, 20, 30');
        p.strokeCap(p.SQUARE)
        p.strokeWeight(xStep);

        let n = 0;
        while (n < num) {
            p.stroke(255 - 255 * p.cos(p.radians(a)), 255 * p.cos(p.radians(a)), 255 - 255 * p.sin(p.radians(a)), 255 - 255 * p.sin(p.radians(a)))
            p.line(x, y, x, y + yStep);
            x += xStep;
            if (x > p.width) {
                x = xStep / 2
                y += yStep;
            }
            if (y > p.height) {
                y = 0;
                a = 0;
            }
            n++
            a += aA;
        }
        aA += 0.1
    }

}