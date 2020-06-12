
function init(){

window.setTimeout( "init()", 40000); //every 4 secs it runs

  w=document.body.offsetWidth;
  h=document.body.offsetHeight;
  rd=document.getElementsByTagName('div');

for(c=0;c<rd.length;c++) {
if(rd[c].className=='random') {
  xCoord=Math.floor(Math.random()*w);
  yCoord=Math.floor(Math.random()*h);

if(xCoord>=w-rd[c].offsetWidth-10){
  xCoord=w-rd[c].offsetWidth-10;
}
if(xCoord<=10){
  xCoord=10;
}

if(yCoord>=h-rd[c].offsetHeight-10){
  yCoord=h-rd[c].offsetHeight-10;
}
if(yCoord<=10){
  yCoord=10;
}

  rd[c].style.left=xCoord+'px';
  rd[c].style.top=yCoord+'px';
  }
 }
}
  window.addEventListener?
  window.addEventListener('load',init,false):
  window.attachEvent('onload',init);


function popup() {
	
	var random= Math.floor(Math.random() * 14) + 0;
  var propositions = [
                 "map-icons/compost.gif",
                 "map-icons/island.gif",
                 "map-icons/missingfrog.gif",
	 "png/bluebowlplant.png",
	  "map-icons/pillows2-.gif",
	  "map-icons/pingpong.gif",
	  "map-icons/plob-catherder-2.gif",
	  "map-icons/redpipecleaner.gif",
	  "map-icons/sharky.gif",
	  "map-icons/smoothoperator.gif",
	  "map-icons/sop-finishline.gif",
	  "map-icons/tinybluechair.gif",
	  "map-icons/compost-sweep.gif",
	  "map-icons/picnic-6.gif"
                 ];
	
	 document.getElementById("r2").src = propositions[random];
    document.getElementById("r3").src = propositions[random];
	 document.getElementById("r4").src = propositions[random];
	 document.getElementById("r5").src = propositions[random];
	 document.getElementById("r6").src = propositions[random];
}
		
		

  // playing sound
