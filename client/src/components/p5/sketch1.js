let img = null;


// eslint-disable-next-line
let z = 0;
// eslint-disable-next-line
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
        //NOTE: if i want an image to already be loaded at center, invoke the next script.
        //img = p.loadImage('pot.jpg');
    }

    p.setup = function () {
        p.createCanvas(p.windowWidth - 38, 500, p.WEBGL);
        p.background(255);
    };

    // this naming 'myCustomRedrawAccordingToNewPropsHandler', is non-negotiable aka it must be exactly this and was created specficially for this library to handle props. props can also only be passed through this function
    //https://github.com/and-who/react-p5-wrapper#usage
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {

        if (props.imgSource !== null) {
            img = p.loadImage(props.imgSource);
        }
        //the props for saveimage turns truthy when a button outside the p5wrapper is clicked. combined with the condition checkfor an image being prsent, then an image is exported. but right after the saveimage boolean is reset to false. 
        if (props.saveImage === true && props.imgSource !== null) {
            p.saveCanvas('saved-image', 'png');
            props.saveStatus()
        }

    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth - 38, 500);
    }

    p.draw = function () {

        p.orbitControl();
        p.textureWrap(p.CLAMP);
        p.textureMode(p.NORMAL);
        p.fill(255);
        p.translate(-100, -100, 0);
        p.beginShape(p.TRIANGLE_STRIP);

        if (img !== null) {
            for (let i = 0; i < c.length; i++) {

                p.texture(img);
                let coord = c[i];
                let v = p.map(coord.x - 50, -img.width * 0.1, img.width * 0.3, 0, 1); // changed location to a 1/3 from 0.5
                let u = p.map(coord.y - 50, -img.height * 0.1, img.height * 0.3, 1, 0);
                if (p.dist(p.mouseX - p.width / 2, p.mouseY - p.height / 2, coord.x - 200, coord.y - 200) < 70) {
                    coord.z += 10;
                }
                p.vertex(coord.y, coord.x, coord.z, u, v);
            }
        }
        p.endShape();

    }
}