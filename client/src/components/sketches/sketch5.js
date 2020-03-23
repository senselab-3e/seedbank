export default function sketch5(p) {
    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(283, 54, 197);
    };



    p.draw = function () {
        // p.background(283, 54, 197);
        p.stroke(255);
        // p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
        if (p.mouseIsPressed === true) {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            // variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);
            //p.ellipse(150, 150, 50, 50);
        }
    };
}