export default function sketch6(p) {

    var bx1;
    var by1;
    var bx2;
    var by2;
    var bx3;
    var by3;
    var bx4;
    var by4;
    var bx5;
    var by5;
    var bx6;
    var by6;
    var bx7;
    var by7;
    var diameter = 15;
    var overBox1 = false;
    var overBox2 = false;
    var overBox3 = false;
    var overBox4 = false;
    var overBox5 = false;
    var overBox6 = false;
    var overBox7 = false;
    var locked1 = false;
    var locked2 = false;
    var locked3 = false;
    var locked4 = false;
    var locked5 = false;
    var locked6 = false;
    var locked7 = false;
    var x1Offset = 0.0;
    var y1Offset = 0.0;
    var x2Offset = 0.0;
    var y2Offset = 0.0;
    var x3Offset = 0.0;
    var y3Offset = 0.0;
    var x4Offset = 0.0;
    var y4Offset = 0.0;
    var x5Offset = 0.0;
    var y5Offset = 0.0;
    var x6Offset = 0.0;
    var y6Offset = 0.0;
    var x7Offset = 0.0;
    var y7Offset = 0.0;
    var u;
    var a;

    p.mousePressed = function () {

        if (overBox1) {
            locked1 = true;
            p.noStroke();
            p.noFill();
            x1Offset = p.mouseX - bx1;
            y1Offset = p.mouseY - by1;
        }
        if (!overBox1) {
            locked1 = false;
        }

        if (overBox2) {
            locked2 = true;
            x2Offset = p.mouseX - bx2;
            y2Offset = p.mouseY - by2;
        }
        if (!overBox2) {
            locked2 = false;
        }

        if (overBox3) {
            locked3 = true;
            x3Offset = p.mouseX - bx3;
            y3Offset = p.mouseY - by3;
        }
        if (!overBox3) {
            locked3 = false;
        }

        if (overBox4) {
            locked4 = true;
            x4Offset = p.mouseX - bx4;
            y4Offset = p.mouseY - by4;
        }
        if (!overBox4) {
            locked4 = false;
        }

        if (overBox5) {
            locked5 = true;
            x5Offset = p.mouseX - bx5;
            y5Offset = p.mouseY - by5;
        }
        if (!overBox5) {
            locked5 = false;
        }

        if (overBox6) {
            locked6 = true;
            x6Offset = p.mouseX - bx6;
            y6Offset = p.mouseY - by6;
        }
        if (!overBox6) {
            locked6 = false;
        }

        if (overBox7) {
            locked7 = true;
            x7Offset = p.mouseX - bx7;
            y7Offset = p.mouseY - by7;
        }
        if (!overBox7) {
            locked7 = false;
        }

    }

    p.mouseDragged = function () {
        if (locked1) {
            p.noStroke();
            p.fill(230);
            bx1 = p.mouseX - x1Offset;
            by1 = p.mouseY - y1Offset;
        }

        if (locked2) {
            bx2 = p.mouseX - x2Offset;
            by2 = p.mouseY - y2Offset;
        }

        if (locked3) {
            bx3 = p.mouseX - x3Offset;
            by3 = p.mouseY - y3Offset;
        }

        if (locked4) {
            bx4 = p.mouseX - x4Offset;
            by4 = p.mouseY - y4Offset;
        }

        if (locked5) {
            bx5 = p.mouseX - x5Offset;
            by5 = p.mouseY - y5Offset;
        }

        if (locked6) {
            bx6 = p.mouseX - x6Offset;
            by6 = p.mouseY - y6Offset;
        }

        if (locked7) {
            bx7 = p.mouseX - x7Offset;
            by7 = p.mouseY - y7Offset;
        }
    }

    p.mouseReleased = function () {
        locked1 = false;
        locked2 = false;
        locked3 = false;
        locked4 = false;
        locked5 = false;
        locked6 = false;
        locked7 = false;
    }

    // for (var i = 0; i < vertices.length; i++) {
    //     vertices[i].x += p.random(-r, r);
    //     vertices[i].y += p.random(-r, r);
    //     var next = (i + 1) % num;
    //     vertices[next].x += p.random(-r, r);
    //     vertices[next].y += p.random(-r, r);

    p.setup = function () {
        p.createCanvas(500, 500);
        u = 100; // size of block
        a = ((p.sqrt(3) * u) / 2);

        bx1 = 300 //p.width / 2;
        by1 = 100 //p.height / 2;
        bx2 = bx1;
        by2 = by1 - u;
        bx3 = bx1 + a;
        by3 = by1 - (u / 2);
        bx4 = bx1 + a;
        by4 = 330 //by1 + (u / 2);
        bx5 = 100 //bx1;
        by5 = 400 //by1 + u;
        bx6 = bx1 - a;
        by6 = by1 + (u / 2);
        bx7 = bx1 - a;
        by7 = by1 - (u / 2);
        // bx1 = 300 //p.width / 2;
        // by1 = 100 //p.height / 2;
        // bx2 = bx1;
        // by2 = by1 - u;
        // bx3 = bx1 + a;
        // by3 = by1 - (u / 2);
        // bx4 = bx1 + a;
        // by4 = 330 //by1 + (u / 2);
        // bx5 = 100 //bx1;
        // by5 = 400 //by1 + u;
        // bx6 = bx1 - a;
        // by6 = by1 + (u / 2);
        // bx7 = bx1 - a;
        // by7 = by1 - (u / 2);
    }

    p.draw = function () {
        let r = 3;
        p.noStroke();
        //.stroke('#ffffff')
        p.background('#0fa9ab');
        p.fill('#3cc881');
        p.quad(bx1, by1, bx7, by7, bx2, by2, bx3, by3);
        p.fill('#3c57c8');
        //originally a quad
        ///and --> , by4, bx5, by5 but ellipse only takes 4 params plus an integer for the 5 value
        p.ellipse(bx1, by1, bx3, by3, 0);
        p.fill('#f33ce4');
        p.quad(bx1, by1 + p.random(-r, r), bx5 + p.random(-r, r), by5, bx6, by6, bx7, by7 + p.random(-r, r));
        //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        p.noFill();
        // Test if the cursor is over the box 
        if (p.mouseX > bx1 - diameter && p.mouseX < bx1 + diameter &&
            p.mouseY > by1 - diameter && p.mouseY < by1 + diameter) {
            overBox1 = true;
            if (!locked1) {
                p.stroke('#4C60AD');
                p.strokeWeight(2);
                p.noFill();
            }
        } else {

            p.noStroke();
            p.noFill(); //change this to noFill later
            overBox1 = false;


        }


        p.ellipse(bx1, by1, diameter, diameter);

        if (p.mouseX > bx2 - diameter && p.mouseX < bx2 + diameter &&
            p.mouseY > by2 - diameter && p.mouseY < by2 + diameter) {
            overBox2 = true;
            if (!locked2) {
                p.stroke('#4C60AD');
                p.strokeWeight(2);
                p.noFill();
            }
        } else {
            p.noStroke();
            p.noFill(); //change this to noFill later
            overBox2 = false;
        }
        p.ellipse(bx2, by2, diameter, diameter);

        if (p.mouseX > bx3 - diameter && p.mouseX < bx3 + diameter &&
            p.mouseY > by3 - diameter && p.mouseY < by3 + diameter) {
            overBox3 = true;
            if (!locked3) {
                p.stroke('#4C60AD');
                p.strokeWeight(2);
                p.noFill();
            }
        } else {
            p.noStroke();
            p.noFill(); //change this to noFill later
            overBox3 = false;
        }
        p.ellipse(bx3, by3, diameter, diameter);

        if (p.mouseX > bx4 - diameter && p.mouseX < bx4 + diameter &&
            p.mouseY > by4 - diameter && p.mouseY < by4 + diameter) {
            overBox4 = true;
            if (!locked4) {
                p.stroke('#4C60AD');
                p.strokeWeight(2);
                p.noFill();
            }
        } else {
            p.noStroke();
            p.noFill(); //change this to noFill later
            overBox4 = false;
        }
        p.ellipse(bx4, by4, diameter, diameter);

        if (p.mouseX > bx5 - diameter && p.mouseX < bx5 + diameter &&
            p.mouseY > by5 - diameter && p.mouseY < by5 + diameter) {
            overBox5 = true;
            if (!locked5) {
                p.stroke('#4C60AD');
                p.strokeWeight(2);
                p.noFill();
            }
        } else {
            p.noStroke();
            p.noFill(); //change this to noFill later
            overBox5 = false;
        }
        p.ellipse(bx5, by5, diameter, diameter);

        if (p.mouseX > bx6 - diameter && p.mouseX < bx6 + diameter &&
            p.mouseY > by6 - diameter && p.mouseY < by6 + diameter) {
            overBox6 = true;
            if (!locked6) {
                p.stroke('#4C60AD');
                p.strokeWeight(2);
                p.noFill();
            }
        } else {
            p.noStroke();
            p.noFill(); //change this to noFill later
            overBox6 = false;
        }
        p.ellipse(bx6, by6, diameter, diameter);

        if (p.mouseX > bx7 - diameter && p.mouseX < bx7 + diameter &&
            p.mouseY > by7 - diameter && p.mouseY < by7 + diameter) {
            overBox7 = true;
            if (!locked7) {
                p.stroke('#4C60AD');
                p.strokeWeight(2);
                p.noFill();
            }
        } else {
            p.noStroke();
            p.noFill(); //change this to noFill later
            overBox7 = false;
        }
        p.ellipse(bx7, by7, diameter, diameter);



    }


}