///This is an oldschool JS function approach ---> but using object methods and object factories with NEW is a better approach. this is just to refamialiarize

export default function tutorials(p) {
    //changed this sketch to just be a repo for working through processing tutorials

    const width = 500;
    const height = 500;
    const elementSize = 15;
    var elementObjs = [];

    p.setup = function () {
        p.createCanvas(width, height);
    }

    function shape(xpos2, ypos2, coloring, size) {
        p.fill(coloring)
        p.ellipse(xpos2, ypos2, size, size)
        //CUSTOM SHAPE
        // p.beginShape();
        // p.vertex(xpos2 + 130, ypos2 + 5);
        // p.vertex(xpos2 + 200, ypos2 + 20);
        // p.vertex(xpos2 + 100, ypos2 + 116);
        // p.vertex(xpos2 + 50, ypos2 + 75);
        // p.vertex(xpos2 + 25, ypos2 + 50);
        // p.vertex(xpos2 + 85, ypos2 + 120);

        // // p.curveVertex(xpos2 + 130, ypos2 + 5);
        // // p.curveVertex(xpos2 + 200, ypos2 + 20);
        // // p.curveVertex(xpos2 + 100, ypos2 + 116);
        // // p.curveVertex(xpos2 + 50, ypos2 + 75);
        // // p.curveVertex(xpos2 + 25, ypos2 + 50);
        // // p.curveVertex(xpos2 + 85, ypos2 + 120);
        // p.endShape(p.CLOSE)
    }

    function checkSize(i) {
        //console.log(element)
        elementObjs[i].size > 0 ? elementObjs[i].size -= 1 : removeElement(i);
    }

    function removeElement(i) {
        elementObjs.splice(i, 1)
    }


    //need to figure out how to make this reusable /// best embedded as a method 
    ///this doesn't work very efficiently. 
    // const validElement = (i) => {
    //     if (elementObjs[i]) {
    //         checkPosition(i)
    //     }
    // }

    // function checkEl(i) {
    //     if (elementObjs[i] !== undefined) {
    //         return true
    //     } else {
    //         return false
    //     };
    // }

    const modifySpeed = (i) => {
        //console.log(checkEl(i))
        if (elementObjs[i]) {
            elementObjs[i].speed *= 1.2
        }
    }

    const checkPosition = (i) => {

        if (elementObjs[i] !== undefined && elementObjs[i].ypos > height) {
            elementObjs[i].direction = -1;
            checkSize(i)
            modifySpeed(i)
        }
        if (elementObjs[i] !== undefined && elementObjs[i].ypos < 0) {
            elementObjs[i].direction = 1; // do this to get it to bounce back down
            checkSize(i)
            modifySpeed(i)
        }
        if (elementObjs[i]) {
            elementObjs[i].ypos += elementObjs[i].speed * elementObjs[i].direction;
        }

    }

    p.draw = function () {
        p.background('cornflowerblue');
        p.noStroke();
        p.ellipseMode(p.CENTER);

        ///NOTE: A method is just a function that is the value for a key in an object. For example, try running this code in an empty p5.js sketch:

        for (var i = 0; i < elementObjs.length; i++) {
            shape(elementObjs[i].xpos, elementObjs[i].ypos, elementObjs[i].fillColor, elementObjs[i].size) /// using a substring reference in a single array will  make it easier to add more then one param detail to the element // otherwise you'd need a new array each time you want to add other vars
            checkPosition(i)
        }
    }
    p.mousePressed = function () {

        var lineColor = p.color(p.mouseX % 255, p.mouseX % 255, p.mouseX % 255, )
        // adding direction information at this scale is very necessary - so that it can be tracked for each instance /// rather then thinking you can do a direction switch based on the instance's location, in the draw function, alone. this doesn't work because it will get stuck between true/false once it steps one back from the canvas height, 
        elementObjs.push({
            xpos: p.mouseX,
            ypos: p.mouseY,
            fillColor: lineColor,
            speed: p.random(1, 5),
            direction: 1,
            size: elementSize
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