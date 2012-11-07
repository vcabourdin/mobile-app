define([
    "underscore",
    "controllers/index",
    "text!templates/layouts/main.html",
    "options",
    "app"
],
    function (_, indexController, mainTemplate, options, App) {
        'use strict';

        var controller = {
            initialize:function () {
                App.addRegions({
                    mainRegion: "#" + options.mainLayoutId
                });

                var mainLayout = Backbone.Marionette.Layout.extend({
                    template: mainTemplate,

                    regions: {
                        appHeader: "#app-header",
                        appContent: "#app-content",
                        appFooter: "#app-footer"
                    }
                });
                
                var layout = new mainLayout();
                
                App.mainRegion.show(layout);
//                App.mainRegion.layout = layout;
                console.log('mainController',App);
            },
            index:function () {
                indexController.initialize();
            },
            toto:function () {
                console.log('action toto');
            }
        };

        return controller;
    });
