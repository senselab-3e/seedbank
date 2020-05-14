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

    // i need each particle to move in relation to the vector it is closest to...
    // so i need to be able to store the vector angles 
    var flowfield = [] // should have as many spots as there are collumns and rows 

    //NOTES: Sets the pixel scaling for high pixel density displays. By default pixel density is set to match display density, call pixelDensity(1) to turn this off.

    p.setup = function () {
        p.createCanvas(width, height);
        p.pixelDensity(1)
        cols = p.floor(width / scl);
        rows = p.floor(height / scl);
        fr = p.createP(''); // creates paragraph element

        flowfield = new Array(cols * rows);

        for (let m = 0; m < 200; m++) {
            particles[m] = new Particle(0, m * 100);

        }
    }
    p.draw = function () {
        var yoff = 0;
        //p.randomSeed(10)  /// this was for the vector line angle tiling
        //p.background(255)
        for (var y = 0; y < rows; y++) {
            var xoff = 0;
            for (var x = 0; x < cols; x++) {
                // var index = (x + y * width) * 4;
                // var r = p.random(255)
                //// below is a formula for how you take a 2D value into a one dimensional array
                var index = (x + y * cols); /// yikes. ok. so this is the math -- x position plus y position ... times the number of colums. 
                // so in multiplication rules, y* number of columns goes first. 
                var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4; //if i want the greyscale then i *255 
                //instead of fill, create a vector
                var v = p5.Vector.fromAngle(angle)
                //messing with both the mag setting and the variety of angles being created in var angle (such as p.TWO_PI moving to p.TWO_PI * 4 ) will cause more shifting variance in theparticle movements
                v.setMag(1); // using this  to limit their v (their magnitude) -- but  you still need an accompanying maxSpeed variable, because acceleration will still cause them to speed up to unwanted levels, over time. 
                flowfield[index] = v /// the above calculation for var indexgives us ever index or tile area
                //now i can associate a specific vector with each flowfield position in the grid
                // p.fill(r)
                xoff += inc;
                //p.rect(x * scl, y * scl, scl, scl)

                // p.push()
                // p.stroke(0, 50)
                // p.strokeWeight(1)
                // p.translate(x * scl, y * scl) /// continuously resets the 00 to the particular scl point  being drawn with
                // p.rotate(v.heading())
                // p.line(0, 0, scl, 0)
                // p.pop()
            }
            yoff += inc;
            zoff += 0.0004;
        }

        fr.html(p.floor(p.frameRate()))

        //p.push()

        for (let n = 0; n < particles.length; n++) {
            particles[n].follow(flowfield)
            //this is to say hey particles: each particle is responsible for looking up the appropricate flowfield in that array

            particles[n].update()
            particles[n].edges() /// it's important that edges run before show, so that the updatePrevpos has run before drawing the show
            particles[n].show()
        }
        //p.pop()
        // p.updatePixels() //key
        //p.noLoop()
    }

    class Particle {
        constructor(x, y, color) {
            this.pos = p.createVector(p.random(width), p.random(height));
            //this.vel = p5.Vector.random2D()
            this.vel = p.createVector(0, 0)
            this.acc = p.createVector(0, 0);
            this.maxspeed = 4;
            this.prevPos = this.pos.copy()
        }

        update() {
            //this.prevPos.set(this.pos) // this won't work in this case
            this.vel.add(this.acc)
            //set the limit of the velocity that can be added to whichever following position
            this.vel.limit(this.maxspeed)
            this.pos.add(this.vel)
            this.acc.mult(0)

        }

        applyForce(force) {
            this.acc.add(force);
        }

        show() {


            p.stroke(0, 50);
            //p.strokeWeight(5)
            //p.point(this.pos.x, this.pos.y)
            p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
            //this is important. after it draws the movement, if i don't update it with the the prev continuously at this stage, it will continue to draw a line from it's origin beginning position
            this.updatePrev()
        }

        updatePrev() {
            this.prevPos.x = this.pos.x;
            this.prevPos.y = this.pos.y;
        };

        edges() {
            if (this.pos.x > width) {
                this.pos.x = 0;
                this.updatePrev(); // i need it to do this so that it wraps the prevPos values as well
            }
            if (this.pos.x < 0) {
                this.pos.x = width;
                this.updatePrev();
            }
            if (this.pos.y > height) {
                this.pos.y = 0;
                this.updatePrev();
            }
            if (this.pos.y < 0) {
                this.pos.y = height;
                this.updatePrev();
            }
        };

        follow(vectors) {
            let x = p.floor(this.pos.x / scl); // first, based on my xy position, scale myself to a position of collumns and rows
            let y = p.floor(this.pos.y / scl);
            // this is a formula for how you take a 2D value into a one dimensional array
            var index = x + y * cols;
            var force = vectors[index] // look up the particular vector, in an array of vectors, at that index /// and then apply that particular vector to the force calculating the particular movement
            this.applyForce(force);
            // 
        }

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