export default function sketch16(p) {

    var t;
    var j;
    var width = 500;
    var height = 500;

    //the original full spectrum colors
    // let color = {
    //     r: p.floor(p.random(100, 255)),
    //     g: p.floor(p.random(255)),
    //     b: p.floor(p.random(255))
    // }

    let color = {
        r: 253, //p.floor(p.random(220, 255)),
        g: 244, //p.floor(p.random(165, 200)),
        b: 15,
        alpha: p.floor(p.random(255))
    }

    let hsb = {
        h: 54,
        s: 25,
        b: 100 // 0 goes to dark values
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
            g: p.floor(p.random(0, 150)),
            b: p.floor(p.random(255)),
            alpha: p.floor(p.random(50, 180))
        }

    }

    let dirR = 1 // direction the color aka it is being decrease or increased
    let dirG = 1
    let dirB = 1
    let dirAlpha = 255
    let speed = 0.5 // number of increments the color will change by
    let vectorWidth = p.random(width)

    let angle = 0

    p.draw = function () {



        p.background('white')
        // color.b += speed * dirB
        color.r += speed * dirR
        color.g += speed * dirG
        color.alpha += speed * dirAlpha

        // if (color.b >= 255) {
        //     dirB = -1
        // }
        // if (color.b <= 0) {
        //     dirB = 1
        // }
        if (color.r >= 255) {
            dirR = -1
        }
        if (color.r <= 240) {
            dirR = 1
        }
        if (color.g >= 244) {
            dirG = -1
        }
        if (color.g <= 213) {
            dirG = 1
        }


        if (color.alpha >= 180) {
            dirAlpha = -1
        }
        if (color.alpha <= 50) {
            dirAlpha = 1
        }
        //p.noStroke()
        //this can just as easily be changed to a stroke value.
        //console.log(color.r, color.g, color.b, color.alpha)
        p.fill(color.r, color.g, color.b, color.alpha)
        // var x1 = width * p.noise(t + 15);
        // var x2 = width * p.noise(t + 25);
        // var x3 = width * p.noise(t + 35);
        // var x4 = p.mouseX //width * p.noise(t + 45);
        // var y1 = height * p.noise(t + 55);
        // var y2 = height * p.noise(t + 65);
        // var y3 = height * p.noise(t + 75);
        // var y4 = p.mouseY //* p.noise(t + 85);

        var x1 = width * p.noise(t + 2);
        var x2 = p.mouseX * p.noise(t + 15) //+ p.random(15) //width * p.noise(t + 25);
        var x3 = width * p.noise(t + 75);
        var x4 = width * p.noise(t + 45);

        var y1 = height / 2 * p.noise(t + 55);
        var y2 = p.mouseY //height * p.noise(t + 65);
        var y3 = height * p.noise(t + 75);
        var y4 = height * p.noise(t + 85);

        //bezier accepts no more then 8 arguments.
        //p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
        p.beginShape();
        p.vertex(x1, 20);
        //p.bezierVertex(x3, x2, x3, y2, x1, y3);
        p.bezierVertex(x3, x2, x3, y2, x1, y3);
        p.bezierVertex(x1, y3, y2, x3, x3, x2);
        p.endShape(p.CLOSE);

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

        // const x = p.width;
        // const dia = 45;
        // const num = 25;

        // p.translate(p.width / 2, p.height / 2)
        // for (let a = 0; a < 360; a += 22.5) { //the value i put at a+= decides at what placement each line of dots is drawn at a angle from the centerpoint. 
        //     p.rotate(p.radians(a));
        //     p.push()
        //     p.fill(10, 197, 190)
        //     for (let i = 0; i < num; i++) {
        //         p.scale(0.9)
        //         p.rotate(p.radians(angle));
        //         p.ellipse(x, 0, dia, dia);
        //     }
        //     p.pop() // this push and pop is super key, it means that each time a new a value += 22.5 passes through it 'pops' out the drawing for it. not included, then you'll only have a single line of the ellipses drawn out and rotating
        //     p.push()
        //     p.fill(106, 244, 226)
        //     for (let i = 0; i < num; i++) {
        //         p.scale(0.9)
        //         p.rotate(-p.radians(angle));
        //         p.ellipse(x, 0, dia, dia);
        //     }
        //     p.pop()
        // }
        // angle += 0.01;
    }

    p.mousePressed = function () {
        p.getColor()
    }
}