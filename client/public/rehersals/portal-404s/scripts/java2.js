// JavaScript Document
$(document).ready(function(){
		var s = skrollr.init({
			forceHeight: false,
			smoothScrolling: true,
			smoothScrollingDuration: 150
		});

		skrollr.menu.init(s, {
			easing: 'outCubic',
            animate: true,
			duration: 1000
});
});