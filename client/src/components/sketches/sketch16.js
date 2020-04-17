export default function sketch16(p) {

    var t;
    var j;
    var width = 500;
    var height = 500;

    p.setup = function () {
        p.createCanvas(500, 500);
        p.stroke(70, 122, 190, 18);
        p.noFill();
        t = 0;
        j = 0;
    }

    p.draw = function () {
        var x1 = width * p.noise(t + 15);
        var x2 = width * p.noise(t + 25);
        var x3 = width * p.noise(t + 35);
        var x4 = width * p.noise(t + 45);
        var y1 = height * p.noise(t + 55);
        var y2 = height * p.noise(t + 65);
        var y3 = height * p.noise(t + 75);
        var y4 = p.mouseY //* p.noise(t + 85);

        p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

        t += 0.005;
        //t += 0.5; // this makes the stepping more jaggedly placed, but with the opacity set low it's a nice kind of effect

        // clear the background every 500 frames using mod (%) operator


        // p.translate(width / 2, height / 2);
        // p.beginShape();
        // for (var i = 0; i < 200; i++) {
        //     var ang = p.map(i, 0, 200, 0, p.TWO_PI);
        //     var rad = 200 * p.noise(i * 0.01, j * 0.005);
        //     var x = rad * p.cos(ang);
        //     var y = rad * p.sin(ang);
        //     p.curveVertex(x, y);
        // }
        // p.endShape(p.CLOSE);
        // j += 1;

        if (p.frameCount % 1000 === 0) {
            p.background(255);
        }
    }
}