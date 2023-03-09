import { cons, IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";

export interface IAttrTagAbbr extends IAttr {
	small?: boolean;
}

const convert = (attr: IAttrTagAbbr) => {
	attr.class = mergeClass(attr.class, attr.small ? "initialism" : "");
	delete attr.small;
	return attr;
};

export class abbr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagAbbr);
	constructor(attr: IAttrTagAbbr, elem: IElem);
	constructor(...arg: any[]) {
		super("abbr", convert(cons<IAttrTagAbbr>(arg)));
	}
}
