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
        pixel.style.zIndex = 0;
        pixel.onclick = this.onClick;
        const container = document.querySelector(".pixelParent");
        container.appendChild(pixel);
    }
    remove(el) {
        el.remove()
    }
}