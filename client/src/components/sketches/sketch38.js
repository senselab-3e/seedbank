import p5 from "react-p5-wrapper/node_modules/p5";


export default function sketch38(p) {

    let width = 500;
    let height = 500;

    p.setup = function () {
        p.createCanvas(width, height)
        p.background(255);
        // p.push()
        // p.noStroke()
        // p.fill(114, 230, 105)
        // p.rect(width / 2, 0, width / 2, height)
        // p.pop()
    }

    p.draw = function () {

        p.translate(width / 2, height / 2);
        // let v = p.createVector(p.random(-100, 0), p.random(-100, 100));
        let v = p5.Vector.random2D()
        v.mult(200);
        p.push()
        p.fill(255, 56, 145);
        p.line(0, 0, v.x, v.y)
        p.pop()
        p.push()
        p.noStroke()
        p.fill(114, 230, 105)
        p.rect(0, 0 - height / 2, width / 2, height)
        p.pop()


    }

}