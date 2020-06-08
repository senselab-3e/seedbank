//import Vector from "react-p5-wrapper/node_modules/p5";
//import sub from "react-p5-wrapper/node_modules/p5";
//import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch7(p) {
  //var v;
  var vertices = []; // old array used for push 'each' element's vertics in a loop - and passing those values into another loop that created an element. this has been replaced by an object constructor 
  var num = 22; // not currently in use // this is the number of points that you could pass as a value into the calculation for vertex locations, along the path of a circle
  //i changed d to diam ---> which may need to be updated in the 'OLD CODE' section

  //   maxDist = 15,
  //   minDist = 10;
  // var saveImg = false;

  var t; //this is a time increment being passed inthe the noise function and progressively being increased over time

  let diam = 250 //this is when i wasn't using a constructor for calculating the element width

  let vectors = []

  //var cnv //this was for when i needed to assign canvas a value, so that i could pass a function to it.

  let colorInr = 0.5 // increments by which the color hue values are increased in the strobing...
  let dirH = 1 //direction of the color hue shifts
  let dirS = 1
  let dirB = 1

  p.setup = function () {
    //cnv = p.createCanvas(500, 500); **see note above
    p.createCanvas(500, 500);
    t = 0;
    p.frameRate = 10

    ///NOTES: values being passed into Vector object constructor
    let cols = 2; // remember that on the loop you created, you ommited the first instance so it wouldn't be drawn a the 0 coordinate edge. so when i write 5, only 4 will occure because it skipped over the first instance [0]
    let elSize = 235
    let elVertex = 15

    //NOTES: values being passed into the grid position calculations, which allows a translate function to be applied to each of those vector locations, in the Vector Object constructor, later
    let width = p.width // canvas size across which the grid should be calculated and distributed
    let grids = []
    let mult = width / cols
    //this calculates my grid --- specifically the centripical center points out of which my vectors for the elements will be drawn
    //it's a way to generate the translate offset values. 

    //p.translate(-p.width / 2, -p.height / 2)
    // i've set the var to start at 1, instead of 0, because i don't want the elements at the far edges of the canvas
    for (let i = 1; i < cols; i++) {

      for (var m = 1; m < cols; m++) {
        grids.push(p.createVector(i * mult, m * mult))
      }
    }
    // p.stroke('white')
    // p.noFill()
    let colorArray = []

    for (var a = 0; a < grids.length; a++) {
      let x = grids[a].x
      let y = grids[a].y
      let incrOrg = 0.001
      let noiseIncr = p.random(0.002, 0.009) // amount to be passed to noise values in the constructor - in an attempt to not have every instance be moving in exactly the same way. 
      let ranHueVal = p.floor(p.random(100)) // doesn't work. runs continuously

      colorArray.push(ranHueVal) // doesn't work. runs continuously
      let el = new Vector(x, y, elSize, elVertex, incrOrg, noiseIncr, colorArray[a])
      vectors.push(el)
    }
  };
  p.draw = function () {
    p.background(255)
    p.colorMode(p.HSB, 100);

    for (let n = 0; n < vectors.length; n++) {
      // this draws out the circles as intended. 
      //vectors[n].squares() // this is a quick test of a constructor squares instead of circles
      vectors[n].colors()
      vectors[n].show()
    }
    //central vibrating circle
    // for (let i = 0; i < num; i++) {
    //   var x = p.sin((p.TWO_PI / num) * i) * diam;
    //   var y = p.cos((p.TWO_PI / num) * i) * diam;
    //   vertices[i] = p.createVector(x, y);
    // }

    // p.push()
    // p.stroke('white')
    // p.noFill()
    // p.translate(p.width / 2, p.height / 2);
    // p.beginShape()
    // //p.noFill()
    // p.strokeWeight(2)
    // for (let i = 0; i < vertices.length; i++) {
    //   let x = vertices[i].x
    //   let y = vertices[i].y
    //   //this allows me to draw a circle, but then manipulate particular vertex points along its path. so i can get the wiggles and the shakes. 
    //   p.curveVertex(x * p.noise(t + p.random(0.01, 0.05)), y * p.noise(t + p.random(0.01, 0.05)))

    //   //p.point(x, y)

    // }
    // p.endShape(p.CLOSE)

    // t += 0.001

    // p.pop()

  };


  class Vector {
    constructor(x, y, diam, vertex, incrOrg, incr, colRan) {
      this.x = x;
      this.y = y;
      this.cirVertices = vertex
      this.diam = diam;
      this.elements = []
      this.incrOrg = incrOrg
      this.incr = incr //p.random(0.002, 0.006) //incr //p.random(0.002, 0.006)
      this.colorObj = {
        h: colRan, //p.random(255), // random from here, also runs continuously
        s: 100, //colRan,
        b: 90,
        a: 90 //colRan

      }
    }

    show() {
      this.incrOrg += this.incr
      p.push() ///this push is super important
      p.colorMode(p.HSB, 100);
      p.fill(this.colorObj.h, this.colorObj.s, this.colorObj.b, this.colorObj.a)
      p.translate(this.x, this.y)
      p.noStroke()
      for (let g = 0; g < this.cirVertices; g++) {
        var xC = p.sin((p.TWO_PI / this.cirVertices) * g) * this.diam;
        var yC = p.cos((p.TWO_PI / this.cirVertices) * g) * this.diam;
        this.elements[g] = p.createVector(xC, yC);
      }
      p.beginShape()

      for (let v = 0; v < this.elements.length; v++) {
        let xV = this.elements[v].x
        let yV = this.elements[v].y
        //this allows me to draw a circle, but then manipulate particular vertex points along its path. so i can get the wiggles and the shakes. 
        p.curveVertex(xV * p.noise(this.incrOrg + p.random(0.01, 0.09)), yV * p.noise(this.incrOrg + p.random(0.01, 0.09)))
      }
      p.endShape(p.CLOSE)
      p.pop()
    }

    colors() {

      //investigate later how much this colors are strobing.... it seem like there's more of a saturation or lightness being shifted through? or still within a few shades of the original coloring? not the full rainbow.... 

      p.push()
      if (this.colorObj.h >= 100) {
        dirH = -1
      }
      if (this.colorObj.h <= 0) {
        dirH = 1
      }

      // if (this.colorObj.s >= 90) {
      //   dirS = -1
      // }
      // if (this.colorObj.s <= 50) {
      //   dirS = 1
      // }

      // if (this.colorObj.b >= 100) {
      //   dirB = -1
      // }
      // if (this.colorObj.b <= 80) {
      //   dirB = 1
      // }

      this.colorObj.h += colorInr * dirH
      // this.colorObj.s += colorInr * dirS
      //this.colorObj.b += colorInr * dirB
      //write now it looks like black is being applied slightly universally, but maybe not. hard to tell. investigate later

      // console.log(this.colorObj.h)
      p.pop()
    }

    squares() {
      this.incrOrg += this.incr
      p.noStroke()
      p.push()
      p.fill(this.colorObj.h, this.colorObj.s, this.colorObj.b)
      p.beginShape()
      p.vertex(this.x - this.diam * p.noise(this.incrOrg + p.random(1.01, 1.09)), this.y - this.diam * p.noise(this.incrOrg + p.random(1.01, 1.05)))
      p.vertex(this.x + this.diam * p.noise(this.incrOrg + p.random(1.01, 1.09)), this.y - this.diam * p.noise(this.incrOrg + p.random(1.01, 1.05)))

      p.vertex(this.x + this.diam * p.noise(this.incrOrg + p.random(1.01, 1.09)), this.y + this.diam * p.noise(this.incrOrg + p.random(1.01, 1.05)))
      p.vertex(this.x - this.diam * p.noise(this.incrOrg + p.random(1.01, 1.09)), this.y + this.diam * p.noise(this.incrOrg + p.random(1.01, 1.05)))
      p.endShape(p.CLOSE)
      p.pop()
    }
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight-4);
// }

