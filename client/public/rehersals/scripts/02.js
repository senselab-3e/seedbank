var updateHue = 0;
let updateColor = 'hsl(100,54%,66%)';
var currentColor = 0;
var notes;

const textOptions = ['adfodsifsadoifjiadosfjo', 'oiajdsfojasdofoasdfo', 'oaisdfonaosdfnasdf', 'idafsojoadisjf']

function Palette(className) {
    this.className = className;
    this.currentHue = function () {
        let sample = document.body.querySelector('#palette2') // just for testing purposes.
        let hsl = window.getComputedStyle(sample, null).getPropertyValue(
            "--hsl2");
        console.log(hsl)
        return hsl
    }
    this.color = this.currentHue()
    this.createDiv = function () {
        var paletteContainer = document.querySelector('.paletteContainer')
        var palette = document.createElement('div');
        palette.className = this.className;
        palette.style.left = 0;
        palette.style.top = 0;
        palette.style.background = this.color; //"orange";
        this.text = this.textContent(palette)
        paletteContainer.appendChild(palette);

        //document.body.appendChild(paletteContainer); // i don't seem to need to append it to the body
    }
    this.textContent = function (target) {
        const text = textOptions[Math.floor(Math.random() * textOptions.length)]
        console.log(text)
        var textBox = document.createElement('div');
        textBox.classList = 'textBox';
        //textBox.classList.add('hide');
        textBox.textContent = text
        target.appendChild(textBox)
    }


}


const resetCubeWidth = (newWidth) => {
    sampleBlock = document.querySelector('#palette1');
    sampleBlock2 = document.querySelector('#palette2');
    // let currentWidth = window.getComputedStyle(sampleBlock, null).getPropertyValue(
    //     "width");
    // let currentWidth2 = window.getComputedStyle(sampleBlock2, null).getPropertyValue(
    //     "width");
    const newWidthCube1 = newWidth + 'vw';
    const newWidthCube2 = 100 - newWidth + 'vw';
    sampleBlock.style.setProperty('width', newWidthCube1);
    sampleBlock2.style.setProperty('width', newWidthCube2);

}

const retreiveColor = (el) => {
    //console.log(el)
    let currentColorVal = window.getComputedStyle(el, null).getPropertyValue(
        "--hsl1");
    console.log(currentColorVal, 'retrieve color')
    return currentColorVal
}

const resetColorPixel = (el, target) => {
    let updateColor = retreiveColor(el)
    console.log(target, 'target')
    //const pixel1 = document.querySelector(target)
    target.style.setProperty('background', updateColor);
}

const getClickPosition = (e) => {
    //var parentPosition = getPosition(e.currentTarget);
    const xPosition = e.clientX;
    // const yPosition = e.clientY;
    let intViewportWidth = window.innerWidth;
    //calculate position as 100 - value so i can use it like a percentage val but with vw css
    let percentageWidth = Math.floor(xPosition / intViewportWidth * 100)
    resetCubeWidth(percentageWidth)
}

const addListener = (patch) => {
    patch.addEventListener('click', getClickPosition, false)
}

window.onload = () => {
    createPixelPatch()
    createPixel()
    createPixel() // creating two pixels // because of the css, unlike in 00.html, each new pixel will be in the same row under flexbox rules
    colorPicker() //initializizes color picker - which changes coloring of palette 1 and pixel 2
    var newPallete = new Palette('palette');
    newPallete.createDiv()
    notes = document.querySelector('.pseudoCode');
    const palettes = document.querySelectorAll('.paletteContainer')
    palettes.forEach(palette => {
        // palette.addEventListener('click', getClickPosition, false)
        palette.addEventListener('click', function (e) {
            getClickPosition(e);
            var newPalletes = new Palette('palette');
            newPalletes.createDiv()
        })
    });
}

const createPixelPatch = () => {
    var pxlContainer = document.createElement('div');
    pxlContainer.className = 'pixelContainer';
    document.body.appendChild(pxlContainer);
}

const createPixel = () => {
    const pixelContainer = document.querySelector('.pixelContainer')
    // it doesn't seem like it's possible to grab the value of the colors being calculated from that css animation.... so i can't color the block with it, unfortunately
    var patch = document.createElement('div');
    patch.className = 'prePicnicPatch';

    pixelContainer.appendChild(patch)
    pixelContainer.style.left = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixelContainer.style.top = Math.random(window.innerHeight) * window.innerHeight - 15 + 'px';
    addListener(pixelContainer)

}

const replaceClassName = () => {
    notes.classList.contains('hide') ? notes.classList.remove('hide') : notes.classList.add('hide');
}

const setNewColorVal = (val, hueVal, colorVal, target) => {
    val = parseInt(val)
    val < 360 ? val += 1 : val = 1; // this needs a conditional ceiling so that it cycles through
    updatedHue = val
    updatedColor = 'hsl(' + updatedHue + ', 48%, 50%)'
    // i need to set both the hue value and the overall hsl value in the css. i thought by updating just the hue val it would autimatically pass update the hsl in the css, but no. so i need these two css values passed to the function
    target.style.setProperty(hueVal, updatedHue);
    target.style.setProperty(colorVal, updatedColor)
}

const updateColors = () => {
    const sampleBlock = document.querySelector('#palette1'); //need to keep these here
    const sampleBlock2 = document.querySelector('#palette2');
    let currentHue = window.getComputedStyle(sampleBlock, null).getPropertyValue(
        "--h1");
    let currentHue2 = window.getComputedStyle(sampleBlock2, null).getPropertyValue(
        "--h2");
    setNewColorVal(currentHue, '--h1', "--hsl1", sampleBlock)
    setNewColorVal(currentHue2, '--h2', "--hsl2", sampleBlock2)

}

var intervalChng = window.setInterval(updateColors, 100); //continually changes color of palette2 element, using callback function 

//work on making the color Picker more reusable for object constructors. 
const colorPicker = () => {
    const input = document.querySelector('input');
    input.addEventListener('change', function () {
        //console.log(input.value)
        const sample = document.querySelector('#palette1')
        let pixel = document.querySelectorAll('.prePicnicPatch')
        const orgColorVal = window.getComputedStyle(sample, null).getPropertyValue(
            "--h1");
        let convertedVal = HEXtoHSL(input.value)
        //unfortunately, in this instance, the input value is only working in #numbers, rather then hsb values - and i'm using hsb values in my scrolling colors function elsewhere. so that means a value IS being passed to it, it's just grabbing numbers within a certain range which produce only reds.
        sample.style.setProperty('--h1', convertedVal)
        colorShiftVal(orgColorVal, convertedVal)
        //console.log(sample)
        resetColorPixel(sample, pixel[1])
    })
}

//this function was found here : https://www.html-code-generator.com/javascript/color-converter-script.php
function HEXtoHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);
    return h; //'hsl(' + h + ', ' + s + '%, ' + l + '%)'; // normally this would give you the full hsl value, but i only need the hue value since that is the value i want to update (alone) so that the scrolling through of the color changes continues to happen
}

//if i ever what to compare and contrast the former color value and new chosen color value and use that difference for something:

const colorShiftVal = (orgVal, newVal) => {
    //console.log(orgVal, newVal)
    console.log(Math.abs(orgVal - newVal))
}