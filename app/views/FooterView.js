define([
    'jquery',
    'underscore',
    'backbone',
    'tpl'
],

function($, _, Backbone, tpl) {

    var FooterView = Backbone.View.extend({

        initialize: function() {
            var that = this;
            that.template = _.template(tpl.get('footer'));
        },

        render: function() {
            var that = this;
            that.$el.html(that.template);
            return that.$el;
        }
    });

    return FooterView;
});
