import React, { Component } from "react";
import Sketch from "react-p5";

export class Bicho extends Component {
  state = {
    bichoData: 0
  };
  canvas_width = 500; /// trying to use this to impose a limit space on where mouse down and mouse release actions are occuring, doesn't work
  canvas_height = 500;

  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  nodes = 37;
  limbs = 5;
  spacing = 5;
  color = "white";
  spring = 0.005;
  damp = 0.9;
  curve = 1.0;
  nodeX = new Array(this.nodes).fill(0);
  nodeY = new Array(this.nodes).fill(0);
  angle = new Array(this.nodes).fill(0);
  jitter = new Array(this.nodes).fill(0);
  radius = 23;
  rotAngle = 0;
  json = 0;
  rotrate = 0.0174533;

  tare_json_data = dat => {
    var temp_data = dat;
    var tareX = temp_data.path[0].x;
    var tareY = temp_data.path[0].y;
    for (let i = 0; i < temp_data.path.length; i++) {
      temp_data.path[i].x -= tareX;
      temp_data.path[i].y -= tareY;
    }
    this.setState({
      bichoData: temp_data
    });
    this.color = this.state.bichoData.color;
    this.json = this.state.bichoData.path;
  };

  accel = (mx, my) => {
    this.ax = (mx - this.x) * 0.5;
    this.ay = (my - this.y) * 0.5;
    //springing effect
    this.ax *= this.spring;
    this.ay *= this.spring;
  };

  vel = () => {
    this.vx += this.ax;
    this.vy += this.ay;
  };

  friction = () => {
    this.vx *= this.damp;
    this.vy *= this.damp;
  };

  moveCentre = () => {
    this.x += this.vx;
    this.y += this.vy;

    for (var i = 0; i < this.nodes; i++) {
      this.nodeX[i] =
        this.x +
        Math.cos(this.rotAngle * this.rotrate) * this.radius +
        Math.sin(this.angle[i] * this.rotrate);
      this.nodeY[i] =
        this.y +
        Math.sin(this.rotAngle * this.rotrate) * this.radius +
        Math.sin(this.angle[i] * this.rotrate);
      this.rotAngle += 360.0 / this.nodes;
      this.angle[i] *= this.jitter[i];
    }
  };

  setup = (p5, canvasParentRef) => {
    this.tare_json_data(this.props.jsonData);

    p5.createCanvas(this.canvas_width, this.canvas_height).parent(
      canvasParentRef
    ); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.noStroke();
    p5.frameRate(30);

    for (let i = 0; i < this.jitter.length; i++) {
      this.jitter[i] = p5.random(0.9, 1.1);
    }
  };
  //NOTES online... Use: context.clearRect(0, 0, canvas.width, canvas.height);
  //This is the fastest and most descriptive way to clear the entire canvas.
  // a better way to clear the canvas needs to be introduced... rather then redrawing it at each new drawing initialization

  draw = p5 => {
    p5.clear();
    p5.fill(0, 0);
    p5.rect(0, 0, this.canvas_width, this.canvas_height);

    //update node positions & kinematics
    this.accel(p5.mouseX, p5.mouseY);
    this.vel();
    this.friction();
    this.moveCentre();

    //draw bicho as collection of limbs indexed by i
    this.curve = 0.5 - (Math.abs(this.vx) + Math.abs(this.vy)) * 0.1;
    for (var i = 1; i < this.limbs + 1; i++) {
      var offset = i * this.spacing;
      var rate = i + 0.01 + 2;
      p5.curveTightness(this.curve);
      p5.fill(this.color);

      p5.beginShape();
      for (var j = 1; j < this.nodes + 1; j++) {
        p5.curveVertex(
          //x
          this.nodeX[j] +
            this.json[j + i].x +
            offset +
            0.4 *
              100 *
              Math.sin(
                this.nodeX[j] * (rate + Math.PI / this.nodes) * this.rotrate
              ),
          //y
          this.nodeY[j] +
            this.json[j + i].y +
            offset +
            0.4 *
              100 *
              Math.cos(
                this.nodeY[j] * (rate + Math.PI / this.nodes) * this.rotrate
              )
        );
      }
      p5.endShape(p5.CLOSE);
    }
  };

  render() {
    return (
      <div>
        <Sketch
          style={{
            position: "absolute",
            top: this.props.topPos,
            left: this.props.leftPos,
            zIndex: -100
          }}
          setup={this.setup}
          draw={this.draw}
        />
      </div>
    );
  }
}

export default Bicho;
