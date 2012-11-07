define([
    'jquery',
    'underscore',
    'backbone',
    'modules/quiz/models/item',
    'text!modules/quiz/templates/item.html'
    ], function($, _, Backbone, Item, itemTemplate) {        
        var itemView = Backbone.Marionette.ItemView.extend({
            template: itemTemplate,
            model: Item,
            initialize: function(options){
                console.log(options.foo); // => "bar"
            }
        });
        
        return itemView;
    });