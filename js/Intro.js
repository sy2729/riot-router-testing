
riot.tag2('intro', '<h1>This is the Intro page</h1>', 'intro p,[data-is="intro"] p{ color: #000; }', '', function(opts) {
    this.message = function() {
      return 'there'
    }.bind(this)
});
