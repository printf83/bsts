"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachClass = void 0;
const addClassIntoElement_js_1 = require("../addClassIntoElement.js");
const attachClass = (key, elem, attr) => {
    let changed = false;
    if (key === "class") {
        if (attr && typeof attr.class !== "undefined") {
            elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, attr.class);
            // delete attr.class;
            changed = true;
        }
    }
    return { attr, elem, changed };
};
exports.attachClass = attachClass;
