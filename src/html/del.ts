import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Del extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class del extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Del);
	constructor(attr: Del, elem: IElem);
	constructor(...arg: any[]) {
		super("del", tagConsArg("elem", arg));
	}
}

export const Del = (AttrOrElem?: Del | IElem, Elem?: IElem) => genTagClass<del, Del>(del, AttrOrElem, Elem);
