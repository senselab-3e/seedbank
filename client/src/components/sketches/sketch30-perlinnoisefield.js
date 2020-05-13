import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch30(p) {

    var width = 500
    var height = 500

    // var xoff1 = 0;
    // var xoff2 = 10000

    var inc = 0.1; // the smaller the inc the softer the transitions
    var scl = 10;
    var cols, rows;

    var fr;

    //NOTES: Sets the pixel scaling for high pixel density displays. By default pixel density is set to match display density, call pixelDensity(1) to turn this off.

    p.setup = function () {
        p.createCanvas(width, height);
        p.pixelDensity(1)
        cols = p.floor(width / scl);
        rows = p.floor(height / scl);
        fr = p.createP(''); // creates paragraph element
    }
    p.draw = function () {
        var yoff = 0;
        p.randomSeed(10)
        p.background(255)
        for (var y = 0; y < rows; y++) {


            var xoff = 0;
            for (var x = 0; x < cols; x++) {
                var index = (x + y * width) * 4;
                // var r = p.random(255)
                var r = p.noise(xoff, yoff) * 255;
                //instead of fill, create a vector
                var v = p5.Vector.fromAngle(p.random(p.TWO_PI))
                // p.fill(r)
                xoff += inc;
                //p.rect(x * scl, y * scl, scl, scl)
                p.stroke(0)
                p.push()
                p.translate(x * scl, y * scl) /// continuously resets the 00 to the particular scl point  being drawn with
                p.rotate(v.heading())
                p.line(0, 0, scl, 0)
                p.pop()
            }
            yoff += inc;
        }

        fr.html(p.floor(p.frameRate()))

        // p.updatePixels() //key
        //p.noLoop()
    }

}