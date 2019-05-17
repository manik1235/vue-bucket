Vue.component('bucket', {
  data: function () {
    return {
      bucket: "Bucket"
    }
  },
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
  props: ['id', 'title'],
  data: function () {
    return {
      drain: "Drain"
    }
  },
  methods: {
    draw: function () {
      var $canvasses,
        ctx;
      $(function () {
        $canvasses = $( '.drain-canvas' );
        $canvasses.each( function ( index, canvas ) {
          ctx = canvas.getContext('2d');
          if (index == 0) {
            if (canvas.getContext) {
              ctx.moveTo(0, 0);
              ctx.lineTo(200, 100);
              ctx.stroke();
            }
          } else {
            ctx.beginPath();
            ctx.moveTo(20, 20);
            ctx.bezierCurveTo(20, 110, 220, 0, 220, 220);
            ctx.stroke();
          }
        })
      })
    }
  },
  template: `
  <div class="container">
    <div class="row">
      <div class="col drain-shape">
        <h3>{{ id }}: {{ title }}</h3>
        <canvas v-bind:id="'drain-' + id" class="drain-canvas">
          <!-- I could render an html partial if the browser doesn't support canvas -->
        </canvas>
        {{ draw() }}
      </div>
    </div>
  </div>`
})

var bucketComplex = new Vue({
  el: "#bucket-complex",
  data: {
    drains: [
      { id: 1,
        title: 'I give to other'
      },
      { id: 2,
        title: 'Other takes from me'
      }
    ]
  }
})
