export const requestIdleCallback = (callback: Function, timeout?: number) => {
	if ("requestIdleCallback" in window) {
		if (timeout) {
			return window.requestIdleCallback(callback as IdleRequestCallback, { timeout: timeout });
		} else {
			return window.requestIdleCallback(callback as IdleRequestCallback);
		}
	} else {
		return setTimeout(callback as TimerHandler, timeout);
	}
};

export const cancelIdleCallback = (handle: number) => {
	if ("cancelIdleCallback" in window) {
		cancelIdleCallback(handle);
	} else {
		return clearTimeout(handle);
	}
};
