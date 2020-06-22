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

var array8 = ['img/posters.png', 'img/posters.png', 'img/posters.png', 'img/processual-operator-1b.gif', 'img/picnic-7.gif', 'img/posters.png', 'img/posters.png', 'img/posters.png', 'img/posters.png', 'img/posters.png', 'img/posters.png', 'img/posters.png', 'img/posters.png', 'img/posters.png', 'img/posters.png']

var array9 = ['img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pingpong.gif', 'img/pinup.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png', 'img/pinata-1.png']

var array10 = ['img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/bluechair.gif', 'img/bluechair.gif', 'img/bluechair.gif', 'img/bluechair.gif', 'img/bluechair.gif', 'img/bluechair.gif', 'img/bluechair.gif', 'img/bluechair.gif', 'img/bluechair.gif']

var array11 = ['img/plob12.gif', 'img/processual-operator-1b.gif', 'img/rainbow-triangles.gif', 'img/plob-catherder-2.gif', 'img/spong5.gif', 'img/picnic-7.gif', 'img/plob12.gif', 'img/island-clay.png', 'img/plob12.gif', 'img/patch-rainbow.gif', 'img/island.gif', 'img/island.gif', 'img/patch-rainbow.gif', 'img/tissue-shapes.gif', 'img/tissue-shapes.gif', 'img/plob12.gif', 'img/tissue-shapes.gif', 'img/tissue-shapes.gif', 'img/spong5.gif']

var array12 = ['img/rollo-0.gif', 'img/rollo-0.gif', 'img/rollo-0.gif', 'img/rollo-0.gif', 'img/rollo-1.gif', 'img/rollo-1.gif', 'img/rollo-1.gif', 'img/rollo-1.gif', 'img/rollo-2.gif', 'img/rollo-2.gif', 'img/rollo-2.gif', 'img/rollo-2.gif', 'img/rollo-3.gif', 'img/rollo-3.gif', 'img/rollo-3.gif', 'img/rollo-3.gif', 'img/rollo-4.gif', 'img/rollo-4.gif', 'img/rollo-4.gif', 'img/rollo-4.gif', 'img/rollo-5.gif', 'img/rollo-5.gif', 'img/rollo-5.gif', 'img/rollo-5.gif', 'img/rollo-6.gif', 'img/rollo-6.gif', 'img/rollo-6.gif', 'img/rollo-6.gif', 'img/rollo-7.gif', 'img/rollo-7.gif', 'img/rollo-7.gif', 'img/rollo-8.gif', 'img/rollo-8.gif', 'img/rollo-8.gif', 'img/rollo-9.gif', 'img/rollo-9.gif', 'img/rollo-9.gif', 'img/rollo-10.gif', 'img/rollo-10.gif', 'img/rollo-10.gif', 'img/rollo-11.gif', 'img/rollo-11.gif', 'img/rollo-11.gif', 'img/rollo-12.gif', 'img/rollo-12.gif', 'img/rollo-12.gif']

var array13 = ['img/purplerock.png', 'img/purplerock.png', 'img/purplerock.png', 'img/rock8.png', 'img/rock7.png', 'img/coral.gif', 'img/coral.gif', 'img/coral.gif', 'img/rock5.png', 'img/rock5.png', 'img/coral.gif', 'img/posterpatch.png', 'img/clay-rock.gif', 'img/posterpatch.png', 'img/bubblerock.png', 'img/bubblerock.png', 'img/clay-rock.gif', 'img/bubblerock.png', 'img/posterpatch.png', 'img/posterpatch.png', 'img/spongerock.png', 'img/coral.gif', 'img/spongerock.png', 'img/purplerock.png', 'img/spongerock.png', 'img/rock8.png']

var array14 = ['img/bound6-small.gif', 'img/bound6-small.gif', 'img/bound3-small.gif', 'img/bound4-small.gif', 'img/bound5-small.gif', 'img/bound10-small.gif', 'img/bound10-small.gif', 'img/bound3-small.gif', 'img/bound11-small.gif', 'img/bound4-small.gif', 'img/bound13-small.gif', 'img/bound13-small.gif', 'img/bound4-small.gif']

var array15 = ['img/bluespectrechairs.gif', 'img/bluespectrechairs.gif', 'img/bluespectrechairs.gif', 'img/plob-1.gif', 'img/bluespectrechairs.gif', 'img/bluespectrechairs.gif', 'img/chairupside.gif', 'img/chairupside.gif', 'img/pile.gif', 'img/plob-1.gif', 'img/pile.gif', 'img/bluespectrechairs.gif', 'img/chairupside.gif']

