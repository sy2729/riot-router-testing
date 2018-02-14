
riot.tag2('about', '<h1>This is the About page</h1>', 'about p,[data-is="about"] p{ color: #000; }', '', function(opts) {
    this.message = function() {
      return 'there'
    }.bind(this)
});
