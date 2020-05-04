import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch32(p) {

    var width = 500
    var height = 500




    let drawing
    let drawing2
    p.setup = function () {

        p.createCanvas(width, height);
        //i adjusted the position to 0,0 because the translate funciton below moved it to the center of the screen. 
        drawing = new DotDrawing(0, 0, 2, 'orange')
        drawing2 = new VectorDrawing(0, 0, 15, 'teal')
        p.background('#eee');
    }


    p.draw = function () {

        p.translate(width / 2, height / 2) /// this moved the center 0,0 to the middle of the canvas
        //translate Specifies an amount to displace objects within the display window. The x parameter specifies left/right translation, the y parameter specifies up/down translation.
        drawing.update()
        drawing.show()

        drawing2.update()
        drawing2.show()


        p.push()
        let v = p5.Vector.random2D()
        v.mult(p.random(50, 100))
        p.stroke(122, 222, 238, 50)
        p.line(0, 0, v.x, v.y)
        p.pop()

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



}