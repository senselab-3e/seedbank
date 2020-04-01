///This is an oldschool JS function approach ---> but using object methods and object factories with NEW is a better approach. this is just to refamialiarize

export default function tutorials(p) {
    //changed this sketch to just be a repo for working through processing tutorials

    const width = 500;
    const height = 500;
    const elementSize = 15;
    var elementObjs = [];
    //class definition for Circle - that acts as a constructor with var xy and diam...
    //It’s called a “class” definition because we’re defining a new “class” of object—a type of object that’s different from other types, in the same way that we might talk about the mammal “class” of animals.
    class Circle {
        constructor(x, y, diam) {
            this.x = x;
            this.y = y;
            this.diam = diam;
        }
        display() {
            p.ellipse(this.x, this.y, this.diam, this.diam);
        }
        update() {
            if (this.diam > 0) {
                this.diam -= 1;
            }
        }
    }

    class Bounce {
        constructor(x, y, diam) {
            this.x = x;
            this.y = y;
            this.speed = p.random(1, 5);
            this.diam = diam
            this.direc = 1;
        }
        display() {
            this.y += this.speed * this.direc
            p.ellipse(this.x, this.y, this.diam, this.diam);
        }
        update() {
            if (this.y > height) {
                this.direc = -1
            }
            if (this.y < 0) {
                this.direc = 1
            }
        }
    }

    function shape(xpos2, ypos2, coloring, size) {
        p.fill(coloring)
        p.ellipse(xpos2, ypos2, size, size)
    }



    let circles = [];
    let bounces = []
    //let ducks = []

    p.setup = function () {
        p.createCanvas(width, height);
        // preload()
        for (let i = 0; i < 10; i++) {
            // instantiating an object from the class.
            let newCirc = new Circle(
                p.random(width),
                p.random(height),
                300);
            circles.push(newCirc);
        }
    }

    function checkSize(i) {
        //console.log(element)
        elementObjs[i].size > 0 ? elementObjs[i].size -= 1 : removeElement(i);
    }

    function removeElement(i) {
        elementObjs.splice(i, 1)
    }

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
        p.stroke('255')
        p.ellipseMode(p.CENTER);
        p.noFill()

        ///NOTE: A method is just a function that is the value for a key in an object. For example, try running this code in an empty p5.js sketch:
        for (let m = 0; m < circles.length; m++) {
            // much cleaner!
            circles[m].display();
            circles[m].update();
        }


        for (var i = 0; i < elementObjs.length; i++) {
            shape(elementObjs[i].xpos, elementObjs[i].ypos, elementObjs[i].fillColor, elementObjs[i].size) /// using a substring reference in a single array will  make it easier to add more then one param detail to the element // otherwise you'd need a new array each time you want to add other vars
            checkPosition(i)
        }
        for (let n = 0; n < bounces.length; n++) {
            bounces[n].display();
            bounces[n].update();
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

        let newCirc = new Circle(p.mouseX, p.mouseY, 300, 1);
        circles.push(newCirc);

        let newBounce = new Bounce(p.mouseX, p.mouseY, 15);
        bounces.push(newBounce);
    }
}