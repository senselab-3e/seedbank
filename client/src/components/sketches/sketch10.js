import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch10(p) {
    // All the paths
    var paths = [];
    // Are we painting?
    var painting = false;
    // How long until the next circle
    var next = 1;
    // Where are we now and where were we?
    var current;
    var previous;

    const width = 500;
    const height = 500;

    p.setup = function () {
        p.createCanvas(width, height);
        current = p.createVector(0, 0);
        previous = p.createVector(0, 0);
    };

    p.draw = function () {
        p.background("darkorange");

        // If it's time for a new point
        if (p.millis() > next && painting) {
            // Grab mouse position
            //current.x = p.random(width) //p.random(p.mouseX, width / 2) //p.random() * p.mouseX// p.mouseX;
            //current.y = p.random(height) //p.pmouseY //p.random(height) //p.random(p.mouseY, height / 2) //p.random()  * p.mouseY//p.mouseY;

            current.x = p.mouseX; //p.random(p.mouseX, width); //p.mouseX
            current.y = p.mouseY; //p.random(p.mouseY, height);
            // New particle's force is based on mouse movement
            var force = p5.Vector.sub(current, previous);
            force.mult(0.05);

            // Add new particle
            paths[paths.length - 1].add(current, force);

            // Schedule next circle //// this is verrryyyy usefulll...... think of how to hack this for how often the blur filter is applied in other sketches
            next = p.millis() + p.random(100);

            // Store mouse values
            previous.x = current.x;
            previous.y = current.y;
        }

        // Draw all paths
        for (var i = 0; i < paths.length; i++) {
            paths[i].update();
            paths[i].display();
        }
    };

    // Start it up
    p.mousePressed = function () {
        next = 0;
        painting = true;
        previous.x = p.mouseX;
        previous.y = p.mouseY;
        paths.push(new p.Path());
    };

    // Stop
    p.mouseReleased = function () {
        painting = false;
    };

    // A Path is a list of particles
    p.Path = function () {
        this.particles = [];
        this.hue = p.color(p.random(255), p.random(255), p.random(255)) //p.random(50); //not using this right now, but could be used for passing colors. 
    };

    p.Path.prototype.add = function (position, force) {
        // Add a new particle with a position, force, and hue
        this.particles.push(new Particle(position, force, this.hue));
    };

    // Display plath
    p.Path.prototype.update = function () {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
        }
    };

    // Display plath
    p.Path.prototype.display = function () {
        // Loop through backwards
        for (var i = this.particles.length - 1; i >= 0; i--) {
            // If we shold remove it
            if (this.particles[i].lifespan <= 0) {
                this.particles.splice(i, 1);
                // Otherwise, display it
            } else {
                this.particles[i].display(this.particles[i + 1]);
            }
        }
    };

    // Particles along the path
    function Particle(position, force, hue) {
        this.position = p.createVector(position.x, position.y);
        this.velocity = p.createVector(force.x, force.y);
        this.drag = 0.95; //p.random(0.02, 1.95);
        this.lifespan = 255;
        this.size = 10; /// this is effecting the spacing from the mouseX position.... and not just the initial circle drawn...
        this.hue = hue; // not using this technically. the values being passed here pass a single color value to the instance ellipses drawn, within each mouseclick context
    }

    Particle.prototype.update = function () {
        // Move it
        this.position.add(this.velocity);
        // Slow it down
        this.velocity.mult(this.drag);
        // Fade it out
        this.lifespan = this.lifespan - (this.lifespan * 0.01);
        this.size = this.size + 0.05;
    };

    // Draw particle and connect it with a line
    // Draw a line to another
    Particle.prototype.display = function (other) {
        p.noStroke();
        p.fill(255, this.lifespan); // + this.lifespan * 0.3);
        p.ellipse(
            this.position.x,
            //this is where i can change the drip to just happen directly from where the mouse is or have it do wierd curves out from it.
            this.position.y + p.cos(this.position.y) * p.TWO_PI / p.width, // - this.size * 20,
            this.size,
            this.size
        );
        //println(this.lifespan);
        //If we need to draw a line
        // if (other) {
        //   p.line(
        //     this.position.x,
        //     this.position.y,
        //     other.position.x,
        //     other.position.y
        //   );
        // }
    };
}