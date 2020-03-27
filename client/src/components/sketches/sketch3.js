export default function sketch3(p) {
    //changed this sketch to just be a repo for working through processing tutorials

    const width = 500;
    const height = 500;

    //const size = 40;

    p.setup = function () {
        p.createCanvas(width, height);
        //p.background("orange");
        //p.angleMode(p.DEGREES); /// -->  full way round the circle /// using raidans
        //which is different then the default mode
        //p.frameRate(10);
        p.background("orange");
        p.ellipse(100, 100, 5, 5);
        //for (let i = 0; i < 14; i++) {
        //the number multiplied by random gets me the size of the canvas

        //}
    }

    let xpos = 0; /// this needed to sit outside the draw function. 
    let ypos = 0;

    p.draw = function () {
        // when the background isn't drawn you see all the trace movements of the previous drawings
        p.noFill();
        p.noStroke()
        //p.stroke(255);
        p.strokeWeight(2);
        p.background("orange");
        //frame count can only grow linearly so it's not super helpful for animations
        //p.ellipse(p.frameCount, 200, 100, 50 + (p.frameCount / 2));
        // p.ellipse(p.frameCount, 200, 100, 50 + (p.frameCount % 30) * 10, 50);
        //p.ellipse(width / 2, height / 2, (p.frameCount % 30) * 5, 160);
        //ellipse(200, 200, 100+(sin(frameCount)*50), 100);
        ///To make the oscillation slower, we need to divide the frameCount value by some other value. Let’s make it ten times slower by dividing by ten:
        // p.ellipse(width / 2, height / 2, 100 + (p.sin(p.frameCount / 10) * 50), 100);
        // for (let i = 0; i < 5; i++) {
        //     p.ellipse(width / 2 + p.sin(p.frameCount / 20) * 130,
        //         height / 3 + (i * 50), 40, 40);
        // }
        // for (let i = 0; i < 5; i++) {
        //     p.fill(p.mouseX % 255);
        //     p.ellipse(
        //         p.mouseX + (p.sin(p.frameCount / (i + 10)) * (i + 70)),
        //         p.mouseY - 70 + (i * 50),
        //         40,
        //         40);
        // }


        let speed = p.abs(p.mouseX - p.pmouseX) + p.abs(p.mouseY - p.pmouseY);
        //p.ellipse(x + p.random(-extra, extra), y, speed, speed);
        //sin is a better oscillation technique then dividing by frame rate 
        //for (let i = 0; i < 4; i++) {

        /// like a firefly

        // var lineColor = p.color('white')
        // lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
        // p.fill(lineColor)
        // for (let i = 0; i < 5; i++) {
        //     p.ellipse(p.mouseX + p.sin(xpos) * 100, p.mouseY + p.sin(ypos) * 100, 15, 15); /// alt with speed, 15,15 - which is the size of the dot
        //     //this gives a jitter //p.random(-0.05, 0.05);
        //     xpos += 0.05 + p.random() * 0.05;
        // }

        // ypos += 0.04 + p.random() * 0.05; 
        //firefly

        var lineColor = p.color('white')
        lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
        p.fill(lineColor)
        for (let i = 0; i < 5; i++) {
            p.ellipse(p.mouseX + p.sin(xpos) * p.random(100), p.mouseY + p.sin(ypos) * p.random(100), speed + 5, speed + 5); /// alt with speed, 15,15 - which is the size of the dot
            //this gives a jitter //p.random(-0.05, 0.05);
            xpos += 0.005 // + p.random() * 0.05;
            ypos += 0.004 // + p.random() * 0.05;
        }

        //ypos += 0.04 + p.random() * 0.05; //p.random(-0.04, 0.04);
        //}



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