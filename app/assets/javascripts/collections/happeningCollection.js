var app = app || {};

// Collection

app.HappeningCollection = Backbone.Collection.extend({
  model: app.Happening,
  url: '/api/happenings'
});
