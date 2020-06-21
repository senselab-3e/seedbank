//var boundImages = ["https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-1.gif?v=1576614642137", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-2.gif?v=1576614644341", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-3.gif?v=1576614647485", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-4.gif?v=1576614650930", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-5.gif?v=1576614655396", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-6.gif?v=1576614657211", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-7.gif?v=1576614661548", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-8.gif?v=1576614664942", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-9.gif?v=1576614668971", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-10.gif?v=1576614672614", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-11.gif?v=1576614675914", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-12.gif?v=1576614684834", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-13.gif?v=1576614686762", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-14.gif?v=1576614690245"]
var boundImages = ["./img/bound1.gif", "./img/bound2.gif", "./img/bound3.gif", "./img/bound4.gif", "./img/bound5.gif", "./img/bound6.gif", "./img/bound7.gif", "./img/bound8.gif", "./img/bound9.gif", "./img/bound10.gif", "./img/bound11.gif", "./img/bound12.gif", "./img/bound13.gif", "./img/bound14.gif"]
var classAniOpt = ["swing", "lift", "hover"] //, "tinier"

function chooseElement(assets) {
    var element = assets[Math.floor(Math.random() * assets.length)];
    return element;
}


boundImages.forEach(function (element) {
    var newDiv = document.createElement("img");
    newDiv.className = 'thingy';

    newDiv.src = element;
    newDiv.classList.add('scale-transform-smaller')
    //console.log('glitch not found' + element)

    document.body.append(newDiv)

});


var patches = document.querySelectorAll('.thingy');

var newq;
let h, w, nh, nw, s;

function newPosition() {
    h = window.innerHeight / 2 - 10;
    w = window.innerWidth / 2 - 10;
    nh = Math.floor(Math.random() * h) - 100;
    nw = Math.floor(Math.random() * w) - 100;

    return [nh, nw];
}

function newPosition4Circles() {
    h = window.innerHeight - 100
    w = window.innerWidth;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);

    return [nh, nw, s];
}

// var patchTarget = document.querySelector('#patchreload');

const patchReposition = () => {
    patches.forEach(function (patch) {
        var newCoor4 = newPosition4Circles();
        patch.style.top = newCoor4[0] + 'px';
        patch.style.left = newCoor4[1] + 'px';
    })
}

// setInterval(patchReposition, 1500);

//NOTES: For setInterval - Pass a function, but don’t run it
// Novice developers sometimes make a mistake by adding brackets () after the function:




patches.forEach(function (thingy) {
    var newCoor = newPosition();
    thingy.style.top = newCoor[0] + 'px';
    thingy.style.left = newCoor[1] + 'px';

    thingy.addEventListener('mouseover', event => {
        // console.log('mouse over')
        thingy.classList.add(chooseElement(classAniOpt));
        thingy.classList.add('animated', 'fast');
    });
    thingy.addEventListener('mouseout', event => {
        // console.log('mouse left')
        thingy.classList.remove('animated', 'fast');
        thingy.classList.remove("rubberBand", "tada", "swing", "pulse", 'lift', "hover", "tinier");
    });
});