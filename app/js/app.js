'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() { 
	app.init(); 
})();



// OK, doc ready go
$(document).ready(function() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1500) {
			$('#scrollup').fadeIn('fast');
		} else {
			$('#scrollup').fadeOut('slow');
		}
	});
});


