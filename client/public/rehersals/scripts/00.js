var notes;

const addListener = (patch) => {
    patch.addEventListener('click', function (event) {
        createPatch()
    });
}

window.onload = () => {
    createPixel();
    //only the first pixel created, on a click, will reveal the 'notes' div
    const firstPatch = document.querySelector('.prePicnicPatch');
    notes = document.querySelector('.pseudoCode');
    firstPatch.addEventListener('click', function (event) {
        entryNotes()
    });
}


const entryNotes = () => { // hides and shows div that has text message in it. message can be edited. 
    notes.classList.contains('hide') ? notes.classList.remove('hide') : notes.classList.add('hide');
}

const createPixel = () => {
    var pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixelContainer'
    var patch1 = document.createElement('div');
    patch1.className = 'prePicnicPatch';
    patch1.title = 'first pixel created on page at window load: a deep pink pixel, that on a rollover expands to a larger square-sized color patch. clicking this creates other pixels on the page.'
    pixelContainer.appendChild(patch1)
    pixelContainer.style.left = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixelContainer.style.top = Math.random(window.innerHeight) * window.innerHeight - 15 + 'px';
    document.body.appendChild(pixelContainer)
    addListener(pixelContainer)
}

const createPatch = () => {
    var patch = document.createElement('div');
    patch.className = 'pixelContainer'
    patch.classList.add('picnicPatch');
    patch.title = 'single deep pink pixel surrounded by shifting color background. clicking this creates other pixels on the page.'
    patch.style.left = Math.random(window.innerWidth) * window.innerWidth + 'px';
    patch.style.top = Math.random(window.innerHeight) * window.innerHeight + 'px';
    document.body.appendChild(patch)
    addListener(patch)
    // let allPatches = document.querySelectorAll(".picnicPatch"); //sanity check that only one patch is being added at a time, and not expodentially
    // console.log(allPatches)
}