/*  	     function playSound(letter) {

  	     var aAudio = new Audio('sounds/cow.mp3');
	     var bAudio = new Audio('sounds/bleep.mp3');
	     var cAudio = new Audio('sounds/bubble.mp3');
	     var dAudio = new Audio('sounds/countdown.mp3');
	     var eAudio = new Audio('sounds/crowd.mp3');
	     var fAudio = new Audio('sounds/eep.mp3');
	     var gAudio = new Audio('sounds/gong.mp3');
	     var hAudio = new Audio('sounds/jump.mp3');
	     var iAudio = new Audio('sounds/shock.mp3');
	     var jAudio = new Audio('sounds/suspense.mp3');
	     var kAudio = new Audio('sounds/boing.mp3');
	     var lAudio = new Audio('sounds/splash.mp3');
	     var mAudio = new Audio('sounds/baby_birds.mp3');
	     var nAudio = new Audio('sounds/bark.mp3');
	     var oAudio = new Audio('sounds/cicada1.mp3');
	     var pAudio = new Audio('sounds/cicada2.mp3');
	     var qAudio = new Audio('sounds/halbehehe.mp3');
	     var rAudio = new Audio('sounds/parrot.mp3');
	     var sAudio = new Audio('sounds/peeps.mp3');
	     var tAudio = new Audio('sounds/unknownanimal.mp3');
	     var uAudio = new Audio('sounds/motorcyclebeeps.mp3');
	     var vAudio = new Audio('sounds/crack.mp3');
	     var wAudio = new Audio('sounds/roundnround2.mp3');
	     var xAudio = new Audio('sounds/roundnround.mp3');
	     var yAudio = new Audio('sounds/trainhorn.mp3');
	     var zAudio = new Audio('sounds/scuttle.mp3');
	     var aaAudio = new Audio('sounds/swup.mp3');
	     var bbAudio = new Audio('sounds/swone.mp3');
	     var ccudio = new Audio('sounds/stopp.mp3');
	     var ddAudio = new Audio('sounds/trolli.mp3');
	     var eeAudio = new Audio('sounds/swin.mp3');
	     var ffAudio = new Audio('sounds/swout.mp3');
	     var ggAudio = new Audio('sounds/vinylloop.mp3');
	     var hhAudio = new Audio('sounds/poss.mp3');
	     var iiAudio = new Audio('sounds/bc8.mp3');
	     var jjAudio = new Audio('sounds/crushed.mp3');
	     var kkAudio = new Audio('sounds/sting.mp3');
	     var llAudio = new Audio('sounds/catprr.mp3');
	     var mmAudio = new Audio('sounds/monkey.mp3');
	     var nnAudio = new Audio('sounds/roar.mp3');
	     var ooAudio = new Audio('sounds/sounz.mp3');
	     var ppAudio = new Audio('sounds/dundun.mp3');
	     var qqAudio = new Audio('sounds/perc.mp3');
	     var rrAudio = new Audio('sounds/shot.mp3');
	     var ssudio = new Audio('sounds/cymb.mp3');
	     var ttAudio = new Audio('sounds/choir.mp3');
	     var uuAudio = new Audio('sounds/clean.mp3');
	     var vvAudio = new Audio('sounds/cymb2.mp3');
	     var wwAudio = new Audio('sounds/stroll.mp3');

	         if(letter == 'a') {
	             aAudio.play();
	         } else if(letter == 'b') {
	             bAudio.play();
	         }
	         else if(letter == 'c') {
	             cAudio.play();
	         }
	         else if(letter == 'd') {
	             dAudio.play();
	         }
	         else if(letter == 'e') {
	             eAudio.play();
	         }
	         else if(letter == 'f') {
	             fAudio.play();
	         }
	         else if(letter == 'g') {
	             gAudio.play();
	         }
	         else if(letter == 'h') {
	             hAudio.play();
	         }
	         else if(letter == 'i') {
	             iAudio.play();
	         }
	         else if(letter == 'j') {
	             jAudio.play();
	         }
	         else if(letter == 'k') {
	             kAudio.play();
	         }
	         else if(letter == 'l') {
	             lAudio.play();
	         }
	         else if(letter == 'm') {
	             mAudio.play();
	         }
	         else if(letter == 'n') {
	             nAudio.play();
	         }
	         else if(letter == 'o') {
	             oAudio.play();
	         }
	         else if(letter == 'p') {
	             pAudio.play();
	         }
	         else if(letter == 'q') {
	             qAudio.play();
	         }
	         else if(letter == 'r') {
	             rAudio.play();
	         }
	         else if(letter == 's') {
	             sAudio.play();
	         }
	         else if(letter == 't') {
	             tAudio.play();
	         }
	         else if(letter == 'u') {
	             uAudio.play();
	         }
	         else if(letter == 'v') {
	             vAudio.play();
	         }
	         else if(letter == 'w') {
	             wAudio.play();
	         }
	         else if(letter == 'x') {
	             xAudio.play();
	         }
	         else if(letter == 'y') {
	             yAudio.play();
	         }
	         else if(letter == 'z') {
	             zAudio.play();
	         }
	         else if(letter == 'aa') {
	             aaAudio.play();
	         }
	         else if(letter == 'bb') {
	             bbAudio.play();
	         }
	         else if(letter == 'cc') {
	             ccAudio.play();
	         }
	         else if(letter == 'dd') {
	             ddAudio.play();
	        }
	        else if(letter == 'ee') {
	             eeAudio.play();
	         }
	         else if(letter == 'ff') {
	             ffAudio.play();
			}
			 else if(letter == 'gg') {
	             ggAudio.play();
	         }
	         else if(letter == 'hh') {
	             hhAudio.play();
	         }
	         else if(letter == 'ii') {
	             iiAudio.play();
	         }
	         else if(letter == 'jj') {
	             jjAudio.play();
	         }
	         else if(letter == 'kk') {
	             kkAudio.play();
	         }
	         else if(letter == 'll') {
	             llAudio.play();
	         }
	         else if(letter == 'mm') {
	             mmAudio.play();
	         }
	         else if(letter == 'nn') {
	             nnAudio.play();
	         }
	         else if(letter == 'oo') {
	             ooAudio.play();
	         }
	         else if(letter == 'pp') {
	             ppAudio.play();
	         }
	         else if(letter == 'qq') {
	             qqAudio.play();
	         }
	         else if(letter == 'rr') {
	             rrAudio.play();
	         }
	         else if(letter == 'ss') {
	             ssAudio.play();
	         }
	         else if(letter == 'tt') {
	             ttAudio.play();
	         }
	         else if(letter == 'uu') {
	             uuAudio.play();
	        }
	        else if(letter == 'vv') {
	             vvAudio.play();
	        }
	         else if(letter == 'ww') {
	             wwAudio.play();
			}

	     }*/