var array16 = ['img/hangingbowl.gif', 'img/hangingbowl.gif', 'img/hangingbowl.gif', 'img/hangingbowl.gif', 'img/hangingbowlblue.gif', 'img/hangingbowlblue.gif', 'img/hangingbowlblue.gif', 'img/pinata-fingers.gif', 'img/pinata2.gif', 'img/metallic-creature.gif', 'img/pinata2.gif', 'img/pinata-creature.gif', 'img/pinata-creature.gif']

var array17 = ['img/type-slide.gif', 'img/sop-finishline.gif', 'img/sop-finishline.gif', 'img/moss-patch.gif', 'img/vine.gif', 'img/plob-1.gif', 'img/vine.gif', 'img/moss-patch.gif', 'img/vine.gif', 'img/plob-1.gif', 'img/vine.gif'];

var array18 = ['img/green-patch-thingies.gif', 'img/green-patch-thingies.gif', 'img/red-pipe.gif', 'img/yellow-couch-patch.gif', 'img/island-clay.png', 'img/rainbowpatch-2.gif', 'img/rocks.gif', 'img/rocks.gif', 'img/green-patch-thingies.gif', 'img/green-patch-thingies.gif', 'img/red-pipe.gif', 'img/rainbowpatch-2.gif', 'img/rainbowpatch-2.gif', 'img/rocks.gif', 'img/island-clay.png', 'img/island-clay.png']

var array19 = ['img/wooden-bowl.gif', 'img/wooden-bowl.gif', 'img/wooden-bowl.gif', 'img/wooden-bowl.gif', 'img/wooden-bowl.gif', 'img/wooden-bowl.gif', 'img/wooden-bowl.gif', 'img/stack3.gif', 'img/stack2.gif', 'img/stack1.gif', 'img/stack3.gif', 'img/stack2.gif', 'img/stack1.gif', 'img/pingpongpair.gif', 'img/pingpongpair.gif', 'img/one-fall.gif', 'img/wooden-bowl.gif', 'img/pingpongpair.gif', 'img/stack2.gif', 'img/pingpongpair.gif', 'img/stack3.gif', 'img/stack2.gif', 'img/stack2.gif', 'img/stack1.gif', 'img/stack1.gif', 'img/stack1.gif', 'img/pingpongpair.gif', 'img/stack1.gif'];

var array20 = ['img/rockbag.gif', 'img/rockbag.gif', 'img/rockbag.gif', 'img/water-pillow.gif', 'img/water-pillow.gif', 'img/rockbag.gif', 'img/triangles.gif', 'img/purple-bowl.gif', 'img/triangles.gif', 'img/purple-bowl.gif', 'img/triangles.gif', 'img/purple-bowl.gif', 'img/rainbowpatch-2.gif', 'img/rainbowpatch-2.gif', 'img/triangles.gif', 'img/rockbag.gif'];

var array21 = ['img/metallic-sheet.gif', 'img/moss-patch.gif', 'img/metallic-sheet.gif', 'img/purplepatch.png', 'img/pink-table.gif', 'img/pink-table.gif', 'img/pink-table.gif', 'img/moss-patch.gif', 'img/multi-patch.gif', 'img/moss-patch.gif', 'img/moss-patch.gif', 'img/pink-table.gif', 'img/purplepatch.png', 'img/multi-patch.gif', 'img/multi-patch.gif', 'img/multi-patch.gif', 'img/purplepatch.png', 'img/multi-patch.gif', 'img/pink-table.gif', 'img/multi-patch.gif', 'img/multi-patch.gif', 'img/multi-patch.gif'];

var array22 = ['img/hangingthingy.png', 'img/hangingthingy.png', 'img/hangingthingy.png', 'img/hangingthingy.png', 'img/yellowchair.gif', 'img/chairpink.gif', 'img/yellowchair.gif', 'img/chairpink.gif', 'img/yellowchair.gif', 'img/agatha-cat.png', 'img/hangingthingy.png', 'img/bundle-orange.gif', 'img/agatha-cat.png', 'img/agatha-cat.png', 'img/agatha-cat.png', 'img/hangingthingy.png', 'img/hangingthingy.png', 'img/hangingthingy.png', 'img/chairpink.gif', 'img/yellowchair.gif', 'img/agatha-cat.png', 'img/hangingthingy.png', 'img/agatha-cat.png', 'img/bundle-orange.gif', 'img/agatha-cat.png', 'img/agatha-cat.png', 'img/agatha-cat.png']

