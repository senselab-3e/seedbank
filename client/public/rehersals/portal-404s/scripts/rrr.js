var
	container = $('.c-rolodex__container'),
	slide = container.children(),
	current = 0,
	isAnimate = false,
	positions = {},
	scrollDelta;
$(document).ready(function(){
	build();
	slide.on({
		click: function() {
			current = $(this).index();

			for (var i = 0; i < +this.dataset.index; i++) {
				cycle(1);
			}
		},
		mouseenter: function () {
			TweenMax.to( $(this), 0.3, {opacity: 1});
		},
		mouseleave: function () {
			TweenMax.to( $(this), 0.3, {opacity: this.dataset.alpha});
		}
	});
	$(window).on({
		"DOMMouseScroll wheel scroll": function (e) {
			scrollDelta = ( e.originalEvent.deltaY > 0) ? 1 : -1;
			handleScroll(scrollDelta);
		}
	});
	setTimeout(function(){
		cycle(1);
	},1000);

	setInterval(function(){
		cycle(1);
	},4000);
})



function handleScroll(delta) {
	if( !isAnimate ) {
		isAnimate = true;
		current -= delta;
		if(current < 0) {
			current = slide.length - 1;
		}
		if(current > slide.length - 1) {
			current = 0;
		}
		cycle(delta);
		return false;
	}
}
function cycle(delta) {
	slide.each(function(index, el) {
		var shift = +el.dataset.index+delta;
		if(shift > slide.length-1) {
			shift = 0;
		}
		if(shift < 0) {
			shift = slide.length-1;
		}
		TweenMax.to( $(this), 1, positions[shift]);

		el.dataset.index = shift;
		el.dataset.alpha = positions[shift].css.opacity;
	});
}
function build() {
	var radius = slide.width() * 0.8;
	var centerX = container.width() / 2 - slide.width() * 1.5;
	var centerY = container.height() / 2 - slide.height() * 1.2;
	var slice = 2 * Math.PI / slide.length;
	container.css({
		top: '50%',
		left: '50%',
		transform: 'translate3d(0,-50%,0)'
	});
	slide.each(function(index, el) {
		var angle = slice * index;
		// radius*cos(angle) + centerX;
		var x = -Math.round(radius * Math.cos(angle));
		// radius*sin(angle) + centerY;
		var y = Math.round( radius * Math.sin(-angle));
		var z = index * radius;
		var alpha = (1 - angle * 0.15).toFixed(2);


		positions[index] = {
			x:x, y:y, z:-z, opacity:alpha,
			ease: Expo.easeOut,
			onComplete: function () {
				isAnimate = false;
			}
		};

		el.dataset.index = index;
		el.dataset.alpha = alpha;

		TweenLite.set( el, positions[index]);
	});

}
