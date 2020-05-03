export default function sketch30(p) {

    var width = 500
    var height = 500

    // var xoff1 = 0;
    // var xoff2 = 10000

    var inc = 0.01; // the smaller the inc the softer the transitions


    //NOTES: Sets the pixel scaling for high pixel density displays. By default pixel density is set to match display density, call pixelDensity(1) to turn this off.

    p.setup = function () {
        p.createCanvas(width, height);
        p.pixelDensity(1)

        //
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


    //this is all perlin noise 1-d
    p.draw = function () {
        var yoff = 0;
        p.loadPixels();
        p.noiseDetail(2, 0.7)
        //higher numbers, more deatils of change. // the second value  gets it to spke more 
        //noise detail 1 means very little.
        // first value in noise detail covers the number of octives
        for (var y = 0; y < height; y++) {
            var xoff = 0;
            for (var x = 0; x < width; x++) {
                var index = (x + y * width) * 4;
                // var r = p.random(255)
                var r = p.noise(xoff, yoff) * 255;
                p.pixels[index + 0] = r;
                p.pixels[index + 1] = r;
                p.pixels[index + 2] = r;
                p.pixels[index + 3] = 255;
                xoff += inc;
            }
            yoff += inc;
        }



        p.updatePixels() //key
        //p.noLoop()
    }

}