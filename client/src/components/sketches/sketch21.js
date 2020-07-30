export default function sketch21(p) {

    const propText = "What is it to move with a proposition? What does that do differently?\n\n\n THIS IS A MOVEMENT PRACTICE PROPOSITION (It should take between 1 hour to 2 hours) \n\n\n \t It is a STUDY time, so it will require TENDING time. As a proposition it also carries the quality of being a GIFT. As a gift it also carries the appetite to generate gestures of FEED-back to the process and FEEDING-forward. But we don't know in advance what feeding forward and feeding back is. we generate it in and with the practice! FIGURE: the cell as process\n TOOLS: \n \t- [ ] a colour patch to create a zone of intensity of colorality to hold and suspend a region of contrast as a way to modulate the field for engagement into an acossioning of experience moving this way this time.\n \t- [ ] a bag to fill with water. preferably warm and cold water to experiment with different temperature as contrasts.\n \t- [ ] one or two pieces of fabric with interesting colour and texture or that carry sparks for an affinity of tonality with the capacity to lure a RELATION DIAGRAM: every movement proposition should take around 15-20 minutes but feel free to shorten and//or expand but keep it time limited so that it finds itself in THIS way, THIS time.\n\n";
    let splitpropText = p.split(propText, ' ');
    const secondText = ["MOVEMENT PROPOSITION #1: FLUIDS\n *note: consider study as movement and movement as study already yet practice modalities and try to catch the transversal! *note: stop at any time and go for water or wander around, then come back. practice an immersion that does not detach itself from surroundings.\n\n STUDY To build a relation with environment as fluid. environment not necessarily an external. not necessarily internal either. -Watch a small part of this video: https://youtu.be/URUJD5NEXC8’\n -Try to build a relation with the fluid consistency that the video makes come forth.\n -See what else sparks from there, it can be resistances too.\n\n MOVEMENT\n Preparation of the field: fill one or two or three or five bags of water with different temperatures that are amicable when in contact with skin. -Play with the fabulatory concept of fluidity.\n -Start by walking and pausing. (you can also sit or lay down if that's a more intuitive pull for you)\n\n \t-Think-Feel FLUIDITY\n\n \t-Take time to feel fields of affectation of FLUIDITY.\n -we are not encountering fluidity as a metaphor of something else. we are trying to play with ACTUAL/VIRTUAL fluidity\n as a tapping into a process that is active unfolding and folding constantly.\n -play with the affectations as minuscule they may be felt. \n \t-move around the feelings feeling and try to feel how that feels\n \t-keep moving around\n \t-at some point when movement is moving; reach toward the bags filled with water.\n \t-PLAY with the bags, rolling them, placing them, sliding them one by one or more than one at a time around different bodying relations. see how it feels differently and consider if you can move it around perhaps even toward a togetherness of the already movement moving. -PRACTICE different relations.\n \t-Remember to PAUSE. And practice different velocities of encounter.\n -Tend and attune to when a singularizing RELATION starts building its own proposition. Attune to the proposition's mode of life. or life-ing. \n \t-Carry the proposition around in movement. Feel it's peak. Feel its time signature. Feel its limit. Feel its shifting point. -SHIFT either as a gradual tending to another FORM-ing nascent proposition or as a JUMP to an urgent CONTRAST with a relevant necessity to be moved.\n -Try some music on, recommended: Album 'VRIOON' by Alva Noto Ryuichi Sakamoto\n -Try in silence again.\n -Let the differences percolate.\n \t-Find a surface where to rest the movements.\n -Collect final notes and thinking-feeling occurrences.\n \t-End of proposition #1\n\n STUDY (5 minutes)\n carry the movements moving into a drawing, sketch, written dancing wordings, or a sip of coffee or tea."]
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
            this.opacity = 255;
        }
        display() {
            let c = p.color(15, 26, 102, this.opacity);
            //the fourth value is the alpha /// it can be extracted by passing c in to p.alph(c)
            p.fill(c)
            p.ellipse(this.x + p.random(-14, 14), this.y - this.steps, this.diam, this.diam);
        }
        update() {

            this.steps *= 1 + p.noise(2)
            // if (this.diam < 250) {
            //     this.diam += 1 //this.steps;
            //     //p.filter(p.BLUR, 1);  
            //     //this.steps += 1
            // }
            // if (this.opacity >= 0) {
            //     this.opacity -= 1;
            // }
        }
        check4removal(i) {
            //console.log(circles.length)
            // if (this.diam === 1) {
            //     circles.splice(i, 1)
            // }
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

    class Perlin {
        constructor(x, y, diam, steps, word) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
            this.word = word
        }
        display() {
            var x = this.x * p.noise(this.steps);
            var y = this.y * p.noise(this.steps + 5);
            var r = 255 * p.noise(this.steps + 10);
            var g = 255 * p.noise(this.steps + 15);
            var b = 255 * p.noise(this.steps + 20);

            p.noStroke();
            p.fill(r, g, b);
            // to expedite testing i repaced the ellipses to texts but it should get it's own object
            // p.ellipse(x, y, this.diam, this.diam);

            p.textSize(27)
            p.text(this.word, x, y)
        }
        update() {
            this.steps += 0.01;

        }
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
            p.push()
            p.textSize(this.fontSize);
            p.text(this.word, this.x, this.y);
            p.pop()
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
    let perlins = [];
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
        // p.noFill()
        // p.push()
        //p.textFont('Georgia');
        //p.push();
        // p.fill(p.random(255), p.random(255), p.random(255))
        //p.pop();
        //p.textSize(14)
        // p.text(letter, x, 300)
        // p.fill('#333')
        //p.text('THIS IS A MOVEMENT PRACTICE PROPOSITION \n(It should take between 1 hour to 2 hours)', width / 6, height / 2)
        // p.pop()
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
        p.background("255"); // fade the background by giving it a low opacity
        //p.stroke("255");
        p.noStroke()
        p.ellipseMode(p.CENTER);
        p.push()
        p.textSize(10)
        p.fill('#333')
        p.text('THIS IS A MOVEMENT PRACTICE PROPOSITION \n (It should take between 1 hour to 2 hours)', width / 4, height / 2)
        p.pop()
        p.noFill();
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

        for (let m = 0; m < perlins.length; m++) {
            perlins[m].display();
            perlins[m].update();
        }

        //if someone is resting their movement, draw circles
        // if (p.mouseX === p.pmouseX && p.mouseY === p.pmouseY) {
        //     let newCirc = new Circle(p.mouseX, p.mouseY, 30, 1);
        //     circles.push(newCirc);
        // }

        //is someone is moving, draw circles
        if (p.mouseX !== p.pmouseX && p.mouseY !== p.pmouseY) {
            let newCirc = new Circle(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 5, 1);
            //let newCirc2 = new Circle(p.mouseX, p.mouseY, 20, 30);
            circles.push(newCirc);
            //circles.push(newCirc2);
        }
    };

    let previousPos = [{
        x: 0,
        y: 0
    }];

    p.mousePressed = function () {
        //let letter = sentence.charAt(i)

        if (splitpropText.length > 0) {
            let newWord = new Perlin(p.mouseX, p.mouseY, 5, 0, splitpropText[0]);

            perlins.push(newWord);
            //console.log(words)
        }
        splitpropText.splice(0, 1);

        let newPerlin = new Perlin(p.mouseX, p.mouseY, 5, 0);
        perlins.push(newPerlin)
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

        // if (sentenceParts.length > 0) {
        //     let newWord = new Word(p.mouseX, p.mouseY, 52, sentenceParts[0]);
        //     sentenceParts.splice(0, 1);
        //     words.push(newWord);
        //     //console.log(words)
        // }
    };
}