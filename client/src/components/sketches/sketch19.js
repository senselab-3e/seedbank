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
            console.log(p.mouseX, 'origin')
            console.log(p.mouseX * p.noise(this.steps + p.random(1, 15)), 'noise');
            // var x = p.mouseX + p.mouseX * p.noise(this.steps + p.random(0, 10));
            // var y = p.mouseY + p.mouseY * p.noise(this.steps + p.random(0, 10));
            var x = p.mouseX * p.noise(this.steps + p.random(1, 5)) * 2;
            var y = p.mouseY * p.noise(this.steps + p.random(1, 5)) * 2;
            var r = 255 * p.noise(this.steps);
            var g = 255 * p.noise(this.steps);
            var b = 255 * p.noise(this.steps);

            p.noStroke();
            p.fill(r, g, b);
            p.ellipse(x, y, this.diam, this.diam);
        }
        update() {
            this.steps += 0.1;

        }
    }


    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(240);
        for (var i = 0; i < 5; i++) {
            let newPerlin = new Perlin(p.mouseX, p.mouseY, 5, 1);
            perlins.push(newPerlin)
        }

    }

    let perlins = []

    p.draw = function () {
        p.background(255, 10);
        for (let m = 0; m < perlins.length; m++) {
            perlins[m].display();
            perlins[m].update();
        }


    }

}