var img;


// eslint-disable-next-line
let z = 0;
var uval = 0.1;

var c = [{
    x: 0,
    y: 0,
    z: 0
}, {
    x: 0,
    y: 20,
    z: 0
}, {
    x: 20,
    y: 0,
    z: 0
}, {
    x: 20,
    y: 20,
    z: 0
}, {
    x: 40,
    y: 0,
    z: 0
}, {
    x: 40,
    y: 20,
    z: 0
}, {
    x: 60,
    y: 0,
    z: 0
}, {
    x: 60,
    y: 20,
    z: 0
}, {
    x: 80,
    y: 0,
    z: 0
}, {
    x: 80,
    y: 20,
    z: 0
}, {
    x: 100,
    y: 0,
    z: 0
}, {
    x: 100,
    y: 20,
    z: 0
}, {
    x: 120,
    y: 0,
    z: 0
}, {
    x: 120,
    y: 20,
    z: 0
}, {
    x: 140,
    y: 0,
    z: 0
}, {
    x: 140,
    y: 20,
    z: 0
}, {
    x: 160,
    y: 0,
    z: 0
}, {
    x: 160,
    y: 20,
    z: 0
}, {
    x: 180,
    y: 0,
    z: 0
}, {
    x: 180,
    y: 20,
    z: 0
}, {
    x: 200,
    y: 0,
    z: 0
}, {
    x: 200,
    y: 20,
    z: 0
}, {
    x: 220,
    y: 0,
    z: 0
}, {
    x: 220,
    y: 20,
    z: 0
}, {
    x: 240,
    y: 0,
    z: 0
}, {
    x: 240,
    y: 20,
    z: 0
}, {
    x: 0,
    y: 20,
    z: 0
}, {
    x: 0,
    y: 40,
    z: 0
}, {
    x: 20,
    y: 20,
    z: 0
}, {
    x: 20,
    y: 40,
    z: 0
}, {
    x: 40,
    y: 20,
    z: 0
}, {
    x: 40,
    y: 40,
    z: 0
}, {
    x: 60,
    y: 20,
    z: 0
}, {
    x: 60,
    y: 40,
    z: 0
}, {
    x: 80,
    y: 20,
    z: 0
}, {
    x: 80,
    y: 40,
    z: 0
}, {
    x: 100,
    y: 20,
    z: 0
}, {
    x: 100,
    y: 40,
    z: 0
}, {
    x: 120,
    y: 20,
    z: 0
}, {
    x: 120,
    y: 40,
    z: 0
}, {
    x: 140,
    y: 20,
    z: 0
}, {
    x: 140,
    y: 40,
    z: 0
}, {
    x: 160,
    y: 20,
    z: 0
}, {
    x: 160,
    y: 40,
    z: 0
}, {
    x: 180,
    y: 20,
    z: 0
}, {
    x: 180,
    y: 40,
    z: 0
}, {
    x: 200,
    y: 20,
    z: 0
}, {
    x: 200,
    y: 40,
    z: 0
}, {
    x: 220,
    y: 20,
    z: 0
}, {
    x: 220,
    y: 40,
    z: 0
}, {
    x: 240,
    y: 20,
    z: 0
}, {
    x: 240,
    y: 40,
    z: 0
}, {
    x: 0,
    y: 40,
    z: 0
}, {
    x: 0,
    y: 60,
    z: 0
}, {
    x: 20,
    y: 40,
    z: 0
}, {
    x: 20,
    y: 60,
    z: 0
}, {
    x: 40,
    y: 40,
    z: 0
}, {
    x: 40,
    y: 60,
    z: 0
}, {
    x: 60,
    y: 40,
    z: 0
}, {
    x: 60,
    y: 60,
    z: 0
}, {
    x: 80,
    y: 40,
    z: 0
}, {
    x: 80,
    y: 60,
    z: 0
}, {
    x: 100,
    y: 40,
    z: 0
}, {
    x: 100,
    y: 60,
    z: 0
}, {
    x: 120,
    y: 40,
    z: 0
}, {
    x: 120,
    y: 60,
    z: 0
}, {
    x: 140,
    y: 40,
    z: 0
}, {
    x: 140,
    y: 60,
    z: 0
}, {
    x: 160,
    y: 40,
    z: 0
}, {
    x: 160,
    y: 60,
    z: 0
}, {
    x: 180,
    y: 40,
    z: 0
}, {
    x: 180,
    y: 60,
    z: 0
}, {
    x: 200,
    y: 40,
    z: 0
}, {
    x: 200,
    y: 60,
    z: 0
}, {
    x: 220,
    y: 40,
    z: 0
}, {
    x: 220,
    y: 60,
    z: 0
}, {
    x: 240,
    y: 40,
    z: 0
}, {
    x: 240,
    y: 60,
    z: 0
}, {
    x: 0,
    y: 60,
    z: 0
}, {
    x: 0,
    y: 80,
    z: 0
}, {
    x: 20,
    y: 60,
    z: 0
}, {
    x: 20,
    y: 80,
    z: 0
}, {
    x: 40,
    y: 60,
    z: 0
}, {
    x: 40,
    y: 80,
    z: 0
}, {
    x: 60,
    y: 60,
    z: 0
}, {
    x: 60,
    y: 80,
    z: 0
}, {
    x: 80,
    y: 60,
    z: 0
}, {
    x: 80,
    y: 80,
    z: 0
}, {
    x: 100,
    y: 60,
    z: 0
}, {
    x: 100,
    y: 80,
    z: 0
}, {
    x: 120,
    y: 60,
    z: 0
}, {
    x: 120,
    y: 80,
    z: 0
}, {
    x: 140,
    y: 60,
    z: 0
}, {
    x: 140,
    y: 80,
    z: 0
}, {
    x: 160,
    y: 60,
    z: 0
}, {
    x: 160,
    y: 80,
    z: 0
}, {
    x: 180,
    y: 60,
    z: 0
}, {
    x: 180,
    y: 80,
    z: 0
}, {
    x: 200,
    y: 60,
    z: 0
}, {
    x: 200,
    y: 80,
    z: 0
}, {
    x: 220,
    y: 60,
    z: 0
}, {
    x: 220,
    y: 80,
    z: 0
}, {
    x: 240,
    y: 60,
    z: 0
}, {
    x: 240,
    y: 80,
    z: 0
}, {
    x: 0,
    y: 80,
    z: 0
}, {
    x: 0,
    y: 100,
    z: 0
}, {
    x: 20,
    y: 80,
    z: 0
}, {
    x: 20,
    y: 100,
    z: 0
}, {
    x: 40,
    y: 80,
    z: 0
}, {
    x: 40,
    y: 100,
    z: 0
}, {
    x: 60,
    y: 80,
    z: 0
}, {
    x: 60,
    y: 100,
    z: 0
}, {
    x: 80,
    y: 80,
    z: 0
}, {
    x: 80,
    y: 100,
    z: 0
}, {
    x: 100,
    y: 80,
    z: 0
}, {
    x: 100,
    y: 100,
    z: 0
}, {
    x: 120,
    y: 80,
    z: 0
}, {
    x: 120,
    y: 100,
    z: 0
}, {
    x: 140,
    y: 80,
    z: 0
}, {
    x: 140,
    y: 100,
    z: 0
}, {
    x: 160,
    y: 80,
    z: 0
}, {
    x: 160,
    y: 100,
    z: 0
}, {
    x: 180,
    y: 80,
    z: 0
}, {
    x: 180,
    y: 100,
    z: 0
}, {
    x: 200,
    y: 80,
    z: 0
}, {
    x: 200,
    y: 100,
    z: 0
}, {
    x: 220,
    y: 80,
    z: 0
}, {
    x: 220,
    y: 100,
    z: 0
}, {
    x: 240,
    y: 80,
    z: 0
}, {
    x: 240,
    y: 100,
    z: 0
}, {
    x: 0,
    y: 100,
    z: 0
}, {
    x: 0,
    y: 120,
    z: 0
}, {
    x: 20,
    y: 100,
    z: 0
}, {
    x: 20,
    y: 120,
    z: 0
}, {
    x: 40,
    y: 100,
    z: 0
}, {
    x: 40,
    y: 120,
    z: 0
}, {
    x: 60,
    y: 100,
    z: 0
}, {
    x: 60,
    y: 120,
    z: 0
}, {
    x: 80,
    y: 100,
    z: 0
}, {
    x: 80,
    y: 120,
    z: 0
}, {
    x: 100,
    y: 100,
    z: 0
}, {
    x: 100,
    y: 120,
    z: 0
}, {
    x: 120,
    y: 100,
    z: 0
}, {
    x: 120,
    y: 120,
    z: 0
}, {
    x: 140,
    y: 100,
    z: 0
}, {
    x: 140,
    y: 120,
    z: 0
}, {
    x: 160,
    y: 100,
    z: 0
}, {
    x: 160,
    y: 120,
    z: 0
}, {
    x: 180,
    y: 100,
    z: 0
}, {
    x: 180,
    y: 120,
    z: 0
}, {
    x: 200,
    y: 100,
    z: 0
}, {
    x: 200,
    y: 120,
    z: 0
}, {
    x: 220,
    y: 100,
    z: 0
}, {
    x: 220,
    y: 120,
    z: 0
}, {
    x: 240,
    y: 100,
    z: 0
}, {
    x: 240,
    y: 120,
    z: 0
}, {
    x: 0,
    y: 120,
    z: 0
}, {
    x: 0,
    y: 140,
    z: 0
}, {
    x: 20,
    y: 120,
    z: 0
}, {
    x: 20,
    y: 140,
    z: 0
}, {
    x: 40,
    y: 120,
    z: 0
}, {
    x: 40,
    y: 140,
    z: 0
}, {
    x: 60,
    y: 120,
    z: 0
}, {
    x: 60,
    y: 140,
    z: 0
}, {
    x: 80,
    y: 120,
    z: 0
}, {
    x: 80,
    y: 140,
    z: 0
}, {
    x: 100,
    y: 120,
    z: 0
}, {
    x: 100,
    y: 140,
    z: 0
}, {
    x: 120,
    y: 120,
    z: 0
}, {
    x: 120,
    y: 140,
    z: 0
}, {
    x: 140,
    y: 120,
    z: 0
}, {
    x: 140,
    y: 140,
    z: 0
}, {
    x: 160,
    y: 120,
    z: 0
}, {
    x: 160,
    y: 140,
    z: 0
}, {
    x: 180,
    y: 120,
    z: 0
}, {
    x: 180,
    y: 140,
    z: 0
}, {
    x: 200,
    y: 120,
    z: 0
}, {
    x: 200,
    y: 140,
    z: 0
}, {
    x: 220,
    y: 120,
    z: 0
}, {
    x: 220,
    y: 140,
    z: 0
}, {
    x: 240,
    y: 120,
    z: 0
}, {
    x: 240,
    y: 140,
    z: 0
}, {
    x: 0,
    y: 140,
    z: 0
}, {
    x: 0,
    y: 160,
    z: 0
}, {
    x: 20,
    y: 140,
    z: 0
}, {
    x: 20,
    y: 160,
    z: 0
}, {
    x: 40,
    y: 140,
    z: 0
}, {
    x: 40,
    y: 160,
    z: 0
}, {
    x: 60,
    y: 140,
    z: 0
}, {
    x: 60,
    y: 160,
    z: 0
}, {
    x: 80,
    y: 140,
    z: 0
}, {
    x: 80,
    y: 160,
    z: 0
}, {
    x: 100,
    y: 140,
    z: 0
}, {
    x: 100,
    y: 160,
    z: 0
}, {
    x: 120,
    y: 140,
    z: 0
}, {
    x: 120,
    y: 160,
    z: 0
}, {
    x: 140,
    y: 140,
    z: 0
}, {
    x: 140,
    y: 160,
    z: 0
}, {
    x: 160,
    y: 140,
    z: 0
}, {
    x: 160,
    y: 160,
    z: 0
}, {
    x: 180,
    y: 140,
    z: 0
}, {
    x: 180,
    y: 160,
    z: 0
}, {
    x: 200,
    y: 140,
    z: 0
}, {
    x: 200,
    y: 160,
    z: 0
}, {
    x: 220,
    y: 140,
    z: 0
}, {
    x: 220,
    y: 160,
    z: 0
}, {
    x: 240,
    y: 140,
    z: 0
}, {
    x: 240,
    y: 160,
    z: 0
}, {
    x: 0,
    y: 160,
    z: 0
}, {
    x: 0,
    y: 180,
    z: 0
}, {
    x: 20,
    y: 160,
    z: 0
}, {
    x: 20,
    y: 180,
    z: 0
}, {
    x: 40,
    y: 160,
    z: 0
}, {
    x: 40,
    y: 180,
    z: 0
}, {
    x: 60,
    y: 160,
    z: 0
}, {
    x: 60,
    y: 180,
    z: 0
}, {
    x: 80,
    y: 160,
    z: 0
}, {
    x: 80,
    y: 180,
    z: 0
}, {
    x: 100,
    y: 160,
    z: 0
}, {
    x: 100,
    y: 180,
    z: 0
}, {
    x: 120,
    y: 160,
    z: 0
}, {
    x: 120,
    y: 180,
    z: 0
}, {
    x: 140,
    y: 160,
    z: 0
}, {
    x: 140,
    y: 180,
    z: 0
}, {
    x: 160,
    y: 160,
    z: 0
}, {
    x: 160,
    y: 180,
    z: 0
}, {
    x: 180,
    y: 160,
    z: 0
}, {
    x: 180,
    y: 180,
    z: 0
}, {
    x: 200,
    y: 160,
    z: 0
}, {
    x: 200,
    y: 180,
    z: 0
}, {
    x: 220,
    y: 160,
    z: 0
}, {
    x: 220,
    y: 180,
    z: 0
}, {
    x: 240,
    y: 160,
    z: 0
}, {
    x: 240,
    y: 180,
    z: 0
}, {
    x: 0,
    y: 180,
    z: 0
}, {
    x: 0,
    y: 200,
    z: 0
}, {
    x: 20,
    y: 180,
    z: 0
}, {
    x: 20,
    y: 200,
    z: 0
}, {
    x: 40,
    y: 180,
    z: 0
}, {
    x: 40,
    y: 200,
    z: 0
}, {
    x: 60,
    y: 180,
    z: 0
}, {
    x: 60,
    y: 200,
    z: 0
}, {
    x: 80,
    y: 180,
    z: 0
}, {
    x: 80,
    y: 200,
    z: 0
}, {
    x: 100,
    y: 180,
    z: 0
}, {
    x: 100,
    y: 200,
    z: 0
}, {
    x: 120,
    y: 180,
    z: 0
}, {
    x: 120,
    y: 200,
    z: 0
}, {
    x: 140,
    y: 180,
    z: 0
}, {
    x: 140,
    y: 200,
    z: 0
}, {
    x: 160,
    y: 180,
    z: 0
}, {
    x: 160,
    y: 200,
    z: 0
}, {
    x: 180,
    y: 180,
    z: 0
}, {
    x: 180,
    y: 200,
    z: 0
}, {
    x: 200,
    y: 180,
    z: 0
}, {
    x: 200,
    y: 200,
    z: 0
}, {
    x: 220,
    y: 180,
    z: 0
}, {
    x: 220,
    y: 200,
    z: 0
}, {
    x: 240,
    y: 180,
    z: 0
}, {
    x: 240,
    y: 200,
    z: 0
}, {
    x: 0,
    y: 200,
    z: 0
}, {
    x: 0,
    y: 220,
    z: 0
}, {
    x: 20,
    y: 200,
    z: 0
}, {
    x: 20,
    y: 220,
    z: 0
}, {
    x: 40,
    y: 200,
    z: 0
}, {
    x: 40,
    y: 220,
    z: 0
}, {
    x: 60,
    y: 200,
    z: 0
}, {
    x: 60,
    y: 220,
    z: 0
}, {
    x: 80,
    y: 200,
    z: 0
}, {
    x: 80,
    y: 220,
    z: 0
}, {
    x: 100,
    y: 200,
    z: 0
}, {
    x: 100,
    y: 220,
    z: 0
}, {
    x: 120,
    y: 200,
    z: 0
}, {
    x: 120,
    y: 220,
    z: 0
}, {
    x: 140,
    y: 200,
    z: 0
}, {
    x: 140,
    y: 220,
    z: 0
}, {
    x: 160,
    y: 200,
    z: 0
}, {
    x: 160,
    y: 220,
    z: 0
}, {
    x: 180,
    y: 200,
    z: 0
}, {
    x: 180,
    y: 220,
    z: 0
}, {
    x: 200,
    y: 200,
    z: 0
}, {
    x: 200,
    y: 220,
    z: 0
}, {
    x: 220,
    y: 200,
    z: 0
}, {
    x: 220,
    y: 220,
    z: 0
}, {
    x: 240,
    y: 200,
    z: 0
}, {
    x: 240,
    y: 220,
    z: 0
}, {
    x: 0,
    y: 220,
    z: 0
}, {
    x: 0,
    y: 240,
    z: 0
}, {
    x: 20,
    y: 220,
    z: 0
}, {
    x: 20,
    y: 240,
    z: 0
}, {
    x: 40,
    y: 220,
    z: 0
}, {
    x: 40,
    y: 240,
    z: 0
}, {
    x: 60,
    y: 220,
    z: 0
}, {
    x: 60,
    y: 240,
    z: 0
}, {
    x: 80,
    y: 220,
    z: 0
}, {
    x: 80,
    y: 240,
    z: 0
}, {
    x: 100,
    y: 220,
    z: 0
}, {
    x: 100,
    y: 240,
    z: 0
}, {
    x: 120,
    y: 220,
    z: 0
}, {
    x: 120,
    y: 240,
    z: 0
}, {
    x: 140,
    y: 220,
    z: 0
}, {
    x: 140,
    y: 240,
    z: 0
}, {
    x: 160,
    y: 220,
    z: 0
}, {
    x: 160,
    y: 240,
    z: 0
}, {
    x: 180,
    y: 220,
    z: 0
}, {
    x: 180,
    y: 240,
    z: 0
}, {
    x: 200,
    y: 220,
    z: 0
}, {
    x: 200,
    y: 240,
    z: 0
}, {
    x: 220,
    y: 220,
    z: 0
}, {
    x: 220,
    y: 240,
    z: 0
}, {
    x: 240,
    y: 220,
    z: 0
}, {
    x: 240,
    y: 240,
    z: 0
}]

