"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachAlias = void 0;
const keyOfType_js_1 = require("../keyOfType.js");
const dbAlias = {
    loadingStyle: "loading",
    dataText: "data",
    startValue: "start",
    attrLabel: "label",
    attrWidth: "width",
    attrHeight: "height",
};
const attachAlias = (key, elem, attr) => {
    let changed = false;
    if (attr && typeof attr !== "undefined") {
        if (key in dbAlias) {
            let a = (0, keyOfType_js_1.keyOfType)(key, attr);
            let b = (0, keyOfType_js_1.keyOfType)(key, dbAlias);
            if (typeof attr[a] !== "undefined") {
                elem.setAttribute(dbAlias[b], attr[a].toString());
                // delete attr[a];
                changed = true;
            }
            return { attr, elem, changed };
        }
    }
    return { attr, elem, changed };
};
exports.attachAlias = attachAlias;
