var app = app || {};

app.HappeningView = Backbone.View.extend({
  tagName: 'div',
  className: 'happening',
  template: _.template( $('#front-page-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events:{
    'click div.event': 'showOnMap'
  },
  showOnMap: function(){
    var id = this.$el.find('input')[0].value;
    $.ajax({
      method: 'get',
      url: '/api/happenings/' + id,
      success: function(data) {
        generateMarker(data);
      }
    })
  }

});
