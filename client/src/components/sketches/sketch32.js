export default function sketch32(p) {

    var width = 500
    var height = 500



    let drawing
    p.setup = function () {
        p.createCanvas(width, height);
        drawing = new DotDrawing(width / 2, height / 2, 5, 'orange')
        p.background('#eee');

    }


    p.draw = function () {

        drawing.update()
        drawing.show()


    }

    class DotDrawing {
        constructor(x, y, size, color) {
            // this.x = x;
            // this.y = y;
            this.pos = p.createVector(x, y)
            this.size = size;
            this.color = color
        }

        update() {
            this.pos.x = this.pos.x + p.random(-1, 1)
            this.pos.y = this.pos.y + p.random(-1, 1)
        }
        show() {
            p.strokeWeight(this.size)
            p.stroke(this.color)
            p.point(this.pos.x, this.pos.y)
        }
    }



}