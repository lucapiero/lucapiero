define(['jquery', 'underscore'],

    function($, _) {

        var tpl = {
            templates: {},

            loadTemplates: function(names, callback) {

                var that = this;
                var loadTemplate = function(index) {
                    var name = names[index];
                    $.get('templates/' + name + '.tpl.html', function(data) {
                        index++;
                        that.templates[name] = data;
                        (index < names.length) ? loadTemplate(index) : callback();
                    });
                };

                loadTemplate(0);
            },

            get: function(name) {
                return this.templates[name];
            }
        };

        return tpl;
    });
