"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachData = void 0;
const attachData = (key, elem, attr) => {
    let changed = false;
    if (key === "data") {
        if (attr && typeof attr.data !== "undefined") {
            let prop = Object.keys(attr.data);
            if (prop && prop.length > 0) {
                for (let x = 0; x < prop.length; x++) {
                    if (attr.data[prop[x]] !== undefined) {
                        elem.setAttribute(`data-${prop[x]}`, attr.data[prop[x]].toString());
                    }
                }
            }
            // delete attr.data;
            changed = true;
        }
    }
    return { attr, elem, changed };
};
exports.attachData = attachData;
