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
  },
  comparator: function(activity) {
    var date = new Date(activity.get('created_at'));
    return this.sort_order == 'desc' ? -date.getTime() : date.getTime()
  },
  reverse: function() {
    this.sort_order = this.sort_order = 'desc' ? 'asc' : 'desc';
    this.sort();
  }

});
