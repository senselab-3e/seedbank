import React, {
  Component
} from "react";

var linkList = ["https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2F404_glitch2.gif?v=1575674309400", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fcompost.gif?v=1575674555450", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fcube-6.gif?v=1576263083138", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Forange2.png?v=1576262909483", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbluebowl.png?v=1576262181694", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Ftinybluechair.gif?v=1575674399069", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fpingpong.gif?v=1575674576527", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fcube-0.gif?v=1575525366325", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Ftape-1.gif?v=1575674580797", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fsponges.png?v=1576262906759", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fsponge-4.gif?v=1576262911080", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Ffold.gif?v=1576263090670", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbubble.gif?v=1576450998619", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fcoral.gif?v=1576451020104", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbrush.gif?v=1576451033127", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Forange-patch.gif?v=1576451066974", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fpillow-chair.gif?v=1576451094677", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Frainbowplank-stone.gif?v=1576451133263", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fhanging-sponge.gif?v=1576451264087", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fblueblinds.gif?v=1576451253142", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fhangingbowl.gif?v=1576451332866", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fpatch-quick.gif?v=1576451408966", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Frock-pile.gif?v=1576451567035", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fpinata-fingers.gif?v=1576451591679", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fchairupside.gif?v=1576451967179", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fplob-1.gif?v=1576452116034"]


// const randomColor = () => {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

let h, w, nh, nw, s;

const newPosition4Circles = () => {
  h = window.innerHeight - 100;
  w = window.innerWidth - 100;
  nh = Math.floor(Math.random() * h);
  nw = Math.floor(Math.random() * w);

  return [nh, nw, s];
};

const createLinks = () => {
  linkList.forEach(element => {
    var newImg = document.createElement("img");
    newImg.className = 'thingy';
    newImg.src = element;
    if (element === "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2F404_glitch2.gif?v=1575674309400") {
      //console.log('glitch found' + element);
      newImg.classList.add('skew')
      //this is because i want to attach a specific visual effect to just this element. 
    } else if (element === "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fsponges.png?v=1576262906759" || element === "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Forange2.png?v=1576262909483") {
      newImg.classList.add('scale-tinier')

    } else {
      newImg.classList.add('scale-transform')
      //console.log('glitch not found' + element)
    }
    var container = document.createElement("div");
    container.className = "ThingyContainer";
    container.appendChild(newImg);
    document.body.append(container)
  });
};


export class RandomThingyPlace extends Component {
  componentDidMount() {
    createLinks();
  }
  render() {
    const dotpatches = document.querySelectorAll(".thingy");
    const dotRandPos = () => {
      dotpatches.forEach(function (patch) {
        var newCoor4 = newPosition4Circles();
        patch.style.top = newCoor4[0] + "px";
        patch.style.left = newCoor4[1] + "px";
      });
    };

    dotRandPos();
    return <div > < /div>;
  }
}

export default RandomThingyPlace;