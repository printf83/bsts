"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachOther = void 0;
const keyOfType_js_1 = require("./../keyOfType.js");
const attachOther = (key, elem, attr) => {
    let changed = false;
    if (attr && typeof attr !== "undefined") {
        let k = (0, keyOfType_js_1.keyOfType)(key, attr);
        let i = Array.isArray(attr[k]) ? attr[k] : attr[k];
        elem.setAttribute(key, i.toString());
        // delete attr[k];
        changed = true;
    }
    return { attr, elem, changed };
};
exports.attachOther = attachOther;
