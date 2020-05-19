import p5 from "react-p5-wrapper/node_modules/p5";


export default function sketch38(p) {

    let width = 500;
    let height = 500;

    p.setup = function () {
        p.createCanvas(width, height)
        p.background(255);

        p.frameRate(5)

        // p.push()
        // p.noStroke()
        // p.fill(114, 230, 105)
        // p.rect(width / 2, 0, width / 2, height)
        // p.pop()
    }

    const colorArrays = [
        [255, 56, 145, 50],
        [288, 219, 78, 50],
        [126, 146, 203, 50]
    ]

    let pins = []

    p.draw = function () {

        //p.translate(width / 2, height / 2);

        for (let i = 0; i < 10; i++) {

            var pin = new Pinwheel()
            pins.push(pin)
        }

        // pins.forEach((pin) => {
        //     pin.show();
        //     pin.update()
        // })

        for (let n = 0; n < pins.length; n++) {

            pins[n].update()
            pins[n].show()
        }
        // let v = p.createVector(p.random(-100, 0), p.random(-100, 100));
        // let v = p5.Vector.random2D()
        // //let prevVec = v.copy()
        // v.mult(p.random(100, 500)); // put this at just one number to get it to following the same circumferance around
        // p.push()
        // p.strokeWeight(3)



        // p.stroke(p.random(colorArrays))

        // p.line(0, 0, v.x, v.y)

        // p.pop()

        // p.push()
        // p.fill(p.random(colorArrays));
        // p.beginShape()
        // p.vertex(0, 0)
        // p.vertex(v.x, v.y)
        // prevVec.set(v)
        // p.vertex(prevVec.x, prevVec.y)
        // p.vertex(0, 0)
        // p.endShape();
        // p.pop()

        p.push()
        p.noStroke()
        p.fill(114, 230, 105)
        //these coordinates had to change based on the center of the canvas now being 0,0 according to the translate function run at the top
        p.rect(width / 2, 0, width / 2, height)
        //p.rect(0, 0 - height / 2, width / 2, height)
        p.pop()



        // p.fill(114, 230, 105)
        // //these coordinates had to change based on the center of the canvas now being 0,0 according to the translate function run at the top
        // p.rect(width / 2, 0, width / 2, height)
        // //p.rect(0, 0 - height / 2, width / 2, height)



    }


    class Pinwheel {
        constructor() {
            this.v = p5.Vector.random2D()
            this.prevV = this.v.copy()
            this.color = p.random(colorArrays);
            // this.blurAmt = incr
            this.prevV = this.v.copy()
        }

        update() {

            this.v.mult(700);
            this.prevV.set(this.v)
            this.prevV.mult(700);

            //this.prevV.mult(p.floor(p.random(500)));

            //this.prev.set(

        }
        show() {
            p.push()
            console.log(this.testColor)
            p.fill(this.color)
            p.translate(width / 2, height / 2);
            //p.line(0, 0, this.v.x, this.v.y)
            p.beginShape()
            p.noStroke()
            p.vertex(0, 0)
            p.vertex(this.v.x, this.v.y)
            p.vertex(this.prevV.x, this.prevV.x)
            p.vertex(0, 0)
            p.endShape();
            p.pop()
        }




    }
}