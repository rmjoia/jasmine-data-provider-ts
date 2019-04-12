"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var using_1 = require("../lib/using");
describe("parameterised test using an Array<T> as source", function () {
    using_1.TestCase("Cities", ["Almada", "Lisboa", "Cascais"], function (value) {
        it("should not be null: '" + value + "'", function () {
            expect(value).not.toBeNull();
        });
    });
});
describe("parameterised test using a function as source", function () {
    function provider() {
        return [
            { a: 2, b: 3, expected: +5 },
            { a: "14", b: 15, expected: "1415" },
            { a: 12, b: "13", expected: "1213" },
            { a: "22", b: "13", expected: "2213" }
        ];
    }
    using_1.TestSource(provider, function (data) {
        it("should calc with operator +", function () {
            var result = data.a + data.b;
            expect(result).toEqual(data.expected);
        });
    });
});
