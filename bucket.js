Vue.component('bucket', {
  template: `
  <div class="container">
    <div class="row">
      <div class="col bucket-shape">
        Bucket
      </div>
    </div>
  </div>`
})

var bucket = new Vue({
  el: "bucket",
})
