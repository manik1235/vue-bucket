Vue.component('bucket', {
  prop: ['bucket'],
  template: `
  <div class="container">
    <div class="row">
      <div class="col bucket-shape">
        {{ bucket }}
      </div>
    </div>
  </div>`
})

Vue.component('drain', {
  template: `
  <div class="container">
    <div class="row">
      <div class="col drain-shape">
        {{ drain }}
      </div>
    </div>
  </div>`
})

var bucketComplex = new Vue({
  el: "#bucket-complex",
  data: {
    bucket: "Bucket it",
    drain: "Drain it"
  }
})
