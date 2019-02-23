app = {
  model: {
    defaultDate: 'January 1, 2019'
  },
  view: {
    clock: document.getElementById('clock')
  },
  controller: {
    renderTime: function() {
      setInterval(function() {
        let time = new Date();
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        app.view.clock.innerText = `${hour}:${minutes}:${seconds}`;
      }, 1000)
    },
    addZero: function(number) {

    }
  },
  init: function() {
    this.controller.renderTime();
  }
}

app.init();