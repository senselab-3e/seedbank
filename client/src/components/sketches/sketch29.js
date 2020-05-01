export default function sketch28(p) {

    var width = 500
    var height = 500

    // var xoff1 = 0;
    // var xoff2 = 10000

    var inc = 0.01;

    //noise doesn't have a uniform distribution /// and it's usually a point value between 0 and 1. 

    //if you call noise(100) you will always get the same value. it's calling a point in time. 
    p.setup = function () {
        p.createCanvas(500, 500);
        //p.background('black')

        // p.textAlign(p.CENTER, p.CENTER);
        // p.rectMode(p.CENTER);
        // p.angleMode(p.DEGREES);
    }

    p.draw = function () {

        p.background(51);
        p.stroke(255);
        p.noFill();

        // //this is tying x positions of the ellipse to perlin noise values over time
        // var x = p.map(p.noise(xoff1), 0, 1, 0, p.width)
        // var y = p.map(p.noise(xoff2), 0, 1, 0, p.width)
        // //could also multiply it by the width
        // xoff2 += 0.02
        // xoff1 += 0.01 // important -- it ties the previous number with the next, that can still be seen as relational.
        // //if the offsets are the  same, then the same position in time is being referenced by the noise funciton -- so the ellipse will just keep moving along a diagonal
        // p.ellipse(x, y, 24, 24);
        p.beginShape();
        var xoff = 0;
        for (let x = 0; x < width; x++) {
            p.stroke(255)
            xoff += inc;
            //var y = random(height)
            //p noise in time 
            var y = p.noise(xoff) * height
            //p.point(x, p.random(height));
            p.vertex(x, y)

            let ranRad = p.floor(p.random(15, 75))
            p.push()
            p.noStroke()
            p.fill(p.random(255), p.random(255), p.random(255))
            p.ellipse(x, p.random(height), ranRad, ranRad)
            p.pop()
        }
        p.endShape()
        p.noLoop()

    }

}