//OLD CODE

// p.beginShape();
// p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
// p.stroke('yellow');
// p.strokeWeight(1);
// for (var i = 0; i < vertices.length; i++) {
//   vertices[i].x += p.random(-r, r);
//   vertices[i].y += p.random(-r, r);
//   var next = (i + 1) % num;
//   vertices[next].x += p.random(-r, r);
//   vertices[next].y += p.random(-r, r);
//   //console.log(Vector);
//   v = p5.Vector.sub(vertices[next], vertices[i]);

//   v.normalize();
//   v.setMag(maxDist);

//   vertices[next] = p5.Vector.add(vertices[i], v);

//   for (var j = 0; j < vertices.length; j++) {
//     drawLines()
//     if (j !== i) {
//       var d = p5.Vector.dist(vertices[i], vertices[j]);
//       if (d < minDist) {
//         var temp = p5.Vector.sub(vertices[i], vertices[j]);
//         temp.normalize();
//         temp.setMag(minDist);
//         vertices[i] = p5.Vector.add(vertices[j], temp);
//       }
//     }
//   }
//   p.vertex(vertices[i].x, vertices[i].y);
// }
// p.endShape(p.CLOSE);


// OLD CODE ABOVE
// if (saveImg && p.frameCount % 2 === 0 && p.counter < 400) {
//   p.save("image-" + p.counter + ".png");
//   p.counter++;
// }

