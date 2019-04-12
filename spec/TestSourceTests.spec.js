"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jasmine_data_provider_1 = require("../lib/jasmine-data-provider");
var SampleClass = /** @class */ (function () {
    function SampleClass(foo, bar, expected) {
        this.foo = foo;
        this.bar = bar;
        this.expected = expected;
    }
    return SampleClass;
}());
describe("parameterised test using a function as source", function () {
    function provider() {
        return [
            { a: 2, b: 3, expected: 5 },
            { a: "14", b: 15, expected: "1415" },
            { a: 12, b: "13", expected: "1213" },
            { a: "22", b: "13", expected: "2213" }
        ];
    }
    function sampleClassProvider() {
        return [
            new SampleClass("foo1", "bar1", "foo1bar1"),
            new SampleClass("f00", "bar", "f00bar")
        ];
    }
    jasmine_data_provider_1.TestSource(provider, function (data) {
        it("should return value using operator +", function () {
            var result = data.a + data.b;
            expect(result).toEqual(data.expected);
        });
    });
    jasmine_data_provider_1.TestSource(sampleClassProvider, function (data) {
        it("'" + (data.foo +
            data.bar) + "' and '" + data.expected + "' should be equal", function () {
            expect(data.foo + data.bar).toEqual(data.expected);
        });
    });
});
