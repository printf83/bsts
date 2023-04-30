import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Meter extends IAttr {
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
	constructor(attr: Meter);
	constructor(attr: Meter, elem: IElem);
	constructor(...arg: any[]) {
		super("meter", tagConsArg<Meter>("elem", arg));
	}
}

export const Meter = (AttrOrElem?: Meter | IElem, Elem?: IElem) => genTagClass<meter, Meter>(meter, AttrOrElem, Elem);
