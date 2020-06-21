if (navigator.userAgent.match(/AppleWebKit/) && !navigator.userAgent.match(/Chrome/)) {
    document.documentElement.className += " safari";
}


//-------------- old loop 

// const elems = document.getElementsByv("insert");

// const images = ['img/config.png','img/onpic.png','img/plantplastic.png','img/prepillowcreature.png'];

// for (var c in images) {
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].src = images[c];
//  }
// }

//-----------------------


// var targetArea = document.getElementsByClassName("scene");

//-------------------------

var array1 = ['img/pinkpatch.png', 'img/pinkpatch.png', 'img/chairshark.png', 'img/prepillowcreature.png', 'img/prepillowcreature.png', 'img/prepillowcreature.png', 'img/prepillowcreature.png', 'img/chairshark.png', 'img/chairshark.png', 'img/prepillowcreature.png', 'img/prepillowcreature.png', 'img/prepillowcreature.png', 'img/prepillowcreature.png', 'img/prepillowcreature.png', 'img/prepillowcreature.png', 'img/pinkpatch.png', 'img/sponge3.gif', 'img/sponge3.gif'];


var array2 = ['img/plob1.gif', 'img/plob1.gif', 'img/plob1.gif', 'img/plob1.gif', 'img/plob1.gif', 'img/purplepatch.png', 'img/metaltape.png', 'img/mintwashu.png', 'img/pinkbowlsid.png', 'img/bubblerock.png', 'img/claybowl.png', 'img/claybowl.png', 'img/plob1.gif', 'img/chairshark.png', 'img/purplepatch.png', 'img/rock1.png'];

var array3 = ['img/bowlsponge.png', 'img/bowlsponge.png', 'img/bowlsponge.png', 'img/spong5.gif', 'img/spong5.gif', 'img/spong5.gif', 'img/spong5.gif', 'img/spong4.gif', 'img/spong4.gif', 'img/spong4.gif', 'img/spong4.gif', 'img/spong4.gif', 'img/spong4.gif', 'img/spong4.gif', 'img/spong10.gif', 'img/weightcol.png', 'img/weightcol.png', 'img/weightcol.png', 'img/spong10.gif', 'img/bowlsponge.png', 'img/sponge4.gif', 'img/sponge4.gif', 'img/sponge4.gif', 'img/spongerock.png', 'img/spongerock.png', 'img/weightcol.png'];

var array4 = ['img/beigbowl.png', 'img/beigbowl.png', 'img/beigbowl.png', 'img/beigbowl.png', 'img/beigbowl.png', 'img/beigbowl.png', 'img/typealoe.png', 'img/googly2.gif', 'img/opurple.png', 'img/typealoe.png', 'img/typealoe.png', 'img/weightcol.png', 'img/opurple.png', 'img/opurple.png', 'img/beblm.png', 'img/opurple.png', 'img/opurple.png', 'img/opurple.png', 'img/opurple.png', 'img/plantplastic.png', 'img/plantplastic.png']

var array5 = ['img/typbroommm.png', 'img/typbroommm.png', 'img/typbroommm.png', 'img/typbroommm.png', 'img/typbroommm.png', 'img/posters.png', 'img/typbroommm.png', 'img/typbroommm.png', 'img/typbroommm.png', 'img/purplerock.png', 'img/purplerock.png', 'img/purplerock.png', 'img/sponges.png', 'img/sponges.png', 'img/cephskin.png']

var array6 = ['img/spongerock.png', 'img/spong4.gif', 'img/spong13.gif', 'img/spong13.gif', 'img/sponge15.gif', 'img/sponge2.gif', 'img/sponge3.gif', 'img/sponge3.gif', 'img/sponge9.gif', 'img/sponges.png', 'img/spong10.gif', 'img/spong10.gif', 'img/sponge12.gif', 'img/sponge12.gif', 'img/spongerock2.gif', 'img/spong4.gif', 'img/spong7.gif', 'img/sponge12.gif'];

var array7 = ['img/alligator.gif', 'img/cephskin.png', 'img/cephskin.png', 'img/cephskin.png', 'img/onpic.png', 'img/alligator.gif', 'img/cephskin.png', 'img/cephskin.png', 'img/missingfrog.gif', 'img/patch-card.gif', 'img/alligator.gif', 'img/alligator.gif']

