require([
    "backbone",
    "marionette",
    "app",
    "options",
    "controllers/main",
    "router",
    "handlebars",
    "modules/utils",
    "domready!"
],
    function (Backbone, Marionette, App, Options, Controller, Router, Handlebars, Utils,  Domready) {
        'use strict';
        console.log('main app start');

        //Enable handlebars support for pre compiled templates
        Backbone.Marionette.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
            return Handlebars.compile(rawTemplate);
        };

        //Triggered before initialisation
        App.on("initialize:before", function (options) {
            console.log('app before');
        });

        //Initialisation
        App.addInitializer(function () {
            console.log('app init');
        });

        //Triggered after initialisation
        App.on("initialize:after", function (options) {
            console.log('app after');

            //Main controller initialisation
            Controller.initialize();

            //Router initialisation
            App.router = new Router({
                controller:Controller
            });

            //Backbone history initialisation
            if (Backbone.history) {
                Backbone.history.start();
            }

            //Bind link navigation
            Utils.bindNavigate();
        });

        //Start the application
        App.start(Options);
    });
