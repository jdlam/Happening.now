var app = app || {};

app.HappeningView = Backbone.View.extend({
  tagName: 'div',
  className: 'happening',
  template: _.template( $('#happening-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events:{
    'click button.remove': 'removeHappening'
  },
  removeHappening: function(){
    this.model.destroy();
    this.$el.remove();
  }

});
