var notes;

//on each click i could add a thingy.... 


//NOTE --- i'm citing an array of texts called cosmic digest, that is in another js file called cosmic digest. this is because potentially i want all that file information to be accessible to there sketch spaces. 
const gifVerse = ['gif404', 'gifmeowmix', 'gifpipecleaners', 'gifsponge', 'gifbreeze', 'giffold', 'gifshadows', 'gifsplash', 'gifsquee', 'gifsplat', 'gifumbrella', 'gifpoke', 'gifcompost', 'gifplanttrap', 'gif404', 'gifpinkwave', 'gifwave', 'gifducky'] // for each of these instances, a single pixel element will be created. 
const thingyVerse = ['staticSponge2', 'staticPingPong', 'staticBlueChair', 'staticPingPong', 'staticCompost', 'staticFishy', 'staticBlueBowl', 'staticSponge']
const linkVerse = ['portal-404s/rrr.html', 'portal-404s/fishy.html', 'portal-404s/sss.html', 'portal-404s/fff.html', 'portal-404s/aeo.html', 'portal-404s/vvv.html', 'portal-404s/kite.html', 'portal-404s/mmm.html', 'portal-404s/llli.html', 'portal-404s/eee.html', 'portal-404s/uuu.html', 'portal-404s/shsh.html', 'portal-404s/zzz.html', 'portal-404s/jardin.html', 'portal-404s/mondayfiles.html', 'portal-404s/bichos.html', 'portal-404s/ozglob.html', 'portal-404s/joy.html'] //creature.html

//NOTES: text content is being pulled from arrays in cosmicdigest.js
const masterPixelColor = 'deeppink'

//PALETTE OBJ CONSTRuCTOR
function Palette(className, textStatus) {
    this.className = className;
    //this.width = width;  //NOTE:seeabove. if assigned the css styling heirarchies will cause the :hover transitions in the sizing to not be applied. so it's necesary to leave them blank.
    //this.height = height;
    this.txtRq = textStatus; // checks for true of false for adding text within palette

    //NOTE: remember this currentHue thing in the future. right now the color for the palette is being decided by whatever is in palette Id palette1. for re-usability this will need to happen differently
    this.currentHue = function () {
        let sample = document.body.querySelector('#palette1') // just for testing purposes.
        //this is actually not to tricky. query Selector will choose the first instance, so even if i put palette instead of palette1, it will still grab hue information from the first palette, even if i don't reference it by a single id name
        let hsl = window.getComputedStyle(sample, null).getPropertyValue(
            "--hsl");
        return hsl
    }
    this.color = this.currentHue()
    this.createDiv = function () {
        //var paletteContainer = document.querySelector('.paletteContainer');
        var sliderContainer = document.querySelector('.sliderContainer');
        var palette = document.createElement('div');
        palette.className = this.className;
        //this.width ? palette.style.width = this.width : console.log('no width specified'); //NOTE:seeabove
        //this.height ? palette.style.height = this.height : console.log('no height specified');
        palette.style.left = 0;
        palette.style.top = 0;
        palette.style.background = this.color;
        // palette.style.cursor = 'pointer'; // doesn't seem to have made a difference
        this.txtRq === true ? this.textContent(palette) : console.log('no text requested')

        palette.addEventListener("click", function (event) {
            palette.classList.contains('paletteClick') ? palette.classList.remove('paletteClick') : palette.classList.add('paletteClick')

        })
        sliderContainer.appendChild(palette);

        //NOTE: THIS IS YOU WANT THE CONENT OF THE SLIDERS TO SLOWLY FADE IN 
        //since correcting the z-index issues, the visible edges issue i had before, is no longer an issue but this logic could be used for patches with images or other things

        // palette.addEventListener("mouseover", function (event) {
        //     palette.firstElementChild.classList.remove('hidden');
        //     palette.firstElementChild.classList.add('visible');
        // })
        // palette.addEventListener("mouseout", function (event) {
        //     palette.firstElementChild.classList.remove('visible');
        //     palette.firstElementChild.classList.add('hidden');
        // })


    }
    this.textContent = function (target) {
        let text = ''
        const currentPalNum = document.body.querySelectorAll('.palette').length
        anarchivingPropositions[currentPalNum] ? text = anarchivingPropositions[currentPalNum] : text = text;
        var textBox = document.createElement('div');
        textBox.className = 'textBox';
        textBox.textContent = text
        target.appendChild(textBox)
    }

}

