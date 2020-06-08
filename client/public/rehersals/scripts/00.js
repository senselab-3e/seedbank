var notes;

const gatherPatches = () => {
    let allPatches = document.querySelectorAll(".prePicnicPatch");
    console.log(allPatches)
    for (let i = 0; i < allPatches.length; i++) {
        console.log('clicking others')
        allPatches[i].addEventListener('click', function (event) {
            createPixel()
        });
    }
}

window.onload = () => {
    createPixel()
    const firstPatch = document.querySelector('.prePicnicPatch');
    notes = document.querySelector('.pseudoCode');
    firstPatch.addEventListener('click', function (event) {
        replaceClassName()
    });
}
const EntryPatch = () => createPixel() //console.log('clicking pixel') //sanity check

const replaceClassName = () => {
    notes.classList.contains('hide') ? notes.classList.remove('hide') : notes.classList.add('hide');
}

const createPixel = () => {
    var pixel = document.createElement('div');
    pixel.className = 'pixel'
    pixel.classList.add('prePicnicPatch');
    pixel.style.marginLeft = Math.random(window.innerWidth) * window.innerWidth + 'px';
    pixel.style.marginTop = Math.random(window.innerHeight) * window.innerHeight + 'px';
    document.body.appendChild(pixel)
    gatherPatches() // this ensures that each time a pixel is added, that it will re-run the query select and apply listeners to all the current pixels on the page. running this within onload doesn't work because onload only is called once. so the listeners only gets attatched to the first instance craeted at the start. 
}