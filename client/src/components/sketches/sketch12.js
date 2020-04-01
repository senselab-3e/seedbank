export default function sketch12(p) {

    const width = 500;
    const height = 500;
    const elementSize = 25;


    let sourceText = "To imagine existence excluded from sociality is to have a sense of how limited whiteness is—an existence so narrow as to be a mirage. And yet a mirage that blows itself out of proportion at every turn. This is the power of neurotypicality: that it can structure whole existences without itself existing as such. Whiteness is that very paradox—a mirage policed to retain that which it ultimately never had, that which it never is.";
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
        check4removal(i) {
            if (this.diam === 1) {
                circles.splice(i, 1)
            }
        }
    }

    class Word {
        constructor(x, y, fontSize, word) {
            this.x = x;
            this.y = y;
            this.fontSize = fontSize;
            this.word = word;
        }
        display() {

            p.fill('#333')
            p.noStroke()
            p.textSize(this.fontSize)
            p.text(this.word, this.x, this.y);
        }
        update() {
            // if (this.fontSize > 0) {
            //     this.fontSize -= 1;

            // }
        }
        check4removal(i) {
            // if (this.fontSize === 1) {
            //     //sentence.splice(i, 1)
            // }
        }
    }



    class Bounce {
        constructor(x, y, diam, coloring) {
            this.x = x;
            this.y = y;
            this.speed = p.random(1, 5);
            this.diam = diam;
            this.direc = 1;
            this.setColor = coloring
        }

        display() {
            this.y += this.speed * this.direc
            p.ellipse(this.x, this.y, this.diam, this.diam);
            p.fill(this.setColor, this.setColor, this.setColor);
            //console.log(this.setColor)
            // need to figure out how to give a random color assignment to each bounce but when the instance is being continually drawn in the function draw, its calling the random function over and over. 
        }
        update() {
            if (this.y > height) {
                this.direc = -1
                this.diam -= 1
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
                bounces.splice(i, 1)
            }
        }
    }


    let circles = [];
    let bounces = [];
    let sentenceParts = sourceText.split(' ');
    let words = [];
    //let ducks = []

    p.setup = function () {
        p.createCanvas(width, height);
        // preload()
        // for (let i = 0; i < 10; i++) {
        //     // instantiating an object from the class.
        //     let newCirc = new Circle(
        //         p.random(width),
        //         p.random(height),
        //         300);
        //     circles.push(newCirc);
        // }

    }

    p.draw = function () {
        p.background('lightgreen');
        p.stroke('255')
        p.ellipseMode(p.CENTER);
        p.noFill()
        // p.text(sourceText, width / 2, height / 2)

        ///NOTE: A method is just a function that is the value for a key in an object. For example, try running this code in an empty p5.js sketch:
        for (let m = 0; m < circles.length; m++) {
            // much cleaner!
            circles[m].display();
            circles[m].update();
            circles[m].check4removal(m);
        }

        for (let n = 0; n < bounces.length; n++) {
            bounces[n].display();
            bounces[n].update();
            bounces[n].check4removal(n);

        }

        for (let o = 0; o < words.length; o++) {
            words[o].display();
        }
    }

    p.mousePressed = function () {

        let coloring = p.floor(p.random(1, 255));
        // console.log(coloring)

        // let newCirc = new Circle(p.mouseX, p.mouseY, 300, 1);
        // circles.push(newCirc);

        let newBounce = new Bounce(p.mouseX, p.mouseY, elementSize, coloring);
        bounces.push(newBounce);

        if (sentenceParts.length > 0) {
            let newWord = new Word(p.mouseX, p.mouseY, 22, sentenceParts[0])
            sentenceParts.splice(0, 1);
            words.push(newWord)
            console.log(words)
        }
    }



}