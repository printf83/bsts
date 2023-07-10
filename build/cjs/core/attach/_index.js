"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachAttr = void 0;
const keyOfType_js_1 = require("./../keyOfType.js");
const attachOther_js_1 = require("./attachOther.js");
const attachHref_js_1 = require("./attachHref.js");
const attachAria_js_1 = require("./attachAria.js");
const attachData_js_1 = require("./attachData.js");
const attachBoolean_js_1 = require("./attachBoolean.js");
const bootstrap_js_1 = require("../bootstrap.js");
const bsts_js_1 = require("../bsts.js");
const attachEvent_js_1 = require("./attachEvent.js");
const attachStyle_js_1 = require("./attachStyle.js");
const attachClass_js_1 = require("./attachClass.js");
const attachAlias_js_1 = require("./attachAlias.js");
const cleanupAttr = (key, elem, attr) => {
    let changed = false;
    let k = (0, keyOfType_js_1.keyOfType)(key, attr);
    if (attr && typeof attr[k] !== "undefined" && attr[k] === null) {
        delete attr[k];
        changed = true;
    }
    return { attr, elem, changed };
};
const attrFn = [
    cleanupAttr,
    attachAlias_js_1.attachAlias,
    attachBoolean_js_1.attachBoolean,
    attachData_js_1.attachData,
    attachAria_js_1.attachAria,
    bootstrap_js_1.attachBSClass.attach,
    bootstrap_js_1.attachBSAttr.attach,
    bsts_js_1.attachBSTSClass.attach,
    attachEvent_js_1.attachEvent,
    attachStyle_js_1.attachStyle,
    attachClass_js_1.attachClass,
    attachHref_js_1.attachHref,
    attachOther_js_1.attachOther,
];
const attachAttr = (elem, attr) => {
    if (attr) {
        let d = Object.assign({}, attr);
        //add hasdestroy and hasbuild
        let { hasBuild, hasDestroy } = (0, attachEvent_js_1.hasBuildAndDestroyEvent)(d);
        if (hasBuild || hasDestroy) {
            if (d.class) {
                if (Array.isArray(d.class)) {
                    if (hasBuild)
                        d.class.push("bs-build-event");
                    if (hasDestroy)
                        d.class.push("bs-destroy-event");
                }
                else {
                    let o = d.class.split(" ");
                    if (hasBuild)
                        o.push("bs-build-event");
                    if (hasDestroy)
                        o.push("bs-destroy-event");
                    d.class = o.join(" ");
                }
            }
            else {
                d.class = [];
                if (hasBuild)
                    d.class.push("bs-build-event");
                if (hasDestroy)
                    d.class.push("bs-destroy-event");
            }
        }
        //convert to attribute
        let prop = Object.keys(d);
        if (prop) {
            let propLength = prop.length;
            let attrFnLength = attrFn.length;
            for (let x = 0; x < propLength; x++) {
                let handleByAttrFn = false;
                let k = (0, keyOfType_js_1.keyOfType)(prop[x], d);
                for (let y = 0; y < attrFnLength; y++) {
                    if (typeof d[k] !== "undefined" && d[k] !== null) {
                        if (y === attrFnLength - 1 && handleByAttrFn) {
                            break;
                        }
                        let { elem: e, attr: a, changed: c } = attrFn[y](prop[x], elem, d);
                        if (c) {
                            handleByAttrFn = true;
                            elem = e;
                            d = a;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
    }
    return elem;
};
exports.attachAttr = attachAttr;
