
riot.tag2('detail', '<h1>This is the Detail page</h1> <div class="nav"> <a type="button" href="#detail-page/detail-1">Detail-1</a> <a type="button" href="#detail-page/detail-2">Detail-2</a> <a type="button" href="#detail-page/detail-3">Detail-3</a> </div> <detail-1 if="{subpage === ⁗detail-1⁗}"><detail-1> <detail-2 if="{subpage === ⁗detail-2⁗}"></detail-2> <detail-3 if="{subpage === ⁗detail-3⁗}"><detail-3>', 'detail p,[data-is="detail"] p{ color: #000; }', '', function(opts) {
    var that = this;
    var subRoute = route.create();
    this.subpage = "detail-1";
    subRoute('detail-page/*', function(subpage) {
      that.subpage = subpage;
      that.update();
    })

});
