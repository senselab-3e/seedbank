export default function sketch20(p) {

    class Perlin {
        constructor(x, y, diam, steps) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
            this.r = p.random(255)
            this.g = p.random(255)
            this.b = p.random(255)
        }
        display() {
            console.log(p.mouseX, 'origin')
            //console.log(p.mouseX * p.noise(this.steps + p.random(1, 15)), 'noise');
            // var x = p.mouseX + p.mouseX * p.noise(this.steps + p.random(0, 10));
            // var y = p.mouseY + p.mouseY * p.noise(this.steps + p.random(0, 10));
            // var x = p.mouseX * p.noise(this.steps + p.random(1, 5)) * 2;
            // var y = p.mouseY * p.noise(this.steps + p.random(1, 5)) * 2;
            var x = p.mouseX * p.noise(this.steps + 1) * 2; /// multiplied it by 2 to get it back to closer to the 
            var y = p.mouseY * p.noise(this.steps + 3) * 2;
            // var r = p.random(255) //255 * p.noise(this.steps);
            // var g = p.random(255) //255 * p.noise(this.steps);
            // var b = p.random(255) //255 * p.noise(this.steps);
            console.log(x, 'noise')

            p.noStroke();
            p.fill(this.r, this.g, this.b);
            //p.ellipse(x, y, this.diam, this.diam);
            p.rect(x, y, 3, 500);
        }
        update() {
            this.steps += 0.001;

        }
    }


    class RoguePerlin {
        constructor(x, y, diam, steps) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.r = p.random(255)
            this.g = p.random(255)
            this.b = p.random(255)
            //this.opacity = 102;
        }
        display() {
            var x = p.width * p.noise(this.steps);
            var y = p.height * p.noise(this.steps + 2);
            var x2 = p.width * p.noise(this.steps + 3);
            var y2 = p.height * p.noise(this.steps + 4);
            var x3 = p.width * p.noise(this.steps + 1);
            var y3 = p.height * p.noise(this.steps + 5);
            // var r = 255 * p.noise(this.steps + 10);
            // var g = 255 * p.noise(this.steps + 15);
            // var b = 255 * p.noise(this.steps + 20);

            p.stroke('orange');
            p.fill(this.r, this.g, this.b)
            //p.strokeWeight(5);
            //p.fill('orange')
            //p.fill(this.r, this.g, this.b);
            //p.ellipse(x, y, this.diam, this.diam);
            // p.line(x, y, x2, y2);
            //p.point(x, y)
            //p.point(x2, y2)
            p.beginShape();
            p.vertex(x, y, x3, y3);
            p.bezierVertex(x, y, x2, y2, x3, y3)
            p.endShape();
        }
        update() {
            this.steps += 0.01;

            // if (p.frameCount % 300 === 0) {
            //     p.fill(0, 0)
            // }

        }
        updateColor() {
            this.r = p.random(255)
            this.g = p.random(255)
            this.b = p.random(255)
        }
    }

    p.colorSwitcher = function () {
        p.fill(p.random(255), p.random(255), p.random(255))
    }


    p.setup = function () {
        p.createCanvas(500, 500);
        p.noFill()
        p.background(255);
        // for (var i = 0; i < 5; i++) {
        //     //if the values going into the constructor are always the same, it's drawing 5 instances of the ellipse on top of each other, while spinning around. //that's why i have a p.random value going in for the steps
        //     // for however many iterations i'm moving through, i need to have that many instances in the p.random - unlleesss i want some of the particles to share the same pathways as others. 
        //     let newPerlin = new Perlin(p.mouseX, p.mouseY, 15, p.random(0, 5));
        //     perlins.push(newPerlin)
        // }

        let roguePerlin = new RoguePerlin(p.mouseX + p.random(1, 2), p.mouseY + p.random(1, 2), 2, 1)
        roguePerlins.push(roguePerlin)

    }

    let perlins = []
    let roguePerlins = []

    p.draw = function () {
        //p.background(255, 15);
        for (let m = 0; m < perlins.length; m++) {
            perlins[m].display();
            perlins[m].update();
        }

        for (let n = 0; n < roguePerlins.length; n++) {
            roguePerlins[n].display();
            roguePerlins[n].update();
        }

    }

    //this lets me know how many perlins are already active and being drawn
    //i am using the return number to then send the Perlin constructor a step value that has not be used before - thereby preventing one of the perlin instances from havine the same pathway as others// i may want them to share pathways in the future, but not for now
    p.checkInstanceNum = function () {
        return perlins.length
    }

    p.mousePressed = function () {
        p.colorSwitcher()

        for (let n = 0; n < roguePerlins.length; n++) {
            //roguePerlins[n].display();
            roguePerlins[n].updateColor();
        }
        // let numIns = p.checkInstanceNum()
        // let newPerlin = new Perlin(p.mouseX, p.mouseY, 15, numIns + 1);
        // perlins.push(newPerlin)
        // let roguePerlin = new RoguePerlin(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 5, 1)
        // roguePerlins.push(roguePerlin)
    }

}