"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = exports.update = exports.toggle = exports.show = exports.hide = exports.getOrCreateInstance = exports.getInstance = exports.init = void 0;
const eventManager_js_1 = require("../../core/eventManager.js");
const console_js_1 = require("../../core/console.js");
const bootstrap_1 = require("bootstrap");
const init = (elem, options) => {
    return (0, exports.getOrCreateInstance)(elem, options);
};
exports.init = init;
const getInstance = (elem) => {
    return bootstrap_1.Dropdown.getInstance(elem);
};
exports.getInstance = getInstance;
const getOrCreateInstance = (elem, options) => {
    (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
        const target = i.target;
        const m = (0, exports.getInstance)(target);
        if (m) {
            console_js_1.bstsConsole.info(`Dispose bootstrap dropdown from $1`, target);
            m.hide();
            m.dispose();
        }
    });
    console_js_1.bstsConsole.info(`Initialize bootstrap dropdown to $1`, elem);
    return bootstrap_1.Dropdown.getOrCreateInstance(elem, options);
};
exports.getOrCreateInstance = getOrCreateInstance;
const hide = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.hide();
};
exports.hide = hide;
const show = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.show();
};
exports.show = show;
const toggle = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.toggle();
};
exports.toggle = toggle;
const update = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.update();
};
exports.update = update;
const dispose = (elem) => {
    (0, exports.getInstance)(elem)?.dispose();
};
exports.dispose = dispose;
