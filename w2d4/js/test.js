describe("filter", function () {
    it("Banned word remover using filter",
        function () {
            assert.equal("This house is not nice!".filter('not'), "This house is nice!");
        });
});

describe("bubbleSort", function () {
    it("Returns the bubble sorted array",
        function () {
            assert.equal([6,4,0, 3,-2,1].bubbleSort().toString(),  [-2, 0, 1, 3, 4, 6].toString());
        });
});

describe("teach", function () {
    it("Returns the teacher name and her teaching course name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("Andrew", 45);
            assert.equal(teacher.teach("Algorithm"),  `${teacher.name} is now teaching Algorithm`);
        });
});
