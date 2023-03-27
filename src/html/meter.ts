import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

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
		super("meter", tagConsArg<IAttrTagMeter>("elem", arg));
	}
}
