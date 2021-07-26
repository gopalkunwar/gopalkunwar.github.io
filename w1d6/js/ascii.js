"use strict";
var textArea, animationTypeSelect, sizeTypeSelect, timer, startButton, stopButton, speed = 250, turboCheck;

function start() {
    var frames = textArea.value.split("=====\n");
    var i = 0, l = frames.length;
    (function iterator() {
        textArea.value = frames[i];

        if (++i >= l) {
            i = 0;
        }
        timer = setTimeout(iterator, speed);
    })();
    stopButton.disabled = false;
    startButton.disabled = true;
};

function stop(time) {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearTimeout(timer);
    getFrames();
}


function getFrames() {
    var dropSel = animationTypeSelect.options[animationTypeSelect.selectedIndex].innerHTML;
    textArea.value = ANIMATIONS[dropSel];

}

function setSize() {
    var fontsize = sizeTypeSelect.options[sizeTypeSelect.selectedIndex].value;
    textArea.style.fontSize = fontsize;
}

//set 50ms for Turbo Speed if selected then in normal condition set speed to 250ms
function turboSpeed() {
    if (turboCheck.checked) {
        speed = 50;
    }
    else {
        speed = 250;
    }
}

window.onload = function () {
    textArea = document.getElementById("text-area");
    animationTypeSelect = document.getElementById("animation");
    sizeTypeSelect = document.getElementById("fontsize");
    turboCheck = document.getElementById("turbo");
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    startButton.onclick = start;
    stopButton.onclick = stop;
    animationTypeSelect.onchange = getFrames;
    sizeTypeSelect.onchange = setSize;
    turboCheck.onchange = turboSpeed;

}