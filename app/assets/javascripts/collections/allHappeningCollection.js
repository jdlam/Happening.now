var app = app || {};

// Collection

app.AllHappeningCollection = Backbone.Collection.extend({
  model: app.Happening,
  url: '/api/happenings/showall'
});
