define([
    "backbone",
    "marionette",
    "controllers/main"
],

    function (Backbone, Marionette, Controller) {
        'use strict';
        var Router = Backbone.Marionette.AppRouter.extend({
            controller:Controller,
            appRoutes:{
                "":"index",
                "toto":"toto"
            }
        });

        return Router;
    });
