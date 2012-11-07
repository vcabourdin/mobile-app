define([
    "underscore",
    "modules/quiz/quiz",
    "app"
    ],
    function (_,quizModule, App) {
        'use strict';

        var controller = {
            initialize:function () {
                console.log('indexController',App);

                quizModule.initialize();
            }
        };

        return controller;
    });
