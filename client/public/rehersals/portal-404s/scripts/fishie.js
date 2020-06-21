const fish = document.querySelector('.fishie');

const fishList = document.querySelectorAll('.fishie');





const moveThingy = () => {
    this.classList.add("fishieswing")
    setTimeout(function () {
        this.classList.remove('fishieswing');
    }, 5000); // 1000 = 1s
}
// fish.addEventListener('click', moveThingy);



fishList.forEach(fish => {
    fish.addEventListener('click', function () {
        fish.classList.add("fishieswing")
        setTimeout(function () {
            fish.classList.remove('fishieswing');
        }, 5000);

    })

});