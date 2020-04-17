export default function sketch17(p) {

    // var t;
    // var j;
    var width = 500;
    var height = 500;
    let t = 0
    let bubbles = [];

    p.button = function () {

        p.rect(width / 2, height - 100, 50, 25)
        //p.fill('yellow');
        p.fill(97, 155)
        p.stroke('yellow')
    }

    class Bubble {
        constructor(x, y, diam) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.opacity = 50;
            this.brightness = 0
            this.color = p.color(15, 26, 102, this.opacity);
            this.fillColor = 'blue'

        }
        display() {
            //let c = p.color(15, 26, 102, this.opacity);
            //the fourth value is the alpha /// it can be extracted by passing c in to p.alph(c)
            p.stroke(this.color)
            p.fill(this.fillColor)
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
                this.opacity = 122
                this.fillColor === 'blue' ? this.fillColor = 'yellow' : this.fillColor = 'blue'

            }

        }
    }





    p.setup = function () {
        p.createCanvas(500, 500);
        p.background('white')
        let x = p.random(width);
        let y = p.random(height);
        let r = p.random(10, 50);
        for (let index = 0; index < 10; index++) {
            let b = new Bubble(x, y, r);
            bubbles.push(b)
        }
        p.noFill()
        // let b = new Bubble(x, y, r);
        // bubbles.push(b)
        // t = 0
    }

    p.draw = function () {
        p.background('white')

        for (let m = 0; m < bubbles.length; m++) {
            // much cleaner!

            bubbles[m].display();
            bubbles[m].update();
            //bubbles[m].clicking();
            // bubbles[m].check4removal(m);
            //checkNumItems();
        }
        if (p.frameCount % 200 === 0) {
            p.background(255);
        }

        p.button()

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