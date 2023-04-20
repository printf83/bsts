import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagIns extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class ins extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagIns);
	constructor(attr: ITagIns, elem: IElem);
	constructor(...arg: any[]) {
		super("ins", tagConsArg<ITagIns>("elem", arg));
	}
}

export const Ins = (AttrOrElem?: ITagIns | IElem, Elem?: IElem) => genTagClass<ins, ITagIns>(ins, AttrOrElem, Elem);
