export default function tutorials(p) {
    //changed this sketch to just be a repo for working through processing tutorials

    const width = 500;
    const height = 500;
    var hasClicked = false;
    var xpos = 0;
    var ypos = 0;
    //const size = 40;'

    p.setup = function () {
        p.createCanvas(width, height);
        //p.background('teal');

    }

    function shape(xpos2, ypos2) {
        //console.log(xpos2)

        p.beginShape();
        p.vertex(xpos2 + 130, ypos2 + 5);
        p.vertex(xpos2 + 200, ypos2 + 20);
        p.vertex(xpos2 + 100, ypos2 + 116);
        p.vertex(xpos2 + 50, ypos2 + 75);
        p.vertex(xpos2 + 25, ypos2 + 50);
        p.vertex(xpos2 + 85, ypos2 + 120);
        //p.vertex(p.mouseX + 125, p.mouseY + 20);

        // p.curveVertex(p.mouseX + 30, p.mouseY + 5);
        // p.curveVertex(p.mouseX + 130, p.mouseY + 5);
        // p.curveVertex(p.mouseX + 200, p.mouseY + 20);
        // p.curveVertex(p.mouseX + 100, p.mouseY + 116);
        // p.curveVertex(p.mouseX + 50, p.mouseY + 75);
        // p.curveVertex(p.mouseX + 25, p.mouseY + 50);
        // p.curveVertex(p.mouseX + 85, p.mouseY + 120);
        p.endShape(p.CLOSE)
    }



    p.draw = function () {
        p.background('teal');
        p.noStroke();
        p.rectMode(p.CENTER);
        p.fill('255');
        if (hasClicked) {
            //p.rect(xpos, ypos, 50, 25);
            shape(xpos, ypos)
            ypos += 1;
        }
    }
    p.mousePressed = function () {
        hasClicked = true;
        xpos = p.mouseX;
        ypos = p.mouseY;
    }

}



// const width = 500;
//const height = 500;
// p.setup = function () {
//     p.createCanvas(width, height);
//     //p.background("orange");
//     p.angleMode(p.DEGREES); /// -->  full way round the circle /// using raidans
//     //which is different then the default mode
// }
// p.draw = function () {
//     p.stroke(255);
//     p.noFill();
//     p.background("orange");
//     p.strokeWeight(4); //withought the stroke weight of 4 you can't see the points ( at say weight 1 )
//     p.point(100, 200)

//     p.point(p.mouseX, p.mouseY);
//     p.point(150, 50);
//     p.point(250, 60);
//     p.point(300, 200);
//     //points are controlling the entry of the curve
//     p.beginShape();

//     //kaliedescope vertice drawing /// change out p.angleMode(p.DEGREES) and take away background color for a different effect 

//     let spacing = p.map(p.mouseX, 0, width, 5, 100)
//     for (let a = 0; a < 360; a += spacing) {
//         let x = 100 * p.sin(a) + 200;
//         let y = 100 * p.cos(a) + 200;
//         p.vertex(x, y);
//     }


//     p.endShape(p.CLOSE);
// };