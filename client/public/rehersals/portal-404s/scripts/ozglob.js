class Bouleverse {
    constructor(texty, x, y, lines, thetaX, thetaY, thetaZ, pt, color) {
        this.wordy = split(texty, ' ');
        this.x = x;
        this.y = y;
        this.thetaX = thetaX;
        this.thetaY = thetaY;
        this.thetaZ = thetaZ;
        this.lines = lines;
        this.pt = pt;
        this.color = color;
    }
    zig() {
        rotateX(this.thetaX);
    }
    zag() {
        rotateY(this.thetaY);
    }
    zog() {
        rotateY(this.thetaY);
    }
    hex() {
        fill(this.color);
    }
    style(font) {
        textSize(this.pt);
        textFont(font);
    }
    graph() {
        var weights = [];
        var sum = 0;
        for (var i = 1; i < this.lines + 1; i++) {
            weights.push(this.wordy.length * sin((i * PI) / this.lines));
            sum = sum + ceil(this.wordy.length * sin((i * PI) / this.lines));
        }
        for (var i = 0; i < weights.length; i++) {
            weights[i] = ceil(this.wordy.length * (weights[i] / sum));
        }
        var counter = 0;
        for (var i = 0; i < this.lines + 1; i++) {
            var nextline = this.wordy.slice(counter, counter + weights[i]).join(" ");
            text(nextline, -100 * sin(((i + 1) * PI) / this.lines) + this.x, (i * this.pt * 1.333) + this.y, 50 * this.pt, this.pt * 1.333);
            counter = counter + weights[i];
        }
    }
}

var inconsolata;
var edgeops = [];
var canvasY;
var colors = ['#ffa99e', '#ffad42', '#35b099', '#66043a', '#1f8758'];
var paras;

function preload() {
    inconsolata = loadFont('https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2FInconsolata-Regular.ttf?v=1574724308643');
    arial = loadFont('https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2FArial.ttf?v=1575275809453');
}

function setup() {
    const lineRange = 10;
    const angleRange = PI / 5;
    const pointRange = 6;

    paras = selectAll('p');
    console.log(paras.length);

    canvasY = paras.length * 150 + 500;
    frameRate(10);
    createCanvas(windowWidth, canvasY, WEBGL);

    for (var i = 0; i < paras.length; i++) {
        var glob = new Bouleverse(
            paras[i].html(),
            random(0, 100) - 350 * sin(i * PI / 10),
            -(canvasY / 2) + (i * 150),
            random(11, 11 + lineRange),
            random(0, angleRange),
            random(0, angleRange),
            random(0, angleRange),
            random(14, 14 + pointRange),
            colors[floor(random(0, colors.length))]
        );
        edgeops.push(glob);
    }

    for (var i = 0; i < edgeops.length; i++) {
        push();
        edgeops[i].zig();
        edgeops[i].zag();
        edgeops[i].zog();
        // edgeops[i].hex(colors[floor(random(0, colors.length))]);
        edgeops[i].hex();
        edgeops[i].style(arial);
        edgeops[i].graph();
        pop();
    }
}

function draw() {
    clear();
    // orbitControl();
    for (var i = 0; i < edgeops.length; i++) {
        push();
        edgeops[i].zig();
        edgeops[i].zag();
        edgeops[i].zog();
        edgeops[i].hex();
        edgeops[i].style(arial);
        edgeops[i].graph();
        pop();
    }
}