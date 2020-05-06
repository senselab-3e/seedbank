import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch33(p) {

    var width = 500
    var height = 500
    let planet

    let colorOptions = ['yellow', 'orange', 'cornflowerblue', 'lightgreen', 'magenta', 'navy', 'purple']

    let drawings = []
    let pos2
    let prev
    let secondVect

    p.setup = function () {

        p.createCanvas(width, height);
        p.background('black');
        planet = new Orbit(0, 0, p.random(1, 15), 'deeppink', 12)
        drawings.push(planet)
        pos2 = p.createVector(width / 2, height / 2);
        let vel = p5.Vector.random2D() // this gives a unit vector and it is 1. i then scale it up from one. random direction /// static function
        vel.mult(5)
        prev = pos2.copy(); // copy creates a new vector
        secondVect = new Orbit2(width / 2, height / 2, p.floor(p.random(1, 5)), p.random(colorOptions), p.floor(p.random(3, 32)))

    }




    p.draw = function () {
        //p.background('grey'); // bring back the background to see Orbit3 drawings. 
        // drawing3.update()
        // drawing3.show()

        secondVect.show()
        secondVect.update()

        //this is the more basic mess to figure out the logic of how to draw the vector lines between prev and current position. it is then cleaned up and extracted into the Orbit constructor
        p.push()
        p.stroke('yellow')
        p.strokeWeight(1)
        p.line(pos2.x, pos2.y, prev.x, prev.y);
        //before i add step to pause
        prev.set(pos2) // and set copies on top of an existing vector
        let vel2 = p5.Vector.random2D();
        vel2.mult(5)
        pos2.add(vel2)
        p.pop()

        for (let index = 0; index < drawings.length; index++) {
            drawings[index].update()
            drawings[index].show()
        }


    }

    p.mousePressed = function () {

        if (drawings.length < 5) {
            ///temporarily changed this from Orbit, to Orbit 2, just to test interactions/appearance
            planet = new Orbit2(p.mouseX, p.mouseY, p.floor(p.random(1, 5)), p.random(colorOptions), p.floor(p.random(10, 30))) //this last number is the limitpoint
            drawings.push(planet)
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

            let mouse = p.createVector(p.mouseX, p.mouseY);
            // this.prev.set(mouse) /// this value is continually being retreived so i can use it to update the 'previous position before acceleration and velocity or applied.... 
            //this.prev = mouse.set()   /// this will create this kind of swinging pendulum line drawing from current mouse position and the inertia position calulated later for the pos value
            this.prev.set(this.pos)
            this.acc = p5.Vector.sub(mouse, this.pos);
            this.acc.setMag(1);

            this.vel.add(this.acc);
            this.vel.limit(this.limitNum); // max radius from mouse
            this.pos.add(this.vel);
            // console.log(this.pos.x, this.prev.x, this.prev.x, this.prev.y)

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

            //p.fill(this.color)
            p.strokeWeight(this.size)
            p.stroke(this.color)
            p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
            // this.prev.set(this.pos)
            p.pop()
            // p.beginShape()
            // p.vertex(this.prev.x, this.prev.y);
            // p.vertex(this.pos.x, this.pos.y);
            // p.endShape()
            // this.prev.set(this.pos)
        }


    }


    //p5 mult is scalar multiplier - rather then multiplying 2 vectores. so it's p.x * 2 

    class DotDrawing {
        constructor(x, y, size, color) {
            // this.x = x;
            // this.y = y;
            this.pos = p.createVector(x, y)
            //velocity
            this.size = size;
            this.color = color
            this.vel = p.createVector(1, 0)

        }

        update() {
            // this.pos.x += this.vel.x //p.random(-1, 1) 
            // this.pos.y += this.vel.y //p.random(-1, 1)
            // i can't add two vectors together --- or JS doesn't know how. but the add() does
            this.pos.add(this.vel) // this does the same as the 2 scripts += this.vel.x, etc
            // this.vel.x += 0.001
            // this.vel.y -= 0.001
        }
        show() {
            p.strokeWeight(this.size)
            p.stroke(this.color)
            p.point(this.pos.x, this.pos.y)
        }
    }

    class VectorDrawing {
        constructor(x, y, size, color) {
            // this.x = x;
            // this.y = y;
            this.pos = p.createVector(x, y)
            //velocity
            this.size = size;
            this.color = color
            //instead of new p5 vector = create vector is just a unique syntax to p5
            this.vel = p5.Vector.random2D() // random direction /// static function
            //instance method mult
            //understanding the static function is useful if you want to equate the result of adding two values together, and not have the value it is being used with, called upon that value --in such a way that would have that value continually updating.  /// so if i don't want let newPos = pos.add(something) // because it's not a static function, the valeu of newPos would always be updating
            //so let newPos = p5.Vector.add(pos,vel) --- call static version of add stored under the name space of p5 vectorClass
            //see examples in add() in p5 documentation
            this.vel.mult(p.random(3)) //random velocity between 0 and 3 // this is a scalar multiplier  /// mult function is called on v
        }

        update() {
            // this.pos.x += this.vel.x //p.random(-1, 1)
            // this.pos.y += this.vel.y //p.random(-1, 1)
            // i can't add two vectors together --- or JS doesn't know how. but the add() does

            this.pos.add(this.vel)


            // this.vel.x += 0.001
            // this.vel.y -= 0.001
        }
        show() {
            // p.strokeWeight(this.size)
            p.push()
            p.noStroke()
            p.fill(this.color)
            p.ellipse(this.pos.x, this.pos.y, this.size)
            p.pop()
        }

    }






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
            //p.stroke(255)
            // p.strokeWeight(5)
            // p.stroke(this.color)
            // p.point(this.pos.x, this.pos.y, this.size)
            //p.strokeWeight(5)

            p.push()
            p.noStroke()
            p.fill(p.random(255))
            // p.ellipse(this.pos.x, this.pos.y, 20)
            p.pop()


            //the below works // you just have to takeaway the background color being redrawn
            // p.push()
            // p.strokeWeight(1)
            // p.stroke(this.color)

            // p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
            // p.pop()


            //experiment based on above single line movements - but with a 'center' for the rotation that is shifted and offset
            p.push()

            //doubling shadowing
            p.strokeWeight(this.size)
            p.stroke(this.color)
            p.translate(this.pos.x, this.pos.y); ///take this away if you don't want to disorient the center of where the lines are drawn.
            p.rotate(p.PI / 30.0);
            p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
            p.pop()

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
            p.pop()
            // p.beginShape()
            // p.vertex(this.prev.x, this.prev.y);
            // p.vertex(this.pos.x, this.pos.y);-
            // p.endShape()
            // this.prev.set(this.pos)
        }


    }
}