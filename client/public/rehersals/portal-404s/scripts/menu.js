const imgClasses = ['img1', 'img2', 'img3', 'img4', 'img5']; // for each of these instances, a single imgmenu element will be created. ;

var imgMenuOptions = [
    ["aaa.jpg", "ssss.png"],
    ["ccc.png", "bbb.png"],
    ["ggg.png", "fff.png"],
    ["hhh.png", "iii.png"],
    ["aaa.jpg"]
]

var imgMenuSingles = [
    "aaa.jpg",
    "ccc.png", "bbb.png",
    "ggg.png", "fff.png",
    "hhh.png", "iii.png",
    "aaa.jpg"
]

const trueOrFalse = () => {
    //i can bias the return by having the mathrandom compare to 0.5  ( a 50/50 split) ooorrr a 70/30 split for true with 0.7 etc etc
    return Math.random() < 0.7
}


const imageMenu = () => {
    const container = document.createElement('div');
    container.className = "imgmenuContainer "

    //i needed the index number to be passed to imgReplacement(i) so switched to a for loop over foreach
    for (let i = 0; i < imgClasses.length; i++) {
        const clearImgs = trueOrFalse();
        console.log(clearImgs)
        let imgPixel = document.createElement('div');
        imgPixel.className = "imgmenuPatch";
        imgPixel.classList.add(imgClasses[i])
        imgPixel.style.left = 0;
        imgPixel.style.top = 0;
        imgPixel.addEventListener('click', function (event) {
            imgReplacement(i, clearImgs)
        })
        container.appendChild(imgPixel)
    }

    const menuArea = document.querySelector('.menu')
    menuArea.appendChild(container)
}

const imgReplacement = (index, clearImgs) => {
    //added a conditional true or false for whether the image array would be emptied to 'just' add the images associated with a particular button, or if they would be added cumulatively to an array with previous values still remaining in it. this gives different results in the user view of how new images are being integrated and returned with what they have already viewed. 
    clearImgs ? imgOptions.splice(0, imgOptions.length) : console.log('let it ride')


    // this clears out all existing images in the array
    //imgOptions.splice(0, imgOptions.length); 

    //random image pull 
    //const newImgView = imgMenuOptions[Math.floor(Math.random() * imgMenuOptions.length)];

    //specific image combo array pull 
    // const newImgView = imgMenuOptions[index]
    // newImgView.forEach(img => {
    //     imgOptions.push('./' + img)
    // })

    //this pulls only a single image each time and 'may' scramble with others based on truthy or falsey value of clearImgs boolean, passed into this function
    const newImgView = imgMenuSingles[index]
    imgOptions.push('./' + newImgView);

    const holder = document.querySelector('.tileHolder'); // i thought i could use a global var for this, but no. i has to be queried uniquely within each function. 
    holder.remove();
    numTiles = 0;
    init(); // this calls on a function in sss.js which is a reset. 
}

imageMenu()