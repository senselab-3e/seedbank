//set up checks for device compatability and if not present, simply display the image as is

var imgOptions = ["./img/sss-2.jpg", "./img/sss-2b.jpg", "./img/sss-2c.jpg"]

function chooseImg() {
    var image = imgOptions[Math.floor(Math.random() * imgOptions.length)];
    return image
}

//NOTE: I have set up a contingency if i don't want to have heigh and width values being adjusted independently - in the sliderVal()
const inputWidth = document.querySelector('#inputWidth');
const inputHeight = document.querySelector('#inputHeight'); ///NOTE: right now this isn't enabled because i prefer the ease of a single cube slice. 


var options = {
    imgSrc: chooseImg(),
    containerName: "tileContainer",
    grid: false,
    tileWidth: inputWidth.value, //45, //85, //25
    tileHeight: inputWidth.value, //inputHeight.value,
    mouseTrail: true

}
//value from slider
// const inputSize = () => {
//     return input.value
// }

const inputWidthSize = () => {
    return inputWidth.value
}

const inputHeightSize = () => {
    return inputHeight.value
}

//none of these are now being used. the menu.js function takes care of it now. 
//however. they are good strategies for 'differen't ways of loading an image, either by not clearing the image array, or incrementally adding to it. this is a bit of proof of concept experiments. 

// const image0 = () => {
//     imgOptions.splice(0, imgOptions.length); // this clears out all existing images in the array
//     imgOptions.push('./aaa.jpg');
//     imgOptions.push("./ssss.png");
//     const holder = document.querySelector('.tileHolder');
//     holder.remove();
//     numTiles = 0;
//     init();

// }

// const image1 = () => {
//     // options.imgSrc = './ccc.png'; // this won't work because of the hack way in which i got it to load /call a random image from the array above, at each tiling action instance below. 
//     // but for now as proof of concept, i can push into that array, an image that wasn't there before...
//     imgOptions.push('./ccc.png'); /// what's interesting about this, is that if they push the button repeatedly, then it increase the probability of a particular image being called - even in the 'random' pushing more tiles from other images into smaller numbers. 
//     const holder = document.querySelector('.tileHolder'); // i thought i could use a global var for this, but no. i has to be queried uniquely within each function. 
//     holder.remove();
//     numTiles = 0;
//     init();
// }



const sliderVal = (e) => {
    // options.tileWidth = inputSize()
    // options.tileHeight = inputSize()

    //if i want to return to having just one input value scroll, so the squares only have one variable equadistant sizing, then have it return the same value for inputWidth applied to height and width of tile
    options.tileWidth = inputWidthSize()
    options.tileHeight = inputWidthSize()

    // options.tileWidth = inputWidthSize()
    // options.tileHeight = inputHeightSize()
    const holder = document.querySelector('.tileHolder');
    holder.remove(); //as soon as i remove this, it throws errors on all the otherfuncitons bc it has no element to act on
    numTiles = 0; /// THIS IS SUPER KEY. This resets the tile number. it wasn't enough to just empty the tile container divs 
    tileWidth = options.tileWidth;
    tileHeight = options.tileHeight;
    init();
}


inputWidth.addEventListener('change', sliderVal)
inputHeight.addEventListener('change', sliderVal)





// ----------------------------------------------------------
var tileWidth, tileHeight, numTiles, tileHolder, tileContainer;
var directionX, directionY;
var imgOriginalWidth, imgOriginalHeight;
var imgCoverWidth, imgCoverHeight;
var imageLoaded = false;

numTiles = 0;
tileWidth = options.tileWidth;
tileHeight = options.tileHeight;

tileContainer = document.getElementsByClassName(options.containerName)[0];




function init() {
    if (options.grid == false) {

        if (tileContainer.classList.contains("noGrid")) {
            // this was added to keep it from adding more 'no Grid' classnames upon reinitialization
        } else {
            tileContainer.classList.add("noGrid")
        }
    }

    //preload image and get original image size, then create tiles
    var image = new Image();
    image.src = options.imgSrc; //again, this isn't being done iteratively for each tile so its just choosing the whole image again
    image.onload = function (e) {
        imageLoaded = true;
        imgOriginalWidth = e.currentTarget.width;
        imgOriginalHeight = e.currentTarget.height;

        createTileHolder();
        checkTileNumber();
        positionImage();
        addListeners();
    };
}


function resizeHandler() {
    if (imageLoaded == false) return;

    //not working yet

    checkTileNumber();
    positionImage();
}

function createTileHolder() {

    tileHolder = document.createElement('div');
    tileHolder.className = "tileHolder";
    tileHolder.style.position = "absolute";
    tileHolder.style.top = "50%";
    tileHolder.style.left = "50%";
    tileHolder.style.transform = "translate(-50%, -50%)";

    tileContainer.appendChild(tileHolder);
}

//when i applied the rotation transformations to the above, it did it to the entire image, not the individual tiles

