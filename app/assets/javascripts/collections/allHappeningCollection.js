var app = app || {};

// Collection

app.AllHappeningCollection = Backbone.Collection.extend({
  model: app.Happening,
  url: '/api/happenings/showall',
  initialize: function(){
    this.sort_order = 'desc';
  }
});
