"use strict";

$(document).ready(function () {
    //start div
    var start = $("#start");
    //end div
    var end = $("#end");
    //outside div
    var maze = $("#maze");
    //all boundary div
    var boundary = $(".boundary");

    //set gameStart initial flag
    var gameStart = false;

    maze.mouseleave(function () { loss() });

    //display status after start div click
    start.click(function () {
        $("#status").text('Move mouse to End in order to win the game');
        //set gameStart flat to true after start div click
        gameStart = true;

        //while starting game we also need to remove the 
        //status of lose by removing class from boundary div
        if (boundary.hasClass('youlose')) {
            boundary.removeClass('youlose');
        }
        //otherwise call the lose function & activate lose function if we touch the
        //any boudary otherthan the game path
        boundary.mousemove(function () { loss(); })
    });

    end.mousemove(function () {

        //set the gameStart flat to true if we reach the end without touching any boundary div and call won function
        // otherwise set the gameStart flat to false and set the boundary div clas to youlose and
        //call lose() function
        if (gameStart == true) won();
        else if (gameStart && boundary.hasClass('youlose')) loss();

    });

    function won() {
        // alert("You win! :]");
        //call this function if we reach the end without touching the boundary div
        //at the end set the gameStart flat to false
        gameStart = false;
        $("#status").text("You win! :]");
    }

    function loss() {
        //call this function if we touch the boundary div and outside div 
        //set the gameStart flag to false and
        //set boundary div class to 'youlose'
        if (gameStart) {
            gameStart = false;
            boundary.addClass('youlose');
            $("#status").text('Sorry, you lost. :[');
        }
    }
})