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
        // p.loadPixels();
        p.noStroke()
        p.noiseDetail(2, 0.7)
        for (var y = 0; y < rows; y++) {
            var xoff = 0;
            for (var x = 0; x < cols; x++) {
                var index = (x + y * width) * 4;
                // var r = p.random(255)
                var r = p.noise(xoff, yoff) * 255;
                p.fill(r)
                xoff += inc;
                p.rect(x * scl, y * scl, scl, scl)
            }
            yoff += inc;
        }

        fr.html(p.floor(p.frameRate()))

        // p.updatePixels() //key
        //p.noLoop()
    }

}