const nearDist = 0.1;
const farDist = 4000;
const card = 12;

var container;
var cam, scene, raycaster, renderer, sphereInter;
var thingieTransform;

var mouse = new THREE.Vector2();
var radius = 100, theta = 0;
var gsec = 0;
var gi = 0;
var gScale;

let mouseX = 0;
let mouseY = 0;
const mouseFX = {
  windowHalfX: window.innerWidth / 2,
  windowHalfY: window.innerHeight / 2,
  coordinates: function(coordX, coordY) {
    mouseX = (coordX - mouseFX.windowHalfX) * 10;
    mouseY = (coordY - mouseFX.windowHalfY) * 10;
  },
};


init();
animate();


function init() {

  scene = new THREE.Scene();
  cam = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, nearDist, farDist );
  cam.position.x = farDist * -2;
  cam.position.z = farDist / 10;

  renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild(renderer.domElement);

  //MOUSE INTERACTIONS
  raycaster = new THREE.Raycaster();
  raycaster.linePrecision = 5;

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  document.addEventListener( 'wheel', onMouseWheel, false );

  window.addEventListener( 'resize', onWindowResize, false );

  //CREATE GEOMETRIES
  const cubeSize = 120;
  const glob = new THREE.BoxBufferGeometry(cubeSize/2, cubeSize*2, cubeSize);

  //CREATE THINGIES
  const skinFiles = [];
  const skinPaths = [
    // 'assets/icons/orange-sponge.jpg',
    // 'assets/icons/green-sponge.jpg',
    'img/blue-sponge.jpg',
    'img/red-sponge.jpg',
    'img/yellow-sponge.jpg',
    'img/pink-sponge.jpg',
    'img/light-orange-sponge.jpg',
    'img/light-green-sponge.jpg'
  ];
  const skins = [];
//
  for(i=0; i<skinPaths.length; i++){
    skinFiles[i] = new THREE.TextureLoader();
    skins.push( new THREE.MeshBasicMaterial({ map: skinFiles[i].load(skinPaths[i]), transparent: true }) );
  }
  const loader = new THREE.TextureLoader();


  thingieTransform = new THREE.Object3D();

  // var chooseSkin = skins[Math.floor(Math.random()*skins.length)];

  for ( var i = 0; i < (card*3); i ++ ) {
    // var object;
    // var chooseSkin;
    // if(Math.random()<0.5){
      // var chooseSkin = skins[Math.floor(Math.random()*skins.length)];
// var chooseSkin = skins[];
      // object = new THREE.Mesh(glob, chooseSkin);
      var topofSponge = skins[Math.floor(Math.random()*skins.length)];
      var restofSponge = skins[Math.floor(Math.random()*skins.length)];
        const materials = [
          // new THREE.MeshBasicMaterial({map: loader.load(chooseTop)}),
          topofSponge,
          restofSponge,
          restofSponge,
          restofSponge,
          restofSponge,
          restofSponge,
        ];
var object = new THREE.Mesh(glob, materials);
    // } else {
    //   chooseSkin = skins[Math.floor(Math.random()*skins.length)];
    //   object = new THREE.Mesh(field, chooseSkin );
    // }
    const dist = farDist / 4;
    const distDouble = dist * 2;
    const tau = 2 * Math.PI;
    const size = (2.5*Math.random()) + 0.5;

    object.position.x = Math.random() * distDouble - dist;
    object.position.y = Math.random() * distDouble - dist;
    object.position.z = Math.random() * distDouble - dist;
    object.rotation.x = Math.random() * tau;
    object.rotation.y = Math.random() * tau;
    object.rotation.z = Math.random() * tau;
    object.scale.x = size;
    object.scale.y = size;
    object.scale.z = size;

    thingieTransform.add( object );
  }
  scene.add( thingieTransform );
}


//MOUSE INTERACTIONS
function onWindowResize() {
  cam.aspect = window.innerWidth / window.innerHeight;
  cam.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
let dummyX=0;
let dummyY=0;

function onMouseWheel( event ) {
  //event.preventDefault();
  //console.log(event);
  dummyX = Math.min(Math.max(dummyX + event.deltaX, 250), 800);
  dummyY = Math.min(Math.max(dummyY + event.deltaY, 350), 800);
  mouseFX.coordinates(dummyX, dummyY);
  console.log([dummyX, dummyY]);
}
function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onDocumentMouseDown( event ) {
  event.preventDefault();
  mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );

  var interThingie = raycaster.intersectObjects( thingieTransform.children, true );

  if ( interThingie.length > 0 ) {

    for(let i=0;i<thingieTransform.children.length; i++) {
      if (interThingie[0].object == thingieTransform.children[i]) {
        gi = i;
        gsec = 0;
        gScale = Math.random()*5 + 0.2;
      }
    }
  }
  }

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {

  // var backdrop = document.getElementById("gradient");
  // backdrop.style.backgroundImage = "linear-gradient(to left, #7db8af, #3d30c2)"";

  //move camera view
  cam.position.x += (mouseX - cam.position.x) * 0.05;
  cam.position.y += (mouseY * -1 - cam.position.y) * 0.05;

  cam.lookAt( scene.position );
  cam.updateMatrixWorld();

  // find intersections
  raycaster.setFromCamera( mouse, cam );

  for(var i=0; i<card; i++) {
    thingieTransform.children[i].rotation.y = 2*Math.PI*Math.sin( THREE.Math.degToRad( theta ));
    thingieTransform.children[i+card].rotation.y = 2*Math.PI*Math.sin( THREE.Math.degToRad( 90 + theta ));
    thingieTransform.children[i+(card*2)].rotation.y = 2*Math.PI*Math.sin( THREE.Math.degToRad( 180 + theta ));

    thingieTransform.children[i].position.x = THREE.Math.euclideanModulo(thingieTransform.children[i].position.x + 3, farDist/2);
    thingieTransform.children[i+card].position.y = THREE.Math.euclideanModulo(thingieTransform.children[i+card].position.y + 5, farDist/2);
    thingieTransform.children[i+(card*2)].position.z = THREE.Math.euclideanModulo(thingieTransform.children[i+(card*2)].position.z + 2, farDist/2);
  }

  //scaling for clicking on thingies
  thingieTransform.children[gi].scale.x = gScale + (0.125*Math.sin(0.20*gsec)+0.5)*Math.exp((-1/2)*gsec)*Math.sin(5*gsec + Math.PI/4);
  thingieTransform.children[gi].scale.y = gScale + (0.125*Math.sin(0.25*gsec)+0.5)*Math.exp((-1/2)*gsec)*Math.sin(5*gsec + Math.PI/2);
  thingieTransform.children[gi].scale.z = gScale + (0.125*Math.sin(0.23*gsec)+0.5)*Math.exp((-1/2)*gsec)*Math.sin(5*gsec);

  theta += 0.1;
  gsec += 0.1;

  renderer.render( scene, cam );
}