const imagePick = ['assets/images/0d/0b/c6/2a/photo_2020-03-05_15-14-32.jpg']



// eslint-disable-next-line
const randomImage = (array) => {

    return imagePick[Math.floor(Math.random(array.length) * array.length)];
}

export default function sketch1(p) {
    p.preload = function () {
        //very irritating, but loadImage is only looking in the public folder, unlike the react import scripts that could read within the client files. 
        img = p.loadImage('pot.jpg');
    }

    p.setup = function () {
        p.createCanvas(600, 600, p.WEBGL);
        p.background(283, 54, 197);
        // eslint-disable-next-line
        var frameCount = 0;

    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        console.log(props.imgSource)
        if (props.imgSource !== null) {
            img = p.loadImage(props.imgSource);
        }
    };

    p.draw = function () {

        p.orbitControl();
        p.textureWrap(p.CLAMP);
        p.textureMode(p.NORMAL);
        p.fill(255);
        p.translate(-200, -200, -200);
        p.beginShape(p.TRIANGLE_STRIP);
        for (let i = 0; i < c.length; i++) {
            console.log(img)
            p.texture(img);
            let coord = c[i];
            let v = p.map(coord.x, -img.width * uval, img.width * 0.3, 0, 1); // changed location to a 1/3 from 0.5
            let u = p.map(coord.y, -img.height * uval, img.height * 0.3, 1, 0);
            if (p.dist(p.mouseX - p.width / 2, p.mouseY - p.height / 2, coord.x - 200, coord.y - 200) < 70) {
                coord.z += 10;
            }
            p.vertex(coord.y, coord.x, coord.z, u, v);
        }
        p.endShape();

    }
}




