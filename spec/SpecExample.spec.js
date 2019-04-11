"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var using_1 = require("../lib/using");
describe('parameterised test', function () {
    using_1.using('Cities', ['Almada', 'Lisboa', 'Cascais'], function (value) {
        it(value + " should contain 'string'", function () {
            expect(value).not.toBeNull();
        });
    });
});
