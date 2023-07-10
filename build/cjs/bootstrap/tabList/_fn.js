"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = exports.show = exports.getOrCreateInstance = exports.getInstance = exports.init = void 0;
const eventManager_js_1 = require("../../core/eventManager.js");
const console_js_1 = require("../../core/console.js");
const bootstrap_1 = require("bootstrap");
const init = (elem) => {
    return (0, exports.getOrCreateInstance)(elem);
};
exports.init = init;
const getInstance = (elem) => {
    return bootstrap_1.Tab.getInstance(elem);
};
exports.getInstance = getInstance;
const getOrCreateInstance = (elem) => {
    (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
        const target = i.target;
        const m = (0, exports.getInstance)(target);
        if (m) {
            console_js_1.bstsConsole.info(`Dispose bootstrap tab from $1`, target);
            m.dispose();
        }
    });
    console_js_1.bstsConsole.info(`Initialize bootstrap tab to $1`, elem);
    return bootstrap_1.Tab.getOrCreateInstance(elem);
};
exports.getOrCreateInstance = getOrCreateInstance;
const show = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.show();
};
exports.show = show;
const dispose = (elem) => {
    (0, exports.getInstance)(elem)?.dispose();
};
exports.dispose = dispose;
