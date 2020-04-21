export default function sketch25(p) {

    var t;
    var j;
    var width = 500;
    var height = 500
    var colorPick

    p.setup = function () {
        p.createCanvas(500, 500);
        //p.stroke(70, 122, 190, 18);
        //p.stroke(p.random(255), p.random(255), p.random(255));
        //p.noFill();
        p.fill(p.random(255), p.random(255), p.random(255), 85);
        p.background(0)
        t = 0;
        j = 0;
    }

    p.draw = function () {
        p.background(0, 40)
        p.stroke('white')



        p.beginShape();
        p.vertex(width / 4, height / 4);
        p.vertex(width / 4, height / 4 * 3);
        p.bezierVertex(width / 4, height / 4 * 3, width / 2, height / 2, width / 4 * 3, height / 4 * 3);
        p.vertex(width / 4 * 3, height / 4 * 3);
        p.vertex(width / 4 * 3, height / 4);
        p.bezierVertex(width / 4 * 3, height / 4, width / 2, height / 2, width / 4, height / 4);
        p.vertex(width / 4, height / 4);
        p.endShape();
        // var x1 = width * p.noise(t + 15);
        // var x2 = width * p.noise(t + 45);
        // var x3 = width * p.noise(t + 135);
        // var x4 = p.mouseX + p.random(15) //width * p.noise(t + 45);

        // var y1 = height * p.noise(t + 155);
        // var y2 = height * p.noise(t + 65);
        // var y3 = height * p.noise(t + 125);
        // var y4 = p.mouseY //height * p.noise(t + 85);
        //p.noStroke()
        //bezier accepts no more then 8 arguments.
        //p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

        t += 0.0102;


    }
}