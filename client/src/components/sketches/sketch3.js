export default function sketch3(p) {
  p.setup = function() {
    p.createCanvas(500, 500);
    p.background(0);
  };

  function variableEllipse(x, y, px, py, p) {
    let speed = p.abs(x - px) + p.abs(y - py);
    p.stroke(speed);
    p.ellipse(x, y, speed, speed);
  }

  p.draw = function() {
    p.stroke(255);
    p.fill(p.pmouseX % 255, p.pmouseY % 255, p.mouseY % 255);
    if (p.mouseIsPressed === true) {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, p);
      p.ellipse(150, 150, 50, 50);
    }
  };
}
