export default function sketch31(p) {

    var width = 500
    var height = 500



    var inc = 0.01;
    var start = 0;
    var start2 = 0;

    //just to add a different offset for colored ellipses


    //noise doesn't have a uniform distribution /// and it's usually a point value between 0 and 1. 

    //if you call noise(100) you will always get the same value. it's calling a point in time. 
    p.setup = function () {
        p.createCanvas(width, height);


        // p.textAlign(p.CENTER, p.CENTER);
        // p.rectMode(p.CENTER);
        // p.angleMode(p.DEGREES);
    }

    //NOTES-- in regular javascript - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    //map in p5js is a bit different:  
    //map(value, start1, stop1, start2, stop2, [withinBounds])
    /* value Number: the incoming value to be converted
start1 Number: lower bound of the value's current range
stop1 Number: upper bound of the value's current range
start2 Number: lower bound of the value's target range
stop2 Number: upper bound of the value's target range
withinBounds Boolean: constrain the value to the newly mapped range (Optional)*/

    let nudge = 0.0001
    //this is all perlin noise 1-d
    p.draw = function () {
        p.frameRate(75);
        p.background('teal')
        p.stroke(255);
        p.noFill();

        p.beginShape();
        var xoff = start;
        var xoff2 = start2;
        // if i set the x to being less then width/2 it means the start point of where the drawing appears is at 250 (mid point of canvas) /// all points will be less then this value with the y fluxuating up and down
        for (let x = 0; x < width / 2; x++) {
            xoff += inc;
            xoff2 += inc; // + 1; if i add a while number to this, the coloring is not individual for each circle
            //p.stroke(p.noise(xoff) * 255, p.noise(xoff2) * 255, p.noise(xoff2) * 255)

            //var y = random(height)
            //p noise in time 
            //sine and noise works in similar ways... 
            // var y = height / 2 + p.sin(xoff) * height / 2;
            // var y = p.noise(xoff) * height
            //var y = p.noise(xoff) * 100 + height / 2 + p.sin(xoff) * height / 2;
            //this is a bit more of an elegant approach (see below) because instead of just adding an offset directly to the sine wave, below has the amounts for the original sin + the results of the noise which will wiggle it just a litte. it also allows for a bit more control
            var n = p.map(p.noise(xoff), 0, 1, 0, height);
            var s = p.map(p.sin(xoff), -1, 1, -50, 50);
            // below is the inverse thing --- it's more of a noise line with a bit of sin thrown in 
            // var n = p.map(p.noise(xoff), 0, 1, 0, height);
            // var s = p.map(p.sin(xoff), -1, 1, -50, 50);
            var y = s + n;


            //p.point(x, p.random(height));
            p.vertex(x, y)

            nudge += 0.001


            // let ranRad = p.floor(p.random(1, 15))
            // var n2 = p.map(p.noise(xoff), 0, 1, 10, height);
            // var s2 = p.map(p.sin(xoff), -1, 1, 250, 50);
            // var y2 = n2 + s2
            // p.push()
            // p.noStroke()
            // p.fill(p.noise(xoff2) * 155, p.noise(xoff2) * 255, p.noise(xoff2 + 10) * 95)
            // p.ellipse(x, y2, ranRad, ranRad)
            // p.pop()
        }
        p.endShape()

        p.push()
        p.stroke('orange')
        var g = p.noise(xoff) * 10
        var t = p.sin(xoff) * height / 2

        var s2 = p.noise(xoff2) * 10
        var t2 = p.sin(xoff2) * width / 2

        var y2 = g + t
        var x2 = s2 + t2

        p.ellipse(x2, y2, 10, 10)

        // xoff += inc;
        // xoff2 += inc;

        p.pop()

        start += inc;
        start2 += inc + 3;
        //p.noLoop()

    }

}