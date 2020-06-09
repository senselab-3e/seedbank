var updateHue = 0;
let updateColor = 'hsl(100,54%,66%)';
var currentColor = 0;
var notes;


const resetCubeWidth = (newWidth) => {
    sampleBlock = document.querySelector('#sample1');
    sampleBlock2 = document.querySelector('#sample2');
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
    entryPatch()
    notes = document.querySelector('.pseudoCode');
    const cubes = document.querySelectorAll('.cube')

    cubes.forEach(cube => {
        cube.addEventListener('click', getClickPosition, false)
    });

}

const entryPatch = () => createPixel();

const createPixel = () => {
    const sampleBlock = document.querySelector('#sample1');
    // it doesn't seem like it's possible to grab the value of the colors being calculated from that css animation.... so i can't color the block with it, unfortunately
    var pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixel'
    var patch1 = document.createElement('div');
    patch1.className = 'prePicnicPatch';
    var patch2 = document.createElement('div');
    patch2.className = 'prePicnicPatch';
    patch2.style.backgroundColor = retreiveColor(sampleBlock)
    pixelContainer.appendChild(patch1)
    pixelContainer.appendChild(patch2)
    //pixel.classList.add('prePicnicPatch');
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
    // console.log(val, updateColor, 'BEFORE')
    // i need to set both the hue value and the overall hsl value in the css. i thought by updating just the hue val it would autimatically pass update the hsl in the css, but no. so i need these two css values passed to the function
    target.style.setProperty(hueVal, updatedHue);
    target.style.setProperty(colorVal, updatedColor)
    // console.log(val, updateColor, 'AFTER')

}
const updateColors = () => {
    const sampleBlock = document.querySelector('#sample1'); //need to keep these here
    const sampleBlock2 = document.querySelector('#sample2');
    let currentHue = window.getComputedStyle(sampleBlock, null).getPropertyValue(
        "--h1");
    let currentHue2 = window.getComputedStyle(sampleBlock2, null).getPropertyValue(
        "--h2");
    setNewColorVal(currentHue, '--h1', "--hsl1", sampleBlock)
    setNewColorVal(currentHue2, '--h2', "--hsl2", sampleBlock2)

}

var intervalChng = window.setInterval(updateColors, 100); //continually changes color of sample2 element, using callback function 