import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { span } from "../html/span.js";
import { mergeObject } from "../core/mergeObject.js";
import { calcTimer } from "../core/calcTimer.js";
import { uppercaseFirst } from "../core/uppercaseFirst.js";

const convert = (attr: IAttr) => {
	const currentTime = new Date().getTime();
	attr.elem ??= currentTime.toString();

	if (attr.elem) {
		if (typeof attr.elem === "string") {
			const intTime = parseInt(attr.elem);
			if (!isNaN(intTime)) {
				attr = mergeObject({ data: { "bs-timer": intTime } }, attr);
				let ct = calcTimer(intTime);
				attr.elem = uppercaseFirst(ct.msg);
			}
		}
	}

	return attr;
};

export class time extends span {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Time = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<time, IAttr>(time, AttrOrElem, Elem);
