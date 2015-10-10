define(['jquery', 'underscore', 'backbone', 'tpl', 'productsModel'],

function($, _, Backbone, tpl, ProductsModel) {

    var PizzaGrandePageView = Backbone.View.extend({
        model: new ProductsModel({urlRoot: 'data/products.json'}),

        render: function() {
            this.template = _.template(tpl.get('pizzaGrandePage'))({data: window.products});
            this.$el.html(this.template);
            return this.$el;
        }
    });

    return PizzaGrandePageView;
});
