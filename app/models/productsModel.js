define( ['jquery', 'underscore', 'backbone'],

function($, _, Backbone) {

    var HomeModel = Backbone.Model.extend({

        initialize: function (attributes, options) {
            this.fetch({
                url: attributes.urlRoot,

                success: function(model, response, options) {
                    window.products = response;
                },

                error: function (error) {
                    console.log(error);
                }
            });
        }
    });

    return HomeModel;
});