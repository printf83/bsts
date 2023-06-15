import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { span } from "../html/span.js";
import { mergeObject } from "../core/mergeObject.js";
import { calcTimer } from "../core/calcTimer.js";
import { uppercaseFirst } from "../core/uppercaseFirst.js";
import { UUID } from "../core/uuid.js";

const runTimer = (elem: Element, delay: number) => {
	const id = elem.getAttribute("id");
	const tv = parseInt(elem.getAttribute("data-bs-timer-run")!);

	setTimeout(
		(id: string, tv: number) => {
			let e = document.getElementById(id);
			if (e) {
				let res = calcTimer(tv);
				e.innerText = res.msg;
				runTimer(e, res.next);
			}
		},
		delay,
		id,
		tv
	);
};

const initTimer = (elem: Element) => {
	elem.setAttribute("id", elem.getAttribute("id") || UUID());
	elem.setAttribute("data-bs-timer-run", elem.getAttribute("data-bs-timer")!);
	elem.removeAttribute("data-bs-timer");
	runTimer(elem, 1000);
};

const convert = (attr: IAttr) => {
	const currentTime = new Date().getTime();
	attr.elem ??= currentTime.toString();

	if (attr.elem) {
		if (typeof attr.elem === "string") {
			const intTime = parseInt(attr.elem);
			if (!isNaN(intTime)) {
				attr = mergeObject(
					{
						data: { "bs-timer": intTime },
						on: {
							build: (e) => {
								const target = e.target as Element;
								initTimer(target);
							},
						},
					},
					attr
				);
				let ct = calcTimer(intTime);
				attr.elem = uppercaseFirst(ct.msg);
			}
		}
	}

	return attr;
};

export class timer extends span {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Timer = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<timer, IAttr>(timer, AttrOrElem, Elem);
