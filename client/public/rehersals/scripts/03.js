var notes;

const paletteTexts = ['When you ask DD, what kind of psychology this can be/come, this seems really key. What is a psychology without interiority? What is a psychology that is curious about the conditions of existence as they morph? What is a psychology that can move at the pace of a world making and remaking itself? For those of us familiar with Guattari, we would say “schizoanalysis” - the practice of activating techniques for the living-out (rather than the living-in) of experience.', 'oiajdsfojasdofoasdfo', 'oaisdfonaosdfnasdf', 'idafsojoadisjf']
//NOTES: proof of concept for later: function Palette(className, textStatus, width, height) {  //NOTE: if i use this the element created will loose any of the animated transitions i may have hoped to apply to it, via the classname:hover. for some reason it overrides it - and there is no way to edit :hover from javascript. this can be handled another way, by using mouseEnter() type listeners, but for now, i'm just going to let it go.

function Palette(className, textStatus) {
    this.className = className;
    //this.width = width;  //NOTE:seeabove
    //this.height = height;
    this.txtRq = textStatus; // checks for true of false for adding text within palette
    //NOTE: remember this currentHue thing in the future. right now the color for the palette is being decided by whatever is in palette Id palette1. for re-usability this will need to happen differently
    this.currentHue = function () {
        let sample = document.body.querySelector('#palette1') // just for testing purposes.
        //this is actually not to tricky. query Selector will choose the first instance, so even if i put palette instead of palette1, it will still grab hue information from the first palette, even if i don't reference it by a single id name
        let hsl = window.getComputedStyle(sample, null).getPropertyValue(
            "--hsl");
        //console.log(hsl)
        return hsl
    }
    this.color = this.currentHue()
    this.createDiv = function () {
        var paletteContainer = document.querySelector('.paletteContainer')
        var palette = document.createElement('div');
        palette.className = this.className;
        //this.width ? palette.style.width = this.width : console.log('no width specified'); //NOTE:seeabove
        //this.height ? palette.style.height = this.height : console.log('no height specified');
        palette.style.left = 0;
        palette.style.top = 0;
        palette.style.background = this.color;
        this.txtRq === true ? this.textContent(palette) : console.log('no text requested')
        paletteContainer.appendChild(palette);
    }
    this.textContent = function (target) {
        const text = paletteTexts[Math.floor(Math.random() * paletteTexts.length)]
        var textBox = document.createElement('div');
        textBox.classList = 'textBox';
        //textBox.classList.add('hide'); // if i don't want the text immediately visible
        textBox.textContent = text
        target.appendChild(textBox)
    }
}

//NOTE: with flexbox now being used in the css, this might not be entirely necessary....
const resetCubeWidth = (newWidth) => {
    sampleBlock = document.querySelector('#palette1');
    sampleBlock2 = document.querySelector('#palette2');
    const newWidthCube1 = newWidth + 'vw';
    const newWidthCube2 = 100 - newWidth + 'vw';
    sampleBlock.style.setProperty('width', newWidthCube1);
    sampleBlock2.style.setProperty('width', newWidthCube2);
}

const retreiveColor = (el) => {
    //console.log(el)
    let currentColorVal = window.getComputedStyle(el, null).getPropertyValue(
        "--hsl");
    console.log(currentColorVal, 'retrieve color');
    return currentColorVal;
}

const resetColorPixel = (el, target) => {
    let updateColor = retreiveColor(el)
    target.style.setProperty('background', updateColor);
}

const resetPixelLoc = (x, y) => {
    console.log(x, y)
    const pixelContainer = document.querySelector('.pixelContainer');
    pixelContainer.style.setProperty('top', y + 'px');
    pixelContainer.style.setProperty('left', x + 'px');
}

const getClickPosition = (e) => {
    //var parentPosition = getPosition(e.currentTarget);
    const xPosition = e.clientX;
    const yPosition = e.clientY;
    let intViewportWidth = window.innerWidth;
    //calculate position as 100 - value so i can use it like a percentage val but with vw css
    let percentageWidth = Math.floor(xPosition / intViewportWidth * 100)
    resetCubeWidth(percentageWidth);
    resetPixelLoc(xPosition, yPosition);
}

const addListener = (patch) => {
    patch.addEventListener('click', getClickPosition, false);
}

