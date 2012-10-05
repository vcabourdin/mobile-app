define([
    'jquery',
    'underscore',
    'backbone',
    '../models/item'
    ], function($, _, Backbone, Item){
        var Items = Backbone.Collection.extend({
            model: Item,
            url: "",
            parse: function(data) {
                return data.results;
            },
            initialize: function () {
                this.fetch({
                    success: this.fetchSuccess,
                    error: this.fetchError
                });
            },
            fetchSuccess: function (collection, response) {
            },
            fetchError: function (collection, response) {
                throw new Error("Items fetch did get collection from API");
            }
        });
        return Items;
    });