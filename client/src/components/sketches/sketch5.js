export default function sketch5(p) {
    p.setup = function () {
        p.createCanvas(1, 500);
        p.background(0);
    };



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
        //p.background(55, 232, 192);
        p.background(55, p.pmouseX % 255, 192);
        if (p.mouseIsPressed === true) {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);

        }
    };
}