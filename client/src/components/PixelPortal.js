import {
    createPositions
} from "../helpers/Calculators";

export class Card {
    constructor(hexBg) {
        this.xPos = createPositions("left");
        this.yPos = createPositions("top");
        this.color = hexBg;
    }
    onClick() {
        const card = new Card;
        card.create();
    }
    create() {
        var pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.classList.add("picnicPatch");
        pixel.style.left = this.xPos;
        pixel.style.top = this.yPos;
        pixel.onclick = this.onClick;
        const container = document.querySelector(".containerPalette");
        container.appendChild(pixel);
    }
}


//   const createEl = (e) => {
//     e.preventDefault();
//     var pixel = document.createElement("div");
//     pixel.className = "pixel";
//     pixel.classList.add("picnicPatch");
//     pixel.style.left = createPositions("left");
//     pixel.style.top = createPositions("top");
//     // pixel.style.backgroundColor = bcolor;
//     pixel.onclick = createEl;
//     const container = document.querySelector(".containerPalette");
//     container.appendChild(pixel);
//     console.log(pixel);
//   };