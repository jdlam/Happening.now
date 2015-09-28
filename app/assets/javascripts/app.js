console.log('app.js loaded');

var app = app || {};

var token = $('#api-token').val();
$.ajaxSetup({
  headers:{
    "accept": "application/json",
    "token": token
  }
});

var happenings = new app.HappeningCollection();
var happeningPainter = new app.HappeningListView({
  collection: happenings,
  el: $('#happening-list')
});
happenings.fetch();