var array8 = ['img/pillows2.gif', 'img/pillows2.gif', 'img/pillows2.gif', 'img/processual-operator-1b.gif', 'img/picnic-7.gif', 'img/pillows2.gif', 'img/pillows2.gif', 'img/pillows2.gif', 'img/pillows2.gif', ]

var array9 = ['img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pingpong.gif', 'img/pinup.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png']

var array10 = ['img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/picnic-7.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/picnic-7.gif', 'img/picnic-7.gif', 'img/picnic-7.gif', 'img/picnic-7.gif', 'img/corlarock.png', 'img/corlarock.png']

var array11 = ['img/plob12.gif', 'img/processual-operator-1b.gif', 'img/rainbow-triangles.gif', 'img/plob-catherder-2.gif', 'img/spong5.gif', 'img/picnic-7.gif', 'img/plob12.gif', 'img/plob12.gif', 'img/plob12.gif', 'img/patch-rainbow.gif']

var array12 = ['img/rollo-0.gif', 'img/rollo-0.gif', 'img/rollo-0.gif', 'img/rollo-0.gif', 'img/rollo-1.gif', 'img/rollo-1.gif', 'img/rollo-1.gif', 'img/rollo-1.gif', 'img/rollo-2.gif', 'img/rollo-2.gif', 'img/rollo-2.gif', 'img/rollo-2.gif', 'img/rollo-3.gif', 'img/rollo-3.gif', 'img/rollo-3.gif', 'img/rollo-3.gif', 'img/rollo-4.gif', 'img/rollo-4.gif', 'img/rollo-4.gif', 'img/rollo-4.gif', 'img/rollo-5.gif', 'img/rollo-5.gif', 'img/rollo-5.gif', 'img/rollo-5.gif', 'img/rollo-6.gif', 'img/rollo-6.gif', 'img/rollo-6.gif', 'img/rollo-6.gif', 'img/rollo-7.gif', 'img/rollo-7.gif', 'img/rollo-7.gif', 'img/rollo-8.gif', 'img/rollo-8.gif', 'img/rollo-8.gif', 'img/rollo-9.gif', 'img/rollo-9.gif', 'img/rollo-9.gif', 'img/rollo-10.gif', 'img/rollo-10.gif', 'img/rollo-10.gif', 'img/rollo-11.gif', 'img/rollo-11.gif', 'img/rollo-11.gif', 'img/rollo-12.gif', 'img/rollo-12.gif', 'img/rollo-12.gif']

var array13 = ['img/rock7.png', 'img/purplerock.png', 'img/spongerock.png', 'img/rock8.png', 'img/rock5.png', 'img/rock5.png', 'img/posterpatch.png', 'img/posterpatch.png', 'img/posterpatch.png', 'img/bubblerock.png', 'img/bubblerock.png', 'img/bubblerock.png', 'img/posterpatch.png', 'img/posterpatch.png', 'img/spongerock.png', 'img/spongerock.png', 'img/purplerock.png', 'img/spongerock.png', 'img/rock8.png']

var array14 = ['img/bound6-small.gif', 'img/bound6-small.gif', 'img/bound3-small.gif', 'img/bound4-small.gif', 'img/bound5-small.gif', 'img/bound10-small.gif', 'img/bound10-small.gif']

function createthingy(array) {

    main = document.createElement('div');
    main.className = "main";
    containerdiv = document.createElement('div');
    containerdiv.className = "scene";
    plant = document.createElement('div');
    plant.className = "plant";
    for (var c in array) {
        var div = document.createElement('div');
        div.className = "img";
        containerdiv.appendChild(div)
        var div2 = document.createElement('div');
        div2.className = "img__content";
        var myImage = new Image();
        myImage.src = array[c]
        div2.appendChild(myImage)
        div.appendChild(div2)
        plant.appendChild(div);
        containerdiv.appendChild(plant);
        main.appendChild(containerdiv)
        document.body.appendChild(main)
    }
}

const arrayoptions = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12, array13, array14]


const insertarry = () => {
    return Math.floor(Math.random() * Math.floor(arrayoptions.length));
}

//by having arrayoptions.length, it means that we can continually fluxuate the number of arrays passing through array options, without having to update the values in this function. 

createthingy(arrayoptions[insertarry()])

//this is where we pass the random arry chosen in the arrayoptions function, into the consructorofthe3dthingy function createthingy

const reloadThingy = () => {
    main = document.querySelector('.main');
    main.remove()
    createthingy(arrayoptions[insertarry()])
}