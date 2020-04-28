export default function sketch27(p) {


    var width = 900;
    var height = 900;

    var sentencePrts = 'progress doesnt happen on a straight line'

    p.setup = function () {
        p.createCanvas(width, height);
        p.background('black')

        p.textAlign(p.CENTER, p.CENTER);
        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);



    }

    //By default, random() produces different results each time the program is run. Set the seed parameter to a constant to return the same pseudo-random numbers each time the software is run.



    p.draw = function () {
        p.background('black')
        let radius = 100;
        const amount = 15;
        const spacing = 360 / amount; //p.mouseX / amount;
        var coloring = p.color(p.random(255), p.random(255), p.random(255))
        // p.mouseX < 10 ? radius = 10 : radius = p.mouseX;
        // p.mouseX < 200 ? radius = p.mouseX : radius = 200;
        //---> bring this back to get the 1s again
        // p.push();
        // p.translate(width / 2, height / 2);


        // //use the push and pop so that the transformation effects remain localized and don’t accumulate.
        // for (let i = 0; i < amount; i++) {
        //     p.push();
        //     p.rotate(i * spacing);
        //     var num = new Num(1, 0 + radius, 0, 90, 255);
        //     num.render();
        //     p.pop();
        // }
        // p.pop();
        // --->

        var radius2 = 200;

        let spacing2 = 20;

        var radius4 = 100 //p.mouseX

        //this method.. the space between gets smaller as you move outside, rather then getting larger....

        for (let b = 0; b < 5; b++) {
            createWordRing(radius4 + spacing2 * b, 30 + 10 * b, b);
        }
        //createWordRing(radius2, amount2, 1);

        //createSentenceRing(50, sentencePrts, 1) // original weird spiral
        let words = sentencePrts.split(' ')
        //console.log(words.length)

        for (let c = 0; c < words.length; c++) {
            createSentenceRing(radius2 + spacing2 * c, 30 + words.length * c, c)
        }

    }

    function createWordRing(radius2, amount2, seed) {
        p.randomSeed(seed)
        let randomNumbers = [];
        for (let i = 0; i <= amount2; i++) {
            randomNumbers.push({
                r: parseInt(p.random(255)),
                b: parseInt(p.random(255)),
                g: parseInt(p.random(255)),
                num: parseInt(p.random(2))
            })
        }

        const spacing2 = 360 / amount2;
        //console.log(randomNumbers[0], randomNumbers[1])

        p.push();
        p.translate(width / 2, height / 2);
        const rotSpeed = 1.05;
        p.rotate(p.frameCount * p.random(-rotSpeed, rotSpeed));
        for (var n = 0; n < amount2; n++) {
            p.push();
            p.rotate(n * spacing2);

            let letter = new Letter(randomNumbers[n].num, 0 + radius2, 0, 90, randomNumbers[n]);
            //let letter = new Letter('1', 0 + radius2, 0, 90, randomNumbers[n]);
            //var letter = new Letter('word', 0 + radius2, 0, 90, randomNumbers[n]); // this gets the words to print along the circle. i bet if you split the string of each word into each letter, that's how you could get the letters of a word to follow along the line. 
            letter.render();
            letter.display()
            p.pop();
        }
        p.pop();

    }

    // --> original writing for Sentence Ring

    // function createSentenceRing(radius3, sentence, seed) {
    //     p.randomSeed(seed)
    //     let letters = sentence.split('')
    //     let randomNumbers = [];
    //     for (let i = 0; i <= letters.length; i++) {
    //         randomNumbers.push({
    //             r: parseInt(p.random(255)),
    //             b: parseInt(p.random(255)),
    //             g: parseInt(p.random(255))
    //         })
    //     }


    //     const spacing3 = 360 / letters.length;

    //     p.push();
    //     p.translate(width / 2, height / 2);
    //     let incrRadius = 0
    //     for (let m = 0; m < letters.length; m++) {
    //         //incrRadius is an attemp to create more of a spiral -- so a radius that will icrementally widen. but the expodential approach might but too loose in relation to spacing
    //         incrRadius += m * 0.1
    //         p.push();
    //         //p.rotate(m * spacing3);
    //         p.rotate(m);
    //         let letter = new Letter(letters[m], incrRadius, 0, 90, randomNumbers[m]);
    //         letter.render();
    //         letter.display()
    //     }
    //     p.pop();
    // }
    //-- > 


    // --- >> ACCIDENT. puts one word on each ring
    // function createSentenceRing(word, radius2, amount2, seed) {

    //     let words2 = sentencePrts.split(' ')
    //     //console.log(words2.length)
    //     console.log(words2[0])
    //     p.randomSeed(seed)
    //     let randomNumbers2 = [];
    //     for (let i = 0; i < words2.length; i++) {
    //         //console.log(i)
    //         randomNumbers2.push({
    //             r: parseInt(p.random(255)),
    //             b: parseInt(p.random(255)),
    //             g: parseInt(p.random(255))
    //             //num: words2[i] //parseInt(p.random(2))
    //         })
    //     }

    //     const spacing2 = 360 / amount2;
    //     console.log(randomNumbers2[1].num)

    //     p.push();

    //     //the problem is that it's at the level of the function calculation for amount, that the below loop value derives its spacing. the words need to be brought in, earlier (?)
    //     p.translate(width / 2, height / 2);
    //     for (var n = 0; n < 7; n++) {
    //         p.push();
    //         p.rotate(n * spacing2);
    //         let letter = new Letter(word, 0 + radius2, 0, 90, randomNumbers2[n]);
    //         //let letter = new Letter('1', 0 + radius2, 0, 90, randomNumbers[n]);
    //         //var letter = new Letter('word', 0 + radius2, 0, 90, randomNumbers[n]); // this gets the words to print along the circle. i bet if you split the string of each word into each letter, that's how you could get the letters of a word to follow along the line. 
    //         letter.render();
    //         letter.display()
    //         p.pop();
    //     }
    //     p.pop();


    // }

    // This one spirals the sentence, one per right, but the letters will start to overlap once it exceeds 360 degress. 

    function createSentenceRing(radius2, amount2, seed) {

        let words2 = sentencePrts.split(' ') //let words2 = sentencePrts.split('') <--- will distribute each letter around the circle, coloring each letter individuallyy, rather then by each word
        //console.log(words2.length)

        p.randomSeed(seed)
        let randomNumbers2 = [];
        // var rotSpeed2 = 1.05;
        // p.rotate(p.frameCount * p.random(-rotSpeed2, rotSpeed2));
        for (let i = 0; i < words2.length; i++) {
            //console.log(i)
            randomNumbers2.push({
                r: parseInt(p.random(255)),
                b: parseInt(p.random(255)),
                g: parseInt(p.random(255))
                //num: words2[i] //parseInt(p.random(2))
            })
        }

        const spacing2 = 360 / amount2;
        //console.log(randomNumbers2[1].num)

        p.push();

        //the problem is that it's at the level of the function calculation for amount, that the below loop value derives its spacing. the words need to be brought in, earlier (?)
        p.translate(width / 2, height / 2);

        const rotSpeed3 = 1.05;
        p.rotate(p.frameCount * p.random(-1, 1));
        // var rotSpeed2 = 1.05; // not sure why this is always only rotation clockwise = which indicates and always positive value on the rotSpeed passing to the rotation function, even though there is a random being used....
        // p.rotate(p.frameCount * p.random(-rotSpeed2, rotSpeed2));
        for (var n = 0; n < words2.length; n++) {
            p.push();
            p.rotate(n * spacing2);
            let letter = new Letter(words2[n], 0 + radius2, 0, 90, randomNumbers2[n]);
            //let letter = new Letter('1', 0 + radius2, 0, 90, randomNumbers[n]);
            //var letter = new Letter('word', 0 + radius2, 0, 90, randomNumbers[n]); // this gets the words to print along the circle. i bet if you split the string of each word into each letter, that's how you could get the letters of a word to follow along the line. 
            letter.render();
            letter.display()
            p.pop();
        }
        p.pop();


    }


    class Num {
        constructor(msg, x, y, rot, clr) {
            this.x = x;
            this.y = y;
            this.rot = rot;
            this.msg = msg;
            this.color = clr;
        }

        render() {
            p.push();
            p.fill(this.color);
            p.translate(this.x, this.y);
            p.rotate(this.rot);
            p.text(this.msg, 0, 0);
            p.pop();
        }
    }

    class Letter {
        constructor(msg, x, y, rot, clr) {
            this.x = x;
            this.y = y;
            this.rot = rot;
            this.msg = msg;
            // this.r = p.random(255)
            // this.g = p.random(255)
            // this.b = p.random(255)
            this.clr = clr
        }

        render() {
            p.push();
            p.fill(this.clr.r, this.clr.b, this.clr.g);
            //p.fill(255)
            p.translate(this.x, this.y);
            p.rotate(this.rot);
            p.text(this.msg, 0, 0);
            p.pop();
        }

        display() {
            //sconsole.log(this.clr)
            //p.fill(this.clr);
        }
    }

}