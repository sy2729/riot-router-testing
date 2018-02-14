
riot.tag2('detail-test', '<h1>THis is the detail-test</h1>', 'detail-test p,[data-is="detail-test"] p{ color: #000; }', '', function(opts) {
    this.message = function() {
      return 'there'
    }.bind(this)
});
