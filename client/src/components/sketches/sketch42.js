//import p5sound from "react-p5-wrapper/node_modules/p5/lib/addons/p5.dom";

//https://github.com/and-who/react-p5-wrapper/issues/23#issuecomment-408036813
//https://github.com/and-who/react-p5-wrapper/issues/23
//https://github.com/and-who/react-p5-wrapper/issues/14

//unfortunately there's a genuine problem  in relation to importing images and the addon sound library that is currently being investigated. 
//https://github.com/and-who/react-p5-wrapper/issues/11
//jamesrweb commented 2 days ago
// The issue isn't actually with this library, if you are in node_modules\@types\p5\index.d.ts you will notice that the type declarations for p5 are missing the <reference path="./lib/addons/p5.sound.d.ts" /> tag even though the file exists 🤔.. I will make a PR into the p5-types repo sometime later in the week and hopefully once that is done you can use all the p5 sound methods via the p5.constructor object that is on the p5 object provided to all sketch modules.

// @jamesrweb jamesrweb mentioned this issue 2 days ago
// Loading images with require #14

import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch42(p) {

    var mic;

    p.setup = function () {
        p.createCanvas(800, 800);
        p.background('purple')

        let apple = p5.Font()
        //mic = new p5.AudioIn();
        // mic.start();
    }

    p.draw = function () {
        p.background(0);
        // var vol = mic.getLevel();
        // p.ellipse(100, 100, 200, vol * 200);
    }

}