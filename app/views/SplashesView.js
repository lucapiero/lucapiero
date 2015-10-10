define(['jquery', 'underscore', 'backbone', 'tpl' ],

function($, _, Backbone, tpl) {

    var SplashesView = Backbone.View.extend({

        initialize: function() {
            this.template = _.template(tpl.get('splashes'));
        },

        render: function() {
            this.$el.html(this.template);
            return this.$el;
        }
    });

    return SplashesView;
});
