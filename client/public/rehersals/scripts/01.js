var updateHue = 0;
let updateColor = 'hsl(100,54%,66%)';
var currentColor = 0;
var notes;


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
    notes = document.querySelector('.pseudoCode');
    const palettes = document.querySelectorAll('.paletteContainer')
    palettes.forEach(palette => {
        palette.addEventListener('click', getClickPosition, false)
    });
}

const createPixelPatch = () => {
    var pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixel';
}

const createPixel = () => {
    const pixelContainer = document.querySelector('.pixel')
    // it doesn't seem like it's possible to grab the value of the colors being calculated from that css animation.... so i can't color the block with it, unfortunately
    var patch = document.createElement('div');
    patch.className = 'prePicnicPatch';
    pixelContainer.appendChild(patch)
    pixelContainer.style.left = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixelContainer.style.top = Math.random(window.innerHeight) * window.innerHeight - 15 + 'px';
    document.body.appendChild(pixelContainer)
    addListener(pixelContainer)
    // resetColorCube(patch2)
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