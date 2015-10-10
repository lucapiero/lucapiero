define( ['jquery', 'underscore', 'backbone'],

function($, _, Backbone) {

    var CategoriesModel = Backbone.Model.extend({

        initialize: function (attributes, options) {
            this.fetch({
                url: attributes.urlRoot,

                success: function(model, response, options) {
                    window.categories = response;
                },

                error: function (error) {
                    console.log(error);
                }
            });
        }
    });

    return CategoriesModel;
});