var creatureGifs = ["../gifverse/cat-in-pool.gif", "../gifverse/duck.gif", "../gifverse/ducky2.gif",
    "../gifverse/ducky3.gif", "../gifverse/ducky4.gif", "../gifverse/capybara1.gif", "../gifverse/capybara2.gif", "../gifverse/capybara3.gif", "../gifverse/capybara4.gif", "../gifverse/capybara5.gif", "../gifverse/capybara6.gif", "../gifverse/duckyfriend.gif", "../gifverse/capybara7.gif", "../gifverse/elephant1.gif",
    "../gifverse/elephant2.gif", "../gifverse/elephant3.gif", "../gifverse/elephant3.gif", "../gifverse/elephant4.gif", "../gifverse/elephant5.gif", "../gifverse/octopus1.gif", "../gifverse/octopus2.gif", "../gifverse/octopus3.gif", "../gifverse/octopus4.gif", "../gifverse/octopus5.gif", "../gifverse/octopus6.gif", "../gifverse/octopus7.gif", "../gifverse/seahorse1.gif", "../gifverse/seahorse2.gif", "../gifverse/bat.gif", "../gifverse/lizard.gif", "../gifverse/slimemold.gif", "../gifverse/slimemold2.gif", "../gifverse/plantcell.gif", "../gifverse/sea1.gif", "../gifverse/orca.gif"
]


const positionGenerator = () => {
    const pos = {
        y: Math.random() * window.innerHeight + 'px',
        x: Math.random() * window.innerWidth + 'px'
    }
    return pos;
};


const createCreature = () => {
    creatureGifs.forEach(img => {

        let container = document.createElement('div');
        let position = positionGenerator();
        container.className = 'creatureGif';
        container.style.backgroundImage = 'url(' + img + ')';

        container.style.top = position.y;
        container.style.left = position.x;
        container.style.zindex = 1;
        document.body.appendChild(container);
    })
}

createCreature()