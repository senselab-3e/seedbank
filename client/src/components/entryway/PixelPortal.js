import {
    createPositions
} from "../../helpers/Calculators";

export class PixelPop {
    constructor(hexBg) {
        this.xPos = createPositions("left");
        this.yPos = createPositions("top");
        this.color = hexBg;
    }
    onClick() {
        const card = new PixelPop(this.color); //sometimes the color is passed on, sometimes not. 
        card.create();
    }
    create() {
        var pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.classList.add("picnicPatch");
        pixel.style.left = this.xPos;
        pixel.style.top = this.yPos;
        pixel.style.backgroundColor = this.color;
        pixel.onclick = this.onClick;
        const container = document.querySelector(".mainContainer");
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