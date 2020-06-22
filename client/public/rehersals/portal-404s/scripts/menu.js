const gifVerse = ['gif404', 'gifmeowmix', 'gifpipecleaners', 'gifsponge', 'gifbreeze', 'giffold', 'gifshadows', 'gifsplash', 'gifsquee', 'gifsplat', 'gifumbrella', 'gifpoke', 'gifcompost', 'gifplanttrap', 'gif404', 'gifCreature', 'gifpinkwave', 'gifwave', 'gifducky'] // for each of these instances, a single pixel element will be created. 

const linkVerse = ['rrr.html', 'fishy.html', 'sss.html', 'fff.html', 'aeo.html', 'vvv.html', 'kite.html', 'mmm.html', 'llli.html', 'eee.html', 'uuu.html', 'shsh.html', 'zzz.html', 'jardin.html', 'mondayfiles.html', 'creatures.html', 'bichos.html', 'gggrog.html', 'joy.html'] //creature.html

console.log(gifVerse.length, linkVerse.length)

//note. there are 2 more gifs extra, with no paired link
const createPixelPatch = () => {
    var pxlContainer = document.createElement('div');
    pxlContainer.className = 'pixelContainer';
    document.body.appendChild(pxlContainer);
}

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const createAnchorPixel = () => {
    const pixelContainer = document.querySelector('.pixelContainer');
    var linkWrapper = document.createElement('a');
    linkWrapper.href = '../04.html'
    var anchor = document.createElement('div');
    anchor.className = 'anchorPixel';
    linkWrapper.appendChild(anchor)
    pixelContainer.appendChild(linkWrapper)
}

const createPixel = () => {
    const pixelContainer = document.querySelector('.pixelContainer'); // it doesn't seem like it's possible to grab the value of the colors being calculated from that css animation.... so i can't color the block with it, unfortunately

    var alink = document.createElement('a');
    alink.className = 'menuLinks';
    var pixel = document.createElement('div');
    pixel.className = 'pixelPatch';
    pixel.style.background = getRandomColor() // NOTE: because the background color was dynamically assigned, it was overriding the css class based way in which i was adding a background image to appear, on a rollover. this is bc of the inline styling it injects. therefore i have had to do a removeProperty action to game that limitation, on the revealPortal function.
    alink.appendChild(pixel);
    pixelContainer.appendChild(alink);
    //pixelContainer.appendChild(pixel)
    pixelContainer.style.left = Math.random(window.innerWidth) * (window.innerWidth / 4 * 3) + 'px';
    pixelContainer.style.top = Math.random(window.innerHeight) * (window.innerHeight / 4) + 'px';
    //addListener(pixelContainer)
}

const addLinks = () => {
    const linkList = document.querySelectorAll('.menuLinks');
    for (let i = 0; i < linkList.length; i++) {
        linkVerse[i] ? linkList[i].href = linkVerse[i] : linkVerse[i]; // checks if there is a valid index in the array of links in relation to the current index in the gifverses making up the pixel menu. if so, the a gets href. if not, nothing
    }
}

const revealPixelPortal = () => {
    //const pixelContainer = document.querySelector('.pixelContainer');
    const pixelPortal = document.querySelectorAll('.pixelPatch'); // this number should be the same as the number of gifVerse
    //remember that i changed the iteration to start at 1, instead of 0, to exclude the first pixel from changing color or having a gif on it, because  i want the first pixel to remain consistently a pinkestpink anchor'
    for (let m = 0; m < pixelPortal.length - 1; m++) { // the last pixel has no accompanying class on rollover - it's purely there for the nudge
        pixelPortal[m].addEventListener("mouseover", function (event) {
            this.classList.add(gifVerse[m]);
            this.style.removeProperty('background'); //NOTE: see createPixel comments for details. but this became necessary because styling heirarchives for the dynamically assigned background color were causing the background images in the class i added to be overriden. removing that inline styline became necessary so that the class i and its image would be visible again. 
        });
        pixelPortal[m].addEventListener("mouseout", function (event) {
            this.classList.remove(gifVerse[m]);
            this.style.setProperty('background', getRandomColor());
        })
        //NOTE: for later
        // pixelPortal[m].addEventListener("mouseclick", function (event) {
        //     this.classList.add(gifVerse[m]);
        //     this.style.removeProperty('background'); //NOTE: see createPixel comments for details. but this became necessary because styling heirarchives for the dynamically assigned background color were causing the background images in the class i added to be overriden. removing that inline styline became necessary so that the class i and its image would be visible again. 
        // });
        // pixelPortal[m].addEventListener("mouseup", function (event) {
        //     this.classList.remove(gifVerse[m]);
        //     this.style.setProperty('background', getRandomColor());
        // })
        //}
    }
}