window.onload = () => {
    createPixelPatch()
    createPixel()
    createPixel() // creating two pixels // because of the css, unlike in 00.html, each new pixel will be in the same row under flexbox rules
    colorPicker() //initializizes color picker - which changes coloring of palette 1 and pixel 2
    notes = document.querySelector('.pseudoCode');
    const palettes = document.querySelectorAll('.paletteContainer');
    palettes.forEach(palette => {
        // palette.addEventListener('click', getClickPosition, false)
        palette.addEventListener('click', function (e) {
            getClickPosition(e);
            var newPalletes = new Palette('palette', true);
            newPalletes.createDiv();

        })
    });
}

const createPixelPatch = () => {
    var pxlContainer = document.createElement('div');
    pxlContainer.className = 'pixelContainer';
    document.body.appendChild(pxlContainer);
}

const createPixel = () => {
    const pixelContainer = document.querySelector('.pixelContainer'); // it doesn't seem like it's possible to grab the value of the colors being calculated from that css animation.... so i can't color the block with it, unfortunately
    var patch = document.createElement('div');
    patch.className = 'pixelPatch';
    pixelContainer.appendChild(patch)
    pixelContainer.style.left = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixelContainer.style.top = Math.random(window.innerHeight) * window.innerHeight - 15 + 'px';
    addListener(pixelContainer)
}

const replaceClassName = () => {
    notes.classList.contains('hide') ? notes.classList.remove('hide') : notes.classList.add('hide');
}

const setNewColorVal = (target) => {
    let currentH = window.getComputedStyle(target, null).getPropertyValue(
        "--h");
    let currentS = window.getComputedStyle(target, null).getPropertyValue(
        "--s");
    let currentL = window.getComputedStyle(target, null).getPropertyValue(
        "--l");
    currentH = parseInt(currentH);
    currentH < 360 ? currentH += 1 : currentH = 1; // this needs a conditional ceiling so that it cycles through
    updatedHue = currentH;
    const updatedHSL = 'hsl(' + updatedHue + ', ' + currentS + ', ' + currentL + ')'
    // NOTES: i need to set both the hue value and the overall hsl value in the css. i thought by updating just the hue val it would autimatically pass update the hsl in the css, but no. so i need these two css values passed to the function
    target.style.setProperty('--h', updatedHue);
    target.style.setProperty('--hsl', updatedHSL);
}

const updateColors = () => {
    const palette1 = document.querySelector('#palette1'); //NOTES: need to keep these here, rather then passing a variable through the function
    const palette2 = document.querySelector('#palette2'); // i need to keep this function anonymous so that it can be used in a callback with setInterval, below
    setNewColorVal(palette1);
    setNewColorVal(palette2);
}

var intervalChng = window.setInterval(updateColors, 100); //continually changes color of palette2 element, using callback function 

const colorPicker = () => {
    const input = document.querySelector('input');
    input.addEventListener('change', function () {
        //console.log(input.value)
        const palette1 = document.querySelector('#palette1');
        let pixel = document.querySelectorAll('.pixelPatch');
        let convertedVal = HEXtoHSL(input.value) //NOTES: this now returning a  hsl information in an object with key values for each hsl
        palette1.style.setProperty('--h', convertedVal.h);
        palette1.style.setProperty('--s', convertedVal.s);
        palette1.style.setProperty('--l', convertedVal.l);
        const hslString = 'hsl(' + convertedVal.h + ', ' + convertedVal.s + ', ' + convertedVal.l + ')';
        palette1.style.setProperty('--hsl', hslString);
        colorShiftDif(convertedVal.h);
        resetColorPixel(palette1, pixel[1]);
    })
}

//the core logic of this function was found here : https://www.html-code-generator.com/javascript/color-converter-script.php
//  I modified the end to export an object so i could grab h s l values separtely for my color scrolling purposes.
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

    let colorHSL = {
        h: h,
        s: s + '%',
        l: l + '%'
    }
    return colorHSL
}

//NOTES: if i ever what to compare and contrast the former color value and new chosen color value and use that difference for something:
//NOTES: I changed this so it's calculated the color relation between palette 1 and 2, in terms of their hue numerical value. 
const colorShiftDif = (newVal) => {
    const palette2 = document.querySelector('#palette2')
    const contrastVal = window.getComputedStyle(palette2, null).getPropertyValue(
        "--h");
    console.log(Math.abs(contrastVal - newVal))
}