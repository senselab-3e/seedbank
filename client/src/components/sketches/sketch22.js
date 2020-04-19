export default function sketch22(p) {
    const width = 500;
    const height = 500;
    //Bring this back when you bring back the bounce class
    const elementSize = 25;

    class Bounce {
        constructor(x, y, diam, coloring) {
            this.x = x;
            this.y = y;
            this.speed = p.random(1, 5);
            this.diam = diam;
            this.direc = 1;
            this.setColor = coloring;
            this.random = p.random(255)
            this.random2 = p.random(255)
            this.random3 = p.random(255)

        }

        display() {
            this.y += this.speed * this.direc
            p.ellipse(this.x, this.y, this.diam, this.diam);
            p.fill(this.random,
                this.random2,
                this.random3)
            p.noStroke()

            // the very last element in the array is for some reason, getting its fill color redrawn with whatever the fill color switching is, of circle. 
            //p.stroke(this.setColor, 60, 200);
            //console.log(this.setColor)
            // need to figure out how to give a random color assignment to each bounce but when the instance is being continually drawn in the function draw, its calling the random function over and over.
        }
        update() {
            if (this.y > height) {
                if (this.diam > -1) {
                    this.diam -= 1

                }
                this.direc = -1
                this.speed *= 1.2
            }
            if (this.y < 0) {
                this.direc = 1
                this.diam -= 1
                this.speed *= 1.2
            }
        }
        check4removal(i) {
            if (this.diam === 0) {
                // i have removed this... however imperfectly, because the first instance of the bounces is always flickering with fill color changes, that are being triggered in the Circles constructor. isolating the first instance wasn't working, so this is a hack method to just have the same first instance never be removed, but just eventually not be visible. but it's of course not ideal
                //bounces.splice(i, 1)
            }
        }
    }

    class Circle {
        constructor(x, y, diam, steps) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
            this.r = p.random(255)
            this.g = p.random(255)
            this.b = p.random(255)
            //this.color = p.color(this.r, this.g, this.b, this.opacity);
        }
        display() {
            //let c = p.color(15, 26, 102, this.opacity);
            //let c = this.color;
            //this keeps on assigning a new color to each circle. not ideal. 
            let c = p.color(this.r, this.g, this.b); // I removed the opacity value from here...
            //the fourth value is the alpha /// it can be extracted by passing c in to p.alph(c)


            p.fill(c)
            p.ellipse(this.x, this.y + this.steps, this.diam, this.diam);
        }
        update() {

            if (this.diam < 250) {
                this.diam += 1 //this.steps;
                //p.filter(p.BLUR, 1);  
                //this.steps += 1
            }
            // if (this.opacity >= 0) {
            //     this.opacity -= 1;
            // }
        }
        check4removal(i) {
            //console.log(circles.length)
            if (this.diam === 1) {
                circles.splice(i, 1)
            }
            if (this.opacity === 0) {
                circles.splice(i, 1)
            }
        }

        checkNumItems() {
            if (circles.length > 50) {
                circles.splice(0, 1);

            }
            // console.log(circles.length)
        }
    }

    class Perlin {
        constructor(x, y, diam, steps) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
        }
        display() {
            var x = width * p.noise(this.steps);
            var y = height * p.noise(this.steps + 5);
            var r = 255 * p.noise(this.steps + 10);
            var g = 255 * p.noise(this.steps + 15);
            var b = 255 * p.noise(this.steps + 20);

            p.noStroke();
            p.fill(r, g, b);
            p.ellipse(x, y, this.diam, this.diam);
        }
        update() {
            this.steps += 0.01;

        }
    }






    let circles = [];
    let bounces = [];

    let perlins = [];




    // this function can be used to remove items if they exceed a certain number//
    p.checkNumItems = function (arrayName) {
        if (arrayName.length > 50) {
            arrayName.splice(0, 1)
            //console.log(arrayName[0].diam)
            //circles[0].diam -= 1
        }
    }

    p.setup = function () {
        p.createCanvas(width, height);
        p.background(255);
        //p.noFill()
        //p.frameRate(13) //this value needs to be an integer, not a string number
        // preload()
        // for (let i = 0; i < 10; i++) {
        //     // instantiating an object from the class.
        //     let newCirc = new Circle(
        //         p.random(width),
        //         p.random(height),
        //         300);
        //     circles.push(newCirc);
        // }
    };

    p.draw = function () {
        p.background(255); // fade the background by giving it a low opacity
        //p.stroke("255");
        p.noStroke()
        p.ellipseMode(p.CENTER);
        //p.noFill()


        //p.noFill();
        // p.text(sourceText, width / 2, height / 2)

        ///NOTE: A method is just a function that is the value for a key in an object. For example, try running this code in an empty p5.js sketch:
        for (let m = 0; m < circles.length; m++) {
            // much cleaner!
            circles[m].display();
            circles[m].update();
            circles[m].check4removal(m);
            // if (0 === m) { /// this fails to effect the p.fill that is still overriding the first element in the array with the other elements color information

            //     circles[0].r = 0;
            //     circles[0].g = 0;
            //     circles[0].b = 0;
            //     console.log(circles[0]);
            // }
            //checkNumItems();
        }

        p.checkNumItems(circles);
        //even when i'm trying to be sneaky, and not display the last bounce in, it still flickers through the fill color
        for (let n = 0; n < bounces.length; n++) {
            bounces[n].display();
            bounces[n].update();
            bounces[n].check4removal(n);
        }



        for (let m = 0; m < perlins.length; m++) {
            perlins[m].display();
            perlins[m].update();
        }

        //if someone is resting their movement, draw circles
        if (p.mouseX === p.pmouseX && p.mouseY === p.pmouseY) {
            let newCirc = new Circle(p.mouseX, p.mouseY, 30, 1);
            circles.push(newCirc);
        }

        //is someone is moving, draw circles
        if (p.mouseX !== p.pmouseX && p.mouseY !== p.pmouseY) {
            // let newCirc = new Circle(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 5, 1);
            //      --//let newCirc2 = new Circle(p.mouseX, p.mouseY, 20, 30);
            //circles.push(newCirc);
            //circles.push(newCirc2);
        }
    };



    p.mousePressed = function () {

        let newPerlin = new Perlin(p.mouseX, p.mouseY, 5, 0);
        perlins.push(newPerlin)
        let coloring = p.floor(p.random(1, 255)); /// not actually being used right now. i want the color to be static
        // console.log(coloring)

        // let newCirc = new Circle(p.mouseX, p.mouseY, 150, 1);
        // circles.push(newCirc);


        let newBounce = new Bounce(p.mouseX, p.mouseY, elementSize, coloring);
        bounces.push(newBounce);
        console.log(bounces.length)

    };
}