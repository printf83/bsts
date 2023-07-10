"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = exports.close = exports.getOrCreateInstance = exports.getInstance = exports.init = void 0;
const eventManager_js_1 = require("../../core/eventManager.js");
const console_js_1 = require("../../core/console.js");
const bootstrap_1 = require("bootstrap");
const init = (elem) => {
    return (0, exports.getOrCreateInstance)(elem);
};
exports.init = init;
const getInstance = (elem) => {
    return bootstrap_1.Alert.getInstance(elem);
};
exports.getInstance = getInstance;
const getOrCreateInstance = (elem) => {
    (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
        const target = i.target;
        const m = (0, exports.getInstance)(target);
        if (m) {
            console_js_1.bstsConsole.info(`Dispose bootstrap alert from $1`, target);
            m.dispose();
        }
    });
    console_js_1.bstsConsole.info(`Initialize bootstrap alert to $1`, elem);
    return bootstrap_1.Alert.getOrCreateInstance(elem);
};
exports.getOrCreateInstance = getOrCreateInstance;
const close = (elem) => {
    return (0, exports.getOrCreateInstance)(elem)?.close();
};
exports.close = close;
const dispose = (elem) => {
    return (0, exports.getInstance)(elem)?.dispose();
};
exports.dispose = dispose;
