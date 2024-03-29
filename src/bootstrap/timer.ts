import { bsConstructor } from "../core/bootstrap.js";
import { span } from "../html/span.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { calcTimer } from "../core/util/calcTimer.js";
import { UUID } from "../core/util/uuid.js";
import { bstsConsole as console } from "../core/util/console.js";
import { timer as Timer } from "../interface/bootstrap/timer.js";

/**
 * Runs a timer on the given element by calling itself recursively.
 * @param elem The element to update with the timer text
 * @param delay The delay in ms before running the timer again
 * @param callback Optional callback when timer finishes
 */
const runTimer = (elem: Element, delay: number, callback?: Function) => {
	const id = elem.getAttribute("id");
	const time = parseInt(elem.getAttribute("data-bs-timer-run")!);

	setTimeout(
		(id: string, time: number, callback?: Function) => {
			let e = document.getElementById(id);
			if (e) {
				let res = calcTimer(time);
				e.innerText = res.msg;

				if (res.next > -1) {
					runTimer(e, res.next, callback);
				} else if (res.next === -1) {
					console.info(`Stop timer for #${id} without calling callback.`);
				} else if (res.next === -2) {
					console.info(`Stop timer for #${id}`);
					if (typeof callback === "function") {
						callback(e);
					}
				}
			} else {
				console.info(`Stop timer for #${id}`);
				if (typeof callback === "function") {
					callback(e);
				}
			}
		},
		delay,
		id,
		time,
		callback
	);
};

/**
 * Initializes a timer on the given element by setting necessary attributes
 * and starting the timer recursion.
 * @param elem The element to initialize the timer on
 * @param callback Optional callback when timer finishes
 */
export const initTimer = (elem: Element, callback?: Function) => {
	elem.setAttribute("id", elem.getAttribute("id") || UUID());
	elem.setAttribute("data-bs-timer-run", elem.getAttribute("data-bs-timer")!);
	elem.removeAttribute("data-bs-timer");
	console.info(`Start timer for $1`, elem);
	runTimer(elem, 0, callback);
};

/**
 * Exports a Timer class that extends the span class to handle initializing
 * Bootstrap timers. Takes in timer configuration and handles setting up the
 * necessary data attributes, event handlers, and timer initialization to
 * start the timer.
 */
export class timer extends span {
	constructor();
	constructor(attr: Timer);
	constructor(time: number);
	constructor(attr: Timer, time: number);
	constructor(...arg: any[]) {
		super(bsConstructor<Timer>("time", arg));
	}

	convert(attr: Timer) {
		const currentTime = new Date().getTime();

		attr.time ??= currentTime;

		if (attr.time <= currentTime) {
			attr.callback = undefined;
			delete attr.callback;
		}

		const callback = attr.callback;

		if (attr.time) {
			if (!isNaN(attr.time)) {
				if (callback) {
					attr = mergeObject(
						{
							data: { "bs-timer": attr.time },
							on: {
								build: (e) => {
									const target = e.target as Element;
									initTimer(target, callback);
								},
							},
						},
						attr
					);
				} else {
					attr = mergeObject(
						{
							data: { "bs-timer": attr.time },
							on: {
								build: (e) => {
									const target = e.target as Element;
									initTimer(target);
								},
							},
						},
						attr
					);
				}
			}
		}

		delete attr.callback;
		delete attr.time;
		return super.convert(attr);
	}
}