function checkTileNumber() {
    console.log(options.tileHeight, tileHeight, 'checktilenumber')
    tileHolder.style.width = Math.ceil(tileContainer.offsetWidth / tileWidth) * tileWidth + "px";
    tileHolder.style.height = Math.ceil(tileContainer.offsetHeight / tileHeight) * tileHeight + "px";
    var tilesFitInWindow = Math.ceil(tileContainer.offsetWidth / tileWidth) * Math.ceil(tileContainer.offsetHeight / tileHeight);
    if (numTiles < tilesFitInWindow) {
        for (var i = 0, l = tilesFitInWindow - numTiles; i < l; i++) {
            addTiles();
        }
    } else if (numTiles > tilesFitInWindow) {
        for (var i = 0, l = numTiles - tilesFitInWindow; i < l; i++) {
            removeTiles();
        }
    }
}


var rotate = false;
var deg = 0;


var items = [180, 0, -180]
//this can produce a 'tiny' of pixels selections from a an image if tileWidth: 15, is also set
// var items = [90, -90]
//small tilt with white goP:
// var items = [10, 0]
//top position option values
// var items = [0, 0.2, 0.3, -0.3, -0.2]

function createVal() {

    var item = items[Math.floor(Math.random() * items.length)];
    return item
}

// function rotationCheck (val){
//     val ? rotate = true : rotate = false
// }

//little function to strip url("")that was wrapping the path information for images in the tiles - i needed the path address plain to then pass onto a window.open()

