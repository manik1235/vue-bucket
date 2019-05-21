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
  props: ['id', 'title', 'bezier'],
  data: function () {
    return {
      drain: "Drain"
    }
  },
  methods: {
    draw: function () {
      var $canvasses,
        $drain,
        ctx;
      $(function (event) {
        $canvasses = $( '.drain-canvas' );
        $canvasses.each( function ( index, canvas ) {
          ctx = canvas.getContext('2d');
          if (index == 0) {
            $drain = $('#drain-1');
            ctx.font = "30px Arial";
            ctx.fillText(`ID: ${$drain.prop('id')}, title: ${$drain.prop("title")}`, 10, 50);
          } else if (index == 1) {
            ctx.beginPath();
            ctx.moveTo(20, 20);
            ctx.bezierCurveTo(20, 110, 220, 0, 220, 220);
            ctx.stroke();
          } else {
            $drain = $('#drain-3');
            ctx.beginPath();
            ctx.moveTo(20, 20);
            ctx.bezierCurveTo(...($drain.attr('bezier').split(',').map(p => parseInt(p))));
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
        <canvas v-bind:id="'drain-' + id" v-bind:title="title" v-bind:bezier="bezier" class="drain-canvas">
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
      },
      { id: 3,
        title: 'Bezier curve test',
        bezier: [20, 110, 220, 0, 220, 220]
      }
    ]
  }
})