//const imagePick = ['./img/bbb-up.jpg', './img/ggg-up.jpg', './img/ssss-up.jpg', './img/aaa-up.jpg', './img/hhh.png', './img/sss-12.jpg', './img/sss-30-up.jpg', './img/sss-7.jpg', './img/sss-6.jpg', './img/sss-4b.jpg', './img/sss-3-up.jpg', './img/sss-8.jpg', './img/sss-27-up.jpg', "./img/sss-29.jpg", "./img/eyes.jpg", "./img/compost.jpg", "./img/compost-2.jpg"]

// const randomImage = (array) => {

//     return imagePick[Math.floor(Math.random(array.length) * array.length)];
// }


// function preload() {
//     img = loadImage(randomImage(imagePick));
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight, WEBGL);
//     var frameCount = 0;

//     //console.log(randomImage(imagePick))
// }



// function draw() {

//     orbitControl();
//     textureWrap(CLAMP);
//     textureMode(NORMAL);
//     fill(255);
//     translate(-200, -200, -200);
//     // translate(-width / 2, -width / 2, -width / 2);

//     beginShape(TRIANGLE_STRIP);
//     for (let i = 0; i < c.length; i++) {
//         texture(img);
//         let coord = c[i];
//         let u = map(coord.x, -img.width * uval, img.width * 0.3, 0, 1); // changed location to a 1/3 from 0.5
//         let v = map(coord.y, -img.height * uval, img.height * 0.3, 1, 0);
//         if (dist(mouseX - width / 2, mouseY - height / 2, coord.x - 200, coord.y - 200) < 70) {
//             coord.z += 10;
//         }
//         vertex(coord.x, coord.y, coord.z, u, v);
//     }
//     endShape();
// }

// function mousePressed() {
//     uval = random(0, 0.6); // changed this from 1

//     //img = loadImage(randomImage(imagePick));
// }