//import p5 from "react-p5-wrapper/node_modules/p5";

// based on this tutorial https://www.youtube.com/watch?v=nYI5TOWXJEM&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=4&t=0s

export default function sketch40b(p) {

    let x = 0
    let y = 0;
    // let xStep = 800; // this will change the appearance of the size of the lines/squares
    let xStep = 400;
    // let yStep = 5;
    let yStep = 20;
    let a = 0;
    let aA = 0;
    let num = 0 //320;

    p.setup = function () {
        p.createCanvas(800, 800)
        //p.frameRate(8)
        num = p.int((p.width / xStep) * (p.height / yStep))
    }
    p.draw = function () {
        //p.background('orange');
        // p.stroke(255, 255-255*p.sin(p.radians(a)))
        //p.strokeWeight(3)
        p.strokeCap(p.SQUARE)
        p.strokeWeight(xStep);

        let n = 0; // -1// ha! such a hack. // it's not perfect but if the xStep doesn't get split across more then one line in a disequalizing way, then that annoying strobing bar goes away. 
        while (n < num) {
            //ok... if i change thse number so that there isn't a fourth one - which is the alpha level - then none of the values get to 0, which was causing only the background to show..... the colors are then always a bit overly-primary.... but... there is not strobe... 
            p.stroke(155 - 255 * p.sin(p.radians(a)), 155 * p.cos(p.radians(a)), 155 + 255 * p.sin(p.radians(a)))
            //console.log(p.floor(255 - 255 * p.sin(p.radians(a))))
            //p.stroke(255, 255 - 255 * p.sin(p.radians(a)))
            p.line(x, y, x, y + yStep);
            x += xStep;
            if (x > p.width) {
                x = xStep / 2
                y += yStep;
            }
            if (y > p.height) {
                y = 0;
                a = 0;
            }
            n++
            a += aA;
        }
        aA += 0.1
        // }

    }
}