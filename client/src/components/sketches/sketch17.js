export default function sketch17(p) {

    // var t;
    // var j;
    var width = 500;
    var height = 500;
    var t
    let bubbles = [];

    class Bubble {
        constructor(x, y, diam) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.opacity = 102;
        }
        display() {
            let c = p.color(15, 26, 102, this.opacity);
            //the fourth value is the alpha /// it can be extracted by passing c in to p.alph(c)
            p.stroke(c)
            p.ellipse(this.x, this.y, this.diam, this.diam);
        }
        update() {
            this.x += p.random(-5, 5);
            this.y += p.random(-5, 5);
            // this.x = width * p.noise(t + 15);
            // this.y = width * p.noise(t + 10);
            t += 0.005
        }

        clicking() {
            let d = p.dist(p.mouseX, p.mouseY, this.x, this.y)
            if (d < this.diam) {
                console.log("Clicked on Bubble");
            }

        }
    }



    p.setup = function () {
        p.createCanvas(500, 500);
        p.background('white')
        let x = p.random(width);
        let y = p.random(height);
        let r = p.random(10, 50);
        // for (let index = 0; index < 10; index++) {
        //     let b = new Bubble(x, y, r);
        //     bubbles.push(b)
        // }
        let b = new Bubble(x, y, r);
        bubbles.push(b)
        t = 0
    }

    p.draw = function () {
        p.background('white')
        for (let m = 0; m < bubbles.length; m++) {
            // much cleaner!
            p.noFill()
            bubbles[m].display();
            bubbles[m].update();
            //bubbles[m].clicking();
            // bubbles[m].check4removal(m);
            //checkNumItems();
        }
        if (p.frameCount % 200 == 0) {
            p.background(255);
        }

    }

    p.mousePressed = function () {
        //let r = p.random(10, 50)
        // let b = new Bubble(p.mouseX, p.mouseY, r)
        // bubbles.push(b)

        for (let m = 0; m < bubbles.length; m++) {
            bubbles[m].clicking();
        }

    }
}