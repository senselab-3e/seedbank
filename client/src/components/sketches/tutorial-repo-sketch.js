export default function tutorials(p) {
    //changed this sketch to just be a repo for working through processing tutorials

    const width = 500;
    const height = 500;
    //var hasClicked = false;
    // var xpos = 0;
    // var ypos = 0;
    //var rectXY = [];
    var rectObjs = [];
    //const size = 40;'
    let xdirection = 1;

    p.setup = function () {
        p.createCanvas(width, height);
        //p.background('teal');

    }

    function shape(xpos2, ypos2, coloring) {
        //console.log(coloring)
        p.fill(coloring)

        p.beginShape();
        p.vertex(xpos2 + 130, ypos2 + 5);
        p.vertex(xpos2 + 200, ypos2 + 20);
        p.vertex(xpos2 + 100, ypos2 + 116);
        p.vertex(xpos2 + 50, ypos2 + 75);
        p.vertex(xpos2 + 25, ypos2 + 50);
        p.vertex(xpos2 + 85, ypos2 + 120);
        //p.vertex(p.mouseX + 125, p.mouseY + 20);

        //p.curveVertex(xpos2 + 30, ypos2 + 5);
        p.curveVertex(xpos2 + 130, ypos2 + 5);
        p.curveVertex(xpos2 + 200, ypos2 + 20);
        p.curveVertex(xpos2 + 100, ypos2 + 116);
        p.curveVertex(xpos2 + 50, ypos2 + 75);
        p.curveVertex(xpos2 + 25, ypos2 + 50);
        p.curveVertex(xpos2 + 85, ypos2 + 120);
        p.endShape(p.CLOSE)
    }



    p.draw = function () {
        p.background('teal');
        p.noStroke();
        p.rectMode(p.CENTER);
        //p.fill('255');
        // if (hasClicked) {
        //     //p.rect(xpos, ypos, 50, 25);
        //     shape(xpos, ypos)
        //     ypos += 1;
        // }
        for (var i = 0; i < rectObjs.length; i++) {
            //let speed = p.abs(p.mouseX - p.pmouseX) + p.abs(p.mouseY - p.pmousey);
            shape(rectObjs[i].xpos, rectObjs[i].ypos, rectObjs[i].fillColor) /// using a substring reference in a single array will  make it easier to add more then one param detail to the element // otherwise you'd need a new array each time you want to add other vars
            //ect(rectXY[i][0], rectXY[i][1], 50, 25 //// The beauty of this is that we can easily add a third attribute to each rectangle simply by adding a third element to the array that we add to the rectXY array on each click. I
            //rectObjs[i].ypos -= rectObjs[i].speed;
            //console.log(rectObjs[i].ypos > height || rectObjs[i].ypos < 0)

            rectObjs[i].ypos += rectObjs[i].speed * xdirection;

            if (rectObjs[i].ypos > height) {
                xdirection *= -1;
                //rectObjs[i].ypos = rectObjs[i].speed * -1; // this makes it look back up to the top....
            }
            if (rectObjs[i].ypos < 0) {
                xdirection = 1;
            }

            // if(rectObjs[i].ypos > height || rectObjs[i].ypos < ballRadius) {
            //     dy = -dy;
            // }

        }
        // for (var m = 0; m < rectObjs.length; m++) {
        //     if (rectObjs[m].ypos > height) {
        //         //rectObjs.splice(i, 1);
        //         rectObjs[m].ypos -= rectObjs[m].speed;
        //     } else if (rectObjs[i].ypos < 0) {
        //         rectObjs[m].ypos += rectObjs[m].speed;
        //     }
        // }

    }
    p.mousePressed = function () {
        // hasClicked = true;
        // xpos = p.mouseX;
        // ypos = p.mouseY;


        var lineColor = p.color(p.mouseX % 255, p.mouseY % 255, p.mouseX % 255, )
        //lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));

        rectObjs.push({
            xpos: p.mouseX,
            ypos: p.mouseY,
            fillColor: lineColor,
            speed: p.random(1, 5)
        });

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