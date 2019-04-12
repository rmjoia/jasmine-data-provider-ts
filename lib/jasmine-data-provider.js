"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Uses an array of parameters to create each test case.
 *
 * @param values - The test case source array
 * @param func - The actual test fixture
 * @returns void
 *
 */
function TestCase(values, func) {
    for (var i = 0, count = values.length; i < count; i++) {
        func.apply(Object, [values[i]]);
    }
}
exports.TestCase = TestCase;
/**
 * Uses a function containing the parameters to create each test case.
 *
 * @param values - The test case source function
 * @param func - The actual test fixture
 * @returns void
 *
 */
function TestSource(values, func) {
    for (var i = 0, count = values().length; i < count; i++) {
        func.apply(Object, [values()[i]]);
    }
}
exports.TestSource = TestSource;
