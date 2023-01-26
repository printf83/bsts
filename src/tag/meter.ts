import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagMeter extends IAttr {
	form?: string;
	high?: number;
	low?: number;
	max?: number;
	min?: number;
	optimum?: number;
	value?: number;
}

export class meter extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagMeter);
	constructor(attr: IAttrTagMeter, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("meter");
		} else if (arg.length === 1) {
			super("meter", arg[0]);
		} else if (arg.length === 2) {
			super("meter", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagMeter[]) => attrs.map((i) => new meter(i));
}
