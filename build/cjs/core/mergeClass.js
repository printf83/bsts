"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeClass = void 0;
const removeEmptyArray_js_1 = require("./removeEmptyArray.js");
const string2Array = (d) => {
    let result;
    if (typeof d === "string") {
        result = d.split(" ");
    }
    else {
        result = d;
    }
    return result;
};
const mergeClass = (target, source) => {
    target = string2Array(target);
    source = string2Array(source);
    let result = [];
    if (target) {
        if (source) {
            result = (0, removeEmptyArray_js_1.removeEmptyArray)([...target, ...source]);
        }
        else {
            result = (0, removeEmptyArray_js_1.removeEmptyArray)(target);
        }
    }
    else {
        if (source) {
            result = (0, removeEmptyArray_js_1.removeEmptyArray)(source);
        }
    }
    return result.filter((value, index) => result.indexOf(value) === index);
};
exports.mergeClass = mergeClass;
