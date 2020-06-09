var notes;

const addListener = (patch) => {
    patch.addEventListener('click', function (event) {
        createPatch()
    });
}

window.onload = () => {
    entryPatch()
    const firstPatch = document.querySelector('.prePicnicPatch');
    notes = document.querySelector('.pseudoCode');
    firstPatch.addEventListener('click', function (event) {
        entryNotes()
    });
}
const entryPatch = () => createPixel()

const entryNotes = () => { // hides and shows div that has text message in it. message can be edited. 
    notes.classList.contains('hide') ? notes.classList.remove('hide') : notes.classList.add('hide');
}

const createPixel = () => {
    var pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixel'
    var patch1 = document.createElement('div');
    patch1.className = 'prePicnicPatch';
    pixelContainer.appendChild(patch1)
    pixelContainer.style.left = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixelContainer.style.top = Math.random(window.innerHeight) * window.innerHeight - 15 + 'px';
    document.body.appendChild(pixelContainer)
    addListener(pixelContainer)
}

const createPatch = () => {
    var patch = document.createElement('div');
    patch.className = 'pixel'
    patch.classList.add('picnicPatch');
    // let currentHue = window.getComputedStyle(body, null).getPropertyValue(
    //     "--orgColor"); // it doesn't seem like it's possible to grab the value of the colors being calculated from that css animation.... so i can't color the block with it, unfortunately
    // patch.style.backgroundColor = currentHue; //currently this hue, as it's being queried from the body tag, always returns a deeppink value. the color yielded from the @animation is harder to target.....
    patch.style.marginLeft = Math.random(window.innerWidth) * window.innerWidth + 'px';
    patch.style.marginTop = Math.random(window.innerHeight) * window.innerHeight + 'px';
    document.body.appendChild(patch)
    addListener(patch)
    let allPatches = document.querySelectorAll(".picnicPatch"); //sanity check that only one patch is being added at a time, and not expodentially
    console.log(allPatches)
}