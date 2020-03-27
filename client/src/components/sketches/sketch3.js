export default function sketch3(p) {
    //changed this sketch to just be a repo for working through processing tutorials

    const width = 500;
    const height = 500;

    //const size = 40;

    p.setup = function () {
        p.createCanvas(width, height);
        //p.background("orange");
        p.angleMode(p.DEGREES); /// -->  full way round the circle /// using raidans
        //which is different then the default mode

    }

    p.draw = function () {
        p.background("orange"); // when the background isn't drawn you see all the trace movements of the previous drawings
        p.noFill();
        p.stroke(255);
        p.strokeWeight(8);
        //frame count can only grow linearly so it's not super helpful for animations
        //p.ellipse(p.frameCount, 200, 100, 50 + (p.frameCount / 2));
        // p.ellipse(p.frameCount, 200, 100, 50 + (p.frameCount % 30) * 10, 50);
        p.ellipse(width / 2, height / 2, (p.frameCount % 30) * 5, 160);
        //kaliedescope vertice drawing /// change out p.angleMode(p.DEGREES) and take away background color for a different effect 
        //p.beginShape();
        // let spacing = p.map(p.mouseX, 0, width, 5, 100)
        // for (let a = 0; a < 360; a += spacing) {
        //     let x = 100 * p.sin(a) + 200;
        //     let y = 100 * p.cos(a) + 200;
        //     p.vertex(x, y);
        // }

        // p.vertex(100, 5);
        // p.vertex(200, 20);
        // p.vertex(200, 100);
        // p.vertex(50, 75);
        // p.vertex(25, 50);

        //p.curveVertex(100, 200)
        // p.curveVertex(p.mouseX, p.mouseY); ///this changes the entry point into the curve
        // p.curveVertex(100, 200);
        // p.curveVertex(150, 50);
        // p.curveVertex(250, 60);
        // p.curveVertex(300, 200);
        // p.curveVertex(300, 200);

        // p.curveVertex(100, 200); //repeating entry exit points to complete curve. imperfect because of the wrapper. it's making a hard angle 
        // p.curveVertex(100, 200);
        // p.curveVertex(150, 50);
        // p.curveVertex(250, 60);
        // p.curveVertex(300, 200);
        // p.curveVertex(300, 200);
        //p.endShape(p.CLOSE);
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

    // function drawLines() {
    //     //p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
    //     var lineColor = p.color(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255)
    //     lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
    //     p.stroke(lineColor)
    //     p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    // }

    // // function drawLines() {
    // //     //p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
    // //     var lineColor = p.color(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255)
    // //     lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
    // //     p.stroke(lineColor)
    // //     p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    // // }

    // function variableEllipse(x, y, px, py, p) {
    //     let less = 20;
    //     let extra = 10;
    //     let speed = p.abs(x - px) + p.abs(y - py);
    //     //p.stroke(speed);
    //     p.noStroke()
    //     p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
    //     p.ellipse(x + p.random(-extra, extra), y, speed, speed);
    // }

    // p.draw = function () {
    //     // let r = 20;
    //     // let r2 = 10;
    //     //let r3 = 2
    //     //p.stroke(255);
    //     //p.square(width / 9, 0, width - 10, height - 10);
    //     //p.noStroke()

    //     p.fill(0, 0);
    //     p.noStroke();
    //     //p.stroke((p.pmouseX % 255) - 100, p.pmouseY % 255, p.mouseY % 255);
    //     //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    //     //p.square(0, 100, width, size / 16);
    //     // p.square(0, 150, width, size / 16);
    //     // p.square(0, 200, width, size / 16);
    //     // p.translate(p.base.x, p.base.y);
    //     drawLines()
    //     variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p)
    //     // p.rotate(p.PI / 7.0);
    //     // if (p.mouseIsPressed === true) {
    //     //     p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);

    //     //     p.square(10, 100, width + 200, size / 13);
    //     //     p.square(10, 150, width + 200, size / 13);
    //     //     p.square(10, 200, width + 200, size / 13);
    //     //     p.rotate(p.PI / 7.0);
    //     //     // p.background(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255)
    //     // } else {
    //     //     p.square(10, 100, width + 200, size / 13);
    //     //     p.square(10, 150, width + 200, size / 13);
    //     //     p.square(10, 200, width + 200, size / 13);
    //     //     p.rotate(p.PI / 9.0);
    //     //p.line(p.mouseX, p.mouseY, p.pmouseX + p.random(-r, r), p.pmouseY + p.random(-r2, r2));
    //     //p.ellipse(p.mouseX + p.random(-r, r), p.mouseY + p.random(-r, r), r3 + p.random(-r, r), r3 + p.random(-r2, r2));

    //     //p.ellipse(p.mouseX, p.mouseY, p.pmouseX + p.random(-r, r), p.pmouseY + p.random(-r2, r2));

    //     //p.rotate(p.PI / 10.0);
    //     //p.noStroke()
    //     //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    //     //variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);
    //     //}
    // };



}