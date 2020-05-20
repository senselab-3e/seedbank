export default function sketch41(p) {

    p.setup = function () {
        p.createCanvas(800, 800)
        p.frameRate(12)
        p.noLoop()
    }
    p.draw = function () {
        p.translate(p.width / 2, p.height / 2)
        for (let a = 0; a < 360; a += 1) {
            let p1 = p.random(50, 150);
            let p2 = p.random(150, 350);
            p.push()
            p.rotate(p.radians(a));
            p.strokeCap(p.SQUARE);
            p.strokeWeight(2);
            p.stroke(40);
            p.line(p1, 0, p2, 0);
            p.pop()
        }
    }


}