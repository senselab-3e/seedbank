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
        moverA = new Mover(200, 200, 2, 'orange');
        moverB = new Mover(200, 200, 4, 'purple');
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

        let weightA = p5.Vector.mult(gravity, moverA.mass)
        let weightB = p5.Vector.mult(gravity, moverA.mass)
        // moverA.applyForce(gravity);
        // moverB.applyForce(gravity);

        // moverA.update();
        // moverA.edges();
        // moverA.show();

        // moverB.update();
        // moverB.edges();
        // moverB.show();

        for (let i = 0; i < movers.length; i++) {
            let weight = p5.Vector.mult(gravity, movers[i].mass)
            movers[i].applyForce(weight)
            movers[i].update();
            movers[i].edges();
            movers[i].show()
        }

    }

    class Mover {
        constructor(x, y, mass, color) {
            this.pos = p.createVector(x, y);
            //this.vel = p.createVector(0, 0);
            this.vel = p5.Vector.random2D();
            this.vel.mult(p.random(3))
            this.color = color
            this.acc = p.createVector(0, 0);
            //this.radius = 16;
            this.mass = mass;
            this.radius = p.sqrt(this.mass) * 10 // this is the math for calculating the area oa circle -- rather then just equating the radius to th emass size more arbitraliarily

        }
        //all the forces being applied to mass are being accumulated, within this method

        applyForce(force) {
            ///force.div(this.mass) //i want to divide  force by mass, bbut not the actual force vector itself. i want to take a copy of that force vector and divide it by mass /// (rather then applying directly to the vector) // so i need a static function
            //this.acc.add(force);
            let f = p5.Vector.div(force, this.mass); /// now this f isn't being applied to the force value
            //that vector f is what gets applied to the acceleration itself.  
            this.acc.add(f)

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
            p.fill(this.color);
            p.ellipse(this.pos.x, this.pos.y, this.radius * 2);
        }

    }





}