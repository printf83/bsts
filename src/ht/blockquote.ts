import { cons, IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";

export interface IAttrTagBlockquote extends IAttr {
	cite?: string;
}

const convert = (attr: IAttrTagBlockquote) => {
	attr.class = mergeClass(attr.class, "blockquote");
	return attr;
};

export class blockquote extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagBlockquote);
	constructor(attr: IAttrTagBlockquote, elem: IElem);
	constructor(...arg: any[]) {
		super("blockquote", convert(cons<IAttrTagBlockquote>(arg)));
	}
}
