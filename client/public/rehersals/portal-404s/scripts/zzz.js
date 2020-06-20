const gradientList = ['../gifverse/gradients/tumblr_pdtr7chsID1uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pduu51oGdY1uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pdz73yZ14V1uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pe0edqOnc41uzwgsuo1_400-1.gif',
    '../gifverse/gradients/tumblr_pdwphq72ft1uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pdutehx5D01uzwgsuo1_400.gif',
    '../gifverse/gradients/tumblr_pe0kl2lEBg1uzwgsuo1_400.gif'
]

const tapeList = document.querySelectorAll('.magicTape');
console.log(tapeList)

const posNeg = () => {
    const trueOrFalse = Math.random() >= 0.5;
    console.log(trueOrFalse)
    if (trueOrFalse) {
        return '+'
    } else {
        return '-'
    }
}

const randDegrees = () => {
    let negPos = posNeg()
    return negPos + Math.floor(Math.random() * 40 + 20) + 'deg';
}

tapeList.forEach(tape => {
    tape.style.setProperty('background-image', 'url(' + gradientList[Math.floor(Math.random(gradientList.length) * gradientList
        .length)] + ')');
    tape.style.setProperty('transform', 'rotate(' + randDegrees() + ')');
});