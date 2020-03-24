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
            p.noStroke()
            p.square(p.mouseX, p.mouseY, p.mouseX, p.pmouseY)
            p.fill(p.pmouseX % 255 + 150, p.pmouseY % 255, p.mouseY % 255 - 100);

            // variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);
            //p.ellipse(150, 150, 50, 50);
        } else {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            //p.fill('#ffffff')
            p.square(450, 0, p.pmouseX, p.pmouseY)
        }
    };


}