//NOTE: this is working in combination with flexbox. i can't rely on flexbox entirely for the effect i'm after but if it aint broke, don't fix it.
const resetPaletteWidth = (newWidth) => {
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
    //console.log(currentColorVal, 'retrieve color');
    return currentColorVal;
}

//I'm no longer using this
// const resetColorPixel = (el, target) => {
//     let updateColor = retreiveColor(el)
//     target.style.setProperty('background', updateColor);
//     console.log(target.classList)
//     //window.getComputedStyle(target, null).getPropertyValue(
//     //"background-color");
// }

const nudgePixels = () => {
    const pixelContainer = document.querySelector('.pixelContainer');
    const pixelPatches = document.querySelectorAll('.pixelPatch');
    const anchorPixel = document.querySelector('.anchorPixel');
    const nudgeAmtCalc = gifVerse.length; // needs to be adjusted according to how long the pixel line is
    //have this also be mouseclick for touch devices? 
    anchorPixel.addEventListener("mouseover", function (event) {
        let currentX = window.getComputedStyle(pixelContainer, null).getPropertyValue(
            "left");
        // let currentY = window.getComputedStyle(pixelContainer, null).getPropertyValue(
        //     "top");
        const newNum = parseInt(currentX.replace(/[^0-9.]+/, ''));
        // to make the test that the position doesn't exceed the window size, i need it to remain and inT - leading to the not as elegant passing of a string concatination in the setProperty
        newNum + nudgeAmtCalc < window.innerWidth - nudgeAmtCalc * 2 ? pixelContainer.style.setProperty('left', newNum + 5 + 'px') : pixelContainer.style.setProperty('left', 5 + nudgeAmtCalc + 'px');
        // pixelContainer.style.setProperty('top', currentY + 'px');
    })
    pixelPatches[pixelPatches.length - 1].addEventListener("mouseover", function (event) {
        let currentX = window.getComputedStyle(pixelContainer, null).getPropertyValue(
            "left");
        const newNum = parseInt(currentX.replace(/[^0-9.]+/, ''));
        newNum - 5 < 1 ? pixelContainer.style.setProperty('left', window.innerWidth - nudgeAmtCalc * 6 + 'px') : pixelContainer.style.setProperty('left', newNum - 5 + 'px');
    })
    ///not convinced this is doing what's necessary on mobile devices
    anchorPixel.addEventListener("click", function (event) {
        let currentX = window.getComputedStyle(pixelContainer, null).getPropertyValue(
            "left");
        // let currentY = window.getComputedStyle(pixelContainer, null).getPropertyValue(
        //     "top");
        const newNum = parseInt(currentX.replace(/[^0-9.]+/, ''));
        // to make the test that the position doesn't exceed the window size, i need it to remain and inT - leading to the not as elegant passing of a string concatination in the setProperty
        newNum + 5 < window.innerWidth ? pixelContainer.style.setProperty('left', newNum + 15 + 'px') : pixelContainer.style.setProperty('left', nudgeAmtCalc + 'px');
        // pixelContainer.style.setProperty('top', currentY + 'px');
    })
    pixelPatches[pixelPatches.length - 1].addEventListener("click", function (event) {
        let currentX = window.getComputedStyle(pixelContainer, null).getPropertyValue(
            "left");
        const newNum = parseInt(currentX.replace(/[^0-9.]+/, ''));
        newNum - 5 < 1 ? pixelContainer.style.setProperty('left', window.innerWidth - 25 + 'px') : pixelContainer.style.setProperty('left', newNum - 15 + 'px');
    })
}
const revealPixelPortal = () => {
    //const pixelContainer = document.querySelector('.pixelContainer');
    const pixelPortal = document.querySelectorAll('.pixelPatch'); // this number should be the same as the number of gifVerse
    //remember that i changed the iteration to start at 1, instead of 0, to exclude the first pixel from changing color or having a gif on it, because  i want the first pixel to remain consistently a pinkestpink anchor'
    for (let m = 0; m < pixelPortal.length - 1; m++) { // the last pixel has no accompanying class on rollover - it's purely there for the nudge

        pixelPortal[m].addEventListener("mouseover", function (event) {
            this.classList.add(gifVerse[m]);
            this.style.removeProperty('background'); //NOTE: see createPixel comments for details. but this became necessary because styling heirarchives for the dynamically assigned background color were causing the background images in the class i added to be overriden. removing that inline styline became necessary so that the class i and its image would be visible again. 
        });
        pixelPortal[m].addEventListener("mouseout", function (event) {
            this.classList.remove(gifVerse[m]);
            this.style.setProperty('background', getRandomColor());
        })
    }
}



