'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation({
				tooltips: {
					touch_close_text: 'apasa pentru a inchide',
					disable_for_touch: false
				}
			});
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() { 
	app.init(); 
})();
