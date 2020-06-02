export default function sketch16(p) {

    var t;
    var j;
    var width = 500;
    var height = 500;

    let color = {
        r: p.floor(p.random(100, 255)),
        g: p.floor(p.random(255)),
        b: p.floor(p.random(255))
    }

    p.setup = function () {
        p.createCanvas(500, 500);
        //p.stroke(70, 122, 190, 18);
        p.stroke(p.random(255), p.random(255), p.random(255));
        p.noFill();
        t = 0;
        j = 0;
    }

    p.getColor = function () {
        color = {
            r: p.floor(p.random(255)),
            g: p.floor(p.random(255)),
            b: p.floor(p.random(255))
        }

    }

    let dirR = 1 // direction the color aka it is being decrease or increased
    let dirG = 1
    let dirB = 1
    let speed = 0.5 // number of increments the color will change by

    p.draw = function () {

        color.b += speed * dirB
        color.r += speed * dirR
        color.g += speed * dirG

        if (color.b >= 255) {
            dirB = -1
        }
        if (color.b <= 0) {
            dirB = 1
        }
        if (color.r >= 255) {
            dirR = -1
        }
        if (color.r <= 0) {
            dirR = 1
        }
        if (color.g >= 255) {
            dirG = -1
        }
        if (color.g <= 0) {
            dirG = 1
        }
        p.noStroke()
        //this can just as easily be changed to a stroke value.
        p.fill(color.r, color.g, color.b, 85)
        // var x1 = width * p.noise(t + 15);
        // var x2 = width * p.noise(t + 25);
        // var x3 = width * p.noise(t + 35);
        // var x4 = p.mouseX //width * p.noise(t + 45);
        // var y1 = height * p.noise(t + 55);
        // var y2 = height * p.noise(t + 65);
        // var y3 = height * p.noise(t + 75);
        // var y4 = p.mouseY //* p.noise(t + 85);

        var x1 = width * p.noise(t + 15);
        var x2 = p.mouseX + p.random(55) //width * p.noise(t + 25);
        var x3 = width * p.noise(t + 35);
        var x4 = width * p.noise(t + 45);

        var y1 = height * p.noise(t + 55);
        var y2 = p.mouseY //height * p.noise(t + 65);
        var y3 = height * p.noise(t + 175);
        var y4 = height * p.noise(t + 85);

        //bezier accepts no more then 8 arguments.
        p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

        t += 0.002;
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

        // if (p.frameCount % 1000 === 0) {
        //     p.background(255);
        // }
    }

    p.mousePressed = function () {
        p.getColor()
    }
}