import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch32(p) {

    var width = 500
    var height = 500




    let drawing
    let drawing2
    let drawing3
    p.setup = function () {

        p.createCanvas(width, height);
        //i adjusted the position to 0,0 because the translate funciton below moved it to the center of the screen. 
        // --->NOTES: 1.0-1.4 tutorial
        // drawing = new DotDrawing(0, 0, 2, 'orange')
        // drawing2 = new VectorDrawing(0, 0, 15, 'teal')
        // ---->
        //--->NOTES: 1.5 Tutorial
        p.background('#eee');
        drawing3 = new Mover(0, 0, 15, 'purple')
    }


    p.draw = function () {
        // NOTES: 1.0-1.4 tutorial
        // p.translate(width / 2, height / 2) /// this moved the center 0,0 to the middle of the canvas
        // //translate Specifies an amount to displace objects within the display window. The x parameter specifies left/right translation, the y parameter specifies up/down translation.
        // drawing.update()
        // drawing.show()

        // drawing2.update()
        // drawing2.show()


        // p.push()
        // let v = p5.Vector.random2D()
        // v.mult(p.random(50, 100))
        // p.stroke(122, 222, 238, 50)
        // p.line(0, 0, v.x, v.y)
        // p.pop()

        //--1.5 tutorial
        let pos = p.createVector(200, 200);
        let mouse = p.createVector(p.mouseX, p.mouseY)
        // here i need a static function
        let v = p5.Vector.sub(mouse, pos);
        // 
        //this just shows how normalize works // which uses the value of mag, the figures out how many times you need to divide it to get to 1, which is what the normalize function wants. 
        // let m = v.mag()
        // v.div(m);
        /// calling this normalize meant that rather then it drawing the vectors to the exact position of the mousex /// it first normalized that vector down to 1, then was scaled back up by 5, and then resulted in a line vector from center being drawn that follows the mouse around but maintains the same length 
        //mag is used to normalize.... the mag is like in the pythagorean theorum... the c value in the triangle.  it takes the square root of the x sqaured and ysquared to get the mag.  // if i want to normalize the 5 to 1 --- /// then you divide its vectors by it's magnitude. // yikes. 

        // v.normalize()
        // v.mult(50)
        //you can also chain them into v.normalize().mult(50)
        //---the above is the same v.setMag. it such a common function step that it has been combined into v.setMag()
        // p.background(m) /// interesting trick
        v.setMag(50)

        //Subtract the given number from the value currently stored at the given key. /// it's taking the mouse.x - pos.x to get current x
        //mag returns the scalar length of any vector 
        //Calculates the magnitude (or length) of a vector. A vector is a direction in space commonly used in computer graphics and linear algebra. Because it has no "start" position, the magnitude of a vector can be thought of as the distance from the coordinate 0,0 to its x,y value. Therefore, mag() is a shortcut for writing dist(0, 0, x, y).
        // p.translate(width / 2, height / 2)
        // p.strokeWeight(4)
        // p.stroke(83, 51, 212);
        // p.line(0, 0, v.x, v.y)
        //normalize  takes any vector and and makes it into a unit vector // of a length 1  /// this may be a bit like calling mathfloor...

        // 1.6 --
        //NOTES: velocity is how the position changes over time
        //accleration is the change in velocity over time. 


        drawing3.update()
        drawing3.show()

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

    class Mover {
        constructor(x, y, size, color) {

            this.pos = p.createVector(x, y)

            this.size = size;
            this.color = color

            this.vel = p5.Vector.random2D() // random direction /// static function
            this.vel.mult(p.random(3)) //random velocity between 0 and 3 // this is a scalar multiplier  /// mult function is called on v


            //this.acc.setMag(0.01)
        }

        //limit will cap the vector at a certain amount. // the acceleration accumulates over time // so you can use the limit so that it will accelerate up until a certain limit

        update() {
            //random walk with acceleration
            // this.acc = p5.Vector.random2D()
            // this.vel.add(this.acc) // adding x,y
            // this.vel.limit(2)
            // this.pos.add(this.vel)

            //
            let mouse = p.createVector(p.mouseX, p.mouseY);
            this.acc = p5.Vector.sub(mouse, this.pos);
            this.acc.setMag(1);

            this.vel.add(this.acc);
            this.vel.limit(7);

            this.pos.add(this.vel);

        }

        show() {
            p.stroke(255)
            p.fill(this.color)
            p.ellipse(this.pos.x, this.pos.y, this.size)
        }


    }



}