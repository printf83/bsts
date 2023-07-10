"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = (callback, timeout) => {
    if ("requestIdleCallback" in window) {
        if (timeout) {
            return window.requestIdleCallback(callback, { timeout: timeout });
        }
        else {
            return window.requestIdleCallback(callback);
        }
    }
    else {
        return setTimeout(callback, timeout ? timeout : 1);
    }
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = (handle) => {
    if ("cancelIdleCallback" in window) {
        (0, exports.cancelIdleCallback)(handle);
    }
    else {
        return clearTimeout(handle);
    }
};
exports.cancelIdleCallback = cancelIdleCallback;
