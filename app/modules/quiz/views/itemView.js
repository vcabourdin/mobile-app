var MyView = Backbone.View.extend({
    template: "#my-view-template",

    render: function(){

        // compile the Underscore.js template
        var template = $("#my-view-template");
        var compiledTemplate = _.template(template);

        // render the template with the model data
        var data = this.model.toJSON();
        var html = compiledTemplate(data);

        // populate the view with the rendered html
        this.$el.html(html);
    }
});