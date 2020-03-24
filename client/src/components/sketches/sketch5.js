export default function sketch5(p) {
    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(283, 54, 197);
    };



    p.draw = function () {
        // p.background(283, 54, 197);
        //p.stroke(255);
        p.stroke(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
        //p.noFill()
        // p.square(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);

        if (p.mouseIsPressed === true) {
            //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            //p.line(p.mouseX, p.mouseY, p.mouseX, p.pmouseY);
            p.square(p.mouseX, p.mouseY, p.mouseX, p.pmouseY)
            p.fill(p.pmouseX % 255 + 150, p.pmouseY % 255, p.mouseY % 255 - 100);
            p.noStroke()
            // variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);
            //p.ellipse(150, 150, 50, 50);
        } else {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            p.square(450, 0, p.pmouseX, p.pmouseY)
        }
    };


    p.draw2 = function () {
        // p.background(283, 54, 197);
        p.stroke(255);

        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        //p.stroke(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
        // p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
        // if (p.mouseIsPressed === true) {
        //     p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        //     //p.line(p.mouseX, p.mouseY, p.mouseX, p.pmouseY);
        //     //p.stroke(p.pmouseX % 255);
        //     // variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);
        //     //p.ellipse(150, 150, 50, 50);
        // }
    };
}