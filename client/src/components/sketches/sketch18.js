export default function sketch18(p) {

    var t;

    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(240);
        p.ellipseMode(p.CENTER);
        t = 0;
    }

    p.spirograph = function () {

        p.fill(0, 0.005);
        p.stroke(0, 1);

        p.translate(p.width / 2, p.height / 2);

        for (var i = 0; i < 30; i++) {
            p.push();
            p.rotate(i / 5.0);
            p.scale(i / 8.0);
            p.ellipse(50, 70, 30, 30);
            //p.arc(50, 55, 80, 80, p.PI + p.QUARTER_PI, p.TWO_PI);
            //p.triangle(0, -100, -10, 100, 10, 100);
            //replace this with a non traditional shape later
            p.pop();
        }

    }

    p.draw = function () {

        //p.background(255, 50);
        // the modulo operator % calculates the remainder.
        // example: 24 % 25 = 24, 25 % 25 = 0, 26 % 25 = 1, etc.
        // thus this if statement will evaluate True every 25 frames.
        if (p.frameCount % 10 == 0) {
            //p.stroke(p.random(255), p.random(255), p.random(255));
            p.stroke('purple')
            p.push();
            p.noFill()
            p.translate(200, 200);
            p.rotate(p.radians(p.frameCount * 0.45));
            //p.scale(10 / 2);
            p.ellipse(0, 0, 190, 145 * p.noise(t + 35));
            //p.arc(50, 55, 80, 80, p.PI + p.QUARTER_PI, p.TWO_PI);
            //p.rect(0, 0, 300, 20);
            p.pop();
            //console.log(30 * p.noise(t + 35))
            t += 0.2;
        }
        if (p.frameCount % 1400 === 0) {
            p.background(255);
        }


        //p.spirograph()
    }

}