function removeUrlWrap(s) {
    //investigate if there is a more elegant way to do this all in one replaceregex rather then calling it twice
    s = s.replace(/url\("/, '');
    s = s.replace(/"\)/, '');

    return s
}


function addTiles() {
    tileWidth = options.tileWidth;
    tileHeight = options.tileHeight;
    var tile = document.createElement('div');
    rotate ? deg = createVal() : deg = 0;

    tile.className = "tile";

    //maintain aspect ratio
    imgCoverWidth = tileContainer.offsetWidth;
    imgCoverHeight = tileContainer.offsetHeight;

    if (imgOriginalWidth > imgOriginalHeight) {
        imgCoverHeight = imgOriginalHeight / imgOriginalWidth * imgCoverWidth;
    } else {
        imgCoverWidth = imgOriginalWidth / imgOriginalHeight * imgCoverHeight;
    }

    //----->original code for grabbing from single city source
    //tile.style.background = 'url("' + options.imgSrc + '") no-repeat';

    //this gets it to mix in from multiple image sources ! ----> YES
    tile.style.background = 'url("' + chooseImg() + '") no-repeat';

    tile.style.backgroundSize = imgCoverWidth + "px " + imgCoverHeight + "px";
    tile.style.width = tileWidth + "px";
    tile.style.height = tileHeight + "px";

    //offset top position options
    // tile.style.top = deg + "%"

    //ROTATION OPTIONS:
    // tile.style.webkitTransform = 'rotate(' + deg + 'deg)';
    // tile.style.mozTransform = 'rotate(' + deg + 'deg)';
    // tile.style.msTransform = 'rotate(' + deg + 'deg)';
    // tile.style.oTransform = 'rotate(' + deg + 'deg)';
    // tile.style.transform = 'rotate(' + deg + 'deg)';
    document.querySelectorAll(".tileHolder")[0].appendChild(tile);

    tile.addEventListener("mouseover", moveImage);
    // tile.addEventListener("ontouchmove", moveImage);
    tile.addEventListener("touchstart", moveImageTouch);
    //tile.addEventListener("touchend", moveImageTouch);
    tile.addEventListener("touchmove", moveImageTouch);
    //maybe this is where i add touch events


    //NOTE: this is where an image will pop up in association with the specific tile that was clicked. 
    //THIS IS TEMPORARILY DISABLED because conceptually, i'm not sure if i want people to be able to view the image in full. 
    // tile.addEventListener("click", function linkImg() {
    //     var path = removeUrlWrap(this.style.backgroundImage)
    //     // console.log(path)
    //     // console.log(tile.style.backgroundImage)
    //     windowObjectReference = window.open(
    //         path,
    //         "DescriptiveWindowName",
    //         "resizable,scrollbars,status"
    //     );
    // });


    // i could jig this to simply load other images. 
    //with a setting at 'false' it means it will always accumulatively mix in other images, not clear.
    tile.addEventListener("click", function () {
        imgReplacement(Math.floor(Math.random() * imgMenuOptions.length), false) // this false ---> keeps the tile images changing cumulatively
    })
    numTiles++;
}

function removeTiles() {
    var tileToRemove = document.querySelectorAll(".tile")[0];
    tileToRemove.removeEventListener("mouseover", moveImage);
    tileToRemove.removeEventListener("touchstart", moveImage);
    tileToRemove.removeEventListener("touchmove", moveImage);

    TweenMax.killTweensOf(tileToRemove);
    tileToRemove.parentNode.removeChild(tileToRemove);

    numTiles--;
}

function addListeners() {
    //if 'true' 
    if (options.mouseTrail) {
        document.addEventListener('mousemove', function (event) {
            directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
        });
        //it's unclear if i need this for touchstart but since this is mouse move i'm going to keep it to touch move only for now
        // document.addEventListener('touchstart', function (event) {
        //     directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        //     directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
        // });
        //touch move or just touch start is not yielding a noticeable difference in element responses
        document.addEventListener('touchmove', function (event) {
            directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
        });
    }
}

function positionImage() {
    for (var t = 0, l = numTiles; t < l; t++) {
        var nowTile = document.querySelectorAll(".tile")[t];
        if (nowTile) { // this was a sanity check
            var left = (-nowTile.offsetLeft - (tileHolder.offsetLeft - (tileHolder.offsetWidth / 2)));
            var top = (-nowTile.offsetTop - (tileHolder.offsetTop - (tileHolder.offsetHeight / 2)));

            nowTile.style.backgroundPosition = left + "px " + top + "px";
        } else {
            console.log('tile still coming')
        }
    }
}

function resetImage(nowTile) {
    var left = (-nowTile.offsetLeft - (tileHolder.offsetLeft - (tileHolder.offsetWidth / 2)));
    var top = (-nowTile.offsetTop - (tileHolder.offsetTop - (tileHolder.offsetHeight / 2)));


    TweenMax.to(nowTile, 1, {
        backgroundPosition: left + "px " + top + "px",
        ease: Power1.easeInOut
    });
}


function moveImage(e) {
    var nowTile = e.currentTarget
    var minWidth = -tileContainer.offsetWidth + nowTile.offsetWidth;
    var minHeight = -tileContainer.offsetHeight + nowTile.offsetHeight;
    var nowLeftPos = (-nowTile.offsetLeft - (tileHolder.offsetLeft - (tileHolder.offsetWidth / 2)));
    var nowTopPos = (-nowTile.offsetTop - (tileHolder.offsetTop - (tileHolder.offsetHeight / 2)))
    var offset = 60;
    var left = nowLeftPos;
    var top = nowTopPos;

    if (options.mouseTrail) {
        //direction-aware movement
        if (directionX > 0) {
            left = nowLeftPos + offset;
        } else if (directionX < 0) {
            left = nowLeftPos - offset;
        }

        if (directionY > 0) {
            top = nowTopPos + offset;
        } else if (directionY < 0) {
            top = nowTopPos - offset;
        }
    } else {
        //random movement
        left = getRandomInt(nowLeftPos - offset, nowLeftPos + offset);
        top = getRandomInt(nowTopPos - offset, nowTopPos + offset);
    }

    // bounds
    if (left < minWidth) left = minWidth;
    if (left > 0) left = 0;
    if (top < minHeight) top = minHeight;
    if (top > 0) top = 0;

    //tween
    TweenMax.to(nowTile, 1.5, {
        backgroundPosition: left + "px " + top + "px",
        ease: Power1.easeOut,
        onComplete: resetImage,
        onCompleteParams: [nowTile]
    });
}


function moveImageTouch(e) {
    // e.preventDefault();
    var nowTile = e.currentTarget
    var minWidth = -tileContainer.offsetWidth + nowTile.offsetWidth;
    var minHeight = -tileContainer.offsetHeight + nowTile.offsetHeight;
    var nowLeftPos = (-nowTile.offsetLeft - (tileHolder.offsetLeft - (tileHolder.offsetWidth / 2)));
    var nowTopPos = (-nowTile.offsetTop - (tileHolder.offsetTop - (tileHolder.offsetHeight / 2)))
    var offset = 95; //no noticeable difference tile movement upon click. strang....
    var left = nowLeftPos;
    var top = nowTopPos;

    if (options.mouseTrail) {
        //direction-aware movement
        if (directionX > 0) {
            left = nowLeftPos + offset;
        } else if (directionX < 0) {
            left = nowLeftPos - offset;
        }

        if (directionY > 0) {
            top = nowTopPos + offset;
        } else if (directionY < 0) {
            top = nowTopPos - offset;
        }
    } else {
        //random movement
        left = getRandomInt(nowLeftPos - offset, nowLeftPos + offset);
        top = getRandomInt(nowTopPos - offset, nowTopPos + offset);
    }

    // bounds
    if (left < minWidth) left = minWidth;
    if (left > 0) left = 0;
    if (top < minHeight) top = minHeight;
    if (top > 0) top = 0;

    //tween
    TweenMax.to(nowTile, 1.5, {
        backgroundPosition: left + "px " + top + "px",
        ease: Power1.easeOut,
        onComplete: resetImage,
        onCompleteParams: [nowTile]
    });
}
///////////////////////////////////////////////////////////////////

init();

// handle event
//window.addEventListener("optimizedResize", resizeHandler);

////////////////////////UTILS//////////////////////////////////////
//////////////////////////////////////////////////////////////////

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function () {
    var throttle = function (type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();