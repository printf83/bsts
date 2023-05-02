import {
	init,
	getInstance,
	getOrCreateInstance,
	cycle,
	dispose,
	next,
	nextWhenVisible,
	pause,
	prev,
	to,
} from "./_fn.js";
import { container } from "./container.js";
import * as indicators from "./indicators/_index.js";
import * as inner from "./inner/_index.js";

export { container, indicators, inner };
export { init, getInstance, getOrCreateInstance, cycle, dispose, next, nextWhenVisible, pause, prev, to };
