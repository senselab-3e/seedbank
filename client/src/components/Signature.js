import React, { Component } from "react";
import Sketch from "react-p5";

class Bicho extends Component {
  state = {
    bichoData: 0
  };
  canvas_width = window.innerWidth;
  canvas_height = window.innerHeight;

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

class Doodle extends Component {
  state = {
    drawing: false,
    coloring: false,
    submitting: false
  };
  incA = 0;
  incB = 0;
  points = [];
  hue = Math.floor(Math.random(0, 360));
  gray = 75;
  color = "hsl(" + this.hue + ", 75%, 64%)";
  hsl = [];
  motion = 0;
  spin = 0;
  dummyX = 0;
  dummyY = 0;
  scale = 0;
  canvas_width = window.innerWidth;
  canvas_height = window.innerHeight;

  varyColor = (mx, my) => {
    var h =
      Math.abs(
        this.hue + Math.floor((mx - this.dummyX) * (360 / this.canvas_width))
      ) % 360;
    var g = Math.min(
      Math.abs(
        this.gray + Math.floor((my - this.dummyY) * (100 / this.canvas_height))
      ),
      100
    );
    var l = Math.max(this.gray - 11, 0);
    this.color = "hsl(" + h + ", " + g + "%, " + l + "%)";
    this.hsl = [h, g, l];
  };

  hsltohex = (h, s, l) => {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  submitDrawing = () => {
    // if(42<this.points.length) {
    var hex = this.hsltohex(this.hsl[0], this.hsl[1], this.hsl[2]);
    var data = {
      color: hex,
      path: this.points
    };
    console.log(data);
    // if(500<this.points.length) {
    // var path_data = this.points.splice(0, this.points.length-500);
    // } else {
    //   var path_data = this.points;
    // }
    // }
  };

  disappear = t => {
    this.scale = 1.01 - 0.01 * t;
    if (0.5 < this.scale) {
      for (var i = 0; i < this.points.length; i++) {
        this.points[i].x *= this.scale;
        this.points[i].y *= this.scale;
        this.motion *= this.scale;
      }
    } else {
      this.points = [];
      this.incA = 0;
      this.incB = 0;
      this.setState({
        drawing: false,
        coloring: false,
        submitting: false
      });
    }
  };

  animateX = i => {
    var x =
      this.motion *
      20 *
      Math.sin((this.spin * i * Math.PI) / this.points.length);
    return x;
  };

  animateY = i => {
    var y =
      this.motion *
      20 *
      Math.cos((this.spin * i * Math.PI) / this.points.length);
    return y;
  };

  mousePressed = p5 => {
    if (!this.state.drawing && !this.state.coloring && !this.state.submitting) {
      this.setState({
        drawing: true,
        coloring: false,
        submitting: false
      });
    } else if (
      !this.state.drawing &&
      this.state.coloring &&
      !this.state.submitting
    ) {
      this.setState({
        drawing: false,
        coloring: false,
        submitting: true
      });
    }
  };

  mouseDragged = p5 => {
    if (this.state.drawing && !this.state.coloring && !this.state.submitting) {
      var p = {
        x: p5.mouseX,
        y: p5.mouseY
      };
      this.points.push(p);
    }
  };

  mouseReleased = p5 => {
    if (this.state.drawing && !this.state.coloring && !this.state.submitting) {
      this.setState({
        drawing: false,
        coloring: true,
        submitting: false
      });
    } else if (this.state.submitting) {
      this.submitDrawing();
    }
  };

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(this.canvas_width, this.canvas_height).parent(
      canvasParentRef
    ); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = p5 => {
    // p5.background(100, 100, 100);
    p5.clear();
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    if (this.state.coloring) {
      this.varyColor(p5.mouseX, p5.mouseY);
      this.spin = 10 * Math.sin((this.incA * Math.PI) / this.points.length);
      this.motion = 1;
      this.incA += 0.1;
    }

    if (this.state.submitting) {
      this.spin =
        10 * Math.sin(((this.incA + this.incB) * Math.PI) / this.points.length);
      this.disappear(this.incB);
      this.incB += 0.5;
    }

    p5.noStroke();
    p5.fill(this.color);
    p5.beginShape();
    for (var i = 0; i < this.points.length; i++) {
      p5.vertex(
        this.points[i].x + this.animateX(i),
        this.points[i].y + this.animateY(i)
      );
    }
    p5.endShape();
  };

  render() {
    return (
      <Sketch
        style={{
          position: "absolute",
          top: this.props.topPos,
          left: this.props.leftPos
        }}
        setup={this.setup}
        draw={this.draw}
        mousePressed={this.mousePressed}
        mouseDragged={this.mouseDragged}
        mouseReleased={this.mouseReleased}
      />
    );
  }
}

export class Signature extends Component {
  render() {
    return (
      <div>
        <Bicho
          jsonData={require("../assets/signatures/bicho_1580267983731.json")}
          topPos={0}
          leftPos={0}
        />
        <Doodle topPos={this.props.offTop} leftPos={0} />
      </div>
    );
  }
}

export default Signature;
