"use strict";
$(document).ready(function () {
    let timerId;

    function resizeCircle() {
        let size = parseInt($(".circle").height()) + parseInt($("#growth").val());
        $(".circle").height(size);
        $(".circle").width(size);
    }


    function start() {
        timerId = setInterval(resizeCircle, parseInt($("#interval").val()));
    }

   

    //https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    //
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //
    // function getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    //   }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function drawCircles() {
        let height = $('.container').height();
        let width = $('.container').width();
        let circleSize = parseInt($("#width").val());
        for (let i = 0; i < parseInt($("#numbercircle").val()); i++) {
            $(".container").append($("<div>", {
                "class": "circle",
                "css": {
                    "background-color": getRandomColor(),
                    "width": circleSize,
                    "height": circleSize,
                    "top": getRandomInt(height - circleSize),
                    "left": getRandomInt(width - circleSize)
                },
                "click": function () {
                    this.remove();
                }
            }));
        }
    }

    $("form").submit(function (e) {
        e.preventDefault();
        drawCircles();
        start();
    });
});