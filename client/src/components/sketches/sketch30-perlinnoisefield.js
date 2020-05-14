import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch30(p) {

    var width = 500
    var height = 500

    // var xoff1 = 0;
    // var xoff2 = 10000

    var inc = 0.1; // the smaller the inc the softer the transitions
    var scl = 20;
    var cols, rows;

    var fr;
    var zoff = 0;
    let particles = []

    //NOTES: Sets the pixel scaling for high pixel density displays. By default pixel density is set to match display density, call pixelDensity(1) to turn this off.

    p.setup = function () {
        p.createCanvas(width, height);
        p.pixelDensity(1)
        cols = p.floor(width / scl);
        rows = p.floor(height / scl);
        fr = p.createP(''); // creates paragraph element

        for (let m = 0; m < 100; m++) {
            particles[m] = new Particle(0, m * 100);

        }
    }
    p.draw = function () {
        var yoff = 0;
        //p.randomSeed(10)  /// this was for the vector line angle tiling
        p.background(255)
        for (var y = 0; y < rows; y++) {
            var xoff = 0;
            for (var x = 0; x < cols; x++) {
                var index = (x + y * width) * 4;
                // var r = p.random(255)
                var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI; //if i want the greyscale then i *255 
                //instead of fill, create a vector
                var v = p5.Vector.fromAngle(angle)
                // p.fill(r)
                xoff += inc;
                //p.rect(x * scl, y * scl, scl, scl)
                //p.stroke(0)
                // p.push()
                // p.translate(x * scl, y * scl) /// continuously resets the 00 to the particular scl point  being drawn with
                // p.rotate(v.heading())
                // p.line(0, 0, scl, 0)
                // p.pop()
            }
            yoff += inc;
            zoff += 0.0005;
        }

        fr.html(p.floor(p.frameRate()))

        //p.push()

        for (let n = 0; n < particles.length; n++) {
            particles[n].show()
            particles[n].update()
            particles[n].edges()
        }
        //p.pop()
        // p.updatePixels() //key
        //p.noLoop()
    }

    class Particle {
        constructor(x, y, color) {
            this.pos = p.createVector(p.random(width), p.random(height));
            this.vel = p5.Vector.random2D()
            this.acc = p.createVector(0, 0);
        }

        update() {
            this.vel.add(this.acc)
            this.pos.add(this.vel)
            this.acc.mult(0)
        }

        applyForce(force) {
            this.acc.add(force);
        }

        show() {


            p.stroke('orange');
            p.strokeWeight(5)

            p.point(this.pos.x, this.pos.y)

        }

        edges() {
            if (this.pos.x > width) {
                this.pos.x = 0;
                //this.updatePrev();
            }
            if (this.pos.x < 0) {
                this.pos.x = width;
                //this.updatePrev();
            }
            if (this.pos.y > height) {
                this.pos.y = 0;
                //this.updatePrev();
            }
            if (this.pos.y < 0) {
                this.pos.y = height;
                //this.updatePrev();
            }
        };

    }
}


// import p5 from "react-p5-wrapper/node_modules/p5";

///basic archive of the 3d noise being introduced to the basic vector lines being drawn. to get rid of the third dimension, which brings in a time element, subtract all the zoff values

// export default function sketch30(p) {

//     var width = 500
//     var height = 500

//     // var xoff1 = 0;
//     // var xoff2 = 10000

//     var inc = 0.1; // the smaller the inc the softer the transitions
//     var scl = 10;
//     var cols, rows;

//     var fr;
//var zoff = 0

//     //NOTES: Sets the pixel scaling for high pixel density displays. By default pixel density is set to match display density, call pixelDensity(1) to turn this off.

//     p.setup = function () {
//         p.createCanvas(width, height);
//         p.pixelDensity(1)
//         cols = p.floor(width / scl);
//         rows = p.floor(height / scl);
//         fr = p.createP(''); // creates paragraph element
//     }
//     p.draw = function () {
//         var yoff = 0;
//         p.randomSeed(10)
//         p.background(255)
//         for (var y = 0; y < rows; y++) {
//             var xoff = 0;
//             for (var x = 0; x < cols; x++) {
//                 var index = (x + y * width) * 4;
//                 // var r = p.random(255)
//                 var r = p.noise(xoff, yoff, zoff) * p.TWO_PI; //if i want the greyscale then i *255 
//                 //instead of fill, create a vector
//                 var v = p5.Vector.fromAngle(r)
//                 // p.fill(r)
//                 xoff += inc;
//                 //p.rect(x * scl, y * scl, scl, scl)
//                 p.stroke(0)
//                 p.push()
//                 p.translate(x * scl, y * scl) /// continuously resets the 00 to the particular scl point  being drawn with
//                 p.rotate(v.heading())
//                 p.line(0, 0, scl, 0)
//                 p.pop()
//             }
//             yoff += inc;
// zoff += 0.004
//         }

//         fr.html(p.floor(p.frameRate()))

//         // p.updatePixels() //key
//         //p.noLoop()
//     }

// }