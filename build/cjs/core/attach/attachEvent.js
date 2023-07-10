"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBuildAndDestroyEvent = exports.attachEvent = void 0;
const eventManager_js_1 = require("../eventManager.js");
const attachEvent = (key, elem, attr) => {
    let changed = false;
    if (key === "on") {
        if (attr && typeof attr.on !== "undefined") {
            let prop = Object.keys(attr.on);
            if (prop && prop.length > 0) {
                for (let x = 0; x < prop.length; x++) {
                    if (typeof attr.on[prop[x]] === "function") {
                        (0, eventManager_js_1.addEvent)(prop[x], elem, attr.on[prop[x]]);
                    }
                }
            }
            // delete attr.on;
            changed = true;
        }
    }
    return { attr, elem, changed };
};
exports.attachEvent = attachEvent;
const hasBuildAndDestroyEvent = (attr) => {
    let hasBuild = false;
    let hasDestroy = false;
    if (attr && typeof attr.on !== "undefined") {
        let prop = Object.keys(attr.on);
        if (prop && prop.length > 0) {
            hasDestroy = true;
            if (prop.indexOf("build") > -1) {
                hasBuild = true;
            }
        }
    }
    return { hasBuild, hasDestroy };
};
exports.hasBuildAndDestroyEvent = hasBuildAndDestroyEvent;
