define([
    'jquery',
    'underscore',
    'backbone',
    'tpl'
    ],

function($, _, Backbone, tpl) {

    var ContactPageView = Backbone.View.extend({

        initialize: function() {
            var that = this;

            that.template = _.template(tpl.get('contactPage'));
            // that.model.bind("change", this.render, this);
        },

        render: function() {
            var that = this;
            that.$el.html(this.template());
            return that.$el;
        }
    });

    return ContactPageView;
});
