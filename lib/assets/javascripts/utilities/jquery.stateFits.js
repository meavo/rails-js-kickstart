/*

	Utility class - stateFits

	Required:
		Plugin option 	| stateFitsClasses = ['large','small']
		Plugin function | stateFitsReturn = function () { return true/false }

	Once called, this utility checks and applies the state of an element which fits.
	In order to do so, we need to fill the stateClass plugin option. The strings in this 
	array (each representing a state) are ordered from Large > Small.

	In each plugin we still need to call the stateFits_checkCurrent method onResize.
	Why? Because we (could) have a utility class for resize (use requestAnimationFrame + polyfill)
	The plugin is responsible for the utility class communication in between.

*/

// Make sure we have a pluginUtilities object
var pluginUtilities = pluginUtilities || {};

// Anonymous function wrapper to ensure the use of the $ shorthand won't cause any conflicts
(function ($) {

	// Name for our utility
	var utilityName = 'stateFits';

	// Make sure there isn't a utility present with the same name
	if (pluginUtilities[utilityName]) {
		console.error('Plugin utility "' + utilityName + '" already defined.');
		return false;
	}

	pluginUtilities[utilityName] = {

		// Check if required options / methods are defined within the plugin
		_stateFitsIsValid: function () {

			var valid = true;

			if (typeof this.options.stateFitsClasses == "undefined" || !this.options.stateFitsClasses.length) {
				console.warn('stateFitsClasses[] undefined or empty in plugin ' + this._name);
				valid = false;
			}

			return valid;

		},

		// Reset element by removing all state classes
		_stateFitsReset: function () {

			this.$element.removeClass(this.options.stateFitsClasses.join(' '));

		},

		// Remove all state classes, try for each class if it "fits". 
		// If a state fits, no other states will be applied.
		_stateFitsCheckCurrent: function () {

			if (!this._stateFitsIsValid()) return false;

			for (var i = 0, total = this.options.stateFitsClasses.length; i < total; i++) {
				
				var currentState = this.options.stateFitsClasses[i];

				this._stateFitsReset();
				this.$element.addClass(currentState);

				if ($.proxy(this, 'stateFitsReturn', currentState)()) {
					return false;
				}
			}

		},

		// Check if current state fits: should be implemented within the Plugin
		stateFitsReturn: function (state) {

			console.warn('stateFitsReturn() undefined in plugin ' + this._name);
			return true;

		}

	}

} (jQuery));