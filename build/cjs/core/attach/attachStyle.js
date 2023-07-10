"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachStyle = void 0;
const camel2Dash_js_1 = require("../camel2Dash.js");
const keyOfType_js_1 = require("./../keyOfType.js");
const attachStyle = (key, elem, attr) => {
    let changed = false;
    if (key === "style") {
        if (attr && typeof attr.style !== "undefined") {
            let i = Object.keys(attr.style);
            if (i && i.length > 0) {
                for (let x = 0; x < i.length; x++) {
                    let k = (0, keyOfType_js_1.keyOfType)(i[x], attr.style);
                    if (attr.style[k]) {
                        if (attr.style[k].indexOf(" !important") > -1) {
                            elem.style.setProperty((0, camel2Dash_js_1.camel2Dash)(i[x]), attr.style[k].replace(" !important", ""), "important");
                        }
                        else {
                            elem.style.setProperty((0, camel2Dash_js_1.camel2Dash)(i[x]), attr.style[k]);
                        }
                    }
                }
            }
            // delete attr.style;
            changed = true;
        }
    }
    return { attr, elem, changed };
};
exports.attachStyle = attachStyle;
