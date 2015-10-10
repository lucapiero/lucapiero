define(['jquery', 'underscore', 'backbone', 'tpl' ],

function($, _, Backbone, tpl) {

    var HeaderView = Backbone.View.extend({

        initialize: function() {
            this.template = _.template(tpl.get('header'));
        },

        render: function() {
            this.$el.html(this.template);
            return this.$el;
        }
    });

    return HeaderView;
});
