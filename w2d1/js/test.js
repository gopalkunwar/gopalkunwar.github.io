"use strict";
/* global describe */
/* global it */
/* global assert */
/* global pow */
describe("sum", function () {
    describe("sum of the elements of array", function() {
        it("function takes array of [1,2,3,4] and returns 10",
            function () {
                assert.equal(10, sum([1, 2, 3, 4]));
            });
    });

});


describe("multiply", function () {
    describe("multiplication of the elements of the array", function() {
        it("function takes array of [1,2,3,4] and returns 24",
            function () {
                assert.equal(24, multiply([1, 2, 3, 4]));
            });
    });

    

});

describe("reverse", function () {
    describe("takes a string, and returns the reverse", function() {
        it("function takes string of 'gopal kunwar' and returns 'rawnuk lapog'",
            function () {
                assert.equal("gopal kunwar", reverse("rawnuk lapog"));
            });
    });
    
});


describe("filterLongWords", function () {
    describe("takes an array of words and an integer i and returns the array of words that are longer than i", 
    function() {
        it("function takes string of array ['gopal','kunwar','am'] and returns array of ['kunwar']",
            function () {
                assert.equal("testar", filterLongWords(["jag", "am", "testar"], 5));
            });
    });

   
});