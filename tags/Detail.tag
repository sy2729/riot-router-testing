
<Detail>
  <h1>This is the Detail page</h1>

  <div class="nav">
    <a type="button" href="#detail-page/detail-1">Detail-1</a>
    <a type="button" href="#detail-page/detail-2">Detail-2</a>
    <a type="button" href="#detail-page/detail-3">Detail-3</a>
  </div>

  <detail-1 if={subpage === "detail-1"}><detail-1>
  <detail-2 if={subpage === "detail-2"}></detail-2>
  <detail-3 if={subpage === "detail-3"}><detail-3>



  <script>
    var that = this;
    var subRoute = route.create();
    this.subpage = "detail-1";
    subRoute('detail-page/*', function(subpage) {
			console.log('Detail detail-page/*', subpage); // Code for BUG SEARCH
      that.subpage = subpage;
      that.update();
    })

		// Code for BUG SEARCH
		this.on('mount', function() {
			console.log('Detail.tag mounted');
		})
		this.on('update', function(){
		  console.log('Detail.tag', this.subpage);
		})


    // this.on('mount', function() {
    //   route.exec();
    // })
    //
    // this.on('unmout', function() {
    //   subRoute.stop();
    // })


  </script>

  <style>
    :scope p {
      color: #000;
    }
  </style>
</Detail>
