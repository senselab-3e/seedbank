export default function tutorials(p) {
    //changed this sketch to just be a repo for working through processing tutorials

    const width = 500;
    const height = 500;

    //const size = 40;'

    p.setup = function () {
        p.createCanvas(width, height);
        p.background('teal');
        p.rectMode(p.CENTER);
        p.noStroke();
        p.fill(255);
    }

    p.draw = function () {}

    p.mousePressed = function () {
        p.beginShape();
        p.vertex(p.mouseX + 100, p.mouseY + 5);
        p.vertex(p.mouseX + 200, p.mouseY + 20);
        p.vertex(p.mouseX + 16, p.mouseY + 116);
        p.vertex(p.mouseX + 50, p.mouseY + 75);
        p.vertex(p.mouseX + 25, p.mouseY + 50);
        p.endShape(p.CLOSE)

        //p.ellipse(p.mouseX, p.mouseY, 50, 25);
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