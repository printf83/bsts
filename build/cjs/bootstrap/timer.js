"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = exports.timer = exports.initTimer = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const span_js_1 = require("../html/span.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const calcTimer_js_1 = require("../core/calcTimer.js");
const uuid_js_1 = require("../core/uuid.js");
const console_js_1 = require("../core/console.js");
const runTimer = (elem, delay, callback) => {
    const id = elem.getAttribute("id");
    const time = parseInt(elem.getAttribute("data-bs-timer-run"));
    setTimeout((id, time, callback) => {
        let e = document.getElementById(id);
        if (e) {
            let res = (0, calcTimer_js_1.calcTimer)(time);
            e.innerText = res.msg;
            if (res.next > -1) {
                runTimer(e, res.next, callback);
            }
            else if (res.next === -1) {
                console_js_1.bstsConsole.info(`Stop timer for #${id} without calling callback.`);
            }
            else if (res.next === -2) {
                console_js_1.bstsConsole.info(`Stop timer for #${id}`);
                if (typeof callback === "function") {
                    callback(e);
                }
            }
        }
        else {
            console_js_1.bstsConsole.info(`Stop timer for #${id}`);
            if (typeof callback === "function") {
                callback(e);
            }
        }
    }, delay, id, time, callback);
};
const initTimer = (elem, callback) => {
    elem.setAttribute("id", elem.getAttribute("id") || (0, uuid_js_1.UUID)());
    elem.setAttribute("data-bs-timer-run", elem.getAttribute("data-bs-timer"));
    elem.removeAttribute("data-bs-timer");
    console_js_1.bstsConsole.info(`Start timer for $1`, elem);
    runTimer(elem, 0, callback);
};
exports.initTimer = initTimer;
const convert = (attr) => {
    const currentTime = new Date().getTime();
    attr.time ??= currentTime;
    if (attr.time <= currentTime) {
        attr.callback = undefined;
        delete attr.callback;
    }
    const callback = attr.callback;
    if (attr.time) {
        if (!isNaN(attr.time)) {
            if (callback) {
                attr = (0, mergeObject_js_1.mergeObject)({
                    data: { "bs-timer": attr.time },
                    on: {
                        build: (e) => {
                            const target = e.target;
                            (0, exports.initTimer)(target, callback);
                        },
                    },
                }, attr);
            }
            else {
                attr = (0, mergeObject_js_1.mergeObject)({
                    data: { "bs-timer": attr.time },
                    on: {
                        build: (e) => {
                            const target = e.target;
                            (0, exports.initTimer)(target);
                        },
                    },
                }, attr);
            }
        }
    }
    delete attr.callback;
    delete attr.time;
    return attr;
};
class timer extends span_js_1.span {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("time", arg)));
    }
}
exports.timer = timer;
const Timer = (AttrOrTime, Elem) => (0, tag_js_1.genTagClass)(timer, AttrOrTime, Elem);
exports.Timer = Timer;
