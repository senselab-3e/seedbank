export default function sketch18(p) {

    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(240);
        p.rectMode(p.CENTER);
    }

    p.spirograph = function () {

        p.fill(0, 0.005);
        p.stroke(0, 1);

        p.translate(p.width / 2, p.height / 2);

        for (var i = 0; i < 30; i++) {
            p.push();
            p.rotate(i / 5.0);
            p.scale(i / 8.0);
            p.triangle(0, -100, -10, 100, 10, 100);
            p.pop();
        }

    }

    p.draw = function () {
        // the modulo operator % calculates the remainder.
        // example: 24 % 25 = 24, 25 % 25 = 0, 26 % 25 = 1, etc.
        // thus this if statement will evaluate True every 25 frames.
        if (p.frameCount % 25 == 0) {
            p.stroke(p.random(255), p.random(255), p.random(255));
            p.push();
            p.noFill()
            p.translate(200, 200);
            p.rotate(p.radians(p.frameCount * 0.05));
            p.rect(0, 0, 300, 20);
            p.pop();
        }
        p.spirograph()
    }

}