class Stopwatch {
    /**
     * 
     * @param {html item id} my_display_id 
     * @param {ms} delay 
     */

    constructor(my_display_id, delay = 100) {
        this.isPause = true;
        this.delay = delay;
        this.display = document.getElementById(my_display_id);
        this.interval = null;
        this.value = 0;
    }
    formatTime(ms) {
        let hours = Math.floor(ms / 3600000);
        let minutes = Math.floor((ms - (hours * 3600000)) / 60000);
        let seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        let ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)) / 100);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return hours + ':' + minutes + ':' + seconds + '.' + ds;
    }
    update() {
        if (this.isPause == false) {
            this.value += this.delay;
        }
        this.display.innerHTML = this.formatTime(this.value);
    }
    start() {
        if (this.isPause == true) {
            this.isPause == false;
            this.interval = setInterval(this.update, this.delay);
        }
    }
    stop() {
        if (this.isPause == false) {
            this.isPause == true;
            clearInterval(this.interval);
            this.interval = null
        }
    }
    reset() {

    }
}


function mainFunction() {
    stopwatch = new Stopwatch("stopwatch");
    stop_button = document.getElementById("stop");
    reset_button = document.getElementById("reset");
    start_button = document.getElementById("start");
    stop_button.addEventListener(() => { stopwatch.stop() });
    reset_button.addEventListener(() => { stopwatch.re })
}

mainFunction();