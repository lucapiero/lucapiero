requirejs.config({
    baseUrl: './',

    paths: {
        // jQuery
        'jquery': ['//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min', 'libs/jquery/dist/jquery.min'],
        'jCookie': ['//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min', 'libs/jquery.cookie.min'],

        // Underscore
        'underscore': ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min', 'libs/underscore-amd/underscore-min'],

        // Backbone
        'backbone': ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min', 'libs/backbone-amd/backbone-min'],

        // Modernizr
        'modernizr': ['//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min', 'libs/modernizr/modernizr'],

        // FastClick
        'fastclick': ['//cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.3/fastclick.min', 'libs/fastclick/lib/fastclick'],

        // Placeholder
        'placeholder': ['//cdnjs.cloudflare.com/ajax/libs/jquery-placeholder/2.0.9/jquery.placeholder.min', 'libs/jquery-placeholder/jquery.placeholder'],

        // Zurb Foundation
        'foundation.core': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.min', 'libs/foundation/js/foundation/foundation'],
        'foundation.abide': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.abide.min', 'libs/foundation/js/foundation/foundation.abide'],
        'foundation.accordion': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.accordion.min', 'libs/foundation/js/foundation/foundation.accordion'],
        'foundation.alert': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.alert.min', 'libs/foundation/js/foundation/foundation.alert'],
        'foundation.clearing': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.clearing.min', 'libs/foundation/js/foundation/foundation.clearing'],
        'foundation.dropdown': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.dropdown.min', 'libs/foundation/js/foundation/foundation.dropdown'],
        'foundation.equalizer': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.equalizer.min', 'libs/foundation/js/foundation/foundation.equalizer'],
        'foundation.interchange': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.interchange.min', 'libs/foundation/js/foundation/foundation.interchange'],
        'foundation.joyride': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.joyride.min', 'libs/foundation/js/foundation/foundation.joyride'],
        'foundation.magellan': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.magellan.min', 'libs/foundation/js/foundation/foundation.magellan'],
        'foundation.offcanvas': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.offcanvas.min', 'libs/foundation/js/foundation/foundation.offcanvas'],
        'foundation.orbit': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.orbit.min', 'libs/foundation/js/foundation/foundation.orbit'],
        'foundation.reveal': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.reveal.min', 'libs/foundation/js/foundation/foundation.reveal'],
        'foundation.tab': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.tab.min', 'libs/foundation/js/foundation/foundation.tab'],
        'foundation.tooltip': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.tooltip.min', 'libs/foundation/js/foundation/foundation.tooltip'],
        'foundation.topbar': ['//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation/foundation.topbar.min', 'libs/foundation/js/foundation/foundation.topbar'],

        // Router/ Controller
        'router': 'router',

        // Template loader
        'tpl': 'utils/tpl',
        'browser': 'utils/browser-detect',

        // Models
        'productsModel': 'models/productsModel',
        'pagesModel': 'models/pagesModel',

        // Views
        'HeaderView': 'views/HeaderView',
        'SplashesView': 'views/SplashesView',
        'MainMenuView': 'views/MainMenuView',
        'FooterView': 'views/FooterView',
        'HomePageView': 'views/HomePageView',
        'PizzaPageView': 'views/PizzaPageView',
        'PizzaGrandePageView': 'views/PizzaGrandePageView',
        'PizzaOnePlusOnePageView': 'views/PizzaOnePlusOnePageView',
        'PastePageView': 'views/PastePageView',
        'SalatePageView': 'views/SalatePageView',
        'SosuriPageView': 'views/SosuriPageView',
        'ContactPageView': 'views/ContactPageView'
    },

    shim: {
        'jquery': { exports: '$' },
        'underscore': { exports: '_', deps: ['jquery'] },
        'backbone': { deps: ['underscore'], exports: 'Backbone' },

        'fastclick': { deps: ['jquery'], exports: 'FastClick'},
        'modernizr': { deps: ['jquery'], exports: 'Modernizr'},
        'placeholder': { deps: ['jquery'], exports: 'Placeholders'},
        'jCookie': { deps: ['jquery'] },

        'foundation.core': { deps: ['jquery', 'modernizr', 'tpl'], exports: 'Foundation' },
        'foundation.abide': { deps: ['foundation.core'] },
        'foundation.accordion': { deps: ['foundation.core'] },
        'foundation.alert': { deps: ['foundation.core'] },
        'foundation.clearing': { deps: ['foundation.core'] },
        'foundation.dropdown': { deps: ['foundation.core'] },
        'foundation.equalizer': { deps: ['foundation.core'] },
        'foundation.interchange': { deps: ['foundation.core'] },
        'foundation.joyride': { deps: ['foundation.core', 'jCookie'] },
        'foundation.magellan': { deps: ['foundation.core'] },
        'foundation.offcanvas': { deps: ['foundation.core'] },
        'foundation.orbit': { deps: ['foundation.core'] },
        'foundation.reveal': { deps: ['foundation.core'] },
        'foundation.tab': { deps: ['foundation.core'] },
        'foundation.tooltip': { deps: ['foundation.core'] },
        'foundation.topbar': { deps: ['foundation.core'] },

        'productsModel': { deps: ['backbone'] },
        'pagesModel': { deps: ['backbone'] },

        'HeaderView': { deps: ['backbone'] },
        'SplashesView': { deps: ['backbone'] },
        'MainMenuView': { deps: ['backbone'] },
        'FooterView': { deps: ['backbone'] },
        'HomePageView': { deps: ['backbone'] },
        'PizzaPageView': { deps: ['backbone'] },
        'PizzaGrandePageView': { deps: ['backbone'] },
        'PizzaOnePlusOnePageView': { deps: ['backbone'] },
        'PastePageView': { deps: ['backbone'] },
        'SalatePageView': { deps: ['backbone'] },
        'SosuriPageView': { deps: ['backbone'] },
        'ContactPageView': { deps: ['backbone'] }
    },

    //urlArgs : new Date().getTime(),
    urlArgs : '-v1.0.1',

    // Require this file as main dependency
    deps: ['router']
});
