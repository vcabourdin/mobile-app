define([
    "i18n!nls/app",
    "backbone",
    "marionette",
    "controllers/main",
    "router",
    "handlebars"
],

    function (i18n, Backbone, Marionette, Controller, Router, Handlebars) {
        'use strict';
        //Enable handlebars support for pre compiled templates
        Backbone.Marionette.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
            return Handlebars.compile(rawTemplate);
        };

        //Create a new marionette application
        var App = new Backbone.Marionette.Application();

        //Add translations to application
        App.t = i18n;

        //Triggered before initialisation
        App.on("initialize:before", function (options) {
            options.moreData = "Yo dawg, I heard you like options so I put some options in your options!";
            console.log('app before');
        });

        //Triggered after initialisation
        App.on("initialize:after", function (options) {
            console.log('app after');
            console.log(this.t.green);
            if (Backbone.history) {
                Backbone.history.start();
            }
        });

        //Initialisation
        App.addInitializer(function () {
            var controller = new Controller();

            App.router = new Router({
                controller: controller
            });

            controller.start();
        });

        return App;
    });
