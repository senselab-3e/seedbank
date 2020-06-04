//import Vector from "react-p5-wrapper/node_modules/p5";
//import sub from "react-p5-wrapper/node_modules/p5";
import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch7(p) {
  var v;
  var vertices = [];
  var num = 22; // not currently in use // this is the number of points that you could pass as a value into the calculation for vertex locations, along the path of a circle
  //i changed d to diam ---> which may need to be updated in the 'OLD CODE' section

  //   maxDist = 15,
  //   minDist = 10;
  // var saveImg = false;

  var t; //this is a time increment being passed inthe the noise function and progressively being increased over time

  let diam = 250


  // function drawLines() {

  //   p.stroke(60, 232, 192)
  //   //p.stroke('#ffffff')
  //   // p.noFill()
  //   p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  //   // if (p.mouseIsPressed === true) {
  //   //   // p.line(p.mouseX, 55, p.mouseX, p.pmouseY);

  //   // } else {
  //   //   p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  //   // }

  // }
  var cnv

  p.setup = function () {
    cnv = p.createCanvas(500, 500);
    t = 0;
    p.frameRate = 10
    // let nums = p.map(p.mouseX, 0, p.width, 20, 60)

    // for (var i = 0; i < num; i++) {
    //   var x = p.width / 2 + p.sin((p.TWO_PI / num) * i) * diam;
    //   var y = p.height / 2 + p.cos((p.TWO_PI / num) * i) * diam;
    //   vertices[i] = p.createVector(x, y);
    // }
  };



  let color = {
    h: 18,
    s: 50,
    b: 100 // 0 goes to dark values
  }

  let colorInr = 0.1
  let dirH = 1
  let dirS = 1
  let dirB = 1

  p.updateColor = function () {
    //yellow spectrum
    // if (color.h >= 15) {
    //   dirH = -1
    // }
    // if (color.h <= 9) {
    //   dirH = 1
    // }
    //fullspectrum
    console.log(p.mouseX, p.pmouseX) // the previous mouse value is always printing the same as mouseX.. so always comes to a null

    //if (p.mouseX > p.pmouseX) {
    if (color.h >= 100) {
      dirH = -1
    }
    // } else if (p.mouseX < p.pmouseX) {
    if (color.h <= 0) {
      dirH = 1
    }
    //}

    color.h += colorInr * dirH
    color.s += colorInr * dirS
    color.b += colorInr * dirB
  }

  p.draw = function () {

    if (color.s >= 100) {
      dirS = -1
    }
    if (color.s <= 30) {
      dirS = 1
    }



    //if (p.mouseY !== p.pmouseY) {
    // if (color.b >= 100) {
    //   dirB = -1
    // }
    // if (color.b <= 80) {
    //   dirB = 1
    // }
    //}

    //var r = 1;
    // var scaleAmount = p.mouseX / 200;
    // p.scale(scaleAmount);


    cnv.mouseMoved(p.updateColor)


    p.colorMode(p.HSB, 100);
    //p.background(54, 100, 100);
    p.background(75)

    //console.log(p.floor(color.h), dirH)
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


    for (var i = 0; i < num; i++) {
      var x = p.sin((p.TWO_PI / num) * i) * diam;
      var y = p.cos((p.TWO_PI / num) * i) * diam;
      vertices[i] = p.createVector(x, y);
    }

    //p.stroke(color.h, color.s, color.b)

    p.push()
    p.stroke('white')
    p.noFill()
    p.translate(p.width / 2, p.height / 2);
    p.beginShape()
    //p.noFill()
    for (var i = 0; i < vertices.length; i++) {
      let x = vertices[i].x
      let y = vertices[i].y
      //this allows me to draw a circle, but then manipulate particular vertex points along its path. so i can get the wiggles and the shakes. 
      p.curveVertex(x * p.noise(t + p.random(0.01, 0.05)), y * p.noise(t + p.random(0.01, 0.05)))

      //p.point(x, y)

    }
    p.endShape(p.CLOSE)

    t += 0.001

    p.pop()

    ///NOTES: values being passed into Vector object constructor

    let cols = 6;
    let elSize = 50
    let elVertex = 25

    p.fill(color.h, color.s, color.b, 50)

    //NOTES: values being passed into the grid position calculations, which allows a translate function to be applied to each of those vector locations, in the Vector Object constructor, later
    let width = p.width // canvas size across which the grid should be calculated and distributed
    let grids = []
    let mult = width / cols

    let vectors = []



    //this calculates my grid --- specifically the centripical center points out of which my vectors for the elements will be drawn
    //it's a way to generate the translate offset values. 

    //p.translate(-p.width / 2, -p.height / 2)
    // i've set the var to start at 1, instead of 0, because i don't want the elements at the far edges of the canvas
    for (var i = 1; i < cols; i++) {

      for (var m = 1; m < cols; m++) {
        grids.push(p.createVector(i * mult, m * mult))
      }
    }
    // p.stroke('white')
    // p.noFill()
    for (var a = 0; a < grids.length; a++) {
      let x = grids[a].x
      let y = grids[a].y
      //p.point(x, y)
      //p.ellipse(x, y, 50, 50)
      let el = new Vector(x, y, elSize, elVertex, t, color)
      vectors.push(el)
    }

    for (let n = 0; n < vectors.length; n++) {
      vectors[n].show()
    }
  };


  // for (var a = 0; a < grids.length; a++) {

  //   for (var m = 0; m < num; m++) {
  //   var xC = p.sin((p.TWO_PI / num) * a) * 100;
  //   var yC = p.cos((p.TWO_PI / num) * a) * 100;
  //   circles[m] = p.createVector(xC, yC);
  //   }

  //   let x1 = grids[a].x
  //   let y1 = grids[a].y
  //   // p.point(x, y)
  //   // //p.ellipse(x, y, 50, 50)
  //   p.translate(x1, y1)


  //   p.point(xC, yC)
  // }



  class Vector {
    constructor(x, y, diam, vertex, t, color) {
      this.x = x;
      this.y = y;
      this.cirVertices = vertex
      this.diam = diam;
      this.elements = []
      this.incr = t
      this.color = color // this isn't currently being used --- as the univeral faill color and its shifts is going to the elements// but i could pull this out later. 

    }

    show() {
      //let xAround = p.sin((p.TWO_PI / num) * i) * this.diam;
      //p.ellipse(this.x, this.y, this.diam, this.diam)

      // p.push()
      // p.translate(this.x, this.y)

      // p.ellipse(0, 0, this.diam, this.diam)
      // p.pop()
      p.push()
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


        //console.log(p.noise(t))
        //p.point(x * p.noise(t + p.random(0.01, 0.05)), y * p.noise(t + p.random(0.01, 0.05)))
        //this allows me to draw a circle, but then manipulate particular vertex points along its path. so i can get the wiggles and the shakes. 
        p.curveVertex(xV * p.noise(this.incr + p.random(0.01, 0.09)), yV * p.noise(this.incr + p.random(0.01, 0.09)))
        //p.curveVertex(x * p.noise(t), y * p.noise(t))
        //p.point(xV, yV)

      }
      p.endShape(p.CLOSE)
      p.pop()

    }

    colors() {

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