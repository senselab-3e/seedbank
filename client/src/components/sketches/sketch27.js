export default function sketch27(p) {


    var width = 600;
    var height = 500;

    p.setup = function () {
        p.createCanvas(width, height);
        p.background('teal')

        p.textAlign(p.CENTER, p.CENTER);
        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);



    }

    //By default, random() produces different results each time the program is run. Set the seed parameter to a constant to return the same pseudo-random numbers each time the software is run.



    p.draw = function () {
        p.background('teal')
        let radius = 100;
        const amount = 15;
        const spacing = 360 / amount; //p.mouseX / amount;
        var coloring = p.color(p.random(255), p.random(255), p.random(255))
        // p.mouseX < 10 ? radius = 10 : radius = p.mouseX;
        // p.mouseX < 200 ? radius = p.mouseX : radius = 200;
        p.push();
        p.translate(width / 2, height / 2);


        //use the push and pop so that the transformation effects remain localized and don’t accumulate.
        for (let i = 0; i < amount; i++) {
            p.push();
            p.rotate(i * spacing);
            var num = new Num(1, 0 + radius, 0, 90, 255);
            num.render();
            p.pop();
        }
        p.pop();

        var radius2 = 50;
        var amount2 = 5;

        createWordRing(radius2, amount2, 1);
    }

    function createWordRing(radius2, amount2, seed) {
        p.randomSeed(seed)
        var randomNumbers = [];
        for (let i = 0; i <= amount2; i++) {
            randomNumbers.push({
                r: parseInt(p.random(255)),
                b: parseInt(p.random(255)),
                g: parseInt(p.random(255))
            })
        }

        const spacing2 = 360 / amount2;
        console.log(randomNumbers[0], randomNumbers[1])

        p.push();
        p.translate(width / 2, height / 2);

        for (var n = 0; n < amount2; n++) {
            p.push();
            p.rotate(n * spacing2);
            var letter = new Letter('word', 0 + radius2, 0, 90, randomNumbers[n]);
            letter.render();
            letter.display()
            p.pop();
        }
        p.pop();


    }

    class Num {
        constructor(msg, x, y, rot, clr) {
            this.x = x;
            this.y = y;
            this.rot = rot;
            this.msg = msg;
            this.color = clr;
        }

        render() {
            p.push();
            p.fill(this.color);
            p.translate(this.x, this.y);
            p.rotate(this.rot);
            p.text(this.msg, 0, 0);
            p.pop();
        }
    }

    class Letter {
        constructor(msg, x, y, rot, clr) {
            this.x = x;
            this.y = y;
            this.rot = rot;
            this.msg = msg;
            this.r = p.random(255)
            this.g = p.random(255)
            this.b = p.random(255)
            this.clr = clr
        }

        render() {
            p.push();
            p.fill(this.clr.r, this.clr.b, this.clr.g);
            p.translate(this.x, this.y);
            p.rotate(this.rot);
            p.text(this.msg, 0, 0);
            p.pop();
        }

        display() {
            //sconsole.log(this.clr)
            //p.fill(this.clr);
        }
    }

}