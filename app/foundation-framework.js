require([
    'foundation.core',
    'foundation.tooltip',
    'router'
    ],

    function() {
        'use strict';

        // Appropriate 'touch' / 'no-touch' classes in the body tag
        $('body').addClass(( $('html').hasClass('touch') === true ) ? 'touch' : 'no-touch');
    }
);
