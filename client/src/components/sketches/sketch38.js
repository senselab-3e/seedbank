import p5 from "react-p5-wrapper/node_modules/p5";


export default function sketch38(p) {

    let width = 500;
    let height = 500;

    let dots = []

    p.setup = function () {
        p.createCanvas(width, height)
        p.background(255);

        let pin = new Pinwheel()
        pins.push(pin)

        let dot = new Dotting(width / 2, height / 2, 10, 'black')
        dots.push(dot)

        dot.show()

        //p.frameRate(5)

        // for (let i = 0; i < 10; i++) {

        //     var pin = new Pinwheel()
        //     pins.push(pin)
        // }

    }

    // const colorArrays = [
    //     [255, 56, 145, 100],
    //     [288, 219, 78, 100],
    //     [126, 146, 203, 100]
    // ]

    const colorArrays = [
        [68, 173, 228, 100],
        [43, 86, 185, 100],
        [255, 69, 30, 100],
        [247, 163, 59, 100]
    ]

    let pins = []
    let incr = 1

    p.draw = function () {

        //p.translate(width / 2, height / 2);

        // for (let i = 0; i < 10; i++) {

        //     var pin = new Pinwheel()
        //     pins.push(pin)
        // }


        pins.forEach((pin) => {
            pin.update()
            pin.show();
        })




    }

    p.mousePressed = function () {
        let pin2 = new Pinwheel()
        pins.push(pin2)
    }


    class Pinwheel {
        constructor(mousePos) {
            this.v = p5.Vector.random2D()
            this.prevV = this.v.copy()
            this.color = p.random(colorArrays);
            // this.blurAmt = incr
            this.prevV = this.v.copy()
            this.mouseX = mousePos

        }

        update() {


            // this.prevV.set(this.v)
            // this.prevV.mult(width + 100);

            // if i don't want thing to be over the edge all the time, then set either don't apply a mult to the prevV and or apply a p.random(500) to each of the mult()
            //EXAMPLE
            //this.prevV.mult(p.floor(p.random(500)));
            this.v.mult(width / 4);
            this.prevV.set(this.v)
            this.prevV.mult(100);

        }
        show() {
            p.push()
            //p.filter(p.BLUR, 3)
            console.log(this.testColor)
            p.fill(this.color)

            //original origina translation to the center of the canvas
            //bringit back beginning here
            //p.translate(width / 2, height / 2)
            //very different effect if i shift around where tehe origin point is.
            p.translate(width / p.random(1, 6), height / p.random(1, 6));
            p.rotate(p.random(45))
            //p.line(0, 0, this.v.x, this.v.y)
            //p.stroke(255)
            p.noStroke()

            p.beginShape()

            p.vertex(0, 0)
            p.vertex(this.v.x, this.v.y)
            p.vertex(this.prevV.x, this.prevV.x) /// SPECIAL NOTE ABOUT SECOND PREVV VERTex
            // all i know is that is more interesting when the x value is passed for both, rather then the intended y value
            // i accidentally wrote prevV.x twice, in the above, and it gave me what i wanted. once 'corrected' to prevV.y, it's more staggered...
            p.vertex(0, 0)
            p.endShape();
            ///bring it back, ending here

            //BEZIER CURVE XPERIment
            // p.beginShape()
            // p.noStroke()
            // p.vertex(this.v.x, this.v.y)
            // p.bezierVertex(this.v.x, this.v.y, p.mouseX, p.mouseY, this.prevV.x, this.prevV.x)
            // p.bezierVertex(this.prevV.x, this.prevV.x, p.mouseX, p.mouseY, 0, 0)
            // //p.vertex(this.prevV.x, this.prevV.x) 
            // p.vertex(0, 0)
            // p.endShape();
            // p.noStroke()
            // p.rect(this.v.x, this.v.y, this.prevV.x, this.prevV.y)
            p.pop()

        }




    }

    class Dotting {
        constructor(x, y, size, color) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;

        }
        update() {

        }

        show() {
            p.push()
            p.noStroke()
            p.fill(this.color)
            p.ellipse(this.x, this.y, this.size, this.size)
            p.pop()
        }

    }
}



//stashing in case the origin gets lost

// class Pinwheel {
//     constructor(mousePos) {
//         this.v = p5.Vector.random2D()
//         this.prevV = this.v.copy()
//         this.color = p.random(colorArrays);
//         // this.blurAmt = incr
//         this.prevV = this.v.copy()
//         this.mouseX = mousePos

//     }

//     update() {

//         // this.v.mult(width + 100);
//         // this.prevV.set(this.v)
//         // this.prevV.mult(width + 100);

//         // if i don't want thing to be over the edge all the time, then set either don't apply a mult to the prevV and or apply a p.random(500) to each of the mult()
//         //EXAMPLE
//         //this.prevV.mult(p.floor(p.random(500)));
//         this.v.mult(width / 4);
//         this.prevV.set(this.v)
//         this.prevV.mult(100);

//     }
//     show() {
//         p.push()
//         //p.filter(p.BLUR, 3)
//         console.log(this.testColor)
//         p.fill(this.color)
//         //original origina translation to the center of the canvas
//         //bringit back beginning here
//         //p.translate(width / 2, height / 2)
//         //very different effect if i shift around where tehe origin point is.
//         p.translate(width / p.random(1, 6), height / p.random(1, 6));
//         //p.rotate(p.random(45))
//         //p.line(0, 0, this.v.x, this.v.y)
//         p.beginShape()
//         p.noStroke()
//         p.vertex(0, 0)
//         p.vertex(this.v.x, this.v.y)
//         p.vertex(this.prevV.x, this.prevV.x) /// SPECIAL NOTE ABOUT SECOND PREVV VERTex
//         // all i know is that is more interesting when the x value is passed for both, rather then the intended y value
//         // i accidentally wrote prevV.x twice, in the above, and it gave me what i wanted. once 'corrected' to prevV.y, it's more staggered...
//         p.vertex(0, 0)
//         p.endShape();

//         p.pop()

//     }




// }