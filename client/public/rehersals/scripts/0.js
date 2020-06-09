var notes;
//var input = document.querySelector('input'); // it wouldn't read this unfortunately, as a universal value. this may be because the querySelector is a funciton that must be called and it can't do that outside of a parent function
const addListener = (patch) => {
    patch.addEventListener('click', function (event) {
        createPatch()
    });
    var input = document.querySelector('input');
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
    var input = document.querySelector('input');
    input.addEventListener('change', function () {
        firstPatch.style.setProperty('--entrypatch-color', input.value)
        //firstPatch.style.setProperty('background', input.value)
    })
}
const entryPatch = () => createPixel()

const entryNotes = () => { // hides and shows div that has text message in it. message can be edited. 
    notes.classList.contains('hide') ? notes.classList.remove('hide') : notes.classList.add('hide');
}

const createPixel = () => {
    var pixel = document.createElement('div');
    pixel.className = 'pixel'
    pixel.classList.add('prePicnicPatch');
    pixel.style.marginLeft = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixel.style.marginTop = Math.random(window.innerHeight) * window.innerHeight - 15 + 'px';
    document.body.appendChild(pixel)
    addListener(pixel)
}

const createPatch = () => {
    var patch = document.createElement('div');
    patch.className = 'pixel'
    patch.classList.add('picnicPatch');
    //this is if i want all the patches to match the coloring of the input patch color. not necessarily but here to remember the logic
    var input = document.querySelector('input');
    patch.style.setProperty('--entrypatch-color', input.value)

    patch.style.marginLeft = Math.random(window.innerWidth) * window.innerWidth + 'px';
    patch.style.marginTop = Math.random(window.innerHeight) * window.innerHeight + 'px';
    document.body.appendChild(patch)
    addListener(patch)
    let allPatches = document.querySelectorAll(".picnicPatch"); //sanity check that only one patch is being added at a time, and not expodentially
    console.log(allPatches)
}