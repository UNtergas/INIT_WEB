class Stopwatch {
    constructor(id, delay = 100) { //Delay in ms
        this.state = "paused";
        this.delay = delay;
        this.display = document.getElementById(id);
        this.value = 0;
    }

    formatTime(ms) {
        var hours = Math.floor(ms / 3600000);
        var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
        var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        var ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)) / 100);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return hours + ':' + minutes + ':' + seconds + '.' + ds;
    }

    update() {
        if (this.state == "running") {
            this.value += this.delay;
        }
        var retunring_value = this.formatTime(this.value);
        if (retunring_value != null) {
            this.display.innerHTML = retunring_value;
        }
    }

    start() {
        if (this.state == "paused") {
            this.state = "running";
            if (!this.interval) {

                this.interval = setInterval(function () { stopwatch.update(); }, this.delay);
            }
        }
    }

    stop() {
        if (this.state == "running") {
            this.state = "paused";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
                alert("Time stopped at " + this.formatTime(this.value));
            }
        }
    }

    reset() {
        this.stop();
        this.value = 0;
        this.update();
    }
}


function mainFunction() {
    stopwatch = new Stopwatch("stopwatch");
    stop_button = document.getElementById("stop");
    reset_button = document.getElementById("reset");
    start_button = document.getElementById("start");
    stop_button.addEventListener("click", () => { stopwatch.stop() });
    reset_button.addEventListener("click", () => { stopwatch.reset() })
    start_button.addEventListener("click", () => { stopwatch.start() });
}

window.onload = mainFunction();