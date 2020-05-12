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

// Friction  = -1 * u * N * ˆv -- velocity unit vector
//-1 is the direction of velocity - tied to the ˆv  unit vector pointing in the direction of unit negative one
// i need to figure out direction and magnitude
//what is the magnitude of the friction force -- which is the the opposite direction of the velocity. 
// the co-efficient of friction = u  
// the strenght of the friction force, based on the material it is. 
//Normal force - the 'N' - is the force perpendicular to the two surfaces in contact
//it's mag is tied force and material
//in code land the normal force points up. a constant -- it's not dependent on the weight/dependent on the mass --- but in the case of one particular object i can treat it as constant. 

//Friction force was not proportional to the speed (the magnitude) -- where as drag, is proportional. If you hold something still, there is no drag force on it.

//Drag force = -1 * Constantofdrag * velocitysquared * ˆv -- velocity unit vector


// when calculating a force i need direction , and magnitude. 
//so the direction is just an arrow point from the object to the attractor 
// i can get the attractor position using sub()
//position of the attractor minus the position of the object

export default function sketch35(p) {


    var width = 500
    var height = 500

    // let moverA;
    // let moverB;
    let mu = 0.1
    let movers = []
    let dragC = 0.2
    let attractor;



    p.setup = function () {
        p.createCanvas(width, height);
        p.background('grey');
        // moverA = new Mover(200, 200, 2, 'orange');
        // moverB = new Mover(200, 300, 4, 'purple');
        // movers.push(moverA)
        // movers.push(moverB)

        for (let a = 0; a < 10; a++) {
            //movers[a] = new Mover(p.random(width), 0, p.random(1, 8), p.color(p.random(255), p.random(255), p.random(255)))
            let x = p.random(width);
            let y = p.random(height);
            let m = p.random(5, 30);
            let color = p.color(p.random(255), p.random(255), p.random(255))
            movers[a] = new Mover(x, y, m, color);

        }

        attractor = new Attractor(width / 2, height / 2, 100);
        //
        p.background(0);

    }

    p.draw = function () {

        p.background(0);

        for (let mover of movers) {

            if (p.mouseIsPressed) {

                //temporarily disabing wind function
                // let wind = p.createVector(0.1, 0);
                // mover.applyForce(wind);
                attractor.pos.x = p.mouseX;
                attractor.pos.y = p.mouseY;



            }
            attractor.attract(mover);
            attractor.show();

            let gravity = p.createVector(0, 0.2);
            let weight = p5.Vector.mult(gravity, mover.mass)

            //temporarily disabling this drag funciton because i'm now testing the attractor. 
            // if (mover.pos.y > height / 2) {
            //     mover.drag(dragC)
            // }

            //temporarily disabling. this was the wind effect
            //mover.applyForce(weight) 
            mover.update();
            mover.edges();
            mover.show()
            //mover.friction()

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

        friction() {

            let diff = height - (this.pos.y + this.radius);
            //console.log(diff) 
            if (diff < 1) {
                // a quick and dirty approach to this however, is just to shrink the velocity every time it runs
                //this.vel.mult(0.95) // but it doesn't take into account an object's mass, so the vector way below is more precise
                //-1 * u * N * ˆv     so force --- that is a copy of the velocity vectory, normalized to 1, and then multiplied by -1 (reverse)
                //Direction of Friction
                let friction = this.vel.copy();
                friction.normalize();
                friction.mult(-1)
                //now need the magnitude // and normal force which is scale by the weight, which is scaled by the mass of the object
                //console.log('friction')

                //Magnitude of Friction
                //mu has been defined up top so it can be grabbed by other functions.
                let normal = this.mass;
                friction.setMag(mu * normal);
                this.applyForce(friction);
            }
        }

        drag(c) {
            let drag = this.vel.copy()
            //i need the magnitude of the drag force -- speed squared times the coefficient of drag
            drag.normalize();
            drag.mult(-1)

            // let c = 0.1; // coefficient of drag /// so if the drag force is too strong, aka if the momentum required to overcome it is too small, then the object can end up moving in the opposite direction
            //i'm not passing this coefficient value - which determins the strength of the drag, from within the draw funciton, allowing greater flexibility in how much is applied to certain instance objects
            //how you'd normally write it out, BUT p5 has a function specifically for magnitude squared, so you don't have to write out speed * speed
            // let speed = this.vel.mag();
            // drag.setMag(c * speed * speed);
            let speedSq = this.vel.magSq();
            drag.setMag(c * speedSq)
            this.applyForce(drag)

        }



    }

    class Attractor {
        constructor(x, y, m) {
            this.pos = p.createVector(x, y);
            this.mass = m;
            this.r = p.sqrt(this.mass) * 2;
        }

        attract(mover) {
            let force = p5.Vector.sub(this.pos, mover.pos);
            let distanceSq = p.constrain(force.magSq(), 100, 1000);
            let G = 5;
            let strength = (G * (this.mass * mover.mass)) / distanceSq;
            force.setMag(strength);
            mover.applyForce(force);
        }

        show() {
            p.noStroke();
            p.fill(255, 0, 100);
            p.ellipse(this.pos.x, this.pos.y, this.r * 2);
        }
    }





}