var contador = 0;
var dato = 1;
let hue = 0;

// noise field -

var ruido_inc = 0.004;
var density = 30;
var znoise = 0.0;

// offset

var angle = 0.0;
var speed = 0.0002;
var radius = 500.0;

var sx = 3.0;
var sy = 1.5;


// offset1

var angle1 = 0.0;
var speed1 = 0.0004;
var radius1 = 400.0;

var sx1 = 3.0;
var sy1 = 1.5;

function setup() {

    createCanvas(window.innerWidth, window.innerHeight);

}

function draw() {

    // 

    angle += speed;
    angle1 += speed1;


    hue = ++hue % 255;
    contador = contador + dato;

    if (contador <= 0) {
        dato = 0.5;
        contador += 0.5;
    }


    if (contador >= 255) {
        dato = -0.5;
        contador -= 0.5;
    }


    // background(contador, 170, contador);

    var ruidoC4 = 0.00001;


    // noise field _
    push();

    var xnoise = 0.0;
    var ynoise = 0.0;

    for (var y = 0; y < height; y += density) {
        for (var x = 0; x < width; x += density) {
            var n = noise(xnoise, ynoise, znoise) * 255;
            noStroke();
            fill(contador, n, contador);
            rect(x, y, density, density);
            xnoise += ruido_inc;
        }
        xnoise += ruido_inc;
        ynoise += ruido_inc;
    }
    znoise += ruido_inc;
    pop();

    push();
    weft();
    pop();

    push();
    weft5();
    pop();

    push();
    weft7();
    pop();

    push();
    fall_sombra();
    pop();

    push();
    //weft1();
    pop();

    push();
    weft2();
    pop();

    push();
    weft3();
    pop();

    push();
    weft4();
    pop();

    push();
    weft8();
    pop();

    // meumar (px, py, numPart, rad, opaF) {

    push();
    meumar(0, 0, 12, 80, 100);
    pop();

    push();
    //aguadebeber(0, 0, 32, 90, 150);
    pop();

    push();
    aguadebeber(0, 70, 212, 50, 150);
    pop();

}