// Set the require.js configuration for your application.
require.config({

    

    locale:'en-us',

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
        text:"../assets/js/plugins/require/text",
        domready:"../assets/js/plugins/require/domReady",

        //App folders
        controllers:"controllers",
        templates:"templates",
        modules:"modules",

        //App files
        options:"options",
        app:"app"
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
        },

        handlebars:{
            exports:"Handlebars"
        }
    },

    // hbs config
    hbs:{
        disableI18n: true,
        templateExtension:"html"
    }
});

require([
    "main"
    ],
    function (main) {
        
    });