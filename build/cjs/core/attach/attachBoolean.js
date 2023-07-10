"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachBoolean = void 0;
const keyOfType_js_1 = require("./../keyOfType.js");
const dbBoolean = [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "indeterminate",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "novalidate",
    "noValidate",
    "hidden",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "open",
    "playsinline",
    "readOnly",
    "readonly",
    "required",
    "reversed",
    "sandbox",
    "selected",
    "truespeed",
];
const attachBoolean = (key, elem, attr) => {
    let changed = false;
    if (dbBoolean.indexOf(key) > -1) {
        let k = (0, keyOfType_js_1.keyOfType)(key, attr);
        if (attr && typeof attr[k] !== "undefined") {
            if (attr[k] === true) {
                if (key === "indeterminate") {
                    elem.indeterminate = true;
                }
                else {
                    elem.setAttribute(key, key);
                }
            }
            // delete attr[k];
            changed = true;
        }
    }
    return { attr, elem, changed };
};
exports.attachBoolean = attachBoolean;
