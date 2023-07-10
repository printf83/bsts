export const requestIdleCallback = (callback, timeout) => {
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
export const cancelIdleCallback = (handle) => {
    if ("cancelIdleCallback" in window) {
        cancelIdleCallback(handle);
    }
    else {
        return clearTimeout(handle);
    }
};
