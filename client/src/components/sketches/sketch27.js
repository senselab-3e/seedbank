export default function sketch27(p) {


    var width = 600;
    var height = 500;

    p.setup = function () {
        p.createCanvas(width, height);
        p.background('teal')

        p.textAlign(p.CENTER, p.CENTER);
        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);

        var radius2 = 50;

        p.push();
        p.translate(width / 2, height / 2);

        for (var n = 0; n < 15; n++) {
            p.rotate(n);

            var letter = new Letter('word', 0 + radius2, 0, 90, coloring);
            letter.render();
        }
        p.pop();

    }

    var coloring = p.color(p.random(255), p.random(255), p.random(255))

    p.draw = function () {
        p.background('teal')
        let radius = 0;

        p.mouseX < 200 ? radius = p.mouseX : radius = 200;
        p.push();
        p.translate(width / 2, height / 2);

        for (var i = 0; i < 15; i++) {
            p.rotate(i);
            var num = new Num(1, 0 + radius, 0, 90, 255);
            num.render();
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
        }

        render() {
            p.push();
            p.fill(this.r, this.g, this.b);
            p.translate(this.x, this.y);
            p.rotate(this.rot);
            p.text(this.msg, 0, 0);
            p.pop();
        }

        display() {

        }
    }

}