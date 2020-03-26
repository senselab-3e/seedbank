//import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch9(p) {

    ///none of the touch events are being wrapped or recognized as part of the p5js library. arg
    //therefore i need to move away from the presumption that there will be mouse down and mouse up events /// 

    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(55, 232, 192);
        p.fill(255);

        // const centerX = p.width / 2;
        // const centerY = p.height / 2;
        //p.touchMoved(touchDraw)
        p.frameRate(30);
        //console.log(p.fill)

    };



    p.draw = function () {
        //p.background(55, 232, 192) /// subtracting this allows the trace position of all prior things to persist
        /* fade background */ /// if you take this away you're able to keep all the prior position animations and drawings... 
        p.noStroke();
        //--->>> bring back the on mouse down here /// currently trying to move it to another function
        // p.stroke(255);
        // p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        //p.fill(0, 0);
        // for (let i = 0; i < 5; i++) {
        //     drawSpikey(i * 4, i * 4, i * 0.01);
        //     //drawWavy(i * 4, i * 4, i * 0.01);
        //     drawBuzzy(i * -4, i * -4, i * 0.005);

        // }


        drawLines(45) // temporariy turning off
        variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);

    }

    //let trackBlurFilter = ['0']

    function variableEllipse(x, y, px, py, p) {
        //let speed = p.abs(x - px) + p.abs(y - py); //use this if i want the distribution of the dots to be based on speed and acceleration but for now... nope : P

        let ran = p.random(-50, 50);
        let extra = p.random(-10, 10)
        let conSize
        x === px && y === py ? conSize = ran : conSize = 0;

        if (x === px && y === py) {
            conSize = ran
            // trackBlurFilter.length < 500 ? trackBlurFilter.push('1') : console.log();
            // //console.log(trackBlurFilter.length)
            // trackBlurFilter.length > 100 && trackBlurFilter < 200 ? p.filter(p.BLUR, 1) : console.log(trackBlurFilter.length);
        } else {
            conSize = 0
        }

        //p.stroke(speed);
        p.noStroke()
        //p.fill(p.pmouseX % 95, p.pmouseY % 15, p.mouseY % 255);
        p.fill('#ffffff');
        if (p.mouseIsPressed === true) {
            p.filter(p.BLUR, 1);
            //p.fill('#ffffff');
            p.ellipse(x + p.random(-30, 30), y + p.random(-30, 30), conSize + extra, conSize + extra);
        } else {
            //p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
            p.ellipse(x + p.random(-30, 30), y + p.random(-30, 30), conSize, conSize);
            //p.fill(p.pmouseX % 95, p.pmouseY % 15, p.mouseY % 255);
            //p.ellipse(x, y, speed, speed);
        }

    }


    function drawLines(distance) {
        //var d = distance; // 
        //p.stroke(60, 232, 192)
        //p.stroke('#ffffff')

        var lineColor = p.color('#ffffff')
        lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
        p.stroke(lineColor)
        // p.noFill()
        //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);


        // if (p.mouseIsPressed === true) {

        //     p.filter(p.BLUR, 1);
        //     //     // p.line(p.mouseX, 55, p.mouseX, p.pmouseY);
        //     //     variableEllipse(p.mouseX + p.random(-d, d), p.mouseY + p.random(-d, d), p.pmouseX, p.pmouseY, p);
        //     //     //p.ellipse(p.mouseX + p.random(-r, r), p.mouseY + p.random(-r, r), r3 + p.random(-r, r), r3 + p.random(-r2, r2));

        // } else {
        //     //     // p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        // }
    }


    // function drawStriations(distance) {
    //     var d = distance; // 
    //     //p.stroke(60, 232, 192)
    //     p.stroke('#ffffff')
    //     // p.noFill()
    //     //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    //     p.line(p.mouseX + p.random(-d, d), p.mouseY, p.pmouseX, p.pmouseY);


    //     // if (p.mouseIsPressed === true) {
    //     //     // p.line(p.mouseX, 55, p.mouseX, p.pmouseY);
    //     //     variableEllipse(p.mouseX + p.random(-d, d), p.mouseY + p.random(-d, d), p.pmouseX, p.pmouseY, p);
    //     //     //p.ellipse(p.mouseX + p.random(-r, r), p.mouseY + p.random(-r, r), r3 + p.random(-r, r), r3 + p.random(-r2, r2));

    //     // } else {
    //     //     // p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    //     // }
    // }



}