//NOTES - i find this visuall distracting from the color shifts. have to figure out how it's genuinely useful
// const resetPixelLoc = (x, y) => {
//     console.log(x, y)
//     const pixelContainer = document.querySelector('.pixelContainer');
//     pixelContainer.style.setProperty('top', y + 'px');
//     pixelContainer.style.setProperty('left', x + 'px');
// }

const getClickPosition = (e) => {
    //var parentPosition = getPosition(e.currentTarget);
    const xPosition = e.clientX;
    const yPosition = e.clientY;
    let intViewportWidth = window.innerWidth;
    //calculate position as 100 - value so i can use it like a percentage val but with vw css
    let percentageWidth = Math.floor(xPosition / intViewportWidth * 100)
    resetPaletteWidth(percentageWidth);
    //resetPixelLoc(xPosition, yPosition);
}

const addPaletteListener = () => {
    const palette1 = document.querySelector('#palette1');
    const palette2 = document.querySelector('#palette2');
    const mainPalettes = [palette1, palette2];
    mainPalettes.forEach(palette => {
        palette.addEventListener('click', function (e) {
            getClickPosition(e);
            creatSliderPalettes()

        })
    })

}

//i can still game the system to allow for the nudging effect by having the first and last pixel be elimated from gifverse loop so that they are just pink and indexable by the length of the element list

window.onload = () => {
    createPixelPatch() //container for pixels
    createAnchorPixel() //this also nudges
    for (let i = 0; i < gifVerse.length; i++) {
        createPixel()
    }
    colorPicker() //initializizes color picker - which changes coloring of palette 1 and pixel 2
    nudgePixels() // Temporatily disabling to add hover effects to pixels instead
    revealPixelPortal() //roloover gifverse reveals
    addLinks()
    addPaletteListener()
    notes = document.querySelector('.pseudoCode'); // this is a global reference
}

const creatSliderPalettes = () => {

    //const sliderContainer = document.querySelector('.sliderContainer');
    //this checks if the number of palettes being requested exceeds the number needed for text that needs placing within them.
    // if (sliderContainer.childElementCount < poptechitecture.length) {
    //     var newPalletes = new Palette('palette', true);
    //     newPalletes.createDiv();
    // }
    var newPalletes = new Palette('palette', true);
    newPalletes.createDiv();
}

const createPixelPatch = () => {
    var pxlContainer = document.createElement('div');
    pxlContainer.className = 'pixelContainer';
    document.body.appendChild(pxlContainer);
}

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const addLinks = () => {
    const linkList = document.querySelectorAll('.menuLinks');
    for (let i = 0; i < linkList.length; i++) {
        linkVerse[i] ? linkList[i].href = linkVerse[i] : linkVerse[i]; // checks if there is a valid index in the array of links in relation to the current index in the gifverses making up the pixel menu. if so, the a gets href. if not, nothing
    }
}


const createAnchorPixel = () => {
    const pixelContainer = document.querySelector('.pixelContainer');
    var anchor = document.createElement('div');
    anchor.className = 'anchorPixel';
    pixelContainer.appendChild(anchor)
}

const createPixel = () => {
    const pixelContainer = document.querySelector('.pixelContainer'); // it doesn't seem like it's possible to grab the value of the colors being calculated from that css animation.... so i can't color the block with it, unfortunately
    var alink = document.createElement('a');
    alink.className = 'menuLinks';


    var patch = document.createElement('div');
    patch.className = 'pixelPatch';
    patch.style.background = getRandomColor() // NOTE: because the background color was dynamically assigned, it was overriding the css class based way in which i was adding a background image to appear, on a rollover. this is bc of the inline styling it injects. therefore i have had to do a removeProperty action to game that limitation, on the revealPortal function.

    alink.appendChild(patch);
    pixelContainer.appendChild(alink)
    pixelContainer.style.left = Math.random(window.innerWidth) * (window.innerWidth / 4 * 3) + 'px';
    pixelContainer.style.top = Math.random(window.innerHeight) * (window.innerHeight / 4 * 3) + 'px';
    //addListener(pixelContainer)
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
        //resetColorPixel(palette1, pixel[1]); //temporarily disabled this, because this overrides the class added to the pixels with a background gif image.
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
    //console.log(Math.abs(contrastVal - newVal))
}