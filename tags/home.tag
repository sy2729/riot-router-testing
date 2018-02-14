
<home>

  <div class="nav">
    <a type="button" href="#detail-page">Detail</a>
    <a type="button" href="#intro-page">Intro</a>
    <a type="button" href="#about-page">About</a>
  </div>



    <Detail if={page === "detail-page"}>Detail</Detail>
    <Intro if={page === "intro-page"}>Intro</Intro>
    <About if={page === "about-page"}>About</About>




  <script>

    this.page = "intro-page";

    var that = this;
    var Route = route.create();

    Route('*', function(page) {
			console.log('Route *');
      that.page = page;
      that.update();
    })

    route.start(true);

  </script>

  <style>
    :scope p {
      color: #000;
    }

    .nav {
      text-align: center;
      /*width: 100%;*/
    }

    .nav a {
      background: #ddd;
      border: 1px solid #222;
      display: inline-block;
      padding: 5px 100;
    }
  </style>
</home>