var array23 = ['img/tinyblue-chairnfriends.gif', 'img/pillow-chair.gif', 'img/tinyblue-chairnfriends.gif', 'img/pillow-chair.gif', 'img/tinyblue-chairnfriends.gif', 'img/pillow-chair.gif', 'img/tinyblue-chairnfriends.gif', 'img/pillow-chair.gif', 'img/tinyblue-chairnfriends.gif', 'img/pillow-chair.gif', 'img/mesh-creature.gif', 'img/mesh-creature.gif', 'img/three-fall.gif', 'img/flyswatterocto.gif', 'img/mesh-creature.gif', 'img/three-fall.gif', 'img/three-fall.gif', 'img/flyswatterocto.gif', 'img/three-fall.gif', 'img/flyswatterocto.gif', ]

var array24 = ['img/beehat.gif', 'img/beehat.gif', 'img/flyswatter.gif', 'img/beehat.gif', 'img/brush.gif', 'img/flyswatter.gif', 'img/beehat.gif', 'img/flyswatter.gif', 'img/beehat.gif', 'img/beehat.gif', 'img/brush.gif', 'img/sharky.gif', 'img/beehat.gif', 'img/sharky.gif', 'img/beehat.gif', 'img/beehat.gif', 'img/grog-bowl.png', 'img/sharky.gif', 'img/sharky.gif', 'img/flyswatterocto.gif', 'img/grog-bowl.png', 'img/grog-bowl.png', 'img/flyswatterocto.gif', 'img/grog-bowl.png', 'img/grog-bowl.png', 'img/flyswatterocto.gif', 'img/grog-bowl.png', 'img/green-sharpener.gif', 'img/green-sharpener.gif', 'img/weird-balloon.gif', 'img/tinyoops.gif', 'img/weird-balloon.gif', 'img/tinyoops.gif', 'img/grog-bowl.png', 'img/tinyoops.gif', 'img/sharky.gif', 'img/sharky.gif', 'img/sharky.gif']

var array25 = ['img/couch.gif', 'img/couch.gif', 'img/couch.gif', 'img/couch.gif', 'img/couch.gif', 'img/couch.gif', 'img/couch.gif', 'img/couch.gif', 'img/poolchair.gif', 'img/poolchair.gif', 'img/couch.gif', 'img/couch.gif', 'img/poolchair.gif', 'img/compost.png', 'img/compost.png', 'img/compost.png', 'img/compost.png']

var array26 = ['img/orange1.png', 'img/orange2.png', 'img/orange3.png', 'img/orange6.png', 'img/orange5.png', 'img/orange1.png', 'img/orange3.png', 'img/orange6.png', 'img/orange5.png', 'img/peel1.png', 'img/peel3.png', 'img/peel14.png', 'img/peel6.png', 'img/peel16.png', 'img/peel21.png', 'img/peel3.png', 'img/peel5.png', 'img/orange3.png', 'img/orange6.png', 'img/peel1.png', 'img/peel3.png', 'img/peel14.png', 'img/orange3.png', 'img/orange5.png', 'img/peel16.png', 'img/peel21.png']


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

const arrayoptions = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12, array13, array14, array15, array17, array18, array19, array20, array21, array22, array23, array24, array25, array26]


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


//IMAGE MENU PICKER

const getRandomColors = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const imageMenu = () => {
    const container = document.createElement('div');
    container.className = "container"

    //i needed the index number to be passed to imgReplacement(i) so switched to a for loop over foreach
    for (let i = 0; i < arrayoptions.length; i++) {

        let imgPixel = document.createElement('div');
        imgPixel.className = "thingyBt";
        //imgPixel.classList.add(imgClasses[i])
        imgPixel.style.background = getRandomColors();
        imgPixel.style.left = 0;
        imgPixel.style.top = 0;
        imgPixel.addEventListener('click', function (event) {
            main = document.querySelector('.main');
            main.remove()
            createthingy(arrayoptions[i])
        })
        container.appendChild(imgPixel)
    }

    const menuArea = document.querySelector('.menu')
    menuArea.appendChild(container)
}

imageMenu()