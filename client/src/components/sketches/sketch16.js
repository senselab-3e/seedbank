export default function sketch16(p) {

    var t;
    var width = 500;
    var height = 500;

    p.setup = function () {
        p.createCanvas(500, 500);
        p.stroke(0, 18);
        p.noFill();
        t = 0;
    }

    p.draw = function () {
        var x1 = width * p.noise(t + 15);
        var x2 = width * p.noise(t + 25);
        var x3 = width * p.noise(t + 35);
        var x4 = width * p.noise(t + 45);
        var y1 = height * p.noise(t + 55);
        var y2 = height * p.noise(t + 65);
        var y3 = height * p.noise(t + 75);
        var y4 = height * p.noise(t + 85);

        p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

        t += 0.005;

        // clear the background every 500 frames using mod (%) operator
        if (p.frameCount % 500 == 0) {
            p.background(255);
        }
    }
}