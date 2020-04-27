export default function sketch26(p) {


    var width = 800;
    var height = 500;

    p.setup = function () {
        p.createCanvas(width, height);
        p.background('teal')
        //this thing here, overrides the different sizes the the function below.... for some reason
        //var fontFamily = p.textFont('Georgia');
        var sentence = "progress doesn't happen in a\n  straight line"
        //p.textSize(30);
        // var textstyling = p.textFont('Georgia', 30)
        //p.textFont(fontFamily)
        //p.textSize(64)
        //p.text(sentence, 10, 200)
        console.log(sentence.width)

        var x = 10;

        console.log(sentence.charAt(1))

        for (let i = 0; i < sentence.length; i++) {
            let letter = sentence.charAt(i)
            // console.log(sentence[i])
            //when i applied the font family above this loop, it was overriding the random sizing...
            p.textFont('Georgia');
            //p.push();
            p.fill(p.random(255), p.random(255), p.random(255))
            //p.pop();
            p.textSize(p.random(12, 48))
            p.text(letter, x, 300)
            // p.text(sentence[i], x, 400);
            // p.text(sentence.charAt(i), x, 300); //smooshes everything together
            //x += 35;
            x += p.textWidth(letter)
        }



        // for (let i = 0; i = sentence.length; i++) {
        //     console.log(sentence.length)
        //     //p.text(sentence[i], x, 300);
        //     //p.text(sentence, x, 200)
        //     //x += 32;
        // }

    }


    p.draw = function () {


    }

}