import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagDel extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class del extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagDel);
	constructor(attr: ITagDel, elem: IElem);
	constructor(...arg: any[]) {
		super("del", tagConsArg("elem", arg));
	}
}

export const Del = (AttrOrElem?: ITagDel | IElem, Elem?: IElem) => genTagClass<del, ITagDel>(del, AttrOrElem, Elem);
