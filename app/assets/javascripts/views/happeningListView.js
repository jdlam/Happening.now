var app = app || {};

app.HappeningListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var happenings = this.collection.models;
    var view;
    for (var i = 0; i < happenings.length; i++) {
      view = new app.HappeningView({model: happenings[i]});
      view.render();
      this.$el.append( view.$el );
    }
  }
});
