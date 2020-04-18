export default function sketch18(p) {

    class Perlin {
        constructor(x, y, diam, steps) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
        }
        display() {
            var x = p.width * p.noise(this.steps);
            var y = p.height * p.noise(this.steps + 5);
            var r = 255 * p.noise(this.steps + 10);
            var g = 255 * p.noise(this.steps + 15);
            var b = 255 * p.noise(this.steps + 20);

            p.noStroke();
            p.fill(r, g, b);
            p.ellipse(x, y, this.diam, this.diam);
        }
        update() {
            this.steps += 0.01;

        }
    }


    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(240);
        for (var i = 0; i < 5; i++) {
            let newPerlin = new Perlin(p.mouseX, p.mouseY, 5, p.random(0, 10));
            perlins.push(newPerlin)
        }

    }

    let perlins = []

    p.draw = function () {
        for (let m = 0; m < perlins.length; m++) {
            perlins[m].display();
            perlins[m].update();
        }


    }

}