const nudgePixels = () => {
    const pixelContainer = document.querySelector('.pixelContainer');
    const pixelPatches = document.querySelectorAll('.pixelPatch');
    const anchorPixel = document.querySelector('.anchorPixel');
    const nudgeAmtCalc = gifVerse.length; // needs to be adjusted according to how long the pixel line is
    //have this also be mouseclick for touch devices? 
    anchorPixel.addEventListener("mouseover", function (event) {
        let currentX = window.getComputedStyle(pixelContainer, null).getPropertyValue(
            "left");
        // let currentY = window.getComputedStyle(pixelContainer, null).getPropertyValue(
        //     "top");
        const newNum = parseInt(currentX.replace(/[^0-9.]+/, ''));
        // to make the test that the position doesn't exceed the window size, i need it to remain and inT - leading to the not as elegant passing of a string concatination in the setProperty
        newNum + nudgeAmtCalc < window.innerWidth - nudgeAmtCalc * 2 ? pixelContainer.style.setProperty('left', newNum + 5 + 'px') : pixelContainer.style.setProperty('left', 5 + nudgeAmtCalc + 'px');
        // pixelContainer.style.setProperty('top', currentY + 'px');
    })
    pixelPatches[pixelPatches.length - 1].addEventListener("mouseover", function (event) {
        let currentX = window.getComputedStyle(pixelContainer, null).getPropertyValue(
            "left");
        const newNum = parseInt(currentX.replace(/[^0-9.]+/, ''));
        newNum - 5 < 1 ? pixelContainer.style.setProperty('left', window.innerWidth - nudgeAmtCalc * 6 + 'px') : pixelContainer.style.setProperty('left', newNum - 5 + 'px');
    })
    ///not convinced this is doing what's necessary on mobile devices
    anchorPixel.addEventListener("click", function (event) {
        let currentX = window.getComputedStyle(pixelContainer, null).getPropertyValue(
            "left");
        // let currentY = window.getComputedStyle(pixelContainer, null).getPropertyValue(
        //     "top");
        const newNum = parseInt(currentX.replace(/[^0-9.]+/, ''));
        // to make the test that the position doesn't exceed the window size, i need it to remain and inT - leading to the not as elegant passing of a string concatination in the setProperty
        newNum + 5 < window.innerWidth ? pixelContainer.style.setProperty('left', newNum + 15 + 'px') : pixelContainer.style.setProperty('left', nudgeAmtCalc + 'px');
        // pixelContainer.style.setProperty('top', currentY + 'px');
    })
    pixelPatches[pixelPatches.length - 1].addEventListener("click", function (event) {
        let currentX = window.getComputedStyle(pixelContainer, null).getPropertyValue(
            "left");
        const newNum = parseInt(currentX.replace(/[^0-9.]+/, ''));
        newNum - 5 < 1 ? pixelContainer.style.setProperty('left', window.innerWidth - 25 + 'px') : pixelContainer.style.setProperty('left', newNum - 15 + 'px');
    })
}

window.onload = () => {
    createPixelPatch() //container for pixels
    //this will be a dummy first pixel, purely for the nudgepixel function - which works when the first and last pixel is hit on a rollover
    createAnchorPixel() // this was created instead of re-using the create pixel because i was applying so many unique stylings to the first pixel i was added lines of code. just creating a whole new class for the first pixel simplifies things. 
    for (let i = 0; i < gifVerse.length; i++) {
        createPixel()
    }
    createPixel()
    nudgePixels()
    revealPixelPortal()
    addLinks()
}