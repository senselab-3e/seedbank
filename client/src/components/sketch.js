import "p5/lib/addons/p5.sound";
import boing from "../assets/img/boing.mp3";
import io from "socket.io-client"

export default function sketch(p){
    let canvas;
    let socket;
    let song;


    p.setup = () => {
      canvas = p.createCanvas(500, 500);
      p.noStroke();
      p.background('orangered');
      socket = io();
      socket.on("mouse", data => {
      p.newDrawing(data);
      });

      song = p.loadSound(boing);

    }

    p.newDrawing = (data) =>{
      console.log(data);
      p.noStroke();
      p.fill('green');
      p.ellipse(data.x, data.y, 36, 36);
      song.play();
    }

    p.mouseDragged = () => {
      console.log(p.mouseX+ ',' + p.mouseY);

      var data={
      x: p.mouseX,
      y: p.mouseY
    }

    socket.emit('mouse', data);


    p.fill('blue');
    p.ellipse(p.mouseX, p.mouseY, 36, 26);

    }


    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
        p.fill(newProps.color);
    }
}
