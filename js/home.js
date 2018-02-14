
riot.tag2('home', '<div class="nav"> <a type="button" href="#detail-page">Detail</a> <a type="button" href="#intro-page">Intro</a> <a type="button" href="#about-page">About</a> </div> <detail if="{page === ⁗detail-page⁗}">Detail</Detail> <intro if="{page === ⁗intro-page⁗}">Intro</Intro> <about if="{page === ⁗about-page⁗}">About</About>', 'home p,[data-is="home"] p{ color: #000; } home .nav,[data-is="home"] .nav{ text-align: center; } home .nav a,[data-is="home"] .nav a{ background: #ddd; border: 1px solid #222; display: inline-block; padding: 5px 100; }', '', function(opts) {

    this.page = "intro-page";

    var that = this;
    var Route = route.create();

    Route('*', function(page) {
      that.page = page;
      that.update();
    })

    route.start(true);

});
