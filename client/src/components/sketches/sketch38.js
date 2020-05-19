import p5 from "react-p5-wrapper/node_modules/p5";


export default function sketch38(p) {

    let width = 500;
    let height = 500;

    p.setup = function () {
        p.createCanvas(width, height)
        p.background(255);

        //p.frameRate(5)

        for (let i = 0; i < 10; i++) {

            var pin = new Pinwheel()
            pins.push(pin)
        }

    }

    const colorArrays = [
        [255, 56, 145, 100],
        [288, 219, 78, 100],
        [126, 146, 203, 100]
    ]

    let pins = []
    let incr = 1

    p.draw = function () {

        //p.translate(width / 2, height / 2);


        pins.forEach((pin) => {

            pin.update()
            pin.show();
        })

        // for (let n = 0; n < pins.length; n++) {

        //     pins[n].update()
        //     pins[n].show(incr)
        // }



        //GREEN RECTANGLE

        // p.push()
        // p.noStroke()
        // p.fill(114, 230, 105)
        // //these coordinates had to change based on the center of the canvas now being 0,0 according to the translate function run at the top
        // p.rect(width / 2, 0, width / 2, height)
        // //p.rect(0, 0 - height / 2, width / 2, height)
        // p.pop()



        if (p.frameCount % 50 === 0) {
            let pin2 = new Pinwheel()
            pins.push(pin2)
        }

    }

    p.mousePressed = function () {
        let pin2 = new Pinwheel()
        pins.push(pin2)
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

            this.v.mult(width + 100);
            this.prevV.set(this.v)
            this.prevV.mult(width + 100);

            // if i don't want thing to be over the edge all the time, then set either don't apply a mult to the prevV and or apply a p.random(500) to each of the mult()
            //EXAMPLE
            //this.prevV.mult(p.floor(p.random(500)));

        }
        show(incr) {
            p.push()
            //p.filter(p.BLUR, 3)
            console.log(this.testColor)
            p.fill(this.color)
            p.translate(width / 2, height / 2);
            //p.line(0, 0, this.v.x, this.v.y)
            p.beginShape()
            p.noStroke()
            p.vertex(0, 0)
            p.vertex(this.v.x, this.v.y)
            p.vertex(this.prevV.x, this.prevV.x)
            // all i know is that is more interesting when the x value is passed for both, rather then the intended y value
            // i accidentally wrote prevV.x twice, in the above, and it gave me what i wanted. once 'corrected' to prevV.y, it's more staggered...
            p.vertex(0, 0)
            p.endShape();
            p.pop()

        }




    }
}