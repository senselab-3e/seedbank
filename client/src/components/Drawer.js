import React from "react";
import Sketch from "react-p5";
// import circli from "../assets/img/curosr.png";
const Drawer = () => {
  let x = 50;
  let y = 50;
  let imgg;
  var c;
  var colorPicker;

  const setup = (p5, canvasParent) => {
    c = p5.createCanvas(1000, 1000).parent(canvasParent);
    colorPicker = p5.createColorPicker('#ed225d');
    colorPicker.position(0, 995);
  };

  const draw = p5 => {
    p5.fill(colorPicker.color());
    if(p5.mouseIsPressed)
    p5.ellipse(p5.mouseX, p5.mouseY, 10, 10);
  };

  const keyPressed = p5 => {
    let stickerdia = 100;
      if (p5.key === 'e') {
      p5.save(c, 'myCanvas', 'png');
      }
      if (p5.key == 's') {
              let img = p5.createImage(stickerdia, stickerdia); // same as new p5.Image(100, 100);
              img.copy(c, p5.mouseX-stickerdia/2, p5.mouseY-stickerdia/2, stickerdia, stickerdia, 0, 0, stickerdia, stickerdia);
              let maskImage = p5.createGraphics(stickerdia*2, stickerdia*2);
              maskImage.ellipse(stickerdia, stickerdia, stickerdia*2, stickerdia*2);
              img.mask(maskImage);
              p5.fill(255);
              p5.rect(0, 0, stickerdia, stickerdia);
              p5.fill(0);
              p5.ellipse(stickerdia/2, stickerdia/2, stickerdia, stickerdia);
              var cri = p5.image(img, 0, 0);
              p5.save(img, 'sticker.png');
            }
    };


    return (
      <div style={{borderStyle: 'solid'}}>
      <p>draw below & press "s"-key on keyboard to export a new sticker at the position of your mouse</p>
      <Sketch setup={setup} draw={draw} keyPressed={keyPressed}/>;
      </div>
  )
}

export default Drawer;
