const slips = [
  'img/slip-propositions/slip_standing.png',
  'img/slip-propositions/slip_inside.png',
  'img/slip-propositions/slip_30.png',
  'img/slip-propositions/slip_29.png',
  'img/slip-propositions/slip_28.png',
  'img/slip-propositions/slip_27.png',
  'img/slip-propositions/slip_24.png',
  'img/slip-propositions/slip_19b.png',
  'img/slip-propositions/slip_20b.png',
  'img/slip-propositions/slip_18.png',
  'img/slip-propositions/slip_16w.png',
  'img/slip-propositions/slip_9.png',
  'img/slip-propositions/slip_8.png',
  'img/slip-propositions/slip_6.png',
  'img/slip-propositions/slip_4.png',
  'img/slip-propositions/slip_3.png',
  'img/slip-propositions/slip_1.png'

];

const positionGenerator = () => {
  const pos = {
    y: Math.random() * window.innerHeight + 10 + 'px',
    // x: Math.random() * window.innerWidth + 'px'
    x: '-10em'
  }
  return pos;
};

function imageContainer(src) {
  let slip = document.createElement('img');
  let position = positionGenerator();
  slip.className = 'slip';
  slip.src = src;
  slip.style.top = position.y;
  //slip.style.left = position.x;
  // slip.style.transform = 'translate(50%,50%)';
  console.log(slip)
  document.body.appendChild(slip);

}

slips.forEach(slip => {
  console.log(slip);
  imageContainer(slip);
});