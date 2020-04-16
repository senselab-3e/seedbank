export default function sketch15(p) {
    const width = 500;
    const height = 500;
    //Bring this back when you bring back the bounce class
    //const elementSize = 25;

    let sourceText =
        "To imagine existence excluded from sociality is to have a sense of how limited whiteness is—an existence so narrow as to be a mirage. And yet a mirage that blows itself out of proportion at every turn. This is the power of neurotypicality: that it can structure whole existences without itself existing as such. Whiteness is that very paradox—a mirage policed to retain that which it ultimately never had, that which it never is.";
    //class definition for Circle - that acts as a constructor with var xy and diam...
    //It’s called a “class” definition because we’re defining a new “class” of object—a type of object that’s different from other types, in the same way that we might talk about the mammal “class” of animals.
    class Circle {
        constructor(x, y, diam, steps) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
        }
        display() {
            let c = p.color(15, 26, 102, this.opacity);
            //the fourth value is the alpha /// it can be extracted by passing c in to p.alph(c)
            p.fill(c)
            p.ellipse(this.x, this.y, this.diam, this.diam);
        }
        update() {


            // if (this.diam > 0) {
            //     this.diam -= 0.1 //this.steps;
            //     //p.filter(p.BLUR, 1);  
            // }
            if (this.opacity >= 0) {
                this.opacity -= 1;
            }
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
        // checkNumItems() {
        //     // if (circles.length > 50) {
        //     //     circles.splice(0, 1);

        //     // }
        //     // console.log(circles.length)
        // }
    }

    class Word {
        constructor(x, y, fontSize, word) {
            this.x = x;
            this.y = y;
            this.fontSize = fontSize;
            this.word = word;
            this.speed = 1;
            //this.direc = 0; //p.cos(35);
            this.alpha = 1;
            //this.stroke = "white";
            this.opacity = 255;
            this.random = p.random(255)
            this.random2 = p.random(255)
            this.random3 = p.random(255)
            //deploying this means one unique color will be assigned to each time the constructor is called // rather then it being called continually within any of the functions below
            this.firstColor = "black";
            //if i equate this.fill to this.firstColor the first element drawn will be black - but every next instance is still being stacked on top if it with the color version so it isn't seen

        }
        display() {
            //remove this below to have the text just appear where mouse clicks
            //this.y += this.speed * this.direc;
            // this.y += p.cos(30);
            // this.x += p.cos(50);
            //this.y += this.speed * this.direc * p.cos(30);

            //var fillColor = p.color("white");
            //var fillColor = p.color(128 + 128 * p.cos(p.millis() / p.random(1000, 2000)), 128 + 128 * p.sin(p.millis() / 1000), 128 + 128 * p.cos(p.millis() / 1000));
            //var fillColor = p.color(128 + 128 * p.cos(p.millis() / p.random(1000, 1500)), 128 + 128 * p.sin(p.millis() / p.random(1000, 1500)), 128 + 128 * p.cos(p.millis() / p.random(1000, 1500)));
            var fillColor = p.color(
                this.random,
                this.random2,
                this.random3,
                this.opacity
            ); //this.color;
            //the above with the p.random has a bit of a flicker a few steps back in the color choices ///
            //below does the gradient shift thing
            //var fillColor = p.color(128 + 128 * p.cos(p.millis() / 2000), 128 + 128 * p.sin(p.millis() / 500), 128 + 128 * p.cos(p.millis() / 1000));

            //fillColor.setAlpha(this.alpha)
            p.fill(fillColor);
            //p.strokeWeight(3);
            //p.noStroke()
            //var lineColor = p.color(128 + 128 * p.cos(p.millis() / p.random(1000, 2000)), 128 + 128 * p.sin(p.millis() / 1000), 128 + 128 * p.cos(p.millis() / 1000));
            //var lineColor = this.color;
            //lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
            //lineColor.setAlpha(this.alpha) //The range depends on your color mode, in the default RGB mode it's between 0 and 255.
            //p.stroke(lineColor);
            //p.noStroke()
            //p.stroke(this.stroke);
            p.textSize(this.fontSize);
            p.text(this.word, this.x, this.y);
        }
        update() {
            //   if (this.y > height) {
            //     this.direc = -5; //* p.cos(30)
            //     this.speed *= 1.2;
            //     this.fontSize -= 2;
            //     //this.alpha *= 10
            //     //this.stroke = 'black'
            //     //this.fill = 'black'
            //   }
            if (this.opacity >= 0) {
                this.opacity -= 1;
            }

            if (this.y < 5) {
                //this.direc += 3;
                //   //console.log(this.direc, 'before')
                //   this.direc = 5; //p.cos(45) //* p.sin(p.millis() / 100)
                //   //console.log(this.direc, 'after')
                //   this.speed *= 1.2;
                //   this.fontSize -= 2;
                //   //this.alpha *= 10
            }
            if (this.y < height) {
                this.fill = this.color;
                //this.stroke = 'white'
            }
        }
        check4removal(i) {
            if (this.fontSize < 0) {
                words.splice(i, 1);
            }
        }

    }

    class Vector {
        constructor(px, py, x, y, randnum) {
            this.beginX = px;
            this.beginY = py;
            this.endX = x;
            this.endY = y;
            this.distX = 0;
            this.distY = 0;
            this.exponent = 4; //determines the curve
            this.x = x;
            this.y = y;
            this.step = 0.06; // mess with this is you want more space between things
            this.pct = 0.0;
            this.random = randnum;
        }
        display() {
            //p.fill(0, 2);
            //p.rect(0, 0, width, height);
            //   p.fill(p.random(255), p.random(255), p.random(255));
            p.fill(255, 5);
            this.pct += this.step;
            this.distX = this.endX - this.beginX;
            this.distY = this.endY - this.beginY;
            //p.ellipse(this.x, this.y, 20, 20);
            //   p.beginShape();
            //   p.vertex(this.x, 20);
            //   p.vertex(this.y, 20);
            //   p.vertex(this.x, 80);
            //   p.endShape(p.CLOSE);

            //   p.beginShape();
            //   p.vertex(this.x, 20); ///p.vertex(this.x, p.random(5, width / 2));
            //   p.vertex(this.y, this.x);
            //   p.vertex(this.x, this.y);
            //   p.endShape(p.CLOSE);

            p.beginShape();

            p.quad(
                this.x + this.random,
                this.x + 31,
                this.x + 86,
                this.x + 20,
                this.random,
                this.y + 63,
                this.x + 30,
                this.y + this.random
            );

            //   p.quad(
            //     this.x - 10,
            //     this.x + 31,
            //     this.x + 20,
            //     this.y - 20,
            //     this.y + 20,
            //     this.y + 63,
            //     this.x + 30,
            //     this.y + 76
            //   );
            p.endShape();
        }
        update() {
            if (this.pct < 1.0) {
                this.x = this.beginX + this.pct * this.distX;
                this.y = this.beginY + p.pow(this.pct, this.exponent) * this.distY;
            }
        }
    }

    // class Bounce {
    //     constructor(x, y, diam, coloring) {
    //         this.x = x;
    //         this.y = y;
    //         this.speed = p.random(1, 5);
    //         this.diam = diam;
    //         this.direc = 1;
    //         this.setColor = coloring;

    //     }

    //     display() {
    //         this.y += this.speed * this.direc
    //         p.ellipse(this.x, this.y, this.diam, this.diam);
    //         p.stroke(this.setColor, 60, 200);
    //         //console.log(this.setColor)
    //         // need to figure out how to give a random color assignment to each bounce but when the instance is being continually drawn in the function draw, its calling the random function over and over.
    //     }
    //     update() {
    //         if (this.y > height) {
    //             this.direc = -1
    //             this.diam -= 1
    //             this.speed *= 1.2
    //         }
    //         if (this.y < 0) {
    //             this.direc = 1
    //             this.diam -= 1
    //             this.speed *= 1.2
    //         }
    //     }
    //     check4removal(i) {
    //         if (this.diam === 0) {
    //             bounces.splice(i, 1)
    //         }
    //     }
    // }

    let circles = [];
    let bounces = [];
    let sentenceParts = sourceText.split(" ");
    let words = [];
    let vectors = [];
    //let ducks = []


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
        p.background("teal");
        p.noFill()
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
        p.background('lightgreen');
        //p.stroke("255");
        p.noStroke()
        p.ellipseMode(p.CENTER);


        //p.noFill();
        // p.text(sourceText, width / 2, height / 2)

        ///NOTE: A method is just a function that is the value for a key in an object. For example, try running this code in an empty p5.js sketch:
        for (let m = 0; m < circles.length; m++) {
            // much cleaner!
            circles[m].display();
            circles[m].update();
            circles[m].check4removal(m);
            //checkNumItems();
        }

        p.checkNumItems(circles);

        for (let n = 0; n < bounces.length; n++) {
            bounces[n].display();
            bounces[n].update();
            bounces[n].check4removal(n);
        }

        for (let o = 0; o < words.length; o++) {
            words[o].display();
            words[o].update();
            words[o].check4removal(o);
        }

        for (let k = 0; k < vectors.length; k++) {
            vectors[k].display();
            vectors[k].update();
        }

        //if someone is resting their movement, draw circles
        // if (p.mouseX === p.pmouseX && p.mouseY === p.pmouseY) {
        //     let newCirc = new Circle(p.mouseX, p.mouseY, 30, 1);
        //     circles.push(newCirc);
        // }

        //is someone is moving, draw circles
        if (p.mouseX !== p.pmouseX && p.mouseY !== p.pmouseY) {
            let newCirc = new Circle(p.mouseX, p.mouseY, 10, 1);
            circles.push(newCirc);
        }
    };

    let previousPos = [{
        x: 0,
        y: 0
    }];

    p.mousePressed = function () {
        //let coloring = p.floor(p.random(1, 255));
        // console.log(coloring)

        // let newCirc = new Circle(p.mouseX, p.mouseY, 150, 1);
        // circles.push(newCirc);

        //temporarily removing bounces
        // let newBounce = new Bounce(p.mouseX, p.mouseY, elementSize, coloring);
        // bounces.push(newBounce);
        // console.log(previousPos[0].x, "apples");

        //   let newVector = new Vector(
        //     previousPos[0].x,
        //     previousPos[0].y,
        //     p.mouseX,
        //     p.mouseY,
        //     p.random(0, width)
        //   );
        //   vectors.push(newVector);
        //   previousPos.splice(0, 1);
        //   previousPos.push({ x: p.mouseX, y: p.mouseY });

        if (sentenceParts.length > 0) {
            let newWord = new Word(p.mouseX, p.mouseY, 52, sentenceParts[0]);
            sentenceParts.splice(0, 1);
            words.push(newWord);
            //console.log(words)
        }
    };
}