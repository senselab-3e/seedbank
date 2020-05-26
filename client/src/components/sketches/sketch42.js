import p5sound from "react-p5-wrapper/node_modules/p5/";

import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch42(p) {

    var mic;

    p.setup = function () {
        p.createCanvas(800, 800);
        p.background('purple')

        let apple = p5.Font()
        mic = new p5.AudioIn();
        // mic.start();
    }

    p.draw = function () {
        p.background(0);
        // var vol = mic.getLevel();
        // p.ellipse(100, 100, 200, vol * 200);
    }

}