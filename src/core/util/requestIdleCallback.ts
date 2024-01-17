/**
 * Wraps the browser's native requestIdleCallback API and falls back to setTimeout
 * if requestIdleCallback is not supported.
 *
 * @param callback - The function to call when the browser is idle
 * @param timeout - Optional timeout in milliseconds. If specified, the function
 * will be called after this timeout even if the browser is not idle.
 */
export const requestIdleCallback = (callback: Function, timeout?: number) => {
	if ("requestIdleCallback" in window) {
		if (timeout) {
			return window.requestIdleCallback(callback as IdleRequestCallback, { timeout: timeout });
		} else {
			return window.requestIdleCallback(callback as IdleRequestCallback);
		}
	} else {
		return setTimeout(callback as TimerHandler, timeout ? timeout : 1);
	}
};

/**
 * Cancels a callback previously scheduled with requestIdleCallback.
 * If the browser supports cancelIdleCallback, calls that.
 * Otherwise, clears the timeout that would have called the callback.
 */
export const cancelIdleCallback = (handle: number) => {
	if ("cancelIdleCallback" in window) {
		cancelIdleCallback(handle);
	} else {
		return clearTimeout(handle);
	}
};
