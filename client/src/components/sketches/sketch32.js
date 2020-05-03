import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch32(p) {

    var width = 500
    var height = 500
    let inc = 0.001



    let drawing
    p.setup = function () {
        p.createCanvas(width, height);
        //i adjusted the position to 0,0 because the translate funciton below moved it to the center of the screen. 
        drawing = new DotDrawing(0, 0, 5, 'orange', inc)

    }


    p.draw = function () {
        //p.background('#eee');
        p.translate(width / 2, height / 2) /// this moved the center 0,0 to the middle of the canvas
        //translate Specifies an amount to displace objects within the display window. The x parameter specifies left/right translation, the y parameter specifies up/down translation.
        drawing.update()
        drawing.show()

        let v = p5.Vector.random2D()
        v.mult(p.random(50, 100))
        p.stroke(0, 50)
        p.line(0, 0, v.x, v.y)


    }

    //p5 mult is scalar multiplier - rather then multiplying 2 vectores. so it's p.x * 2 

    class DotDrawing {
        constructor(x, y, size, color, inc) {
            // this.x = x;
            // this.y = y;
            this.pos = p.createVector(x, y)
            //velocity
            this.size = size;
            this.color = color
            this.inc = inc
            this.vel = p.createVector(1, -1)
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
            p.strokeWeight(this.size)
            p.stroke(this.color)
            p.point(this.pos.x, this.pos.y)
        }
    }



}