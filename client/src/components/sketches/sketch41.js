export default function sketch41(p) {

    p.setup = function () {
        p.createCanvas(800, 800)
        p.frameRate(12)
        p.noLoop() /// this causes it to draw only once. useful. if you take it away, you'll get a different effect
        p.background('#333')
    }
    p.draw = function () {
        p.translate(p.width / 2, p.height / 2)
        for (let a = 0; a < 360; a += 1) {
            let p1 = p.random(p.width / 8, p.width / 4);
            let p2 = p.random(p.width / 4, p.width * 0.4);
            let color = p.color(32, 150, p.random(255), p.random(50, 255))
            p.push()
            p.rotate(p.radians(a));
            p.strokeCap(p.SQUARE);
            p.strokeWeight(2);
            p.stroke(color);
            p.line(p1, 0, p2, 0);
            p.pop()
        }
    }


}