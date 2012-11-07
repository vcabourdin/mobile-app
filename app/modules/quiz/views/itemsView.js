define([
    'jquery',
    'underscore',
    'backbone',
    'modules/quiz/views/itemView',
    'modules/quiz/collections/items'
    ], function($, _, Backbone, ItemView, Items) {
        var collectionView = Backbone.Marionette.CollectionView.extend({
            collection: Items,
            itemView: ItemView,

            itemViewOptions: {
                foo: "bar"
            } 
        });
        return collectionView;
    });