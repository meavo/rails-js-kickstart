/*

	This utility has two main purposes:
	- improving performance by throttling the resize event
	- check if a breakpoint switch occurred

*/

;(function ($) {

	var timeout 					= false;
	var delay 						= 1000 / 3.5;
	var resizeTrigger 				= 'window:resize';
	var breakpointSwitchTrigger		= 'window:breakpoint';

	// Improve performance by throttling resize
	$(window).on('resize orientationchange', function () {
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			$(window).trigger(resizeTrigger)
		}, delay);
		var query = false;		
		document.currMedia = function () {
			var tag = window.getComputedStyle(document.body,':after').getPropertyValue('content'),
			    tag = tag.replace( /["']/g,'');

			if (tag != document.currMedia) { query = true; }
				return tag;
		} ();
		if (query) {
			$(window).trigger(breakpointSwitchTrigger);
		}
	});

})(jQuery);