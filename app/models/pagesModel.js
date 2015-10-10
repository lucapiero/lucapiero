define( ['jquery', 'underscore', 'backbone'],

function($, _, Backbone) {

    var PagesModel = Backbone.Model.extend({

        initialize: function (attributes, options) {
            this.fetch({
                url: attributes.urlRoot,

                success: function(model, response, options) {
                    window.pages = response;
                },

                error: function (error) {
                    console.log(error);
                }
            });
        }
    });

    return PagesModel;
});