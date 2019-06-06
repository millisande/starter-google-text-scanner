var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  async mounted() {
      var result = await fetch('/detect');
      result = await result.json()
      console.log(result);
      this.message = result
    }
})
