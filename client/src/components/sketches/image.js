export default function imageprinting(p) {
    var orange;
    p.preload = function () {
        orange = p.loadImage("./assets/orange.png");

    }
    p.setup = function () {
        p.createCanvas(400, 400);
    }
    p.draw = function () {
        p.background(255);
        p.image(orange, p.mouseX, p.mouseY);
    }



}