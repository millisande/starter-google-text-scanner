var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  computed: {
    detectText: async function() {
      var result = await fetch('/detect');
      console.log(result);
      this.message = result
    }
  }
})
