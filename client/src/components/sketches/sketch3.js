export default function sketch3(p) {
    const width = 500;
    const height = 500;

    const size = 40;

    p.setup = function () {
        p.createCanvas(width, height);
        p.background("#333");
    };

    // function variableEllipse(x, y, px, py, p) {
    //     let speed = p.abs(x - px) + p.abs(y - py);
    //     p.stroke(speed);
    //     p.ellipse(x, y, speed, speed);
    // }

    // investigate how to translate p5 for react touchmovments|| p.touchMoved === true
    //function touchMoved() {
    //   line(mouseX, mouseY, pmouseX, pmouseY);
    //   return false;
    // }

    // function touchMoved() {
    //     p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    //     return false;
    // }

    p.draw = function () {
        let r = 20;
        let r2 = 10;
        //p.stroke(255);
        //p.square(width / 9, 0, width - 10, height - 10);
        //p.noStroke()

        p.fill(0, 0);
        p.stroke((p.pmouseX % 255) - 100, p.pmouseY % 255, p.mouseY % 255);
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        //p.square(0, 100, width, size / 16);
        // p.square(0, 150, width, size / 16);
        // p.square(0, 200, width, size / 16);
        // p.translate(p.base.x, p.base.y);
        p.rotate(p.PI / 7.0);
        if (p.mouseIsPressed === true) {
            p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);

            p.square(10, 100, width + 200, size / 13);
            p.square(10, 150, width + 200, size / 13);
            p.square(10, 200, width + 200, size / 13);
            p.rotate(p.PI / 7.0);
            // p.background(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255)
        } else {
            p.square(10, 100, width + 200, size / 13);
            p.square(10, 150, width + 200, size / 13);
            p.square(10, 200, width + 200, size / 13);
            p.rotate(p.PI / 9.0);
            p.line(p.mouseX, p.mouseY, p.pmouseX + p.random(-r, r), p.pmouseY + p.random(-r2, r2));


            //p.rotate(p.PI / 10.0);
            //p.noStroke()
            //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            //variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);
        }
    };
}