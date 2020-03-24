export default function sketch3(p) {

    const width = 500;
    const height = 500;

    const size = 40;

    p.setup = function () {
        p.createCanvas(width, height);
        p.background(0);
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
        //p.stroke(255);
        //p.square(width / 9, 0, width - 10, height - 10);
        p.noStroke()
        p.background('#333')
        //p.square(0, 100, width, size / 16);
        // p.square(0, 150, width, size / 16);
        // p.square(0, 200, width, size / 16); 
        p.translate(width / 2, 0);
        p.rotate(p.PI / 7.0);
        if (p.mouseIsPressed === true) {
            p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);

            p.square(0, 100, width, size / 16);
            p.square(0, 150, width, size / 16);
            p.square(0, 200, width, size / 16);
            p.rotate(p.PI / 7.0);
            // p.background(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255)
        } else {
            p.square(0, 100, width, size / 16);
            p.square(0, 150, width, size / 16);
            p.square(0, 200, width, size / 16);
            p.rotate(p.PI / 7.0);
            //p.rotate(p.PI / 10.0);
            //p.noStroke()
            //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            //variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);

        }
    };
}