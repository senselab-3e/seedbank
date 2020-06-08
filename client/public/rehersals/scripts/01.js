var updateHue = 0;
let updateColor = 'hsl(100,54%,66%)';
var currentColor = 0;
var x2, x3, notes, sampleBlock;


window.onload = () => {
    x2 = document.getElementById('prePicnicPatch');
    notes = document.querySelector('.pseudoCode');
    sampleBlock = document.querySelector('#sample1');
    sampleBlock2 = document.querySelector('#sample2');
    console.log(x2, notes, sampleBlock)
    x2.addEventListener('click', function (event) {
        entryClick()
        replaceClassName()
        updateColors()
    });
}
const entryClick = () => console.log('clicking pixel') //sanity check

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
    let currentHue = window.getComputedStyle(sampleBlock, null).getPropertyValue(
        "--h1");
    let currentHue2 = window.getComputedStyle(sampleBlock2, null).getPropertyValue(
        "--h2");
    setNewColorVal(currentHue, '--h1', "--hsl1", sampleBlock)
    setNewColorVal(currentHue2, '--h2', "--hsl2", sampleBlock2)

}

var intervalChng = window.setInterval(updateColors, 100); //continually changes color of sample2 element, using callback function 