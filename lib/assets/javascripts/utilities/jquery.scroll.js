/*

	This utility has one purpose:
	- improving performance by throttling the scroll event

*/

;(function ($) {

	var _width 			= $(window).width();
	var _height 		= $(window).height();
	var _latestTop 		= 0;
	var _latestBottom	= _height;
	var _animRunning 	= false;
	var _prevTop 		= 0;

	function update (event) {
		var $this 	= $(event.currentTarget);
		_width 		= $this.width();
		_height 	= $this.height();
	};

	// From: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
	// Store last known scroll position because we need to determine scrolldirection on paint
	function throttle () {
		_latestTop 		= (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		_latestBottom 	= _latestTop + _height;
		
		//Prevent multiple events firing
		if(_animRunning) return;
		
		_animRunning = true;
		window.requestAnimationFrame(function () {

			$(window).trigger({
				type: 				"window:scroll",
				latestKnownScroll: 	{ top: _latestTop, bottom: _latestBottom },
				direction: 			_latestTop < _prevTop? "up" : "down"
			});
			_prevTop 		= _latestTop;
			_animRunning 	= false;
			
		});
	};

	$(window)
		.on('resize orientationchange', update)
		.on('scroll', throttle);

})(jQuery);