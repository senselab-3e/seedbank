//import Vector from "react-p5-wrapper/node_modules/p5";
//import sub from "react-p5-wrapper/node_modules/p5";
import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch7(p) {
  var v;
  var vertices = [];
  var num = 10,
    //i changed d to diam ---> which may need to be updated in the 'OLD CODE' section
    diam = 150,
    maxDist = 15,
    minDist = 10;
  var saveImg = false;


  function drawLines() {

    p.stroke(60, 232, 192)
    //p.stroke('#ffffff')
    // p.noFill()
    p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    // if (p.mouseIsPressed === true) {
    //   // p.line(p.mouseX, 55, p.mouseX, p.pmouseY);

    // } else {
    //   p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    // }

  }

  p.setup = function () {
    p.createCanvas(500, 500);

    // let nums = p.map(p.mouseX, 0, p.width, 20, 60)

    // for (var i = 0; i < num; i++) {
    //   var x = p.width / 2 + p.sin((p.TWO_PI / num) * i) * diam;
    //   var y = p.height / 2 + p.cos((p.TWO_PI / num) * i) * diam;
    //   vertices[i] = p.createVector(x, y);
    // }
  };

  let incrNoise = 0.001;

  p.draw = function () {

    p.background(238);
    var r = 1;
    // var scaleAmount = p.mouseX / 200;
    // p.scale(scaleAmount);

    //p.translate(p.width / 2, p.height / 2);
    //p.scale(p.mouseX / 500, p.mouseY / 500);


    let nums = p.map(p.mouseY, 0, p.height, 0, 30)
    nums = p.floor(nums)
    //this was doing weird things in the drawing with extra vertice drawings....



    nums < 3 ? nums = 3 : nums = nums;
    console.log(nums)

    for (var i = 0; i < nums; i++) {
      var x = p.width / 2 + p.sin((p.TWO_PI / nums) * i) * diam;
      var y = p.height / 2 + p.cos((p.TWO_PI / nums) * i) * diam;
      vertices[i] = p.createVector(x, y);
    }


    p.beginShape()
    p.stroke('purple')
    p.strokeWeight(5)
    p.fill('white')
    //p.noFill()
    for (var i = 0; i < vertices.length; i++) {
      let x = vertices[i].x
      let y = vertices[i].y
      p.point(x, y)
    }
    p.endShape(p.CLOSE)

    incrNoise += 0.001
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