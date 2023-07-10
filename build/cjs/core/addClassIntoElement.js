"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClassIntoElement = exports.manageClass = void 0;
const removeEmptyArray_js_1 = require("./removeEmptyArray.js");
const console_js_1 = require("./console.js");
const manageClass = (value) => {
    let result = [];
    let t;
    let i = [];
    if (Array.isArray(value)) {
        t = value;
    }
    else {
        t = [value];
    }
    //remove null
    i = (0, removeEmptyArray_js_1.removeEmptyArray)(t);
    //make sure every class not have whitespace
    if (i && i.length > 0) {
        for (let x = 0; x < i.length; x++) {
            let j = i[x];
            let h = [];
            if (j.indexOf(" ") > -1) {
                h = j.split(" ");
                h = (0, removeEmptyArray_js_1.removeEmptyArray)(h);
                if (h && h.length > 0) {
                    for (let y = 0; y < h.length; y++) {
                        result.push(h[y]);
                    }
                }
            }
            else {
                result.push(j);
            }
        }
    }
    return result && result.length > 0 ? result : [];
};
exports.manageClass = manageClass;
const addClassIntoElement = (elem, value) => {
    try {
        let i = (0, exports.manageClass)(value);
        if (i && i.length > 0) {
            elem.classList.add(...i);
        }
    }
    catch (error) {
        console_js_1.bstsConsole.error(`Fail to add class ${value}`, error);
    }
    return elem;
};
exports.addClassIntoElement = addClassIntoElement;
