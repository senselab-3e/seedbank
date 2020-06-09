var updateHue = 0;
let updateColor = 'hsl(100,54%,66%)';
var currentColor = 0;
var notes;



const resetCubeWidth = (newWidth) => {
    sampleBlock = document.querySelector('#sample1');
    sampleBlock2 = document.querySelector('#sample2');
    let currentWidth = window.getComputedStyle(sampleBlock, null).getPropertyValue(
        "width");
    let currentWidth2 = window.getComputedStyle(sampleBlock2, null).getPropertyValue(
        "width");
    console.log(currentWidth, currentWidth2)
    sampleBlock.style.setProperty('width', newWidth + 'vw');
    sampleBlock2.style.setProperty('width', 100 - newWidth + 'vw');

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



window.onload = () => {
    notes = document.querySelector('.pseudoCode');
    const cubes = document.querySelectorAll('.cube')

    cubes.forEach(cube => {
        cube.addEventListener('click', getClickPosition, false)

    });

}

//const entryClick = () => console.log('clicking pixel') //sanity check

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