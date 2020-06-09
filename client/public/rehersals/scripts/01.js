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
    var pixel = document.createElement('div');
    pixel.className = 'pixel'
    pixel.classList.add('prePicnicPatch');
    pixel.style.marginLeft = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixel.style.marginTop = Math.random(window.innerHeight) * window.innerHeight - 15 + 'px';
    document.body.appendChild(pixel)
    addListener(pixel)
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