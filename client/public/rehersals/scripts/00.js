var notes;
//var input = document.querySelector('input'); // it wouldn't read this unfortunately, as a universal value. this may be because the querySelector is a funciton that must be called and it can't do that outside of a parent function

const vibrationClasses = ["hvr-wobble-horizontal", "hvr-skew-forward", "hvr-float-shadow", ]

const checkPatchNum = () => {
    const numPatches = document.querySelectorAll('.picnicPatch');
    console.log(numPatches.length)
    numPatches.length > 10 ? window.location.href = '/rehersals/00.html' : console.log('not enough patches');
}

const createCube = (target) => {
    var cube = document.createElement('div');
    cube.className = 'cubeContainer';
    target.appendChild(cube);
}

const addListener = (patch) => {
    patch.addEventListener('click', function (event) {
        createPatch()
        checkPatchNum()
    });

    patch.addEventListener('mouseover', function (event) {
        //document.querySelector('.cubeContainer') ? console.log('cube already there') : createCube(patch)

    });

    const input = document.querySelector('input');
    //this is here to update all the patches, with the entrycolor. you might not want this in the future, but it's here as a reference. there is already a listener added to the first entry patch, onload
    input.addEventListener('change', function () {
        patch.style.setProperty('--entrypatch-color', input.value)
    })
}

window.onload = () => {
    entryPatch()
    const firstPatch = document.querySelector('.prePicnicPatch');
    notes = document.querySelector('.pseudoCode');
    firstPatch.addEventListener('click', function (event) {
        entryNotes()
    });
    const input = document.querySelector('input');
    input.addEventListener('change', function () {
        firstPatch.style.setProperty('--entrypatch-color', input.value);
    })
}
const entryPatch = () => createPixel()

const entryNotes = () => { // hides and shows div that has text message in it. message can be edited. 
    notes.classList.contains('hide') ? notes.classList.remove('hide') : notes.classList.add('hide');
}

const createPixel = () => {

    var xpos = Math.random(window.innerWidth) * window.innerWidth / 2 + 'px'; // i need this because if the a link is  parent of pixel, it needs to share the coors of pixel;
    var ypos = Math.random(window.innerHeight) * window.innerHeight / 2 - 15 + 'px';

    var pixel = document.createElement('div');
    pixel.className = 'pixel'
    pixel.classList.add('prePicnicPatch');
    pixel.style.left = xpos;
    pixel.style.top = ypos;
    document.body.appendChild(pixel)
    addListener(pixel)
}

const createPatch = () => {
    var patch = document.createElement('div');
    patch.className = 'pixel'
    patch.classList.add('picnicPatch');
    const input = document.querySelector('input');
    patch.style.setProperty('--entrypatch-color', input.value)
    patch.style.marginLeft = Math.random(window.innerWidth) * window.innerWidth + 'px';
    patch.style.marginTop = Math.random(window.innerHeight) * window.innerHeight + 'px';
    document.body.appendChild(patch)
    addListener(patch)
}