require([
    'foundation.core',
    'foundation.equalizer',
    'foundation.tooltip',
    'router'
    ],

    function() {
        'use strict';

        // Appropriate 'touch' / 'no-touch' classes in the body tag
        $('body').addClass(( $('html').hasClass('touch') === true ) ? 'touch' : 'no-touch');

        // Initialize Foundation JS
        $(document).foundation();
    }
);
