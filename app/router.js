define([
    'jquery',
    'underscore',
    'backbone',

    'tpl',

    'HeaderView',
    'SplashesView',
    'MainMenuView',
    'FooterView',
    'HomePageView',
    'PizzaPageView', 
    'PizzaGrandePageView', 
    'PizzaOnePlusOnePageView',
    'PastePageView', 
    'SalatePageView', 
    'SosuriPageView', 
    'ContactPageView',

    'foundation.core',
    'foundation.tooltip',
    'foundation.tab',
    'foundation.interchange'
    ],

function($, _, Backbone, tpl, HeaderView, SplashesView, MainMenuView, FooterView,
    HomePageView, PizzaPageView, PizzaGrandePageView, PizzaOnePlusOnePageView,
    PastePageView, SalatePageView, SosuriPageView, ContactPageView, foundation, tooltip, tab, interchange) {
    
    "use strict";

    // Top-level variable references in our Underscore.js templates
    _.templateSettings.variable = "sc";

    // Backbone close method for unbinding the ghost views
    Backbone.View.prototype.close = function() {
        if (this.beforeClose) {
            this.beforeClose();
        }

        this.remove().unbind();
    };

    // Application Router/ Controller
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'homePage',
            'pizza': 'pizzaPage',
            'pizza-grande': 'pizzaGrandePage',
            'pizza-unu-plus-unu': 'pizzaOnePlusOnePage',
            'paste': 'pastePage',
            'salate': 'salatePage',
            'sosuri': 'sosuriPage',
            'contact': 'contactPage',
            '*notFound': 'notFound'
        },

        initialize: function () {
            this.headerView = new HeaderView();
            $('#header').html(this.headerView.render());

            this.splashesView = new SplashesView();
            $('#splashes').html(this.splashesView.render());

            this.mainMenuView = new MainMenuView();
            $('#nav-region').html(this.mainMenuView.render());

            this.footerView = new FooterView();
            $('#footer').html(this.footerView.render());
        },

        homePage: function() {
            this.showView('#ui-view', new HomePageView());
        },

        pizzaPage: function() {
            this.showView('#ui-view', new PizzaPageView());
        },

        pizzaGrandePage: function() {
            this.showView('#ui-view', new PizzaGrandePageView());
        },

        pizzaOnePlusOnePage: function() {
            this.showView('#ui-view', new PizzaOnePlusOnePageView());
        },

        pastePage: function() {
            this.showView('#ui-view', new PastePageView());
        },

        salatePage: function() {
            this.showView('#ui-view', new SalatePageView());
        },

        sosuriPage: function() {
            this.showView('#ui-view', new SosuriPageView());
        },

        contactPage: function() {
            this.showView('#ui-view', new ContactPageView());
        },

        notFound : function () {
            this.navigate('', { trigger: false })
        },

        showView: function(selector, view) {
            if (this.currentView) this.currentView.close();
            $(selector).html(view.render());
            this.mainMenuView.selectMenuItem(Backbone.history.getFragment());
            this.currentView = view;
            return view;
        }
    });

    tpl.loadTemplates(['header', 'splashes', 'mainMenu', 'footer', 'homePage', 'pizzaPage', 'pizzaGrandePage', 'pizzaOnePlusOnePage', 'pastePage', 'salatePage', 'sosuriPage', 'contactPage'],
        function() {
            var Lucapiero = new AppRouter();
            Backbone.history.start();
        }
    );
});
