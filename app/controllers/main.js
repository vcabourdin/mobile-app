define([
    "underscore"
],
    function (_) {
        'use strict';
        var controller = function () {
        };

        _.extend(controller.prototype, {
            start:function () {
                console.log('controller start');
            },
            index:function () {
                console.log('action index');
            },
            toto:function () {
                console.log('action toto');
            }
        });

        return controller;
    });
