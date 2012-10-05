function readCookie(name) {
    'use strict';

    var nameEQ,
        ca,
        i,
        c;

    nameEQ = name + "=";
    ca = document.cookie.split(';');

    for (i = 0; i < ca.length; i = i + 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}


// Set the require.js configuration for your application.
require.config({

    // Initialize the application with the main application file.
    deps:["main"],

    locale:readCookie('locale') || 'en-us',

    paths:{
        // JavaScript folders.
        libs:"../assets/js/libs",
        plugins:"../assets/js/plugins",
        vendor:"../assets/vendor",

        // Libraries.
        jquery:"../assets/js/libs/jquery",
        underscore:"../assets/js/libs/lodash",
        backbone:"../assets/js/libs/backbone",
        handlebars:"../assets/js/libs/handlebars-1.0.rc.1",


        //Plugins
        marionette:"../assets/js/plugins/backbone/backbone.marionette",
        hbs:"../assets/js/plugins/require/hbs",
        i18n:"../assets/js/plugins/require/i18n",

        //App files
        options:"options",
        controller:"mainController"
    },

    shim:{
        // Backbone library depends on underscore and jQuery.
        backbone:{
            deps:["underscore", "jquery"],
            exports:"Backbone"
        },

        marionette:{
            deps:["backbone"],
            exports:"Backbone.Marionette"
        }
    },

    // hbs config
    hbs:{
        templateExtension:"html"
    }
});
