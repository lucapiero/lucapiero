define(['jquery', 'underscore', 'backbone', 'tpl'],

    function($, _, Backbone, tpl) {

    var HomePageView = Backbone.View.extend({

        initialize: function() {
            this.template = _.template(tpl.get('homePage'));
        },

        render: function() {
            this.$el.html(this.template());
            return this.el;
        }
    });

    return HomePageView;
});
