//import Vector from "react-p5-wrapper/node_modules/p5";
//import sub from "react-p5-wrapper/node_modules/p5";
import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch7(p) {
  var v;
  var vertices = [];
  var num = 50,
    d = 50,
    maxDist = 30,
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
    for (var i = 0; i < num; i++) {
      var x = p.width / 2 + p.sin((p.TWO_PI / num) * i) * d;
      var y = p.height / 2 + p.cos((p.TWO_PI / num) * i) * d;
      vertices[i] = p.createVector(x, y);
    }
  };

  p.draw = function () {

    p.background(238);
    var r = 5;
    // var scaleAmount = p.mouseX / 200;
    // p.scale(scaleAmount);

    p.translate(p.width / 2, p.height / 2);
    p.scale(p.mouseX / 500, p.mouseY / 500);

    p.beginShape();
    p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
    p.stroke('yellow');
    p.strokeWeight(1);
    for (var i = 0; i < vertices.length; i++) {
      vertices[i].x += p.random(-r, r);
      vertices[i].y += p.random(-r, r);
      var next = (i + 1) % num;
      vertices[next].x += p.random(-r, r);
      vertices[next].y += p.random(-r, r);
      //console.log(Vector);
      v = p5.Vector.sub(vertices[next], vertices[i]);

      v.normalize();
      v.setMag(maxDist);

      vertices[next] = p5.Vector.add(vertices[i], v);

      for (var j = 0; j < vertices.length; j++) {
        drawLines()
        if (j !== i) {
          var d = p5.Vector.dist(vertices[i], vertices[j]);
          if (d < minDist) {
            var temp = p5.Vector.sub(vertices[i], vertices[j]);
            temp.normalize();
            temp.setMag(minDist);
            vertices[i] = p5.Vector.add(vertices[j], temp);
          }
        }
      }
      p.vertex(vertices[i].x, vertices[i].y);
    }
    p.endShape(p.CLOSE);

    if (saveImg && p.frameCount % 2 === 0 && p.counter < 400) {
      p.save("image-" + p.counter + ".png");
      p.counter++;
    }
  };



}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight-4);
// }