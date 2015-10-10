define(['jquery', 'underscore', 'backbone', 'tpl', 'categoriesModel'],

function($, _, Backbone, tpl, CategoriesModel) {

    var MainMenuView = Backbone.View.extend({
        model: new CategoriesModel({urlRoot: 'data/categories.json'}),

        render: function() {
            this.template = _.template(tpl.get('mainMenu'))({data: window.categories});
            this.$el.html(this.template);
            return this.$el;
        },

        selectMenuItem: function (menuItem) {
            $('.tab-title').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }
    });

    return MainMenuView;
});
