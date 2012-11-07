define([
    "backbone",
    "marionette",
    "i18n!nls/app"
],
    function (Backbone, Marionette, i18n) {
        'use strict';

        //Create a new marionette application
        var App = new Backbone.Marionette.Application();

        //Add translations to application
        App.t = i18n;

        return App;
    });
