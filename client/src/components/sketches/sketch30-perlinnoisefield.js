import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch30perlin(p) {

    var width = 900
    var height = 900
    //const numParticles = 3 //500

    // var xoff1 = 0;
    // var xoff2 = 10000

    var inc = 0.02 //0.1; // the smaller the inc the softer the transitions
    var scl = 20; //originally i had this number at 20 //then 10
    var cols, rows;

    var fr;
    var zoff = 0;
    let particles = []

    // i need each particle to move in relation to the vector it is closest to...
    // so i need to be able to store the vector angles 
    var flowfield = [] // should have as many spots as there are collumns and rows 

    //NOTES: Sets the pixel scaling for high pixel density displays. By default pixel density is set to match display density, call pixelDensity(1) to turn this off.

    let colorPicks = {
        r: 0,
        b: 0,
        g: 0
    }

    p.getColors = function () {
        //p.randomSeed(10) // when i did this it limited the seeds to 10 items.
        //this is usefull when i want to pass unique colors to 'each' line that is drawn
        //however, having a gradual shift in the colors is best tied to the acceleration in the Particle Generator, then in here, because they you can play with time and accumlation, rather then roving thorugh a random choosing of colors narrowed to a particular spectrum
        colorPicks = {
            // r: p.floor(p.random(255)),
            // g: p.floor(p.random(255)),
            // b: p.floor(p.random(255))
            //this is when i want it to stay in the area of purples
            r: p.floor(p.random(255)),
            g: p.floor(p.random(255)),
            b: p.floor(p.random(255))
        }
        //console.log(colorPicks)

    }

    // let colorParam = {
    //         r: p.noise(inc) * 255,
    //         g: p.random(255),
    //         b: p.random(255)
    //     }


    p.setup = function () {


        p.createCanvas(width, height);
        p.pixelDensity(1)
        cols = p.floor(width / scl);
        rows = p.floor(height / scl);
        fr = p.createP(''); // creates paragraph element

        flowfield = new Array(cols * rows);

        for (let m = 0; m < 3; m++) {
            //calls the function each time for generating a random color value
            p.getColors()
            console.log(colorPicks, m)
            //passes the object with random color value into each Particle at the instance of its creation
            particles[m] = new Particle(colorPicks, 3);

        }
        p.background(0)
    }



    p.draw = function () {
        var yoff = 0;
        //p.randomSeed(10)  /// this was for the vector line angle tiling
        //p.background(0, 7)



        for (var y = 0; y < rows; y++) {
            var xoff = 0;
            for (var x = 0; x < cols; x++) {
                // var index = (x + y * width) * 4;
                // var r = p.random(255)
                //// below is a formula for how you take a 2D value into a one dimensional array
                var index = (x + y * cols); /// yikes. ok. so this is the math -- x position plus y position ... times the number of colums. 
                // so in multiplication rules, y* number of columns goes first. 
                //TWO_PI It is twice the ratio of the circumference of a circle to its diameter
                var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4 //p.HALF_PI * 8 //p.TWO_PI * 4 //p.TWO_PI; // * 4; //if i want the greyscale then i *255 
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
            zoff += 0.0001 //p.random(0.0001, 0.001); /// softer the smaller the number
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

    // let colorShift = 0

    p.mousePressed = function () {
        p.getColors()
        //passes the object with random color value into each Particle at the instance of its creation
        let weight = p.floor(p.random(1, 15));
        let newParticle = new Particle(colorPicks, weight);

        particles.push(newParticle);

    }




    let colorInc = 0.5
    class Particle {
        constructor(color, weight, mult) {
            //this.pos = p.createVector(p.floor(p.random(width)), p.floor(p.random(height)));
            this.pos = p.createVector(p.mouseX, p.mouseY);
            //this.vel = p5.Vector.random2D()
            this.vel = p.createVector(0, 0)
            this.acc = p.createVector(0, 0);
            this.maxspeed = 2; //p.random(1, 2) //3;
            this.prevPos = this.pos.copy();
            this.color = color;
            this.weight = weight; //p.random(1, 35) // so when i put these on randoms i get the weird in isn't avlued amount...
            this.dir = 1 // if i ever don't want that hard color transition from 255 to 0, this is where i would apply it this.color.r += 0.5 *this.dir
            this.mult = 2; //p.random(1, 3) // DON"T MESS WITH THIS. it keeps producing errors of n infinit. even when using mathfloor or ceiling.
        }

        update() {

            //this.prevPos.set(this.pos) // this won't work in this case
            //NOTE::: :CHANGED this.vel.add(this.acc) to this.acc.mult(0.2)
            //console.log(this.acc)
            this.vel.add(this.acc.mult(0.4))
            // this.vel.add(this.acc.mult(0.2))
            //set the limit of the velocity that can be added to whichever following position
            this.vel.limit(this.maxspeed)
            this.pos.add(this.vel)
            this.acc.mult(this.mult) // i changed this from 0 to 2. 


            // this.color.r < 255 ? this.color.r += colorInc : this.color.r = 0;
            if (this.color.r === 255) {
                this.dir = -1
            } else if (this.color.r === 0) {
                this.dir = 1
            }
            console.log(this.color.r)
            this.color.r += colorInc * this.dir



        }

        applyForce(force) {
            this.acc.add(force);
        }

        show() {

            //console.log(this.color)
            //p.stroke(p.color(this.color.r, this.color.g, this.color.b, 50));
            //adding this colorMode seems to helped make this smoother a bit? 

            //p.colorMode(p.RGB, 255, 255, 255, 100);

            //p.stroke(255, 255, 255, 1);
            // p.stroke(60, 36, 154, 1);
            // map in p5js is DIFFERENT then general javascript. Re-maps a number from one range to another.

            //In the first example above, the number 25 is converted from a value in the range of 0 to 100 into a value that ranges from the left edge of the window (0) to the right edge (width).
            //let colorR = p.map(this.vel.x + this.vel.y, 0, this.maxspeed * 2, 255, 0);
            //console.log(this.vel.x, 'velocity x')

            //so sometimes the velocities are less then one. still, they should be remapped to values over zero, but they aren't... hmmm
            // if (colorB < 0) {
            //     console.log(colorB, this.vel.x, 'negative values')
            //     colorB *= -1;
            // }

            //but it is confusing why i'm getting negative value numbers, at all, when the floor limit value is set at zero....
            //console.log(colorB, 'colorB')
            //i'm not convinved of these two funcitons, as they are returning values that exceed 255 or is negative. rather then just going to a zero... it's not constructed well. 
            // console.log(this.color.r)

            //this.color.r < 255 ? this.color.r += colorInc : this.color.r -= 255;
            p.stroke(p.color(this.color.r, this.color.g, this.color.b));
            //p.stroke(this.color.r, this.color.g, this.color.b);
            p.strokeWeight(this.weight)
            //p.point(this.pos.x, this.pos.y)
            p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
            //this is important. after it draws the movement, if i don't update it with the the prev continuously at this stage, it will continue to draw a line from it's origin beginning position
            this.updatePrev()
            //colorInc += colorInc
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


///ORIGINAL FORM OF CODE BEFORE I STARTED MESSING AROUND MORE WITH IT
// class Particle {
//     constructor(color) {
//         this.pos = p.createVector(p.random(width), p.random(height));
//         //this.vel = p5.Vector.random2D()
//         this.vel = p.createVector(0, 0)
//         this.acc = p.createVector(0, 0);
//         this.maxspeed = 4;
//         this.prevPos = this.pos.copy()
//         this.color = color

//     }

//     update() {
//         //this.prevPos.set(this.pos) // this won't work in this case
//         this.vel.add(this.acc)
//         //set the limit of the velocity that can be added to whichever following position
//         this.vel.limit(this.maxspeed)
//         this.pos.add(this.vel)
//         this.acc.mult(0)

//     }

//     applyForce(force) {
//         this.acc.add(force);
//     }

//     show() {

//         //console.log(this.color)
//         p.stroke(p.color(this.color.r, this.color.g, this.color.b, 50));
//         //p.strokeWeight(5)
//         //p.point(this.pos.x, this.pos.y)
//         p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
//         //this is important. after it draws the movement, if i don't update it with the the prev continuously at this stage, it will continue to draw a line from it's origin beginning position
//         this.updatePrev()
//     }

//     updatePrev() {
//         this.prevPos.x = this.pos.x;
//         this.prevPos.y = this.pos.y;
//     };

//     edges() {
//         if (this.pos.x > width) {
//             this.pos.x = 0;
//             this.updatePrev(); // i need it to do this so that it wraps the prevPos values as well
//         }
//         if (this.pos.x < 0) {
//             this.pos.x = width;
//             this.updatePrev();
//         }
//         if (this.pos.y > height) {
//             this.pos.y = 0;
//             this.updatePrev();
//         }
//         if (this.pos.y < 0) {
//             this.pos.y = height;
//             this.updatePrev();
//         }
//     };

//     follow(vectors) {
//         let x = p.floor(this.pos.x / scl); // first, based on my xy position, scale myself to a position of collumns and rows
//         let y = p.floor(this.pos.y / scl);
//         // this is a formula for how you take a 2D value into a one dimensional array
//         var index = x + y * cols;
//         var force = vectors[index] // look up the particular vector, in an array of vectors, at that index /// and then apply that particular vector to the force calculating the particular movement
//         this.applyForce(force);
//         // 
//     }

// }