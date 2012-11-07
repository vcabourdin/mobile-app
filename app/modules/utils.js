define([
    "jquery",
    "backbone"
],
    function ($, Backbone) {
        'use strict';

        var utils = {
            bindNavigate: function () {
                $(document).on("click", "a:not([data-bypass])", function(evt) {
                    var href = {
                        prop: $(this).prop("href"),
                        attr: $(this).attr("href")
                    };
                    var root = location.protocol + "//" + location.host + app.root;
                    if (href.prop && href.prop.slice(0, root.length) === root) {
                        evt.preventDefault();
                        Backbone.history.navigate(href.attr, true);
                    }
                });
            }
        }

        return utils;
    });
