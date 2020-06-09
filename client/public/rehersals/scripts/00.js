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
    var pixel = document.createElement('div');
    pixel.className = 'pixel'
    pixel.classList.add('prePicnicPatch');
    pixel.style.marginLeft = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixel.style.marginTop = Math.random(window.innerHeight) * window.innerHeight + 'px';
    document.body.appendChild(pixel)
    addListener(pixel)
}

const createPatch = () => {
    var patch = document.createElement('div');
    patch.className = 'pixel'
    patch.classList.add('picnicPatch');
    patch.style.marginLeft = Math.random(window.innerWidth) * window.innerWidth + 'px';
    patch.style.marginTop = Math.random(window.innerHeight) * window.innerHeight + 'px';
    document.body.appendChild(patch)
    addListener(patch)
    let allPatches = document.querySelectorAll(".picnicPatch"); //sanity check that only one patch is being added at a time, and not expodentially
    console.log(allPatches)
}