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
		const callbackRef = callback as IdleRequestCallback;
		return window.requestIdleCallback(callbackRef, timeout ? { timeout } : undefined);
	}

	return window.setTimeout(callback as TimerHandler, timeout ?? 1);
};

/**
 * Cancels a callback previously scheduled with requestIdleCallback.
 * If the browser supports cancelIdleCallback, calls that.
 * Otherwise, clears the timeout that would have called the callback.
 */
export const cancelIdleCallback = (handle: number) => {
	if ("cancelIdleCallback" in window) {
		window.cancelIdleCallback(handle);
	} else {
		window.clearTimeout(handle);
	}
};
