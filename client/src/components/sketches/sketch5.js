export default function sketch5(p) {
    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(283, 54, 197);
    };



    p.draw = function () {
        // p.background(283, 54, 197);
        //p.stroke(255);
        p.stroke(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
        //p.noFill()
        // p.square(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);

        if (p.mouseIsPressed === true) {
            //p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            //p.line(p.mouseX, p.mouseY, p.mouseX, p.pmouseY);

            let val = p.map(p.mouseX, 0, p.width, 0, 200);
            let val2 = p.map(p.mouseY, 0, p.height, 0, 255);
            p.noStroke()
            p.square(p.mouseX, p.mouseY, p.mouseX, p.pmouseY)
            p.fill(p.pmouseX % 255 + 150, p.pmouseY % 255 - 100, p.mouseY % 255 - 50);
            //below this is a more controlled smooth color palett, but sometimes less interesting because since the colors it produces is tied to the mouse position, it will only generate certain blues in one particular spot, and purples, etc et. 
            //p.fill(val, val2, 200)
            // simliar spectrum, but the random applied in the blues gets it to skip a little bit behind or below, on each drawn square
            //p.fill(val, val2, p.floor(p.random(100, 255)))
        } else {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            //p.fill('#ffffff') /// currently this draws in the last 'fill' value that was calculated on the mouse Press downs
            p.square(450, 0, p.pmouseX, p.pmouseY)
        }
    };


}