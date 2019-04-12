"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jasmine_data_provider_1 = require("../lib/jasmine-data-provider");
describe("parameterised test using an Array<T> as source", function () {
    jasmine_data_provider_1.TestCase(["Almada", "Lisboa", "Cascais"], function (value) {
        it("should not be null: '" + value + "'", function () {
            expect(value).not.toBeNull();
        });
    });
});
