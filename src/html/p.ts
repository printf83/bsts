import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";

export interface IAttrTagP extends IAttr {
	lead?: boolean;
}

const convert = (attr: IAttrTagP) => {
	attr.class = mergeClass(attr.class, attr.lead ? "lead" : undefined);
	delete attr.lead;
	return attr;
};

export class p extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagP);
	constructor(attr: IAttrTagP, elem: IElem);
	constructor(...arg: any[]) {
		super("p", convert(tagConsArg<IAttrTagP>("elem", arg)));
	}
}
