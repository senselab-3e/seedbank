//import Vector from "react-p5-wrapper/node_modules/p5";
//import sub from "react-p5-wrapper/node_modules/p5";
import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch7(p) {
  var v;
  var vertices = [];
  var num = 10; // not currently in use // this is the number of points that you could pass as a value into the calculation for vertex locations, along the path of a circle
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

  p.setup = function () {
    p.createCanvas(500, 500);
    t = 0;
    p.frameRate = 10
    // let nums = p.map(p.mouseX, 0, p.width, 20, 60)

    // for (var i = 0; i < num; i++) {
    //   var x = p.width / 2 + p.sin((p.TWO_PI / num) * i) * diam;
    //   var y = p.height / 2 + p.cos((p.TWO_PI / num) * i) * diam;
    //   vertices[i] = p.createVector(x, y);
    // }
  };

  let incrNoise = 0.001;

  let color = {
    h: 18,
    s: 80,
    b: 100 // 0 goes to dark values
  }

  let colorInr = 0.1
  let dirH = 1
  let dirS = 1
  let dirB = 1

  p.draw = function () {


    //var r = 1;
    // var scaleAmount = p.mouseX / 200;
    // p.scale(scaleAmount);



    if (color.h >= 15) {
      dirH = -1
    }
    if (color.h <= 9) {
      dirH = 1
    }
    // if (color.s <= 50) {
    //   dirS = 1
    // }
    // if (color.s >= 255) {
    //   dirS = -1
    // }


    if (color.b >= 80) {
      dirS = -1
    }
    if (color.b <= 25) {
      dirS = 1
    }

    color.h += colorInr * dirH
    //color.s += colorInr * dirS
    color.b += colorInr * dirB

    p.colorMode(p.HSB, 100);
    p.background(54, 100, 100);

    console.log(color.s)
    p.translate(p.width / 2, p.height / 2);
    //when i introduced translate i no longer needed to have width/2 + p.sin((p.TWOPI)) etc etc
    //p.scale(p.mouseX / 500, p.mouseY / 500);

    //this is useful if i want the number of vertexes to correspond with the mouse movements. 
    // let nums = p.map(p.mouseY, 0, p.height, 0, 30)
    // nums = p.floor(nums)

    // nums < 3 ? nums = 3 : nums = nums; // this was so the minimum shape that would be drawn was a triangle
    //console.log(nums)

    //if i want to mouse the circle's diamter according to mouse movements:
    diam = p.mouseX

    if (p.mouseX > 400) {
      diam = 400
    }
    if (p.mouseX < 50) {
      diam = 50
    }

    //playing with different ways of injecting a mouse dependent data into how the noise function incrementally changes over time
    //let incr = p.map(p.mouseX, 0, p.width, 0, 0.01)

    //12 was originally the value nums
    for (var i = 0; i < 22; i++) {
      var x = p.sin((p.TWO_PI / 22) * i) * diam;
      var y = p.cos((p.TWO_PI / 22) * i) * diam;
      vertices[i] = p.createVector(x, y);
    }


    p.beginShape()
    p.stroke(color.h, color.s, color.b)
    //p.strokeWeight(5)
    p.fill(color.h, color.s, color.b)
    //p.noFill()
    for (var i = 0; i < vertices.length; i++) {
      let x = vertices[i].x
      let y = vertices[i].y


      //console.log(p.noise(t))
      //p.point(x * p.noise(t + p.random(0.01, 0.05)), y * p.noise(t + p.random(0.01, 0.05)))
      //this allows me to draw a circle, but then manipulate particular vertex points along its path. so i can get the wiggles and the shakes. 
      p.curveVertex(x * p.noise(t + p.random(0.01, 0.05)), y * p.noise(t + p.random(0.01, 0.05)))
      //p.curveVertex(x * p.noise(t), y * p.noise(t))

    }
    p.endShape(p.CLOSE)

    t += 0.002;
    //t += incr; //see note above for how incr is being experimented with 

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
  };



}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight-4);
// }