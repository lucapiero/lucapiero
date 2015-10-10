define(['jquery', 'underscore', 'backbone', 'tpl', 'pagesModel'],

function($, _, Backbone, tpl, PagesModel) {

    var MainMenuView = Backbone.View.extend({
        model: new PagesModel({urlRoot: 'data/pages.json'}),

        render: function() {
            this.template = _.template(tpl.get('mainMenu'))({data: window.pages});
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