//OLD CODE


//p.translate(p.width / 2, p.height / 2);
//when i introduced translate i no longer needed to have width/2 + p.sin((p.TWOPI)) etc etc
//p.scale(p.mouseX / 500, p.mouseY / 500);

//this is useful if i want the number of vertexes to correspond with the mouse movements. 
// let nums = p.map(p.mouseY, 0, p.height, 0, 30)
// nums = p.floor(nums)

// nums < 3 ? nums = 3 : nums = nums; // this was so the minimum shape that would be drawn was a triangle
//console.log(nums)

//NOTE--->if i want to mouse the circle's diamter according to mouse movements:
// diam = p.mouseX

// if (p.mouseX > 400) {
//   diam = 400
// }
// if (p.mouseX < 50) {
//   diam = 50
// }

//playing with different ways of injecting a mouse dependent data into how the noise function incrementally changes over time
//let incr = p.map(p.mouseX, 0, p.width, 0, 0.01)

///OLD METHOD OF DRAWING OBJECTS IN A GRID THAT DOESN't use a constructor.



// ///NOTES: values being passed into Vector object constructor

// let cols = 6;
// let elSize = 90
// let elVertex = 25

// p.fill(color.h, color.s, color.b, 50)
// //NOTES: values being passed into the grid position calculations, which allows a translate function to be applied to each of those vector locations, in the Vector Object constructor, later
// let width = p.width // canvas size across which the grid should be calculated and distributed
// let grids = []
// let mult = width / cols

// let vectors = []



// //this calculates my grid --- specifically the centripical center points out of which my vectors for the elements will be drawn
// //it's a way to generate the translate offset values. 

// //p.translate(-p.width / 2, -p.height / 2)
// // i've set the var to start at 1, instead of 0, because i don't want the elements at the far edges of the canvas
// for (let i = 1; i < cols; i++) {

//   for (var m = 1; m < cols; m++) {
//     grids.push(p.createVector(i * mult, m * mult))
//   }
// }
// // p.stroke('white')
// // p.noFill()
// let colorArray = []

// for (var a = 0; a < grids.length; a++) {
//   let x = grids[a].x
//   let y = grids[a].y
//   let incrOrg = 0.001
//   let incr = p.random(0.002, 0.009) // amount to be passed to noise values in the constructor - in an attempt to not have every instance be moving in exactly the same way. 
//   let ran = p.floor(p.random(100)) // doesn't work. runs continuously
//   colorArray.push(ran) // doesn't work. runs continuously
//   console.log(ran.length)

//   //p.point(x, y)
//   //p.ellipse(x, y, 50, 50)

//   // p.push()
//   // //p.randomSeed(1)
//   // let colorObj = {
//   //   h: p.random(255),
//   //   s: 100,
//   //   b: 100
//   // }
//   // p.pop()

//   // p.randomSeed(grids.length)

//   let el = new Vector(x, y, elSize, elVertex, incrOrg, incr, colorArray[a])
//   vectors.push(el)
// }