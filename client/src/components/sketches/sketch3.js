export default function sketch3(p) {
    //changed this sketch to just be a repo for working through processing tutorials

    const width = 500;
    const height = 1000;

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

    let noiseScale = 0.002
    let noiseScale2 = 0.002

    p.draw = function () {
        // when the background isn't drawn you see all the trace movements of the previous drawings
        p.noFill();
        p.noStroke()
        //p.stroke(255);
        p.strokeWeight(2);
        p.background("orange");

        p.stroke(255)
        //circles that follow the mouse around. bring back in another sketch
        // for (let i = 0; i < 10; i++) {
        //     p.ellipse(p.mouseX + p.sin(xpos) * p.random(100), p.mouseY + p.sin(ypos) * p.random(100), 15, 15); /// alt with speed, 15,15 - which is the size of the dot
        //     //this gives a jitter //p.random(-0.05, 0.05);
        //     xpos += 0.005 // + p.random() * 0.05;
        //     ypos += 0.004 // + p.random() * 0.05;
        // }



        p.translate(p.width / 2, p.height / 4) // added this so it would draw vertexes from the center of the canvas
        //kaliedescope vertice drawing /// change out p.angleMode(p.DEGREES) and take away background color for a different effect 
        p.beginShape();
        let spacing = p.map(p.mouseX, 0, width / 2, 5, 10)
        //let spacing = p.map(p.mouseX, 0, width, 5, 100) //originally this was this
        //console.log(spacing)
        let circleWidth2 = p.map(p.mouseY, 0, p.width, 50, 180)

        //setting up a bit of a condition so a line maintains a circle -- but only on the left side of the x 0 axis...
        if (spacing > 12.34) {
            spacing = 12.84
        }
        //this is to keep the circle drawing form disappearing. but if you DO want to show it being drawn out and not closed, just take this second condition check away. 
        // if (spacing < 6.4) {
        //     spacing = 6.4
        // }

        for (let a = 0; a < 360; a += spacing) {
            let x = circleWidth2 * p.sin(a);
            let y = circleWidth2 * p.cos(a); //this is a bit of a hack to get the two circles to line up. investigate this later for a better solution. the translate function should be working globally but isn't quite working....
            p.vertex(x + p.noise(x * noiseScale) * 10, y + p.noise(y * noiseScale) * 10);
        }

        p.endShape();
        noiseScale += 0.0001

        p.beginShape();
        //p.push()

        p.stroke(255, 100)

        let spacing2 = p.map(p.mouseY / 2, 0, width, 1, 7)

        // if (spacing2 > 12.34) {
        //     spacing2 = 12.84
        // }
        console.log(spacing2)

        for (let a = 0; a < 360; a += spacing2) {
            let x = 200 * p.sin(a);
            let y = 200 * p.cos(a);
            p.vertex(x + p.noise(x * noiseScale) * 10, y + p.noise(y * noiseScale) * 10);
        }
        //p.pop()
        p.endShape();


        p.beginShape();
        //p.push()
        //p.translate(15, 20) // i shouldn't need to do this but....
        //var lineColor = p.color(p.noise(noiseScale2) + p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255)
        //lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
        //p.stroke(lineColor)
        p.stroke(255)
        // p.noStroke()
        let spacing3 = p.map(p.mouseX, 0, p.width, 1, 10)
        let circleWidth = p.map(p.mouseX, 0, p.width, 50, 150)
        // if (spacing3 > 5.0) {
        //     spacing3 = 5.0
        // }
        // if (spacing3 < 3.3) {
        //     spacing3 = 3.3
        // }
        console.log(circleWidth)
        // if (circleWidth > 190) {
        //     circleWidth = 190;
        // }

        //console.log(spacing3)
        //p.vertex(p.mouseY * p.sin(0), 200)
        for (let a = 0; a < 360; a += spacing3) {
            //p.rotate(p.PI / p.mouseX)
            let x = circleWidth * p.sin(a);
            let y = circleWidth * p.cos(a);

            // let y = 200 * p.cos(a); //* p.cos(a);
            // p.vertex(x + p.noise(x * noiseScale2) * 10, y + p.noise(y * noiseScale2) * 10);
            //p.bezierVertex(0, 0, x, y, 10 + x, 10 + y)
            //this noise numbering actually takes away the symmetry of the smaller graphics so..... maybe not so useful. 
            p.vertex(x + p.noise(x * noiseScale2) * 10, y + p.noise(y * noiseScale2) * 10)

        }
        //p.vertex(p.mouseY * p.sin(100), 200 * p.cos(100))

        noiseScale2 += 0.0001
        p.endShape();


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


//let speed = p.abs(p.mouseX - p.pmouseX) + p.abs(p.mouseY - p.pmouseY);
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

// var lineColor = p.color('white')
// lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
// p.fill(lineColor)