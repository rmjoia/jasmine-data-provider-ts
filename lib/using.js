"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function using(name, values, func) {
    for (var i = 0, count = values.length; i < count; i++) {
        func.apply(Object, [values[i]]);
    }
}
exports.using = using;
