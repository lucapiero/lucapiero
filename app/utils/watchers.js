require(['jquery'],
    function($) { 'use strict';

        var	ww = $(window).width();

        // When window resolution changes, we adjust the sidebar and chat containers height
        (function () {
            setInterval(function () {
                if ($(window).width() !== 1 ) {
                    $(window).trigger('windowResolutionChanged');
                }

            }, 1000);
        }());

        $(window).bind('windowResolutionChanged', function() {
            if ( ww < 642 ) {
            } else {
            }
        });

    }
);
