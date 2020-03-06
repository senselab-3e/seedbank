import React, { Component } from "react";
import Sketch from "react-p5";

export class Doodle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: false,
      coloring: false,
      submitting: false,
      data: undefined,
      logged: false
    };
  }
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

  submitDrawing = data => {
    console.log(data.path.length, "length"); //later introduce edge cases and limits. for now a minimum is ok enough.
    this.setState({ data: data, logged: true });
    this.props.grabSign(this.state.data);
    //console.log("submitting", this.state.date);
    //LEFT OVER CODE FROM ORIGINAL SOURCE - THAT WAS ALSO COMMENTED OUT
    //return this.state.data;
    // if(42<this.points.length) {
    // var hex = this.hsltohex(this.hsl[0], this.hsl[1], this.hsl[2]);
    // var data = {
    //   color: hex,
    //   path: this.points
    // };
    // console.log(data);

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

  /// all these mouse pressed and mouse released actions need to be refactored.... the truthy and falsy statements for tracking if drawing or submitting is happen is causing many limitations on what else the mouse could be doing in the space. no matter what, even when the canvas isn't full sized window, annnyy mouse click anywhere is being considered part of this function tracking and causing all kinds of adverse events.... it can be tracked  to the component. but beyond
  //that this isn't working. sometimes the clicking gets stuck and the drawing action doesn't re-initialize. it's getting confused when clicks are happening anywhere else on the page. it's incredibly unreliable. even when the canvas is shrunk to a specific area, it's still
  //firing off setStates everywhere and interfering with the actions of other components elsewhere
  // the this.state.submitting in particular is what is causing problems -- will need to investigate

  //additionally all mouse actions would need to be refactored for Touch Devices. /// from documentation: The touchMoved() function is called every time a touch move is registered. If no touchMoved() function is defined, the mouseDragged() function will be called instead if it is defined.

  //Browsers may have different default behaviors attached to various touch events. To prevent any default behavior for this event, add "return false" to the end of the method.

  /// bound limitations need to be places on all the mouse actions too. i really don't know if i have time to do all the modifications that are necessary...
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

  /// this may need to be associated with the button click /// not the stop drawing by part of this.
  mouseReleased = p5 => {
    if (this.state.drawing && !this.state.coloring && !this.state.submitting) {
      this.setState({
        drawing: false,
        coloring: true,
        submitting: false
      });
    } else if (this.state.submitting) {
      var hex = this.hsltohex(this.hsl[0], this.hsl[1], this.hsl[2]);
      var data = {
        color: hex,
        path: this.points
      };

      if (data.path.length > 5) {
        this.submitDrawing(data);
      } else {
        // ? this.submitDrawing(data)
        console.log("not large enough drawing");
      }
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
    ///this is causing more problems then it's worth /// there are two instances where the condition check for submitting is firing///. clearning the canvas altogether might be necessary as there is state confusion happening on the mouse release and mouse down etc....
    if (this.state.submitting) {
      this.spin =
        10 * Math.sin(((this.incA + this.incB) * Math.PI) / this.points.length);
      //console.log(this.incB); /// these are all the individual points
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
    //console.log(this.state.data);
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Doodle;

//mouseReleased={this.mouseReleased} was originally within the sketch... but it's not sustainable to shoot off anywhere on the stage
