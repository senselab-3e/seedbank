export default function sketch3(p) {
    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(0);
    };

    function variableEllipse(x, y, px, py, p) {
        let speed = p.abs(x - px) + p.abs(y - py);
        //p.stroke(speed);
        p.ellipse(x, y, speed, speed);
    }

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
        p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
        if (p.mouseIsPressed === true) {
            //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);
            p.ellipse(150, 150, 50, 50);
        }
    };
}