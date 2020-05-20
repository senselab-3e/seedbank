import p5 from "react-p5-wrapper/node_modules/p5";


export default function sketch39(p) {

    let angle = 0

    p.setup = function () {
        p.createCanvas(500, 500)
        //p.frameRate(12)
        p.noStroke()
        p.fill(0, 15, 30)
    }
    p.draw = function () {
        p.background(255)
        const x = p.width;
        const dia = 45;
        const num = 25;
        p.translate(p.width / 2, p.height / 2)
        for (let a = 0; a < 360; a += 22.5) { //the value i put at a+= decides at what placement each line of dots is drawn at a angle from the centerpoint. 
            p.rotate(p.radians(a));
            p.push()
            p.fill(10, 197, 190)
            for (let i = 0; i < num; i++) {
                p.scale(0.9)
                p.rotate(p.radians(angle));
                p.ellipse(x, 0, dia, dia);
            }
            p.pop() // this push and pop is super key, it means that each time a new a value += 22.5 passes through it 'pops' out the drawing for it. not included, then you'll only have a single line of the ellipses drawn out and rotating
            p.push()
            p.fill(106, 244, 226)
            for (let i = 0; i < num; i++) {
                p.scale(0.9)
                p.rotate(-p.radians(angle));
                p.ellipse(x, 0, dia, dia);
            }
            p.pop()
        }
        angle += 0.01;

    }

    //OLD WAY
    // for (let i = 0; i < num; i++) {
    //     p.scale(0.95)
    //     p.rotate(p.radians(angle));
    //     p.ellipse(x, 0, dia, dia);
    // }
    // angle += 1;


}