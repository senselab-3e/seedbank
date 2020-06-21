const frogs = ['img/frog-3.png', 'img/frog-doublecri.png', 'img/frog-froggg.png', 'img/frog-frog3.png', 'img/frog-froggybouncegro.png', 'img/frog-froggybouncy.png', 'img/frog-gggggoooo.png', 'img/frog-grog1.png', 'img/frog-grogpatch.png', 'img/frog-ooogrog.png', 'img/frog-orangegrog.png', 'img/frog-popup.png', 'img/frog-popup2.png', 'img/frog-sponge-frog.png', 'img/frog-frogster-orange.png', 'img/frog-spongeyfrog.png'];

const positionGenerator = () => {
    const pos = {
        y: Math.random() * window.innerHeight - 100 + 'px',
        x: Math.random() * window.innerWidth - 100 + 'px'
    }
    return pos;
};

frogs.forEach(frog => {
    console.log(frog)
    let frogbox = document.createElement('div');
    let position = positionGenerator();
    frogbox.className = 'grog';
    frogbox.style.backgroundImage = 'url(' + frog + ')';
    frogbox.style.top = position.y
    frogbox.style.left = position.x
    document.body.appendChild(frogbox);
});


const frogReposition = () => {
    let frogs = document.querySelectorAll('.grog')
    frogs.forEach(function (frog) {
        var newCoor = positionGenerator();
        frog.style.top = newCoor.y
        frog.style.left = newCoor.x
    })
}

setInterval(frogReposition, 1500);