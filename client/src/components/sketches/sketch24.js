import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch24(p) {
    const width = 500;
    const height = 500;

    var angle;
    var pos;
    var side;

    p.setup = function () {
        side = 60;
        p.createCanvas(width, height);
        angle = 0;
        pos = p5.Vector.fromAngle(0);
        p.setRadius();
    }

    p.setRadius = function () {
        var m = p.min(width, height);
        var radius = m / 2 - side * 0.6;
        pos.setMag(radius);
    }

    p.drawRect = function (pos, f) {
        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.ellipse(-side / 2 * f, -side / 2 * f, side / 2 * f, side * f);
        p.pop();
    }

    p.draw = function () {
        p.translate(width / 2, height / 2);
        var a = angle / 16;
        p.drawRect(p5.Vector.mult(pos.rotate(p.PI / 4), p.cos(a) * 0.8), 1.5);
        p.drawRect(p5.Vector.mult(pos.rotate(p.PI / 4), p.sin(a * 2)), 0.5);
        p.drawRect(p5.Vector.mult(pos.rotate(p.PI / 4), p.cos(a) * 0.8), 1.5);
        p.drawRect(p5.Vector.mult(pos.rotate(p.PI / 4), p.sin(a * 2)), 0.5);
        p.drawRect(p5.Vector.mult(pos.rotate(p.PI / 4), p.cos(a) * 0.8), 1.5);
        p.drawRect(p5.Vector.mult(pos.rotate(p.PI / 4), p.sin(a * 2)), 0.5);
        p.drawRect(p5.Vector.mult(pos.rotate(p.PI / 4), p.cos(a) * 0.8), 1.5);
        p.drawRect(p5.Vector.mult(pos.rotate(p.PI / 4), p.sin(a * 2)), 0.5);

        angle += 0.089;
        pos.rotate(0.017);
    }

    // p.windowResized = function() {
    //     resizeCanvas(windowWidth, windowHeight);
    //     setRadius();
    // }
}