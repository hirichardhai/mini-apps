app = {
    model: {
        date: 'January 1, 2019'
    },
    view: {
        clockDiv: document.getElementById('clock'),
        countdownToDiv: document.getElementById('countdownTo'),
        countdownTimer: document.getElementById('countdownTimer')
    },
    controller: {
        newDate: function(value) {
            console.log(value)
            console.log(typeof(value));
            app.model.date = value;
            this.renderCountdown(value);
            this.renderCountdownTimer();
        },
        renderTime: function() {
            setInterval(() => {
                let time = new Date();
                let hours = this.leadingZero(time.getHours() % 12);
                let minutes = this.leadingZero(time.getMinutes());
                let seconds = this.leadingZero(time.getSeconds());
                let clock = `${hours}:${minutes}:${seconds}`
                app.view.clockDiv.innerText = clock;
            }, 1000)
        },
        leadingZero: function(time) {
            return time < 10 ? `0${time}` : time;
        },
        renderCountdown: function(date) {
            date = date || app.model.date;
            app.view.countdownToDiv.innerText = `Coundown to ${date}`;
        },
        renderCountdownTimer: function() {
            setInterval(() => {
                let time = Date.parse(app.model.date) - Date.parse(new Date());
                let days = this.leadingZero(Math.floor(time / (1000 * 60 * 60 * 24)));
                let hours = this.leadingZero(Math.floor(time / (1000 * 60 * 60) % 24));
                let minutes = this.leadingZero(Math.floor(time / (1000 * 60) % 60));
                let seconds = this.leadingZero(Math.floor(time / (1000) % 60));
    
                let countdown = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
                app.view.countdownTimer.innerText = countdown;

            }, 1000);
        }
    },
    init: function() {
        this.controller.renderTime();
        this.controller.renderCountdown();
        this.controller.renderCountdownTimer();
    }
}

app.init();

