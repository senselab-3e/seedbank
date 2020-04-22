export default function sketch26(p) {


    var width = 500;
    var height = 500;

    p.setup = function () {
        p.createCanvas(width, height);
        p.background('teal')
        p.fill('white')
        var sentence = "progress doesn't happen in\na straight line"
        p.textSize(30);
        p.text(sentence, 10, 200)



    }

    p.draw = function () {


    }

}