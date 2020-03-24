import Vector from "react-p5-wrapper/node_modules/p5";
//import sub from "react-p5-wrapper/node_modules/p5";
import p5 from "react-p5-wrapper/node_modules/p5";

export default function sketch7(p) {
  var v;
  var vertices = [];
  var num = 200,
    d = 100,
    maxDist = 10,
    minDist = 10;
  var saveImg = false;

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
    var r = 1;
    p.beginShape();
    p.fill(225, 76, 69);
    p.stroke(34);
    p.strokeWeight(8);
    for (var i = 0; i < vertices.length; i++) {
      vertices[i].x += p.random(-r, r);
      vertices[i].y += p.random(-r, r);
      var next = (i + 1) % num;
      vertices[next].x += p.random(-r, r);
      vertices[next].y += p.random(-r, r);
      console.log(Vector);
      v = p5.Vector.sub(vertices[next], vertices[i]);
      //supposed to be p5.Vector.sub
      v.normalize();
      v.setMag(maxDist);

      vertices[next] = p5.Vector.add(vertices[i], v);

      for (var j = 0; j < vertices.length; j++) {
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