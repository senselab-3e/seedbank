const frogs = ['img/frog-3.png', 'img/frog-doublecri.png', 'img/frog-froggg.png', 'img/frog-frog3.png', 'img/frog-froggybouncy.png', 'img/frog-gggggoooo.png', 'img/frog-ooogrog.png', 'img/frog-orangegrog.png', 'img/frog-spongeyfrog.png'];

const gradientList = ['../gifverse/gradients/tumblr_pdtr7chsID1uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pduu51oGdY1uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pdz73yZ14V1uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pe0edqOnc41uzwgsuo1_400-1.gif',
    '../gifverse/gradients/tumblr_pdwphq72ft1uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pdutehx5D01uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pe0kl2lEBg1uzwgsuo1_400.gif'
]


const randomThing = (element) => {
    return element[Math.floor(Math.random() * element.length)]
}

const positionGenerator = () => {
    const pos = {
        y: Math.random() * window.innerHeight - 100 + 'px',
        x: Math.random() * window.innerWidth - 100 + 'px'
    }
    return pos;
};


frogs.forEach(frog => {

    let frogbox = document.createElement('div');
    let position = positionGenerator();
    frogbox.className = 'grog';
    frogbox.style.backgroundImage = 'url(' + frog + ')';
    frogbox.style.top = position.y;
    frogbox.style.left = position.x;
    frogbox.style.zindex = 1;
    document.body.appendChild(frogbox);
});


const frogReposition = () => {
    let frogs = document.querySelectorAll('.grog')
    frogs.forEach(function (frog) {
        var newCoor = positionGenerator();
        frog.style.top = newCoor.y
        frog.style.left = newCoor.x

    })
}


const anchorFrog = document.createElement('div');
anchorFrog.className = 'grogStatic';


anchorFrog.addEventListener('click', function () {
    frogReposition()
})
document.body.appendChild(anchorFrog);



// const galaxy = document.querySelector('.galaxy');

// galaxy.style.setProperty('background-image', 'url(' + randomThing(gradientList) + ')')



// setInterval(frogReposition, 5000);


//all the P5JS stuff


var img;
let z = 0;
var uval = 0.1;
// var c = [{x:0, y:0, z:0}, [x:0, y:100, z:0],[x:100, y:100, z:0],[x:100, y:100, z:0]];
// var c = [{x: 30, y: 75, z:0}, {x:40, y:20, z:0}, {x:50, y:75, z:0}, {x:60, y:20, z:0}, {x:70, y:75, z:0}, {x:80, y:20, z:0}, {x:90, y:75, z:0}, {x:100, y:20, z:0}, {x:110, y:75, z:0}, {x:120, y:20, z:0}];
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



function preload() {
    img = loadImage('./img/hhh.jpg');
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    var frameCount = 0;
}



function draw() {

    orbitControl();
    textureWrap(CLAMP);
    textureMode(NORMAL);
    fill(255);
    translate(-200, -200, -200);
    // translate(-width / 2, -width / 2, -width / 2);

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < c.length; i++) {
        texture(img);
        let coord = c[i];
        let u = map(coord.x, -img.width * uval, img.width * 0.3, 0, 1); // changed location to a 1/3 from 0.5
        let v = map(coord.y, -img.height * uval, img.height * 0.3, 1, 0);
        if (dist(mouseX - width / 2, mouseY - height / 2, coord.x - 200, coord.y - 200) < 70) {
            coord.z += 10;
        }
        vertex(coord.x, coord.y, coord.z, u, v);
    }
    endShape();
}

function mousePressed() {
    uval = random(0, 0.6); // changed this from 1
    //frogReposition()

}