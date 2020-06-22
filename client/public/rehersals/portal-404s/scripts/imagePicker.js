//originally i was assigning an image to each button on ssshtml page but it slowed down the ability to add images to the whole system, by needing to me then to grab an image for each button to accompnay each large image, and create a classname siting that smaller button image. too many steps. 
// const imgClasses = ['img1', 'img2', 'img3', 'img4', 'img5']; // for each of these instances, a single imgmenu element will be created. ;

var imgMenuOptions = [
    ["sss-2.jpg", "sss-2b.jpg", "sss-2c.jpg"],
    ["aaa.jpg", "ssss.png"],
    ["bbb.png"],
    ["ggg.png", "fff.png"],
    ["hhh.png", "iii.png"],
    ["sss-5.jpg"],
    ["sss-1.jpg", "sss-1c.jpg"],
    ["sss-4.jpg", "sss-4b.jpg"],
    ["sss-27.jpg"],
    ["sss-9.jpg", "sss-9b.jpg", "sss-9c.jpg"],
    ["sss-22b.jpg"],
    ["sss-10.jpg", "sss-10c.jpg"],
    ["sss-11.jpg", "sss-11c.jpg"],
    ["sss-12.jpg", "sss-12b.jpg"],
    ["sss-14.jpg"],
    ["sss-16.jpg", "sss-16c.jpg", "sss-16b.jpg"],
    ["sss-17.jpg", "sss-17b.jpg"],
    ["sss-18.jpg", "sss-18b.jpg"],
    ["sss-29.jpg"],
    ["sss-20.jpg", "sss-20c.jpg", "sss-20b.jpg"],
    ["sss-23b.jpg", "sss-23d.jpg"],
    ["sss-24b.jpg"],
    ["sss-25b.jpg", "sss-25c.jpg"],
    ["sss-28.jpg", "sss-28b.jpg"],
    ["sss-30.jpg", "sss-30b.jpg"],
    ["sss-3.jpg"],


]

// var imgMenuSingles = [
//     "aaa.jpg",
//     "ccc.png", "bbb.png",
//     "ggg.png", "fff.png",
//     "hhh.png", "iii.png",
//     "aaa.jpg"
// ]
const trueOrFalse = () => {
    //i can bias the return by having the mathrandom compare to 0.5  ( a 50/50 split) ooorrr a 70/30 split for true with 0.7 etc etc
    return Math.random() < 0.7
}
const imageMenu = () => {
    const container = document.createElement('div');
    container.className = "imgmenuContainer"

    //i needed the index number to be passed to imgReplacement(i) so switched to a for loop over foreach
    for (let i = 0; i < imgMenuOptions.length; i++) {
        const clearImgs = true //trueOrFalse();
        console.log(clearImgs)
        let imgPixel = document.createElement('div');
        imgPixel.className = "imgmenuPatch";
        imgPixel.style.backgroundColor = getRandomColor()
        //imgPixel.classList.add(imgClasses[i])
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
    //NOTE:added a conditional true or false for whether the image array would be emptied to 'just' add the images associated with a particular button, or if they would be added cumulatively to an array with previous values still remaining in it. this gives different results in the user view of how new images are being integrated and returned with what they have already viewed. 
    //this is more useful when i'm loading single images. 
    clearImgs ? imgOptions.splice(0, imgOptions.length) : console.log('let it ride')

    //NOTE -- doing this because i'm forgoing the true/false check on claering the images. beacuse i'm now scrambling the tiles by clicking directly on them, rathet then from the menu, i maybe
    //don't need to have these random mixings happening from the menu clicks as well. 
    // imgOptions.splice(0, imgOptions.length)

    // this clears out all existing images in the array
    //imgOptions.splice(0, imgOptions.length); 

    //NOTE:random image pull 
    //const newImgView = imgMenuOptions[Math.floor(Math.random() * imgMenuOptions.length)];

    //NOTE:specific image combo array pull 
    const newImgView = imgMenuOptions[index]
    newImgView.forEach(img => {
        imgOptions.push('./img/' + img)
    })

    //NOTE: this pulls only a single image each time and 'may' scramble with others based on truthy or falsey value of clearImgs boolean, passed into this function
    // const newImgView = imgMenuSingles[index]
    // imgOptions.push('./' + newImgView);

    const holder = document.querySelector('.tileHolder'); // i thought i could use a global var for this, but no. i has to be queried uniquely within each function. 
    holder.remove();
    numTiles = 0;
    init(); // this calls on a function in sss.js which is a reset. 
}

imageMenu()