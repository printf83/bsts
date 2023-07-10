"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = exports.to = exports.prev = exports.pause = exports.nextWhenVisible = exports.next = exports.cycle = exports.getOrCreateInstance = exports.getInstance = exports.init = void 0;
const eventManager_js_1 = require("../../core/eventManager.js");
const console_js_1 = require("../../core/console.js");
const bootstrap_1 = require("bootstrap");
const init = (elem, options) => {
    return (0, exports.getOrCreateInstance)(elem, options);
};
exports.init = init;
const getInstance = (elem) => {
    return bootstrap_1.Carousel.getInstance(elem);
};
exports.getInstance = getInstance;
const getOrCreateInstance = (elem, options) => {
    (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
        const target = i.target;
        const m = (0, exports.getInstance)(target);
        if (m) {
            console_js_1.bstsConsole.info(`Dispose bootstrap carousel from $1`, target);
            m.dispose();
        }
    });
    console_js_1.bstsConsole.info(`Initialize bootstrap carousel to $1`, elem);
    return bootstrap_1.Carousel.getOrCreateInstance(elem, options);
};
exports.getOrCreateInstance = getOrCreateInstance;
const cycle = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.cycle();
};
exports.cycle = cycle;
const next = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.next();
};
exports.next = next;
const nextWhenVisible = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.nextWhenVisible();
};
exports.nextWhenVisible = nextWhenVisible;
const pause = (elem, pauseType) => {
    (0, exports.getOrCreateInstance)(elem)?.pause(pauseType);
};
exports.pause = pause;
const prev = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.prev();
};
exports.prev = prev;
const to = (elem, index) => {
    (0, exports.getOrCreateInstance)(elem)?.to(index);
};
exports.to = to;
const dispose = (elem) => {
    (0, exports.getInstance)(elem)?.dispose();
};
exports.dispose = dispose;
