import p5 from "react-p5-wrapper/node_modules/p5";

//This is based on much of the code in sketch 33.

export default function sketch34(p) {

    var width = 900
    var height = 900
    let planet

    let colorOptions = ['yellow', 'orange', 'cornflowerblue', 'lightgreen', 'magenta', 'navy', 'purple']

    let drawings = []
    let pos2
    let prev
    let secondVect
    let drawOne
    let lineOrbit

    p.setup = function () {

        p.createCanvas(width, height);
        p.background('grey');
        planet = new Orbit(0, 0, p.random(1, 5), 'deeppink', 12)
        drawings.push(planet)
        pos2 = p.createVector(width / 2, height / 2);
        let vel = p5.Vector.random2D() // this gives a unit vector and it is 1. i then scale it up from one. random direction /// static function
        vel.mult(5)
        prev = pos2.copy(); // copy creates a new vector
        //secondVect = new Orbit2(width / 2, height / 2, 3, p.random(colorOptions), p.floor(p.random(3, 32)))
        //secondVect was an inital fill object orbit i'm disabling for th moment 

        drawOne = new StraightDrawing(width / 2, height / 2, 3, 'white', p.floor(p.random(3, 32)))
        drawings.push(drawOne)
    }


    let incr = 1 /// increment that the color values increase or decrease by, when they hit their limit
    // let direc = 1 // only needed if using the non object based functions

    //depending on where i set these initial amounts, i can kind of scope the color spectrums in the later incremental shifts of these values, will work through

    // this is for when i don't actually want to move through the entire color spectrum, but more stay within a particular shade range. i can control that by starting at set amounts. 

    // so if i don't set it to random, but instead have rbg at 50, 200, 70, for example, it will always move through tonalities of a green or a purple.
    // let colorParam = {
    //     r: p.random(255),
    //     g: p.random(255),
    //     b: p.random(255)
    // }

    //full spectrum

    let colorParam2 = {
        r: {
            color: p.floor(p.random(255)),
            direc: 1
        },
        g: {
            color: p.floor(p.random(255)),
            direc: 1
        },
        b: {
            color: p.floor(p.random(255)),
            direc: 1
        }
    }


    p.draw = function () {
        p.background('grey'); // bring back the background to see Orbit3 drawings. 
        // drawing3.update()
        // drawing3.show()

        // drawOne.show()
        // drawOne.update()

        // secondVect.show() /// this would be the initial fill object orbit -- disabling for the moment
        // secondVect.update()


        p.noFill()

        //if i want it to scan through just  one particular color spectrum, this version works (aka without having to have 3 separate increment values tied to each individual color value)

        // function checkNum(num) {

        //     if (num > 255) {
        //         direc = -1
        //     }

        //     if (num < 0) {
        //         direc = 1
        //     }
        // }

        ///if i want it to move through alll the colors - then this way of working, is best. 

        function checkNum2(num) {
            console.log(num.color, num.direc)
            if (num.color > 255) {
                num.direc = -1
            }

            if (num.color < 0) {
                num.direc = 1
            }
        }


        checkNum2(colorParam2.r)
        checkNum2(colorParam2.g)
        checkNum2(colorParam2.b)

        // checkNum(colorParam.r)
        // checkNum(colorParam.g)
        // checkNum(colorParam.b)

        //colorAmount += incr * direc

        // colorParam.r += incr * direc
        // colorParam.g += incr * direc
        // colorParam.b += incr * direc

        //if i want to slow down how quickly the color changes- i can do it by only calling it on certain divisibles of the framecount.
        if (p.frameCount % 100 === 0) {
            colorParam2.r.color += incr * colorParam2.r.direc
            colorParam2.g.color += incr * colorParam2.g.direc
            colorParam2.b.color += incr * colorParam2.b.direc
        }
        //console.log(colorParam2.r.direc)

        p.push()
        p.noStroke()
        //p.fill(colorParam.r, colorParam.g, colorParam.b)
        p.fill(colorParam2.r.color, colorParam2.g.color, colorParam2.b.color)
        p.ellipse(width / 2, height / 2, width / 4, height / 4)
        p.pop()


        for (let index = 0; index < drawings.length; index++) {
            drawings[index].update()
            drawings[index].show()
        }

        //this is to clear the field when the fill ellipses are being run. 
        // if (p.frameCount % 500 === 0) {
        //     p.clear()
        //     p.background('grey');
        //     // planet = new Orbit(p.random(width), p.random(height), p.random(1, 15), p.random(255), p.random(30))
        //     // drawings.push(planet)
        // }

    }

    p.mousePressed = function () {

        if (drawings.length < 10) {
            ///temporarily changed this from Orbit, to Orbit 2, just to test interactions/appearance
            planet = new Orbit2(p.mouseX, p.mouseY, p.floor(p.random(1, 5)), p.random(colorOptions), p.floor(p.random(30))) //this last number is the limitpoint
            drawOne = new StraightDrawing(p.random(100, width), p.random(100, height), 3, p.color(p.random(255, p.random(255), p.random(255))), p.floor(p.random(3, 32)))
            lineOrbit = new Orbit(p.mouseX, p.mouseY, p.floor(p.random(2, 7)), p.random(colorOptions), 30) //this last number is the limitpoint // and it makes a big difference on how far out the oscillations go
            drawings.push(planet)
            drawings.push(lineOrbit)
            drawings.push(drawOne) //having the drawing added last means it will still be visible over the larger fill objects of the Orbit elements
        } else {
            drawings.splice(0, 1);
            // planet = new Orbit2(p.mouseX, p.mouseY, p.floor(p.random(1, 5)), p.random(colorOptions), p.floor(p.random(3, 32)))
            // drawings.push(planet)

        }

    }



    class Orbit {
        constructor(x, y, size, color, limit) {

            this.pos = p.createVector(x, y)
            this.size = size;
            this.color = color
            this.limitNum = limit
            this.vel = p5.Vector.random2D() // this gives a unit vector and it is 1. i then scale it up from one. random direction /// static function
            this.vel.mult(5) //this.vel.mult(p.random(3)) //random velocity between 0 and 3 // this is a scalar multiplier  /// mult function is called on v
            this.prev = this.pos.copy()

            //this.acc.setMag(0.01)
        }

        //limit will cap the vector at a certain amount. // the acceleration accumulates over time // so you can use the limit so that it will accelerate up until a certain limit

        update() {
            //random walk with acceleration
            // this.acc = p5.Vector.random2D()
            // this.vel.add(this.acc) // adding x,y
            // this.vel.limit(2)
            // this.pos.add(this.vel)d

            //


            let mouse = p.createVector(p.mouseX, p.mouseY); // at 
            this.prev.set(mouse) /// this value is continually being retreived so i can use it to update the 'previous position before acceleration and velocity or applied.... 
            //this.prev = mouse.set()
            this.acc = p5.Vector.sub(mouse, this.pos);
            this.acc.setMag(1);

            this.vel.add(this.acc);
            this.vel.limit(this.limitNum); // max radius from mouse /// this is working
            this.pos.add(this.vel);

            // let mouse = p.createVector(p.mouseX, p.mouseY);
            // // this.prev.set(mouse) /// this value is continually being retreived so i can use it to update the 'previous position before acceleration and velocity or applied.... 
            // //this.prev = mouse.set()   /// this will create this kind of swinging pendulum line drawing from current mouse position and the inertia position calulated later for the pos value
            // this.prev.set(this.pos)
            // this.acc = p5.Vector.sub(mouse, this.pos);
            // this.acc.setMag(1);

            // this.vel.add(this.acc);
            // this.vel.limit(this.limitNum); // max radius from mouse
            // this.pos.add(this.vel);
            // // console.log(this.pos.x, this.prev.x, this.prev.x, this.prev.y)

            // console.log(this.pos.x, this.prev.x, this.prev.x, this.prev.y)
            //new

        }

        show() {
            //p.stroke(255)
            // p.strokeWeight(5)
            // p.stroke(this.color)
            // p.point(this.pos.x, this.pos.y, this.size)
            //p.strokeWeight(5)

            // p.push()
            // p.noStroke()
            // p.fill(this.color)
            // p.ellipse(this.pos.x, this.pos.y, this.size)
            // p.pop()

            p.push()

            //doubling shadowing
            p.strokeWeight(this.size)
            p.stroke(this.color)
            p.translate(this.pos.x, this.pos.y); ///take this away if you don't want to disorient the center of where the lines are drawn.
            p.rotate(p.PI / 90.0);
            p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
            p.pop()

            // p.push()

            // //p.fill(this.color)
            // p.strokeWeight(this.size)
            // p.stroke(this.color)
            // p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
            // // this.prev.set(this.pos)
            // p.pop()
            // p.beginShape()
            // p.vertex(this.prev.x, this.prev.y);
            // p.vertex(this.pos.x, this.pos.y);
            // p.endShape()
            // this.prev.set(this.pos)
        }


    }


    //p5 mult is scalar multiplier - rather then multiplying 2 vectores. so it's p.x * 2 


    //>> STASHING THIS VERSION

    class Orbit2 {
        constructor(x, y, size, color, limit) {

            this.pos = p.createVector(x, y)

            this.size = size;
            this.color = color
            this.limitNum = limit
            this.vel = p5.Vector.random2D() // this gives a unit vector and it is 1. i then scale it up from one. random direction /// static function
            this.vel.mult(p.random(10)) //// I changed this from a steady value of 5 //this.vel.mult(p.random(3)) //random velocity between 0 and 3 // this is a scalar multiplier  /// mult function is called on v
            this.prev = this.pos.copy()


            //this.acc.setMag(0.01)
        }

        //limit will cap the vector at a certain amount. // the acceleration accumulates over time // so you can use the limit so that it will accelerate up until a certain limit

        update() {
            //random walk with acceleration
            // this.acc = p5.Vector.random2D()
            // this.vel.add(this.acc) // adding x,y0000000000

            //

            let mouse = p.createVector(p.mouseX, p.mouseY); // at 
            this.prev.set(mouse) /// this value is continually being retreived so i can use it to update the 'previous position before acceleration and velocity or applied.... 
            //this.prev = mouse.set()
            this.acc = p5.Vector.sub(mouse, this.pos);
            this.acc.setMag(1);

            this.vel.add(this.acc);
            this.vel.limit(this.limitNum); // max radius from mouse /// this is working
            this.pos.add(this.vel);
            //this.pos.limit(this.limitNum);
            //new


        }

        show() {
            // p.stroke(255)
            // p.strokeWeight(5)
            // p.stroke(this.color)
            // p.point(this.pos.x, this.pos.y, this.size)
            // p.strokeWeight(5)

            // p.push()
            // p.noStroke()
            // p.fill(this.color)
            // p.ellipse(this.pos.x, this.pos.y, 20)
            // p.pop()


            //the below works // you just have to takeaway the background color being redrawn
            // p.push()
            // p.strokeWeight(1)
            // p.stroke(this.color)

            // p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
            // p.pop()


            //experiment based on above single line movements - but with a 'center' for the rotation that is shifted and offset
            // p.push()

            // //doubling shadowing
            // p.strokeWeight(this.size)
            // p.stroke(this.color)
            // p.translate(this.pos.x, this.pos.y); ///take this away if you don't want to disorient the center of where the lines are drawn.
            // p.rotate(p.PI / 90.0);
            // p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
            // p.pop()

            //slightly interesting mirroring
            // p.push()
            // p.angleMode(p.DEGREES)
            // p.strokeWeight(this.size)
            // p.stroke(this.color)
            // p.translate(width / 2, height / 2); ///take this away if you don't want to disorient the center of where the lines are drawn.
            // p.rotate(180);
            // p.line(this.prev.x, this.prev.y, this.pos.x, this.pos.y)
            // p.pop()

            //experiment
            p.push()
            p.beginShape()
            p.fill(this.color)
            p.noStroke()
            //accidental inverse
            // p.bezierVertex(this.prev.x, this.pos.y, width / 4, height / 4, this.prev.y, this.pos.x)
            // p.vertex(this.prev.x, this.prev.y)

            //accidental breast stroke (like in swimming) appearance
            // p.bezierVertex(this.pos.x, this.pos.y, width / 4, height / 4, this.prev.y, this.prev.x)
            // p.vertex(this.prev.x, this.prev.y)
            // p.bezierVertex(this.prev.x, this.prev.y, width / 4, height / 4, this.pos.y, this.pos.x)
            // p.endShape();

            //something pretty-ish. declaring vertex twice makes it a bit bigger. that's why i tried multiplying the xy pos in a single line, to see if i could get the same effect. the movemetns are much smaller when only declared once.
            //p.vertex(this.pos.x, this.pos.y)
            ////p.vertex(this.pos.x, this.pos.y)
            // p.vertex(this.pos.x, this.pos.y)
            // p.bezierVertex(this.pos.x, this.prev.y, this.pos.y, this.pos.x, this.prev.x, this.prev.y)
            // p.endShape();


            //
            p.vertex(this.pos.x, this.pos.y)
            p.bezierVertex(this.pos.x, this.prev.y, this.prev.y, this.pos.x, this.prev.x, this.prev.y)

            p.endShape();

            // p.bezierVertex(this.prev.y, this.prev.y, this.pos.y, this.prev.x, this.prev.x, this.pos.x)
            // p.bezierVertex(this.prev.x, this.pos.y, this.pos.y, this.pos.x, this.pos.x, this.prev.y)
            // p.bezierVertex(this.prev.y, this.pos.y, this.pos.x, this.prev.y, this.prev.y, this.prev.x)

            // this.prev.set(this.pos)
        }


    }

    class StraightDrawing {
        constructor(x, y, size, color, limit) {
            this.pos = p.createVector(x, y)
            this.size = size;
            this.color = color
            this.limitNum = limit
            this.vel = p5.Vector.random2D() // this gives a unit vector and it is 1. i then scale it up from one. random direction /// static function
            this.vel.mult(5) //this.vel.mult(p.random(3)) //random velocity between 0 and 3 // this is a scalar multiplier  /// mult function is called on v
            this.prev = this.pos.copy()
            this.prevprev = this.prev.copy()
            this.incr = 1
        }

        update() {

            let ran = p.floor(p.random(10, 150))
            if (p.frameCount % ran === 0) {
                this.prevprev.set(this.prev)
                this.prev.set(this.pos)
                this.vel = p5.Vector.random2D();
                this.vel.mult(p.random(5, 135))
                //console.log(p.noise(this.incr) * p.random(width))
                //this.vel.mult(p.noise(this.incr) * p.random(width / 2)) // this is kind of doing abrupt jagged drawings. not ideal for this sketch, but maybe useful for others
                //this.vel.limit(50); /// NOTE : investigate if this limit is spilling over into the other elements
                this.vel.limit(width);
                this.pos.add(this.vel)

            }

            // this.steps += 0.01;
        }
        show() {

            p.push()
            // p.stroke(this.color)
            p.stroke(255)
            p.strokeWeight(1)

            p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y); /// this.pos is vector info------ so i can't just add a number to it


            p.pop()

            p.push()
            p.stroke(100)
            p.strokeWeight(1)

            p.line(this.prev.x, this.prev.y, this.prevprev.x, this.prevprev.y); /// this.pos is vector info------ so i can't just add a number to it

            p.pop()

            this.prevprev.x += this.incr;

            // p.beginShape()
            // p.vertex(this.pos.x, this.pos.y)
            // p.bezierVertex(200, 200, this.pos.x, this.pos.y, this.prev.x, this.prev.y)
            // p.endShape()
        }
    }
}