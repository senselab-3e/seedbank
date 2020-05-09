import p5 from "react-p5-wrapper/node_modules/p5";

//An object at rest and an object in motion stays in motion 
//at a constant spped and direction UNLESS acted pone by an UNBALANCED force. 
// >>do al the net forces on an object add up to a non-zero.
// a force is a vector that causes an object with mass to accelerate. 

//3rd law : Force always occurs in pairs. The two forces are of equal strength, but in opposite directions

// The mass of an object is a measure of the amount of matter in the object (measured in kilograms).
// Weight, though often mistaken for mass, is technically the force of gravity on an object. From Newton’s second law, we can calculate it as mass times the acceleration of gravity (w = m * g). Weight is measured in newtons.
// Density is defined as the amount of mass per unit of volume (grams per cubic centimeter, for example).


//a Force is a vector that causes and object with mass, to accelerate

// force = mass * acceleration  // voide update
//standard
///////acc = force!
//vel.add(acc)
//loc.add(vel)

// Force = Mass * Acceleration
// A = F/M
//A = F 

//if Mass = 1
//A = F!


// in coding land we are assuming a mass = 1 so Force = Mass * acceleration meaning 1 * acceleration meaning Force = acceleration
///--->>key A = F/M  force divided by mass. if i calculate that i can build of previous code that has
// vel.add(acc)
//pos.add(vel) /// velocity is the change in position over time. 


export default function sketch35(p) {


    var width = 500
    var height = 500

    let moverA;
    let moverB;

    let movers = []

    p.setup = function () {
        p.createCanvas(width, height);
        p.background('grey');
        moverA = new Mover(200, 200);
        moverB = new Mover(200, 200);
        movers.push(moverA)
        movers.push(moverB)

    }

    p.draw = function () {

        p.background(0);

        if (p.mouseIsPressed) {
            let wind = p.createVector(0.1, 0);
            for (let m = 0; m < movers.length; m++) {
                movers[m].applyForce(wind);
            }
        }

        let gravity = p.createVector(0, 0.2);
        // moverA.applyForce(gravity);
        // moverB.applyForce(gravity);

        // moverA.update();
        // moverA.edges();
        // moverA.show();

        // moverB.update();
        // moverB.edges();
        // moverB.show();

        for (let i = 0; i < movers.length; i++) {
            movers[i].applyForce(gravity)
            movers[i].update();
            movers[i].edges();
            movers[i].show()
        }

    }

    class Mover {
        constructor(x, y) {
            this.pos = p.createVector(x, y);
            //this.vel = p.createVector(0, 0);
            this.vel = p5.Vector.random2D();
            this.vel.mult(p.random(3))

            this.acc = p.createVector(0, 0);
            this.radius = 16;
            this.mass = 1;

        }
        //all the forces being applied to mass are being accumulated, within this method

        applyForce(force) {
            this.acc.add(force);

        }

        edges() {
            if (this.pos.y >= height - this.radius) {
                this.pos.y = height - this.radius;
                this.vel.y *= -1;
            }

            if (this.pos.x >= width - this.radius) {
                this.pos.x = width - this.radius;
                this.vel.x *= -1;
            } else if (this.pos.x <= this.radius) {
                this.pos.x = this.radius;
                this.vel.x *= -1;
            }
        }

        update() {
            // let mouse = createVector(mouseX, mouseY);
            // this.acc = p5.Vector.sub(mouse, this.pos);
            // this.acc.setMag(0.1);

            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.set(0, 0); // this is me clearing the force out at the end of each animatoin cycle
        }

        show() {
            p.stroke(255);
            p.strokeWeight(2);
            p.fill(255, 100);
            p.ellipse(this.pos.x, this.pos.y, this.radius * 2);
        }

    }





}