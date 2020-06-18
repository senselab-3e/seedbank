const imgClasses = ['img1', 'img2', 'img3', 'img4', 'img5']; // for each of these instances, a single imgmenu element will be created. ;

var imgMenuOptions = [
    ["aaa.jpg", "ssss.png"],
    ["ccc.png", "bbb.png"],
    ["ggg.png", "fff.png"],
    ["hhh.png", "iii.png"],
    ["aaa.jpg"]
]

const imageMenu = () => {
    const container = document.createElement('div');
    container.className = "imgmenuContainer "

    // imgClasses.forEach(img => {
    //     console.log(img)
    //     let imgPixel = document.createElement('div');
    //     imgPixel.className = "imgmenuPatch";
    //     imgPixel.classList.add(img)
    //     imgPixel.style.left = 0;
    //     imgPixel.style.top = 0;
    //     imgPixel.addEventListener('click', function (event) {
    //         imgReplacement()
    //     })
    //     container.appendChild(imgPixel)
    // })

    for (let i = 0; i < imgClasses.length; i++) {
        let imgPixel = document.createElement('div');
        imgPixel.className = "imgmenuPatch";
        imgPixel.classList.add(imgClasses[i])
        imgPixel.style.left = 0;
        imgPixel.style.top = 0;
        imgPixel.addEventListener('click', function (event) {
            imgReplacement(i)
        })
        container.appendChild(imgPixel)
    }

    const menuArea = document.querySelector('.menu')
    menuArea.appendChild(container)
}
imageMenu()

const imgReplacement = (index) => {
    imgOptions.splice(0, imgOptions.length); // this clears out all existing images in the array
    //random image pull 
    //const newImgView = imgMenuOptions[Math.floor(Math.random() * imgMenuOptions.length)];
    const newImgView = imgMenuOptions[index]
    newImgView.forEach(img => {
        imgOptions.push('./' + img)
    })
    const holder = document.querySelector('.tileHolder'); // i thought i could use a global var for this, but no. i has to be queried uniquely within each function. 
    holder.remove();
    numTiles = 0;
    init();
}