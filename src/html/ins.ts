import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Ins extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class ins extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Ins);
	constructor(attr: Ins, elem: IElem);
	constructor(...arg: any[]) {
		super("ins", tagConsArg<Ins>("elem", arg));
	}
}

export const Ins = (AttrOrElem?: Ins | IElem, Elem?: IElem) => genTagClass<ins, Ins>(ins, AttrOrElem, Elem);
