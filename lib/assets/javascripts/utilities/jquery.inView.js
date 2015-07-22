/*

	Utility class - inView

	Required:
		Plugin function | inViewHandler 	= function () {}
	Optional:
		Plugin option 	| inViewOffset 		= Integer, default -200

	This utility keeps track of the scroll position in relation to the plugin element.
	Once the element is inside the viewport (or almost, using a optional offset) a handler
	function is called.




	FIXME
		outview event for GC



*/

// Make sure we have a pluginUtilities object
var pluginUtilities = pluginUtilities || {};

;(function ($) {

	// Name for our utility
	var utilityName = 'inView';

	// Make sure there isn't a utility present with the same name
	if (pluginUtilities[utilityName]) {
		console.error('Plugin utility "' + utilityName + '" already defined.');
		return false;
	}

	pluginUtilities[utilityName] = {

		// Add event listeners for this utility
		_inViewAddEventListeners: function () {

			$(window)
				.on('load', $.proxy(this, '_inViewInit'))
				.on('window:scroll', $.proxy(this, '_inViewScrollHandler'));

		},

		// Remove event listeners for this utility
		_inViewRemoveEventListeners: function () {

			$(window).off('window:scroll', $.proxy(this, '_inViewScrollHandler'));

		},

		// Initialize fixFrom position
		_inViewInit: function () {

			// Set defaults
			this.options.inViewOffset 	= typeof this.options.inViewOffset == 'undefined' ? -200 : this.options.inViewOffset;
			this.options.inViewFireOnce = typeof this.options.inViewFireOnce == 'undefined' ? true : this.options.inViewFireOnce;

			this._offsetTop 			= this.$element.offset().top;
			this._windowHeight 			= $(window).height();
			$(window).scroll();

		},

		// Handler function checks if current element 
		// @Argument 			Event
		_inViewScrollHandler: function (event) {

			var inView = event.latestKnownScroll.top + $(window).height() > this._offsetTop + this.options.inViewOffset;
			if (inView) {
				this.inViewHandler(event.latestKnownScroll);
			}

		},

		//
		inViewHandler: function (position) {

			console.warn('inViewHandler() undefined in plugin ' + this._name);

		}

	}

} (jQuery));