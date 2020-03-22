export default function sketch4(p) {
    var centerX = 0.0,
        centerY = 0.0;

    var radius = 23,
        rotAngle = -1;
    var accelX = 0.0,
        accelY = 0.0;
    var deltaX = 0.0,
        deltaY = 0.0;
    var springing = 0.009,
        damping = 0.9;

    //corner nodes
    var nodes = 37;

    //zero fill arrays
    var nodeStartX = [];
    var nodeStartY = [];
    var nodeX = [];
    var nodeY = [];
    var angle = [];
    var frequency = [];
    var width = 500;
    var height = 500;

    // soft-body dynamics
    var organicConstant = 1.0;


    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(0);

        centerX = width / 2;
        centerY = height / 2;

        for (var i = 0; i < nodes; i++) {
            nodeStartX[i] = 0;
            nodeStartY[i] = 0;
            nodeY[i] = 0;
            nodeY[i] = 0;
            angle[i] = 0;
        }

        for (let i = 0; i < nodes; i++) {
            frequency[i] = p.random(5, 12);
        }

        //p.noStroke();
        //p.frameRate(20);

    };

    p.draw = function () {
        p.background(55, 232, 192)
        /* fade background */
        p.stroke(255);
        p.fill(0, 0);
        p.rect(0, 0, width, height);
        for (let i = 0; i < 5; i++) {
            drawSpikey(i * 4, i * 4, i * 0.01);
            //drawWavy(i * 4, i * 4, i * 0.01);
            drawBuzzy(i * -4, i * -4, i * 0.005);
        }
        moveShape();
        if (p.mouseIsPressed === true) {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);

        }
    }

    function drawSpikey(offsetX, offsetY, rate) {
        //let spacer = 0
        //  calculate node  starting locations
        for (let i = 0; i < nodes; i++) {
            /* spacer += i*0.002 */
            nodeStartX[i] = centerX + p.cos(p.radians(rotAngle)) * radius;
            nodeStartY[i] = centerY + p.sin(p.radians(rotAngle)) * radius;
            rotAngle += 360.0 / nodes;
        }
        /* change to 220 */
        // draw polygon
        p.curveTightness(organicConstant);
        p.fill(237, 34, 93);
        p.beginShape();
        let spacer2 = 0;
        for (let i = 0; i < nodes; i++) {
            spacer2 += i;
            p.curveVertex((nodeX[i] + 0.4 * (100 * p.sin(nodeX[i] * (rate + p.PI / nodes))) + offsetX), (nodeY[p.floor(spacer2 /
                2)] + 0.4 * (100 * p.cos(nodeY[i] * (rate + p.PI / nodes))) + offsetY));
            p.curveVertex(nodeX[i] + 0.4 * (p.sin(nodeX[i] * (rate + p.PI / nodes))) + offsetX, nodeY[p.floor(spacer2 / 2)] + 0.4 *
                (p.cos(nodeY[i] * (rate + p.PI / nodes))) + offsetY);
        }
        p.endShape(p.CLOSE);

    }



    function drawBuzzy(offsetX, offsetY, rate) {
        p.curveTightness(organicConstant);
        p.fill(283, 54, 197);
        p.beginShape();
        var spacer2 = 0;
        for (let i = 0; i < p.floor(nodes / 2); i++) {
            spacer2 += i * 2;
            p.curveVertex((nodeX[i] + offsetX + 0.4 * (15 * p.sin(nodeX[i * 2] * (rate + p.PI / nodes)))) - (400 + 200 * p.abs(
                accelX * 0.2)) * p.sin(((p.frameCount % 360) * (p.PI / 360) + deltaX)), (nodeY[i * 2] + offsetY + 0.4 * (15 *
                p.cos(nodeY[i * 2] * (rate + p.PI / nodes))) - (100 + 200 * p.abs(accelY * 0.2)) * p.cos(((p.frameCount % 360) * (
                p.PI / 360) + deltaY))));
            p.curveVertex((nodeX[i] + offsetX + 0.2 * (15 * p.sin(nodeX[i * 2] * (rate + p.PI / nodes)))) - (400 + 200 * p.abs(
                accelX * 0.2)) * p.sin(((p.frameCount % 180) * (p.PI / 360) + deltaX)), (nodeY[i * 2] + offsetY + 0.2 * (15 *
                p.cos(nodeY[i * 2] * (rate + p.PI / nodes))) - (100 + 200 * p.abs(accelY * 0.2)) * p.cos(((p.frameCount % 180) * (
                p.PI / 360) + deltaY))));

        }
        p.endShape(p.CLOSE);
    }

    function moveShape() {
        //move center point
        deltaX = (p.mouseX - centerX) * 0.5;
        deltaY = (p.mouseY - centerY) * 0.5;

        // create springing effect
        deltaX *= springing;
        deltaY *= springing;
        accelX += deltaX;
        accelY += deltaY;

        // move predator's center
        centerX += accelX;
        centerY += accelY;

        // slow down springing
        accelX *= damping;
        accelY *= damping;

        // change curve tightness
        organicConstant = 0.5 - ((p.abs(accelX) + p.abs(accelY)) * 0.1);

        //move nodes
        for (var i = 0; i < nodes; i++) {
            nodeX[i] = nodeStartX[i] + p.sin(p.radians(angle[i])) * (accelX * 0.1); //originally a 2
            nodeY[i] = nodeStartY[i] + p.sin(p.radians(angle[i])) * (accelY * 0.1); //originally a 2
            angle[i] += frequency[i];
        }
    }

}