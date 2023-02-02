



let changeText = (button, time) => {
    button.innerHTML = "Press " + time.click + " time";
    time.click++;
}

function nor() {
    let time = {
        click: 1
    };
    let i = 0;
    let button = document.getElementById("ngusi");
    button.addEventListener("click", function () {
        changeText(button, time);
    });
    document.getElementById("reset").addEventListener("click", function () {
        document.getElementById("ngusi").innerHTML = "PRESS";
        time.click = 1;
    })
}

nor();