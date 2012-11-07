define([
    "app",
    "modules/quiz/collections/items",
    "modules/quiz/views/itemsView",
    "text!modules/quiz/templates/layouts/main.html",
    ],
    function(App, Items, itemsView, mainTemplate) {
        console.log('module quiz debut');
        
        return {
            initialize:function () {
                
                var mainLayout = Backbone.Marionette.Layout.extend({
                    template: mainTemplate,

                    regions: {
                        quizHeader: "#quiz-header",
                        quizContent: "#quiz-content",
                        quizFooter: "#quiz-footer"
                    }
                });

                var layout = new mainLayout();
                
                layout.quizContent.show(new itemsView());
                App.mainRegion.currentView.appContent.show(layout);
            }
        };         
    });