
riot.tag2('detail-1', '<h1>THis is the detail-1 Page</h1>', 'detail-1 p,[data-is="detail-1"] p{ color: #000; }', '', function(opts) {
    this.message = function() {
      return 'there'
    }.bind(this)
});
