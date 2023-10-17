import { IAttr } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { span } from "../html/span.js";
import { mergeObject } from "../core/mergeObject.js";
import { calcTimer } from "../core/calcTimer.js";
import { UUID } from "../core/uuid.js";
import { bstsConsole as console } from "../core/console.js";

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

export const initTimer = (elem: Element, callback?: Function) => {
	elem.setAttribute("id", elem.getAttribute("id") || UUID());
	elem.setAttribute("data-bs-timer-run", elem.getAttribute("data-bs-timer")!);
	elem.removeAttribute("data-bs-timer");
	console.info(`Start timer for $1`, elem);
	runTimer(elem, 0, callback);
};

export interface Timer extends IAttr {
	time?: number;
	callback?: Function;
}

const convert = (attr: Timer) => {
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

	return attr;
};

export class timer extends span {
	constructor();
	constructor(attr: Timer);
	constructor(time: number);
	constructor(attr: Timer, time: number);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Timer>("time", arg)));
	}
}
